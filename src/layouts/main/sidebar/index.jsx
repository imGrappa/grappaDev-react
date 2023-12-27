import Logo from '../sidebar/logo';
import Menu from '../sidebar/menu';

export default function Sidebar() {
    return(
        <aside className="w-[300px] min-h-screen bg-[#1B1C20] py-[20px] px-[12px]">
            <Logo />
            <Menu />
        </aside>
    )
}