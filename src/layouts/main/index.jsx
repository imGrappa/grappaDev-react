import { Outlet } from "react-router-dom";
import Sidebar from "../main/sidebar";

export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}