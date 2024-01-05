import {NavLink} from 'react-router-dom';
import { socialNav } from '../../../../utils/consts';

export default function Social() {
    return (
        <div className="social pt-6 flex flex-col gap-3 border-t-[1px] border-solid border-[#252629]">
            <span className='px-2 text-xs font-medium leading-relaxed block'>Social</span>
            <nav className="socialNav flex flex-col gap-1 text-sm">
                {socialNav.map((menu,index) => (
                    <NavLink to={menu.link} className='block' key={menu.id} target="_blank">
                        <div className='flex items-center  justify-between p-2 rounded-lg transition ease-in-out hover:bg-[#202228] text-[#fff]'>
                            <span className='flex items-center gap-2'>
                                <div>{menu.icon}</div>
                                <div>{menu.title}</div>
                            </span>
                            <span>{menu.arrow}</span>
                        </div>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}