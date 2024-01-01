import { Outlet } from "react-router-dom";

export default function MainContent() {
    return (
        <div className="mainContent scroll-area flex flex-1">
            <Outlet />
        </div>
    )
}