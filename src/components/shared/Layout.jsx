import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1  min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
