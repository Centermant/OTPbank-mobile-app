import { Outlet, useLocation } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

export function Layout() {
  const location = useLocation();
  const hideNavigation = location.pathname.startsWith("/scenario");

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative">
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      {!hideNavigation && <BottomNavigation />}
    </div>
  );
}
