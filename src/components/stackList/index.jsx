import { stackItems } from "../../utils/consts";

export default function StackList() {
    return (
        <div className="flex flex-col">
            <div>
                <h5>Design</h5>
            </div>
            <div className="grid grid-cols-2">
                {stackItems.map((item,index) => (
                    <div className="flex items-center gap-4" key={item.id}>
                        <div><img className="w-10 h-10 object-cover rounded-lg" src={item.icon} alt="" /></div>
                        <div>
                            <div>{item.title}</div>
                            <div>{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}