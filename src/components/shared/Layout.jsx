import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function Layout() {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 min-h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
