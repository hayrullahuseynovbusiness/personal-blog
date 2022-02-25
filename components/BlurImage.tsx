import { useEffect, useState } from "react";
import cn from "classnames";
interface BlurImageProps {
  src: string;
  blurSrc: string;
  width?: string | number;
  height?: string | number;
  className: string;
}
const BlurImage: React.FC<BlurImageProps> = ({ blurSrc, src, className }) => {
  const [imageSrc, setImageSrc] = useState<string>(blurSrc);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setIsLoaded(false);
    const image = new Image();
    image.onload = () => setIsLoaded(true);
    image.src = src;
  }, []);
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={isLoaded ? src : blurSrc}
        alt="article_image"
        className={cn(
          "transition duration-150 absolute max-w-full max-h-full min-w-full min-h-full w-full aspect-auto h-full inset-0",
          {
            "blur-md": !isLoaded,
          }
        )}
      />
    </div>
  );
};

export default BlurImage;
