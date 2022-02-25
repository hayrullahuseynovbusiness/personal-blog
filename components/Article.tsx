import Link from "next/link";
import BlurImage from "./BlurImage";

interface ArticleProps {
  slug?: string;
  src?: string;
  blurSrc?: string;
  title?: string;
}
const Article: React.FC<ArticleProps> = ({ slug, blurSrc, src, title }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <BlurImage
          className="w-full h-56 rounded-lg"
          src={src}
          blurSrc={blurSrc}
        />
        <p className="mt-2 text-lg font-medium">{title}</p>
      </a>
    </Link>
  );
};

export default Article;
