import { ArrowRightIcon } from "./SvgIcons";

export const StatBox = ({ title, value, color }) => (
    <div className="bg-white/10 p-5 rounded-xl transition duration-300 hover:bg-white/20 shadow-lg flex justify-between items-center transform hover:scale-[1.02] cursor-default">
        <div>
            <p className="text-sm font-medium text-gray-300">{title}</p>
            <p className={`text-4xl font-bold ${color} mt-1`}>{value}</p>
        </div>
        <ArrowRightIcon className="w-6 h-6 text-orange-400 rotate-[-45deg] opacity-70" />
    </div>
);