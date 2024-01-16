import Logo from '../sidebar/logo';
import Menu from '../sidebar/menu';
import Social from '../sidebar/social';

export default function Sidebar({ isOpen, onCloseSidebar }) {
    return(
        <aside className={`w-3/4 md:w-2/4 lg:w-17 max-h-screen  lg:translate-x-0 overflow-auto min-h-screen bg-[#1B1C20] py-6 px-3 border-solid border-r border-[#252629] absolute lg:relative left-0 z-50 lg:z-auto transition-all duration-200 ${isOpen ? "" : "-translate-x-full "}`}>
            <Logo onCloseSidebar={onCloseSidebar} />
            <Menu />
            <Social />
        </aside>
    )
}