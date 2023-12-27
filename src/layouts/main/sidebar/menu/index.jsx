import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import { mainMenu } from '../../../../utils/consts';

export default function Menu() {
    return(
        <nav className='sideMenu'>
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className='block group' key={menu.id}>
                {({isActive}) => (
                    <div className={classNames("flex items-center gap-2 p-2 hover:bg-[#202228] rounded-md transition-all", {"bg-[#101218] hover:bg-[#101218]": isActive})}>
                        {menu.icon}
                        <span>{menu.title}</span>
                    </div>
                )}
                </NavLink>
            ))}
        </nav>
    )
} 




{/* <NavLink to="/" className='block group'>
{({isActive}) => (
    <div className={classNames("flex items-center gap-2 p-2 hover:bg-[#202228] rounded-md transition-all", {"bg-[#101218] hover:bg-[#101218]": isActive})}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10.6667C6.56692 11.0869 7.25638 11.3333 8 11.3333C8.74362 11.3333 9.43308 11.0869 10 10.6667" stroke="white" />
            <path d="M14.6667 8.13596V9.14998C14.6667 11.7506 14.6667 13.0509 13.8857 13.8588C13.1046 14.6667 11.8475 14.6667 9.33337 14.6667H6.66671C4.15255 14.6667 2.89547 14.6667 2.11442 13.8588C1.33337 13.0509 1.33337 11.7506 1.33337 9.14998V8.13596C1.33337 6.61034 1.33337 5.84753 1.67951 5.21517C2.02564 4.58281 2.658 4.19035 3.92273 3.40543L5.25606 2.57792C6.59296 1.7482 7.26142 1.33334 8.00004 1.33334C8.73866 1.33334 9.40712 1.7482 10.744 2.57792L12.0773 3.40543C13.3421 4.19035 13.9744 4.58281 14.3206 5.21517" stroke="white" />
            <defs>
            <clipPath id="clip0_82_173">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <span>Home</span>
    </div>
)}
</NavLink>
<NavLink to="/work" className='block group'>
{({isActive}) => (
    <div className={classNames("flex items-center gap-2 p-2 hover:bg-[#202228] rounded-md transition-all", {"bg-[#101218] hover:bg-[#101218]": isActive})}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.31926 4.20994C1.99534 4.73951 1.33337 5.00429 1.33337 5.33332C1.33337 5.66236 1.99534 5.92714 3.31926 6.45671L5.19157 7.20564C6.5155 7.73521 7.17746 7.99999 8.00004 7.99999C8.82262 7.99999 9.48458 7.73521 10.8085 7.20564L12.6808 6.45671C14.0047 5.92714 14.6667 5.66236 14.6667 5.33332C14.6667 5.00429 14.0047 4.73951 12.6808 4.20994L10.8085 3.46101C9.48458 2.93144 8.82262 2.66666 8.00004 2.66666C7.36408 2.66666 6.82412 2.82493 6.00004 3.14147" stroke="white"/>
            <path d="M3.84413 6.66666L3.31926 6.8766C1.99534 7.40617 1.33337 7.67096 1.33337 7.99999C1.33337 8.32902 1.99534 8.59381 3.31926 9.12338L5.19157 9.8723C6.5155 10.4019 7.17746 10.6667 8.00004 10.6667C8.82262 10.6667 9.48458 10.4019 10.8085 9.8723L12.6808 9.12338C14.0047 8.59381 14.6667 8.32902 14.6667 7.99999C14.6667 7.67096 14.0047 7.40617 12.6808 6.8766L12.156 6.66666" stroke="white"/>
            <path d="M12.6808 11.7901C14.0047 11.2605 14.6667 10.9957 14.6667 10.6667C14.6667 10.3376 14.0047 10.0729 12.6808 9.54329L12.156 9.33334M3.84413 9.33334L3.31926 9.54329C1.99534 10.0729 1.33337 10.3376 1.33337 10.6667C1.33337 10.9957 1.99534 11.2605 3.31926 11.7901L5.19157 12.539C6.5155 13.0686 7.17746 13.3333 8.00004 13.3333C8.636 13.3333 9.17596 13.1751 10 12.8585" stroke="white"/>
        </svg>
        <span>Work</span>
    </div>
)}
</NavLink>
<NavLink to="/stack" className='block group'>
{({isActive}) => (
    <div className={classNames("flex items-center gap-2 p-2 hover:bg-[#202228] rounded-md transition-all", {"bg-[#101218] hover:bg-[#101218]": isActive})}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.66667 5.94818L5.28151 2.56302C4.53082 1.81233 3.31371 1.81233 2.56302 2.56302C1.81233 3.31371 1.81233 4.53082 2.56302 5.28151L10.7185 13.437C11.4692 14.1877 12.6863 14.1877 13.437 13.437C14.1877 12.6863 14.1877 11.4692 13.437 10.7185L11.3852 8.66667" stroke="white" />
        <path d="M4 6.66666L6.66667 3.99999" stroke="white"/>
        <path d="M10.7334 1.53814C10.8407 1.26508 11.2257 1.26508 11.333 1.53814L11.6199 2.26833C11.6527 2.35169 11.7184 2.41768 11.8015 2.45056L12.529 2.73854C12.801 2.84624 12.801 3.23268 12.529 3.34037L11.8015 3.62835C11.7184 3.66123 11.6527 3.72722 11.6199 3.81059L11.333 4.54078C11.2257 4.81384 10.8407 4.81384 10.7334 4.54078L10.4465 3.81059C10.4137 3.72722 10.348 3.66123 10.2649 3.62835L9.53741 3.34037C9.26536 3.23268 9.26536 2.84624 9.53741 2.73854L10.2649 2.45056C10.348 2.41768 10.4137 2.35169 10.4465 2.26833L10.7334 1.53814Z" stroke="white" />
        <path d="M13.3115 6.08629C13.4188 5.81324 13.8038 5.81324 13.9111 6.08629L14.0157 6.35252C14.0485 6.43589 14.1142 6.50188 14.1973 6.53476L14.4625 6.63976C14.7346 6.74745 14.7346 7.13389 14.4625 7.24159L14.1973 7.34659C14.1142 7.37947 14.0485 7.44546 14.0157 7.52882L13.9111 7.79505C13.8038 8.06811 13.4188 8.06811 13.3115 7.79505L13.2069 7.52882C13.1741 7.44546 13.1084 7.37947 13.0253 7.34659L12.7601 7.24159C12.488 7.13389 12.488 6.74745 12.7601 6.63976L13.0253 6.53476C13.1084 6.50188 13.1741 6.43589 13.2069 6.35252L13.3115 6.08629Z" stroke="white" />
        <path d="M3.42209 10.2048C3.52939 9.93174 3.91441 9.93174 4.0217 10.2048L4.12631 10.471C4.15907 10.5544 4.22482 10.6204 4.30788 10.6533L4.57313 10.7583C4.84518 10.866 4.84518 11.2524 4.57313 11.3601L4.30788 11.4651C4.22482 11.498 4.15907 11.564 4.12631 11.6473L4.0217 11.9136C3.91441 12.1866 3.52939 12.1866 3.42209 11.9136L3.31748 11.6473C3.28472 11.564 3.21897 11.498 3.13591 11.4651L2.87066 11.3601C2.59861 11.2524 2.59861 10.866 2.87066 10.7583L3.13591 10.6533C3.21897 10.6204 3.28472 10.5544 3.31748 10.471L3.42209 10.2048Z" stroke="white" />
        </svg>
        <span>Stack</span>
    </div>
)}
</NavLink>
<NavLink to="/blog" className='block group'>
{({isActive}) => (
    <div className={classNames("flex items-center gap-2 p-2 hover:bg-[#202228] rounded-md transition-all", {"bg-[#101218] hover:bg-[#101218]": isActive})}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6956 14.4626L11.2653 14.2079L11.2653 14.2079L11.6956 14.4626ZM11.8763 14.1573L12.3065 14.412L12.3065 14.412L11.8763 14.1573ZM10.7904 14.1573L10.3601 14.412L10.3601 14.412L10.7904 14.1573ZM10.9711 14.4626L11.4014 14.2079L11.4014 14.2079L10.9711 14.4626ZM8.12687 12.6378L8.58881 12.4465H8.58881L8.12687 12.6378ZM9.92986 13.6638L9.92125 14.1638H9.92125L9.92986 13.6638ZM9.02886 13.5398L8.83752 14.0018L8.83752 14.0018L9.02886 13.5398ZM14.5398 12.6378L15.0017 12.8292V12.8292L14.5398 12.6378ZM12.7368 13.6638L12.7282 13.1639L12.7368 13.6638ZM13.6378 13.5398L13.8291 14.0018H13.8291L13.6378 13.5398ZM13.8708 8.2456L13.6096 8.67192V8.67192L13.8708 8.2456ZM14.4211 8.79584L14.8474 8.53459L14.8474 8.53459L14.4211 8.79584ZM8.79584 8.2456L8.53459 7.81928L8.79584 8.2456ZM8.2456 8.79584L7.81928 8.53459L8.2456 8.79584ZM10.4676 13.7366L10.719 13.3044L10.719 13.3044L10.4676 13.7366ZM15.1548 12.0255C15.1689 11.7498 14.9568 11.5148 14.681 11.5007C14.4052 11.4865 14.1702 11.6987 14.1561 11.9745L15.1548 12.0255ZM14.1143 9.41604C14.16 9.68838 14.4178 9.87212 14.6902 9.82645C14.9625 9.78077 15.1462 9.52296 15.1006 9.25063L14.1143 9.41604ZM12.1258 14.7173L12.3065 14.412L11.446 13.9026L11.2653 14.2079L12.1258 14.7173ZM10.3601 14.412L10.5408 14.7173L11.4014 14.2079L11.2207 13.9026L10.3601 14.412ZM11.2653 14.2079C11.2833 14.1774 11.315 14.1667 11.3333 14.1667C11.3517 14.1667 11.3833 14.1774 11.4014 14.2079L10.5408 14.7173C10.8955 15.3165 11.7712 15.3165 12.1258 14.7173L11.2653 14.2079ZM10.8333 8.5H11.8333V7.5H10.8333V8.5ZM8.5 11.1667V10.8333H7.5V11.1667H8.5ZM7.5 11.1667C7.5 11.5481 7.49973 11.8593 7.51702 12.1126C7.53461 12.3705 7.57205 12.6049 7.66493 12.8292L8.58881 12.4465C8.55482 12.3644 8.52882 12.2515 8.5147 12.0446C8.50027 11.8331 8.5 11.5618 8.5 11.1667H7.5ZM9.93847 13.1639C9.51997 13.1567 9.34386 13.1291 9.2202 13.0779L8.83752 14.0018C9.15407 14.1329 9.50284 14.1566 9.92125 14.1638L9.93847 13.1639ZM7.66493 12.8292C7.88483 13.3601 8.30662 13.7819 8.83752 14.0018L9.2202 13.0779C8.93434 12.9595 8.70722 12.7324 8.58881 12.4465L7.66493 12.8292ZM12.7454 14.1638C13.1638 14.1566 13.5126 14.1329 13.8291 14.0018L13.4465 13.0779C13.3228 13.1291 13.1467 13.1567 12.7282 13.1639L12.7454 14.1638ZM14.0779 12.4465C13.9594 12.7324 13.7323 12.9595 13.4465 13.0779L13.8291 14.0018C14.36 13.7819 14.7818 13.3601 15.0017 12.8292L14.0779 12.4465ZM11.8333 8.5C12.3886 8.5 12.7699 8.50053 13.0636 8.52846C13.3499 8.55568 13.501 8.60535 13.6096 8.67192L14.1321 7.81928C13.8399 7.64025 13.5178 7.56712 13.1583 7.53294C12.8063 7.49947 12.3692 7.5 11.8333 7.5V8.5ZM13.6096 8.67192C13.7666 8.76812 13.8985 8.9001 13.9947 9.05709L14.8474 8.53459C14.6687 8.24305 14.4236 7.99794 14.1321 7.81928L13.6096 8.67192ZM10.8333 7.5C10.2974 7.5 9.86041 7.49947 9.50837 7.53295C9.14889 7.56712 8.82674 7.64025 8.53459 7.81928L9.05709 8.67192C9.16571 8.60535 9.31674 8.55568 9.60303 8.52846C9.89675 8.50053 10.2781 8.5 10.8333 8.5V7.5ZM8.5 10.8333C8.5 10.2781 8.50053 9.89676 8.52846 9.60303C8.55568 9.31675 8.60535 9.16571 8.67192 9.05709L7.81928 8.53459C7.64025 8.82675 7.56712 9.14889 7.53294 9.50838C7.49947 9.86042 7.5 10.2975 7.5 10.8333H8.5ZM8.53459 7.81928C8.24305 7.99794 7.99793 8.24305 7.81928 8.53459L8.67192 9.05709C8.76812 8.90011 8.9001 8.76812 9.05709 8.67192L8.53459 7.81928ZM11.2207 13.9026C11.1554 13.7923 11.0891 13.6794 11.0227 13.5882C10.9501 13.4886 10.8562 13.3843 10.719 13.3044L10.2162 14.1688C10.1915 14.1545 10.1889 14.142 10.2146 14.1772C10.2464 14.2208 10.2852 14.2855 10.3601 14.412L11.2207 13.9026ZM9.92125 14.1638C10.0723 14.1664 10.1514 14.1682 10.2078 14.1745C10.2549 14.1797 10.2425 14.1842 10.2162 14.1689L10.719 13.3044C10.5801 13.2236 10.4406 13.1941 10.3178 13.1806C10.2044 13.168 10.0709 13.1662 9.93847 13.1639L9.92125 14.1638ZM12.3065 14.412C12.3814 14.2855 12.4203 14.2208 12.4521 14.1772C12.4777 14.142 12.4751 14.1545 12.4504 14.1689L11.9477 13.3044C11.8104 13.3843 11.7165 13.4886 11.6439 13.5882C11.5775 13.6794 11.5112 13.7923 11.446 13.9026L12.3065 14.412ZM12.7282 13.1639C12.5957 13.1662 12.4623 13.168 12.3488 13.1806C12.2261 13.1941 12.0866 13.2236 11.9477 13.3044L12.4504 14.1689C12.4241 14.1842 12.4117 14.1797 12.4589 14.1745C12.5153 14.1682 12.5944 14.1664 12.7454 14.1638L12.7282 13.1639ZM14.1561 11.9745C14.1432 12.2264 14.1159 12.3547 14.0779 12.4465L15.0017 12.8292C15.1045 12.581 15.1398 12.319 15.1548 12.0255L14.1561 11.9745ZM15.1006 9.25063C15.0572 8.99223 14.9824 8.75495 14.8474 8.53459L13.9947 9.05709C14.0452 9.13939 14.0858 9.24606 14.1143 9.41604L15.1006 9.25063Z" fill="white"/>
        <path d="M6.66671 2L3.33337 14" stroke="white"/>
        <path d="M12.6667 2L11.463 6.33333" stroke="white"/>
        <path d="M14.6666 6H2.66663" stroke="white" />
        <path d="M1.33337 10.6667H6.00004" stroke="white" />
        </svg>
        <span>Blog</span>
    </div>
)}
</NavLink> */}