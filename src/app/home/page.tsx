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

    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
        <>
        <div>
            <h1>Home Page</h1>
        </div>
        </>
       
    )
}

export default Home;