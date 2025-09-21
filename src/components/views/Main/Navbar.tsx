import { ConsultButton } from "@/components/core/ButtonWIcon";

export default function Navbar() {
    return (
        <nav className="fixed pt-4 px-24 w-full z-999">
            <div className="px-4 py-2 rounded-full container scheme-dark w-full flex justify-start items-center gap-8">
                <div className="text-2xl font-bold">LOGO</div>
                <div className="flex space-x-6">
                    <a className="t" href="#services">Services</a>
                    <a className="t" href="#process">Process</a>
                    <a className="t" href="#about">About Us</a>
                    <a className="t" href="#about">Resources</a>
                </div>
                <div className="justify-self-end flex space-x-6 ml-auto">
                    <ConsultButton />
                </div>

            </div>

        </nav>
    );
}