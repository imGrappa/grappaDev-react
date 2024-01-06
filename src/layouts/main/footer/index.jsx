import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-16">
            <div className="flex justify-between items-center py-6 border-t border-[#262626]">
                <span className="font-light text-xs text-[#858585]">&copy; 2024</span>
                <Link to="https://github.com/imGrappa/grappaDev-react" target="_blank" className="font-light text-xs text-[#858585] hover:text-[#fff] underline underline-offset-4 transition-all">
                    <span>Source</span>
                </Link>
            </div>
        </footer>
    )
}