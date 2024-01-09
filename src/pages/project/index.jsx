import { Link } from "react-router-dom";
import { projectList } from "../../components/projectList";
import Footer from "../../layouts/main/footer";

export default function Project() {
    return (
        <div className="content-wrapper w-full pt-20">
            <div className="max-w-2xl mx-auto">
                <div className="content">
                    <div className="mb-10">
                        <h4 className="text-3xl font-semibold">Projects</h4>
                        <span className="font-light text-[#858585]">Coding unforgettable digital experiences.</span>
                    </div>
                    <div className="content-flex gap-4 grid grid-cols-2">
                        {projectList.map((item,index) => (
                            <div className="flex-1 border border-[#252629] rounded-xl overflow-hidden">
                                <Link to={item.link} key={item.id} target="_blank" className="group hover-transform">
                                    <div  className="overflow-hidden relative h-[250px]">
                                        <img 
                                            src={item.img} 
                                            alt={`${item.name} Frontend Development`} 
                                            className="relative top-[0px] object-cover transform-y-custom rounded-t-xl transition-all duration-[3s]"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <div className="flex flex-col">
                                            <div className="font-semibold">{item.name}</div>
                                            <span className="text-[#858585] text-sm">{item.title}</span>
                                        </div>
                                        <div>
                                            <div className="rounded-full px-3 py-1 border border-[#252629] text-xs text-[#858585]">{item.date}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}