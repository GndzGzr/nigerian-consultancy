import { ConsultButton } from "@/components/core/ButtonWIcon";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed pt-4 px-24 w-full z-999">
            <div className="px-4 py-2 rounded-full container scheme-dark w-full flex justify-start items-center gap-8">
                <div className="text-2xl font-bold">LOGO</div>
                <div className="flex space-x-6">
                    <Link className="t" href="/services">Services</Link>
                    <Link className="t" href="/process">Process</Link>
                    <Link className="t" href="/about">About Us</Link>
                    <Link className="t" href="/resources">Resources</Link>
                </div>
                <div className="justify-self-end flex space-x-6 ml-auto">
                    <ConsultButton />
                </div>

            </div>

        </nav>
    );
}