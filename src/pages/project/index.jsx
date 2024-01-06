import { Link } from "react-router-dom";
import { projectList } from "../../components/projectList";

export default function Project() {
    return (
        <div className="content-wrapper w-full pt-20">
            <div className="max-w-2xl mx-auto">
                <div className="content">
                    <div className="content-flex flex items-center gap-4">
                        {projectList.map((item,index) => (
                            <div className="flex-1">
                                <Link to={item.link} key={item.id} target="_blank">
                                    <div  className="overflow-hidden relative h-[250px]">
                                        <img src={item.img} alt="" className="absolute bottom-[-900px] object-cover"/>
                                    </div>
                                    <div>{item.name}</div>
                                    <span>{item.title}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}