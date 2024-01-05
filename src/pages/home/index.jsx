// import Button from '../../components/button';

import { Link } from "react-router-dom";
import { projects } from "../../components/projects";

export default function Home() {
    return (
        <div className="content-wrapper w-full pt-20">
            <div className="content max-w-2xl mx-auto flex flex-col gap-6 font-light">
                <p>
                    Hello, I'm Koray. I'm a front-end developer. Currently, I'm working as a freelancer. Previously, I worked as a front-end developer at "Talk Solutions", and before that, at "RavenSoft". Prior to those experiences, I worked as a freelance front-end developer for a long period.
                </p>
                <p>
                    I particularly enjoy working on developing projects from scratch. You can take a look at my previous work below.
                </p>
                <div className="flex flex-col gap-3 pt-10">
                    <span className="pb-1">Some companies I've worked with:</span>
                    {projects.map((item,index) => (
                        <Link to={item.link} key={item.id} target="_blank" className="flex items-center justify-between text-sm gap-1 hover:text-[#9457FF] transition-colors">
                            <div className="flex flex-col">
                                <span>{item.title}</span>
                                <span className="text-xs text-[#858585]">{item.work}</span>
                            </div>
                            <span>{item.icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}