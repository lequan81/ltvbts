import { useContext } from "react";
import Blog from "../components/Blog";
import AppContext from '../hook/context';

const BlogList = () => {
  const { posts } = useContext(AppContext)
  return (
    <>
      {posts.map((post, index) => {
        return (<Blog key={index} title={post.title} subtitle={post.body} path={`/posts/${post.id}`} />)
      })}
    </>
  );
}

export default BlogList;