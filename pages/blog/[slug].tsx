import BlurImage from "components/BlurImage";
import SEO from "components/SEO";
import md from "markdown-it";
import { getAllPosts, getPostBySlug } from "utils";
const BlogPost = ({ post }) => {
  return (
    <div className="pt-10 w-full">
      <SEO title={post?.title} />
      <div className="prose pb-4">
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
