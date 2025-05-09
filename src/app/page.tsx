import Landingpage from "./Components/Homepage/Landingpage";
import Ourclients from "./Components/Homepage/Ourclients";
// import Services from './Components/Homepage/Services';
import Services1 from "./Components/Homepage/Services1";
import Threeinone from "./Components/Homepage/Threeinone";
import Whatourclientsay from "./Components/Homepage/Whatourclientsay";
import { Routes } from "./Data/Data";
import OurServices from "./Components/Homepage/OurServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Design & Development Services | SoftSell - Empowering Startups & SMEs",
  description:
    "At SoftSell, we specialize in providing comprehensive web design, development, and management services tailored for startups and SMEs. Our innovative solutions are designed to help your business grow rapidly in the digital landscape.",
  openGraph: {
    title:
      "Web Design & Development Services | SoftSell - Empowering Startups & SMEs",
    description:
      "Discover SoftSell's web design and development services tailored for startups and SMEs. Our expert team delivers innovative and scalable solutions to enhance your online presence.",
    url: `${Routes.MAIN}`,
    images: [
      {
        url: "../../public/assets/Images/SoftSell-logo-3d.png",
        alt: "Web Design & Development Services | SoftSell",
      },
    ],
    siteName: "SoftSell",
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      {
        rel: "icon",
        url: "../../public/assets/Images/SoftSell-logo-3d.png",
        sizes: "32x32",
      },
    ],
    apple: { rel: "apple-touch-icon", url: "/favicon.ico" },
  },
};

export default function Home() {
  return (
    <>
      <section className="w-full flex-col flex ">
        <Landingpage />
        <Ourclients />
        <Services1 />
        <Threeinone />
        <Whatourclientsay />
      </section>
    </>
  );
}
