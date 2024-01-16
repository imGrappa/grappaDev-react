import { stackDesign, stackDev } from "../../utils/consts";

export default function StackList() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col p-3 gap-6 border border-[#252629] rounded-lg">
                <div className="px-3 pt-3">
                    <h5>Design</h5>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
                    {stackDesign.map((item,index) => (
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-[transparent] hover:border hover:border-[#252629] hover:bg-[#1B1C20] transition-all duration-300 cursor-default" key={item.id}>
                            <div><img className="w-10 h-10 object-cover rounded-lg" src={item.icon} alt="" /></div>
                            <div>
                                <div className="text-sm">{item.title}</div>
                                <div className="text-xs text-[#858585]">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col p-3 gap-6 border border-[#252629] rounded-lg">
                <div className="px-3 pt-3">
                    <h5>Development</h5>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
                    {stackDev.map((item,index) => (
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-[transparent] hover:border hover:border-[#252629] hover:bg-[#1B1C20] transition-all duration-300 cursor-default" key={item.id}>
                            <div><img className="w-10 h-10 object-cover rounded-lg" src={item.icon} alt="" /></div>
                            <div>
                                <div className="text-sm">{item.title}</div>
                                <div className="text-xs text-[#858585]">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}