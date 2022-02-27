import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import BlurImage from "components/BlurImage";
import SEO from "components/SEO";
import md from "markdown-it";
import { getAllPosts, getPostBySlug } from "utils";
const BlogPost = ({ post }) => {
  return (
    <div className="pt-10 w-full">
      <div className="flex items-center justify-start">
        <Link href="/">
          <a className="p-2 rounded-full bg-neutral-900/75 text-white">
            <ChevronLeftIcon className="w-5 h-5" />
          </a>
        </Link>
      </div>
      <SEO title={post?.title} />
      <div className="prose py-4">
        <h1>{post?.title}</h1>
      </div>
      <BlurImage
        src={post?.image}
        blurSrc={`${post?.image}&w=100`}
        className="w-full h-[300px] sm:h-[500px] rounded-lg"
      />
      <div className="pt-4 prose w-full">
        <div dangerouslySetInnerHTML={{ __html: md().render(post?.content) }} />
      </div>
    </div>
  );
};

export default BlogPost;

export const getStaticPaths = async ({}) => {
  const posts = await getAllPosts();
  const paths = posts?.allBlogposts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blogPost = await getPostBySlug(params.slug);
  return {
    props: {
      post: blogPost.blogpost,
    },
    revalidate: 1000,
  };
};
