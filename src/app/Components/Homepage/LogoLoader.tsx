import React, { useEffect, useState } from "react";
import logo from "../../../../public/assets/Images/foot-logo.webp";
import Image from "next/image";
const LogoLoader: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setTimeout(() => setAnimate(true), 100); // Small delay for smooth animation start
  }, []);

  return (
    <div className="loader-container">
      <Image
        loading="eager"
        src={logo}
        alt="Logo"
        className={`logo ${animate ? "animate" : ""}`}
      />
    </div>
  );
};

export default LogoLoader;
