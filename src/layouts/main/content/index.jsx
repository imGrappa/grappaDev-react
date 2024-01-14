import { Outlet } from "react-router-dom";

export default function MainContent() {
    return (
        <div className="mainContent flex flex-1">
            <div className="scroll-area flex flex-1 overflow-x-hidden overflow-y-auto min-h-[100vh] max-h-[100vh] px-3">
                <Outlet />
            </div>
        </div>
    )
}