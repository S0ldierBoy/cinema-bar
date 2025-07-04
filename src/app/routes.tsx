import { ROUTES } from './routesConfig.ts';
import MainPage from './pages/MainPage.tsx';
import FavoritePage from './pages/FavoritePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';


export const routes = [
  { path: ROUTES.ROOT, element: (<MainPage />) },
  { path: ROUTES.FAVORITE, element: (<FavoritePage />) },
  { path: ROUTES.NOT_FOUND, element: (<NotFoundPage />) },
];