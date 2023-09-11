import { Layouts } from 'components/layouts';
import { PrivateRoute } from 'components/private-route';
import { Pages } from '.';

export const routes = [
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <Layouts.App />,
        children: [
          {
            path: 'catalog',
            element: <Pages.Catalog />,
          },
          {
            path: 'catalog',
            element: <Layouts.Sidebar />,
            children: [
              {
                path: ':subcategories/:subcategories?',
                element: <Pages.Subcatalog />,
              },
              {
                path: '*',
                element: <Pages.Product />,
              },
            ],
          },
        ],
      },
    ],
  },
];

/* export const routes = [
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        children: [
          {
            path: 'catalog',
            element: <Layouts.App />,
            children: [
              {
                path: 'allCategories',
                element: <Pages.Catalog />,
              },
              {
                path: ':subcategories',
                element: <Layouts.Sidebar />,
                children: [
                  {
                    element: <Pages.Subcatalog />,
                  },
                  {
                    path: '*',
                    element: <Pages.Product />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]; */
