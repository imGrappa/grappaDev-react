import Logo from '../sidebar/logo';
import Menu from '../sidebar/menu';
import Social from '../sidebar/social';

export default function Sidebar() {
    return(
        <aside className="w-17 max-h-screen overflow-auto min-h-screen bg-[#1B1C20] py-6 px-3 border-solid border-r-[1px] border-[#252629]">
            <Logo />
            <Menu />
            <Social />
        </aside>
    )
}