import { useState } from "react"

export default function MobileHeader({ onToggleSidebar }) {

    const handleToggleSidebar = () => {
        onToggleSidebar();
    };

    return (
        <header className="fixed top-0 inset-x-0 z-30 w-full lg:hidden">
            <div className="bg-[#1B1C20] border-b border-[#252629] border-solid p-2">
                <button type="button" onClick={handleToggleSidebar} className="w-9 h-9 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}