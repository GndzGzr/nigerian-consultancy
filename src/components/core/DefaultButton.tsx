import { Btn } from "../atoms/btn";
import { BtnProps } from "@/utils/interface";
const ReadMoreButton = () => {
    return (
        <Btn width="w-40" type="secondary" rounded="rounded-full">
            Read More
        </Btn>
    )        


}

const ContactButton = () => {
    return (
        <Btn width="w-40" type="secondary" rounded="rounded-full">
            Contact Us
        </Btn>
    )
}



export { ReadMoreButton, ContactButton };