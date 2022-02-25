import NextImage from "next/image";
import { useEffect, useState } from "react";
import cn from "classnames";
interface BlurImageProps {
  src: string;
  blurSrc: string;
  className: string;
}
const BlurImage: React.FC<BlurImageProps> = ({ blurSrc, src, className }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setIsLoaded(false);
    const image = new Image();
    image.onload = () => setIsLoaded(true);
    image.src = src;
  }, []);
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn("transition duration-200 w-full h-full", {
          "blur-md": !isLoaded,
        })}
      >
        {isLoaded && <NextImage layout="fill" src={src} alt="article_image" />}
        {!isLoaded && (
          <img
            src={blurSrc}
            alt="blur_image"
            className="w-full h-full absolute inset-0"
          />
        )}
      </div>
    </div>
  );
};

export default BlurImage;
