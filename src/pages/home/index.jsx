import { Link } from "react-router-dom";
import { projects } from "../../components/projects";
import { socialNav } from "../../utils/consts";
import { works } from "../../components/works";
import Footer from "../../layouts/main/footer";

export default function Home() {
    return (
        <div className="content-wrapper w-full pt-20">
            <div className="max-w-2xl mx-auto">
                <div className="content flex flex-col gap-6 font-light">
                    <p>
                        Hey, I'm Koray. I'm a <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 border-b border-[transparent] hover:border-blue-500 transition-all hover:cursor-default">front-end developer</span> living in Turkey. Currently, I'm working as a freelancer.
                    </p>
                    <p>
                        Currently, I'm working as a freelancer. Previously, I worked as a front-end developer at "Talk Solutions", and before that, at "RavenSoft". Prior to those experiences, I worked as a freelance front-end developer for a long period.
                        I particularly enjoy working on developing projects from scratch. You can take a look at my previous work below.
                    </p>
                    <div className="flex flex-col gap-3 pt-10">
                        <span className="pb-1 font-semibold">Some projects I've done:</span>
                        {projects.map((item,index) => (
                            <Link to={item.link} key={item.id} target="_blank" className="flex items-center justify-between text-sm gap-1 text-[#858585] hover:text-[#fff] transition-colors">
                                <div className="flex flex-col">
                                    <span className="font-semibold">{item.title}</span>
                                    <span className="text-xs text-[#858585]">{item.work}</span>
                                </div>
                                <span>{item.icon}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="content flex flex-col gap-3 pt-10">
                    <div className="flex flex-col gap-4 pt-10">
                        <span className="pb-1 font-semibold">Social</span>
                        {socialNav.map((menu, index) => (
                            <Link to={menu.link} key={menu.id} target="_blank" className="flex gap-6 items-center justify-between text-sm text-[#858585] hover:text-[#fff] transition-colors">
                                <span>{menu.title}</span>
                                <div className=" h-[1px] bg-transparent border-[#262626] flex-1 border-t border-dashed"></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Follow</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="content flex flex-col gap-3 pt-10">
                    <div className="flex flex-col gap-4 pt-10">
                        <span className="pb-1 font-semibold">Works</span>
                        {works.map((menu, index) => (
                            <Link to={menu.link} key={menu.id} target="_blank" className="flex gap-6 items-center justify-between text-sm text-[#858585] hover:text-[#fff] transition-colors">
                                <span>{menu.company}</span>
                                <div className=" h-[1px] bg-transparent border-[#262626] flex-1 border-t border-dashed"></div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-[#a3a3a3] font-light">{menu.title}</span>
                                    <span className="text-sm text-[#858585]">{menu.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}