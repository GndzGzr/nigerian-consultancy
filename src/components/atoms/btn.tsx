import { BtnProps } from "@/utils/interface";
const Btn = ({ children, type = "secondary", width = "w-40", rounded = "rounded-lg", className }: BtnProps) => {
    return (
        <button className={`${rounded} ${type}-btn px-4 py-2 hover:cursor-pointer ${width} ${className}`}>
            {children}
        </button>
    )
}
export { Btn };