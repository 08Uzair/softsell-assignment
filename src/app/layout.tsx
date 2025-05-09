"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MobFooter from "./Components/MobFooter";
import LoadingBar from "react-top-loading-bar";
import "./globals.css";
import { Providers } from "./providers";
import Menu from "./Components/Homepage/Menu";
// import ChatbotButton from "./Components/ChatbotButton";
import Template from "./template";
import ChatbotButton from "./Components/ChatbotButton";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathName = usePathname();

  // Memoize resize handling to avoid unnecessary re-creations
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  // Calculate visibility of header/footer outside render
  const hideHeaderFooter = ["/terms-conditions", "/privacy-policy"].some(
    (path) => pathName.includes(path)
  );

  useEffect(() => {
    // Loading bar setup with a shorter lifecycle
    setProgress(20);
    setTimeout(() => setProgress(100), 300);
    setTimeout(() => setProgress(0), 600);

    // Initialize and set resize listener only on mount
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, pathName]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Template>
          <Providers>
            <div className="w-full flex justify-center items-center bg-tc-light dark:bg-tc-dark background-image font-montserrat px-[40px] md:px-28 lg:px-40">
              <div className="max-w-[1440px] mx-auto w-full flex flex-col">
                <LoadingBar
                  color="#cbfb45"
                  progress={progress}
                  onLoaderFinished={() => setProgress(0)}
                  className="glow-bar"
                />
                {!hideHeaderFooter && <Header />}
                {children}

                {!hideHeaderFooter &&
                  pathName !== "/contact-us" &&
                  (isMobile ? <MobFooter /> : <Footer />)}
              </div>
            </div>
            <div className="flex items-center justify-start  h-[100px] w-auto fixed bottom-[15px] left-[60px] md:left-[70px] z-10 bg-red-400">
              <Menu />
            </div>
            <div className=" fixed bottom-[15px] right-[30px] md:right-[40px] z-50 ">
              <ChatbotButton />
            </div>
          </Providers>
        </Template>
      </body>
    </html>
  );
}
