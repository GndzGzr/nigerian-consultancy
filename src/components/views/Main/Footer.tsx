import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="container scheme-light px-24 pt-24 pb-8">

            <div className="grid grid-cols-6 gap-4 mb-8">
                <div className="col-span-4">
                    <div>
                        <h2 className="text-2xl font-bold">LOGO</h2>

                    </div>
                    <div className="mt-8" >
                        <p className="t">Address:</p>
                        <p className="t mt-3">123 Main St, Anytown, USA</p>

                    </div>
                    <div className="mt-8">
                        <p className="t">Contact:</p>
                        <p className="t mt-3">+1 (555) 123-4567</p>
                        <p className="t">info@example.com</p>

                    </div>
                    <div className="mt-8 mb-8">
                        <div className="flex space-x-4 text-xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="hover:text-blue-600 transition-colors duration-300" />
                            </a>
                             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
                            </a>
                        
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-sky-500 transition-colors duration-300" />
                            </a>
                           
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
                            </a>
                             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="hover:text-red-500 transition-colors duration-300" />
                            </a>
                        </div>


                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col gap-3">
                        <a className="t">Services</a>
                        <a className="t">Process</a>
                        <a className="t">About Us</a>
                        <a className="t">Resources</a>
                        <a className="t">Blog</a>
                    </div>


                </div>
                <div className="col-span-1">
                    <div className="flex flex-col gap-3">
                        <a className="t">Case Studies</a>
                        <a className="t">Guides</a>
                        <a className="t">Webinars Us</a>
                        <a className="t">Updates</a>
                        <a className="t">Contact</a>
                    </div>
                </div>
            </div>



            <p className="t border-t-1 pt-4">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>

        </footer>
    );
}
