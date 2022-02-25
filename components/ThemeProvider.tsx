import React, { useEffect, useState } from "react";

function BlurImage({ src, blurSrc }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoaded(false);
    image.src = src;
  }, []);
  return (
    <>
      <img
        src={isLoaded ? src : blurSrc}
        alt="Blur Image"
        style={{
          width: "300px",
          filter: isLoaded ? "none" : "blur(10px)",
          transition: "blur 300ms",
        }}
      />
    </>
  );
}
export default BlurImage;
