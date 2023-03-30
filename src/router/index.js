import { useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { ContactPage, ExercisesPage, LandingPage } from "../pages";

export const Router = () =>
  useRoutes([
    {
      path: "/",
      index: true,
      element: (
        <MainLayout>
          <LandingPage />
        </MainLayout>
      ),
    },
    {
      path: "/exercises",
      element: (
        <MainLayout>
          <ExercisesPage />
        </MainLayout>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <MainLayout>
          <ContactPage />
        </MainLayout>
      ),
    },
  ]);
