import Avatar from '../../../../assets/img/avatar.jpg';

export default function Logo() {
    return  (
        <div className="flex gap-3 items-center pb-8">
            <div className="avatar flex items-center justify-center">
                <img src={Avatar} alt="Avatar" className='w-10 h-10 rounded-full object-cover' />
            </div>
            <div className="mainLogo text-sm">
                <h6 className='font-bold leading-4'>Korayhan Aslan</h6>
                <span className='text-[#9FA0A1] leading-4'>Front-end Developer</span>
            </div>
        </div>
    )
}