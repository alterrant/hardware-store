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
                path: ':subcategories',
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
