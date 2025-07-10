import { ROUTES } from './routesConfig.ts';
import MainPage from './pages/MainPage.tsx';
import FavoritePage from './pages/FavoritePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { AppLayout } from './layouts/AppLayout.tsx';


export const routes = [
  { path: ROUTES.ROOT, element: (<AppLayout><MainPage /></AppLayout>) },
  { path: ROUTES.FAVORITE, element: (<AppLayout><FavoritePage /></AppLayout>) },
  { path: ROUTES.NOT_FOUND, element: (<AppLayout><NotFoundPage /></AppLayout>) },
];