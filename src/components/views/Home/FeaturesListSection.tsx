



import Image from "next/image";

export default function FeatureListSection() {

    return (
        <div className="container scheme-light p-24 flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center text-center max-w-4xl ">

                <h2 className="font-serif mt-8 max-w-2xl">Client Stories</h2>
                <p className="mt-3 max-w-2xl">Real experiences from travelers we've helped</p>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-8 mt-16">
                    <div className="flex flex-col justify-start items-center text-center child rounded-lg p-6 border border-gray-200 shadow-lg">
                        <div className="five-star-rating mb-4">
                            <span>★★★★★</span>
                        </div>
                        <p className="italic t">"The visa consultancy made my travel dreams come true! Their expert guidance and support throughout the application process were invaluable. Highly recommend their services!"</p>
                        <div>
                            <Image src="/images/avatar.jpg" alt="User 1" width={50} height={50} className="rounded-full mt-4 mx-auto" />
                            <h5 className="font-serif mt-4">- Sarah M.</h5>
                            <h6 className="text-sm text-gray-500">Enterpreneur</h6>
                        </div>


                    </div>
                    <div className="flex flex-col justify-start items-center text-center child rounded-lg p-6 border border-gray-200 shadow-lg">
                        <div className="five-star-rating mb-4">
                            <span>★★★★★</span>
                        </div>
                        <p className="italic t">"The visa consultancy made my travel dreams come true! Their expert guidance and support throughout the application process were invaluable. Highly recommend their services!"</p>
                        <div>
                            <Image src="/images/avatar.jpg" alt="User 1" width={50} height={50} className="rounded-full mt-4 mx-auto" />
                            <h5 className="font-serif mt-4">- Sarah M.</h5>
                            <h6 className="text-sm text-gray-500">Traveler</h6>
                        </div>


                    </div>
                    <div className="flex flex-col justify-start items-center text-center child rounded-lg p-6 border border-gray-200 shadow-lg">
                        <div className="five-star-rating mb-4">
                            <span>★★★★★</span>
                        </div>
                        <p className="italic t">"The visa consultancy made my travel dreams come true! Their expert guidance and support throughout the application process were invaluable. Highly recommend their services!"</p>
                        <div>
                            <Image src="/images/avatar.jpg" alt="User 1" width={50} height={50} className="rounded-full mt-4 mx-auto" />
                            <h5 className="font-serif mt-4">- Sarah M.</h5>
                            <h6 className="text-sm text-gray-500">Digital Nomad</h6>
                        </div>


                    </div>

                </div>
            </div>






        </div>
    )
}