import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Finance } from "./pages/Finance";
import { Products } from "./pages/Products";
import { Assistant } from "./pages/Assistant";
import { Profile } from "./pages/Profile";
import { TravelScenario } from "./pages/TravelScenario";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "finance", Component: Finance },
      { path: "products", Component: Products },
      { path: "assistant", Component: Assistant },
      { path: "profile", Component: Profile },
      { path: "scenario/travel", Component: TravelScenario },
    ],
  },
]);
