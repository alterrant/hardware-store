import { AppLayout } from 'components/layouts/app';
import { PrivateRoute } from 'components/private-route';
import { Pages } from '.';

export const routes = [
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: 'catalog',
            element: <Pages.Catalog />,
          },
          {
            path: 'catalog/:subcategories',
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
];

// вариант с outlet в ProductsLayout
/* export const routes = [
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: 'catalog',
            element: <CatalogPage />,
          },
          {
            path: 'catalog/:subcategories',
            element: <ProductsLayout />,
            children: [
              {
                path: '*',
                element: <SubcatalogPage />,
              },
               {
                path: 'id',
                element: <ProductPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]; */
