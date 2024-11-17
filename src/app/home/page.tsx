"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";
import Promo from "../components/Promo";
import { MdChevronRight } from "react-icons/md";

const Home = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState({
        name: "",
        email: ""
    });

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const handleSignup = () => {
        if (!name) {
            setError({
                name: "Please type a name", email: error?.email
            });
        } else if (!email) {
            setError({
                name: error?.name, email: "Please type your email address"
            });
        } else if (!email) {
            setError({
                name: error?.name, email: "Please type your email address"
            });
        } else if (!emailRegex.test(email)) {
            setError({
                name: error?.name, email: "Invalid email address"
            });
        } else {
            window.alert("Registration successful");
        }
    }

    return (
        <div>
            <Navbar />
            <main className="px-40 mt-10">
                <div className="flex flex-row gap-10">
                    <div className="w-full relative">
                        <div>
                            <Image src="/Rectangle.png" alt="rectangle" width={500} height={500} className="w-full absolute" ></Image>
                            <div className="flex flex-col items-center justify-center w-full h-full absolute">
                                <h1 className="text-white font-extrabold text-6xl text-center px-5">LET THE GAMES BEGIN</h1>
                                <div className="flex flex-row gap-5 mt-5">
                                    <button className="bgBlue text-white text-xs font-bold rounded-2xl px-6 py-4">SHOP NOW</button>
                                    <button className="bgBlue text-white text-xs font-bold rounded-2xl px-6 py-4">EXPLORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F5F8FC] rounded-2xl p-10 w-full flex flex-col gap-8">
                        <p className="text-green-400">LETS PLAY</p>
                        <div>
                            <h1 className="font-bold textBlue text-3xl">WIN POPDARTS</h1>
                            <h1 className="font-bold textBlue text-3xl">FOR LIFE</h1>
                        </div>
                        <p className="textBlue w-2/4">Want to get every new Pro Pack for life? Enter to win by providing your name, email, and phone number below.</p>
                        <div className="w-full">
                            <input type="text" placeholder="NAME" className="w-full" value={name} onChange={(e) => {
                                setError({ name: "", email: "" });
                                setName(e.target.value);
                            }}></input>
                            <p className="text-red-500 text-xs mt-1 ml-2">{error?.name}</p>
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="EMAIL" className="w-full" value={email} onChange={(e) => {
                                setError({ name: "", email: "" });
                                setEmail(e.target.value);
                            }}></input>
                            <p className="text-red-500 text-xs mt-1 ml-2">{error?.email}</p>
                        </div>
                        <button className="bgBlue text-white font-bold rounded-2xl text-xs py-4 w-full"
                            onClick={handleSignup}
                        >SIGN UP NOW</button>
                    </div>
                </div>
                <div className="bgBlue p-10 py-20 flex flex-col gap-10 mt-20">
                    <h1 className="text-white text-6xl font-extrabold text-center px-40">EXPLORE POPDARTS PRODUCTS LINES OF FUN</h1>
                    <p className="text-white text-xs text-center">The hottest game of the summer!</p>
                    <div className="group">
                        <div className="bgImage rounded-2xl group-hover:hidden">
                            <div className="flex flex-col rounded-2xl overflow-hidden w-[350px] bg-white items-center gap-14">
                                <p className="text-white bg-purple-400 text-xs py-2 w-full text-center">Fun & Cultish   Fun & Cultish   Fun & Cultish   Fun & Cultish</p>
                                <p className="text-purple-400 text-7xl italic font-extrabold">OG</p>
                                <p className="text-xs textBlue px-10 text-center">Josh and Jason Carman grew up in Pennsylvania, graduated college, and went on to establish their careers in finance and business.</p>
                                <div className="p-2 w-full">
                                    <button className="bgBlue text-white font-bold text-xs p-4  rounded-2xl w-full">EXPLORE OG LINE</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 bg-[#F5F8FC] rounded-2xl items-center group-hover:flex">
                            <div className="flex flex-col rounded-2xl overflow-hidden w-full bg-white items-center gap-14">
                                <p className="text-black bg-green-400 text-xs py-2 w-full text-center">Competitive Competitive Competitive Competitive Competitive</p>
                                <p className="text-green-400 text-7xl italic font-extrabold">PRO</p>
                                <p className="text-xs textBlue px-10 text-center">Josh and Jason Carman grew up in Pennsylvania, graduated college, and went on to establish their careers in finance and business.</p>
                                <div className="p-2 w-full">
                                    <button className="bgBlue text-white font-bold text-xs p-4 w-full rounded-2xl">EXPLORE OG LINE</button>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center w-full">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <div className="flex flex-row gap-2 w-full">
                                        <span className="bgBlue text-white text-[10px] py-1 px-2 rounded-xl">NEW</span>
                                        <p className="textBlue font-bold">SILVER & GOLD</p>
                                    </div>
                                    <p className="textBlue font-bold ">34.99$</p>
                                </div>
                                <div className="justify-between flex flex-row w-full">
                                    <p className="textBlue text-[10px]">PRO TARGET</p>
                                    <p className="text-[#2B99FF]/50 font-bold line-through">58.00$</p>
                                </div>
                                <Image src="/image2.png" alt="image2" width={500} height={500} className="w-32 mt-5"></Image>
                            </div>
                            <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center w-full">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <div className="flex flex-row gap-2 w-full">
                                        <span className="bgBlue text-white text-[10px] py-1 px-2 rounded-xl">NEW</span>
                                        <p className="textBlue font-bold">SILVER & GOLD</p>
                                    </div>
                                    <p className="textBlue font-bold ">34.99$</p>
                                </div>
                                <div className="justify-between flex flex-row w-full">
                                    <p className="textBlue text-[10px]">PRO TARGET</p>
                                    <p className="text-[#2B99FF]/50 font-bold line-through">58.00$</p>
                                </div>
                                <Image src="/image1.png" alt="image1" width={500} height={500} className="w-32 mt-5"></Image>
                            </div>
                            <button className="bg-white p-3 rounded-xl text-2xl absolute right-[14%] shadow-2xl border-2 border-black/5">
                                <MdChevronRight />
                            </button>
                        </div>
                    </div>
                    <button className="bg-white textBlue font-bold text-xs rounded-2xl py-4">SHOP ALL</button>
                </div>
                <Promo />
            </main>
            <Footer />
        </div>
    )
}

export default Home;