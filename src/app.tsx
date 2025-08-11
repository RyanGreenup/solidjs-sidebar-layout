import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { LayoutContextProvider } from "./components/Layout/LayoutContext";
import NavbarContent from "./components/Layout/views/Navbar";
import SidebarContent from "./components/Layout/views/SidebarContent";
import BottomDash from "./components/Layout/views/BottomDash";
import Layout from "./components/Layout/Layout";
import Article from "./views/Article";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            <LayoutContextProvider>
              <Layout
                NavbarContent={<NavbarContent />}
                sidebarContent={<SidebarContent />}
                bottomDash={<BottomDash mobileOnly={true} />}
              >
                {props.children}
              </Layout>
            </LayoutContextProvider>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
