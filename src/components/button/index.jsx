export default function Button() {
    return (
        <button className="flex items-center justify-center w-[150px] h-[39px] bg-[#1C1F39] rounded-full gap-2 hover:bg-[#181B31] transition-colors">
            <div>Works</div>
            <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 10.5L4.95833 9.04167M10.5 3.5H5.25M10.5 3.5V8.75M10.5 3.5L6.70833 7.29167" stroke="white"/>
                </svg>
            </span>
        </button>
    )
}