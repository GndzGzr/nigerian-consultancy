




import { ContactButton } from "@/components/core/DefaultButton";
import Image from "next/image";

export default function FAQSection() {

    return (
        <div className="container scheme-light-alt p-16">
            <div className="grid grid-cols-5 gap-28">
                <div className="col-span-2">
                    <h2 className="font-serif ">FAQs</h2>
                    <p className="mt-4 mb-4">Find answers to the most common questions about Nigerian visa applications</p>
                    <ContactButton />
                </div>
                <div className="col-span-3">
                    <div>
                        <p className="">What types of visas do you assist with?</p>
                        <p className="mt-4 text-gray-600">We assist with a wide range of visas including tourist, business, student, work, and family visas for various countries.</p>
                    </div>
                    <div className="mt-6">
                        <p className="">How long does the visa application process take?</p>
                        <p className="mt-4 text-gray-600">The processing time varies depending on the type of visa and the country. Typically, it can take anywhere from a few days to several weeks.</p>
                    </div>
                    <div className="mt-6">
                        <p className="">What documents are required for a visa application?</p>
                        <p className="mt-4 text-gray-600">Required documents vary by visa type and destination country, but generally include a valid passport, completed application form, photographs, proof of financial means, and travel itinerary.</p>
                    </div>
                    <div className="mt-6">
                        <p className="">Do you offer personalized consultations?</p>
                        <p className="mt-4 text-gray-600">Yes, we offer personalized consultations to assess your specific situation and provide tailored advice for your visa application.</p>
                    </div>
                    <div className="mt-6">
                        <p className="">What are your fees for visa assistance?</p>
                        <p className="mt-4 text-gray-600">Our fees vary depending on the type of visa and the level of service required. Please contact us for a detailed quote.</p>
                    </div>

                </div>


            </div>







        </div>
    )
}