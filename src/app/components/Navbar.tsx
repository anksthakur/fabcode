import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
    return (
        <header>
            <div className="bgBlue flex flex-row items-center justify-between px-40">
                <p className="text-white text-xs py-2 italic">Fast & Free Shipping (USA) On all orders over $50* excluding Board Edition</p>
                <button className="text-white">
                    <IoMdClose />
                </button>
            </div>
            <div className="px-40 flex flex-row mt-5 items-center justify-between">
                <p className="textBlue text-4xl italic font-extrabold">POPDARTS</p>
                <ul className="font-bold textBlue text-sm flex flex-row gap-5">
                    <li>SHOP</li>
                    <li>PLAY</li>
                    <li>CONNECT</li>
                </ul>
                <ul className="textBlue flex flex-row gap-5 text-xl">
                    <li><IoSearch /></li>
                    <li><FaUserCircle /></li>
                    <li><IoMdCart /></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
