import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { PersonSearch } from "./pages/PersonSearch";
import { VehicleSearch } from "./pages/VehicleSearch";
import { Reports } from "./pages/Reports";
import { Warrants } from "./pages/Warrants";
import { Units } from "./pages/Units";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "person-search", Component: PersonSearch },
      { path: "vehicle-search", Component: VehicleSearch },
      { path: "reports", Component: Reports },
      { path: "warrants", Component: Warrants },
      { path: "units", Component: Units },
    ],
  },
]);
