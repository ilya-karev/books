import { FC } from "react";
import BookPage from "../pages/Book/Book.page";
import DiscoverPage from "../pages/Discover/Discover.page";
import { AppRoutes } from "./constants";

interface Route {
  key: string,
  title: string,
  path: string,
  enabled: boolean,
  component: FC<{}>,
  children?: Route[]
}

export const routes: Array<Route> = [
  {
      key: 'discover',
      title: 'Discover',
      path: AppRoutes.discover,
      enabled: true,
      component: DiscoverPage
  },
  {
      key: 'book',
      title: 'Book',
      path: `${AppRoutes.book}/:id`,
      enabled: true,
      component: BookPage,
  },
]