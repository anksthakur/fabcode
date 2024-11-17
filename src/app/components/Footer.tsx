import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-40 my-20">
            <div className="bg-[#F5F8FC] flex flex-row p-10 rounded-2xl h-60">
                <div className="flex flex-col justify-between w-2/5">
                    <p className="textBlue font-bold">CONNECT COMMUNITY</p>
                    <ul className="flex flex-row gap-2 text-2xl">
                        <li><FaSquareInstagram /></li>
                        <li><AiFillTikTok /></li>
                        <li><FaFacebookSquare /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </div>
                <div className="w-3/5 flex flex-col justify-between">
                    <p className="text-xs textBlue w-2/4">Get 10% off your first order, exclusive early access to new product launches, and the opportunity to suggest new products. Plus, enter our weekly draw to win free sets. Dont miss out—join now!</p>
                    <div className="flex flex-row gap-5">
                        <input type="email" placeholder="ENTER YOUR EMAIL" className="border-b border-[#2B99FF] !rounded-none bg-white/0 text-2xl w-full"></input>
                        <button className="bgBlue text-white text-xs font-bold rounded-2xl px-8 py-6">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
