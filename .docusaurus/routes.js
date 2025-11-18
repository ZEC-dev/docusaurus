import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-Hans/blog',
    component: ComponentCreator('/zh-Hans/blog', 'e4a'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/AI1',
    component: ComponentCreator('/zh-Hans/blog/AI1', 'a12'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/archive',
    component: ComponentCreator('/zh-Hans/blog/archive', 'c6a'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/authors',
    component: ComponentCreator('/zh-Hans/blog/authors', 'eed'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/zh-Hans/blog/authors/all-sebastien-lorber-articles', '3cd'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/authors/yangshun',
    component: ComponentCreator('/zh-Hans/blog/authors/yangshun', 'b1b'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/authors/ZEC',
    component: ComponentCreator('/zh-Hans/blog/authors/ZEC', '722'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/first-blog-post',
    component: ComponentCreator('/zh-Hans/blog/first-blog-post', '9f9'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/long-blog-post',
    component: ComponentCreator('/zh-Hans/blog/long-blog-post', 'd61'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/mdx-blog-post',
    component: ComponentCreator('/zh-Hans/blog/mdx-blog-post', 'd1e'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags',
    component: ComponentCreator('/zh-Hans/blog/tags', 'c60'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/docusaurus',
    component: ComponentCreator('/zh-Hans/blog/tags/docusaurus', '874'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/facebook',
    component: ComponentCreator('/zh-Hans/blog/tags/facebook', '205'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/hello',
    component: ComponentCreator('/zh-Hans/blog/tags/hello', 'fd5'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/tags/hola',
    component: ComponentCreator('/zh-Hans/blog/tags/hola', 'c43'),
    exact: true
  },
  {
    path: '/zh-Hans/blog/welcome',
    component: ComponentCreator('/zh-Hans/blog/welcome', 'abc'),
    exact: true
  },
  {
    path: '/zh-Hans/markdown-page',
    component: ComponentCreator('/zh-Hans/markdown-page', '1d3'),
    exact: true
  },
  {
    path: '/zh-Hans/docs',
    component: ComponentCreator('/zh-Hans/docs', '413'),
    routes: [
      {
        path: '/zh-Hans/docs',
        component: ComponentCreator('/zh-Hans/docs', 'c33'),
        routes: [
          {
            path: '/zh-Hans/docs',
            component: ComponentCreator('/zh-Hans/docs', 'b9c'),
            routes: [
              {
                path: '/zh-Hans/docs/category/tutorial---basics',
                component: ComponentCreator('/zh-Hans/docs/category/tutorial---basics', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/category/tutorial---extras',
                component: ComponentCreator('/zh-Hans/docs/category/tutorial---extras', 'b6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/hello',
                component: ComponentCreator('/zh-Hans/docs/hello', '127'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/intro',
                component: ComponentCreator('/zh-Hans/docs/intro', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/zh-Hans/docs/tutorial-basics/congratulations', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/zh-Hans/docs/tutorial-basics/create-a-blog-post', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/zh-Hans/docs/tutorial-basics/create-a-document', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/zh-Hans/docs/tutorial-basics/create-a-page', 'a0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/zh-Hans/docs/tutorial-basics/deploy-your-site', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/zh-Hans/docs/tutorial-basics/markdown-features', 'd2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/zh-Hans/docs/tutorial-extras/manage-docs-versions', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zh-Hans/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/zh-Hans/docs/tutorial-extras/translate-your-site', 'bc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zh-Hans/',
    component: ComponentCreator('/zh-Hans/', '85c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
