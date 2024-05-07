'use client'
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from 'react';
const WasteManagement: React.FC = () => {
    useEffect(() => {
        const myFunction = () => {
            const preloader = document.querySelector(".loading-wrapper") as HTMLElement;
            preloader.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
        myFunction();

        const navbar = document.getElementById("nav");
        const navmenu = document.getElementById("navmenu");
        window.onscroll = function () {
            if (window.pageYOffset >= (navmenu?.offsetTop ?? 0)) {
                navbar?.classList.add("sticky");
            } else {
                navbar?.classList.remove("sticky");
            }

            if (window.scrollY > 100) {
                navbar?.classList.add('nav-active');
            } else {
                navbar?.classList.remove('nav-active');
            }
        };
    }, []);

    return (
        <>
            <Head>
                <title>Waste Management</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/images/favicon-enhanced.png" />
                <meta name="theme-color" content="#000000" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            </Head>

            {/* Body content converted to JSX */}
            <div className="loading-wrapper">
                <Image
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1715091704/r4obojoisefbrf2jdlau.gif"
                    alt="loading"
                    width={100}
                    height={100}
                />
            </div>

            <header>
                {/* Navigation and other content */}
            </header>

            {/* Include scripts dynamically and handle loading states appropriately */}
            <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" strategy="afterInteractive" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" strategy="afterInteractive" />
            <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        </>
    );
};

export default WasteManagement;
