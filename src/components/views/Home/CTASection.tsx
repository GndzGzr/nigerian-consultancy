



import { ConsultButton } from "@/components/core/ButtonWIcon";
import { ContactButton } from "@/components/core/DefaultButton";
import Image from "next/image";

export default function CTASection() {

    return (
        <div className="container scheme-light p-24 flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center text-center max-w-4xl ">

                <h2 className="font-serif mt-8 max-w-2xl">Ready to start your visa journey</h2>
                <p className="mt-3 max-w-2xl">Connect with our expert consultants and take the first step towards a successful Nigerian visa application.</p>
                <div className="flex flex-row gap-4 mt-8">
                    <ConsultButton />
                    <ContactButton />
                </div>
            </div>







        </div>
    )
}