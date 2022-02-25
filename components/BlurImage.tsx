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
      <NextImage
        layout="fill"
        src={isLoaded ? src : blurSrc}
        alt="article_image"
        className={cn({
          "blur-md": !isLoaded,
        })}
      />
    </div>
  );
};

export default BlurImage;
