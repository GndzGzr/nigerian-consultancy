import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { ConsultButton } from "@/components/core/ButtonWIcon";
export default function HeroMain() {
  return (
     <div className="h-screen container scheme-dark">
        <div className="grid grid-cols-2 p-24">

          <div className="col-span-1 flex flex-col justify-start items-start p-4">
            
            <h1 className="font-serif">Your Trusted Partner for Nigeria Visa Services in Turkey</h1>
            <p className="font-sans mt-6">Simplifying the process, guiding you every step of the way.</p>
            <ConsultButton  />

          </div>
          <div className="col-span-1 flex justify-center items-start">
            <Image
              src="/images/hero.jpg"
              alt="Hero Image"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />

          </div>

        </div>

      </div>

  )
}