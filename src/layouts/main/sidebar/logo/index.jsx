import Avatar from '../../../../assets/img/avatar.jpeg';

export default function Logo() {
    return  (
        <div className="flex items-center justify-between pb-8">
            <div className="flex gap-3 items-center">
                <div className="avatar flex items-center justify-center">
                    <img src={Avatar} alt="Avatar" width="40" height="40" className='w-10 h-10 rounded-full object-cover' />
                </div>
                <div className="mainLogo text-sm">
                    <h6 className='font-bold leading-4'>Korayhan Aslan</h6>
                    <span className='text-[#9FA0A1] leading-4'>Front-end Developer</span>
                </div>
            </div>
            <div className='lg:hidden'>
                <button type='button'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="white" />
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" />
                    </svg>
                </button>
            </div>
        </div>
    )
}