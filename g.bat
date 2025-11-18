@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo 🚀 开始构建和部署流程...

REM 步骤 1: 运行 npm run build
echo 📦 运行 npm run build...
call npm run build

if !errorlevel! neq 0 (
    echo ❌ npm run build 失败
    pause
    exit /b 1
)

echo ✅ 构建完成

REM 步骤 2: 备份当前的 .git 文件夹（如果有）
if exist ".git" (
    echo 📝 备份当前的 .git 文件夹...
    ren .git .git_backup
    set "has_git_backup=1"
)

REM 步骤 3: 初始化新的 Git 仓库并上传 build 目录
echo 🔄 设置 build 目录仓库...
cd build

git init
git add .
git commit -m "deploy: 自动部署 %date% %time%"

REM 确保分支名为 main
git branch -M main

set "BUILD_REPO_URL=git@github.com:ZEC-dev/ZEC-dev.github.io.git"
echo 📤 上传到 build 仓库: %BUILD_REPO_URL%

REM 检查并更新 remote origin
git remote get-url origin >nul 2>&1
if !errorlevel! == 0 (
    echo 🔄 更新已存在的 remote origin...
    git remote set-url origin %BUILD_REPO_URL%
) else (
    git remote add origin %BUILD_REPO_URL%
)

git push -f origin main
if !errorlevel! neq 0 (
    echo ❌ git push build 仓库失败
    goto :error_cleanup
)

cd ..

REM 步骤 4: 恢复 .git 文件夹并上传源代码
echo 🔄 设置源代码仓库...
if defined has_git_backup (
    if exist ".git_backup" (
        ren .git_backup .git
        echo ✅ 恢复 .git 文件夹
    )
) else (
    echo ℹ️ 没有找到 .git_backup，初始化新仓库
    git init
    git add .
    git commit -m "chore: 更新源代码 %date% %time%"
    git branch -M main
)

REM 显示当前 git 状态
echo 📊 当前 git 状态:
git remote -v
git branch -a

set "SOURCE_REPO_URL=git@github.com:ZEC-dev/docusaurus.git"
echo 📤 上传到源代码仓库: %SOURCE_REPO_URL%

REM 检查并更新源代码仓库的 remote origin
git remote get-url origin >nul 2>&1
if !errorlevel! == 0 (
    echo 🔄 更新已存在的 remote origin...
    git remote set-url origin %SOURCE_REPO_URL%
) else (
    git remote add origin %SOURCE_REPO_URL%
)

echo 🔄 强制推送到源代码仓库...
git push -f origin main
if !errorlevel! neq 0 (
    echo ❌ git push 源代码仓库失败
    goto :error_cleanup
)

echo ✅ 所有操作完成！
echo 📁 build 目录已部署到: %BUILD_REPO_URL%
echo 📁 源代码已部署到: %SOURCE_REPO_URL%
pause
exit /b 0

:error_cleanup
echo 🗑️ 清理中...
if exist "build\.git" (
    cd build
    rd /s /q .git >nul 2>&1
    cd ..
)
if exist ".git_backup" (
    if not exist ".git" (
        ren .git_backup .git
        echo ✅ 恢复原始 .git 文件夹
    ) else (
        rd /s /q .git_backup >nul 2>&1
    )
)
pause
cls
exit /b 1