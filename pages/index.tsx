import Article from "components/Article";
import BlurImage from "components/BlurImage";
import SearchBar from "components/SearchBar";
import SEO from "components/SEO";
import { getAllPosts } from "utils";

const Home = ({ posts }) => {
  return (
    <div>
      <SEO />
      <div className="pt-10 pb-6 prose prose-h1:m-0 prose-p:m-0 prose-p:mt-1">
        <h1>Hayrulla Huseynov</h1>
        <p>Web Developer based in Turkmenistan.</p>
      </div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {posts?.allBlogposts?.map((post) => (
          <Article
            key={post.id}
            src={post.image}
            blurSrc={`${post.image}&w=100`}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  const posts = await getAllPosts(query.keyword);
  return {
    props: { posts: posts },
  };
};
