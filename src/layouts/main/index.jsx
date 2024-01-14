import { useState } from "react";
import Sidebar from "../main/sidebar";
import MainContent from "./content";
import MobileHeader from "./header";

export default function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="lg:flex">
            <Sidebar isOpen={sidebarOpen} />
            <MobileHeader onToggleSidebar={toggleSidebar} />
            <MainContent />
        </div>
    )
}