import StackList from "../../components/stackList";
import Footer from "../../layouts/main/footer";

export default function Stack() {
    return (
        <div className="content-wrapper w-full pt-20">
            <div className="max-w-2xl mx-auto relative z-10">
                <div className="mb-10">
                    <h4 className="text-3xl font-semibold">Stack</h4>
                    <span className="font-light text-[#858585]">Tools, resources and software I use daily.</span>
                </div>                
                <div className="content">
                    <div className="content-flex">
                        <StackList />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}