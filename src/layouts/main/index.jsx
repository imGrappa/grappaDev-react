// import { Outlet } from "react-router-dom";
import Sidebar from "../main/sidebar";
import MainContent from "./content";

export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <MainContent />
            {/* <Outlet /> */}
        </div>
    )
}