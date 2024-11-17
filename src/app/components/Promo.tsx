import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Promo = () => {
    return (
        <div className="mt-20 bg-white">
            <div>
                <div className="bgBlue rounded-2xl p-10">
                    <h1 className="text-6xl text-white font-extrabold">POPDARTS: SCORE KEEPER</h1>
                    <p className="text-white w-5/12 text-sm mt-1">Josh and Jason Carman grew up in Pennsylvania, graduated college, and went on to establish their careers in finance.</p>
                    <div className="flex flex-row gap-2 mt-20">
                        <button className="bg-white border border-black rounded-xl">
                            <div className="flex flex-row gap-2 items-center px-2 py-1">
                                <p className="text-4xl">
                                    <FaApple />
                                </p>
                                <div className="flex flex-col items-start">
                                    <p className="text-black text-xs">Download on the</p>
                                    <p className="text-black text-lg">App Store</p>
                                </div>
                            </div>
                        </button>
                        <button className="bg-white border border-black rounded-xl">
                            <div className="flex flex-row gap-2 items-center px-2 py-1">
                                <p className="text-4xl">
                                    <IoLogoGooglePlaystore />
                                </p>
                                <div className="flex flex-col items-start">
                                    <p className="text-black text-xs">Get it on</p>
                                    <p className="text-black text-lg">Google Play</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo;
