import React from "react";
import { LayoutComponent, Outlet, defineRouteLayout } from "rasengan";
import Sidebar from "../components/molecules/sidebar";

class AppLayout extends LayoutComponent {
  render() {
    return (
      <section className="w-full h-[100vh] overflow-hidden p-2">
        <Sidebar />
        
        <main>
          <Outlet />
        </main>
      </section>
    );
  }
}

export default defineRouteLayout({
  path: "/",
})(AppLayout);
