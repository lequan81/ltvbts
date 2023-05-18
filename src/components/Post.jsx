import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Loader from "./Loader";

const Post = () => {
  let { postId } = useParams()
  console.log(postId)
  postId = Number(postId)

  const { isPending, data: posts } = useFetch(`https://obvious-tested-walk.glitch.me/blogs/${postId}`)
  const { data: postRelative } = useFetch(`https://obvious-tested-walk.glitch.me/blogs?_start=${postId + 1}&_end=${postId + 4}`)
  console.log(posts)

  const goback = () => {
    window.history.go(-1)
  }
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {isPending && <Loader />}
      {posts &&
        <div id={`post-${postId}`} className="flex flex-col w-full min-h-screen">
          <div className="pt-4 pb-12 bg-white dark:bg-gray-900 h-full flex grow">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
              <article
                className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                  <h1
                    className="mb-3 text-xl md:text-2xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
                    {posts.title}
                  </h1>
                  <address className="flex items-center mb-6 not-italic">
                    <div className="flex items-center flex-row w-full gap-x-4 max-w-lg">
                      <a href="#" rel="author" className="text-md font-semibold text-gray-900 dark:text-white">
                        <span className="text-gray-600 dark:text-white/50">Tác giả: </span>
                        {posts.nickname}
                      </a>
                      <p className="text-base font-base text-gray-500 dark:text-gray-400">
                        {posts.date}
                      </p>
                    </div>
                  </address>
                </header>
                <div className="post-body lead mt-2 indent-4 text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: posts.body }}>
                </div>
                <p className="lead my-6 md:my-0 md:mt-6 w-2/3 text-gray-600 dark:text-white/50">
                  <a href="../404.html">Link các bức ảnh màn hình được lưu trữ
                    <span className="italic hover:underline text-blue-700 hover:text-blue-800">tại đây</span>
                  </a>
                </p>
                <span className="font-medium sm:font-semibold text-base sm:text-xl text-indigo-700 lg:text-lg">
                  {posts.hashtag}
                </span>
                <div className="flex justify-end items-start -mt-16 md:-mt-10">
                  <button onClick={goback} className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 outline-none dark:focus-blue-500 font-medium rounded-lg text-md px-3 py-2 text-center inline-flex items-center justify-end"
                  >
                    Quay lại
                  </button>
                </div>
              </article>
            </div>
          </div>

          <aside aria-label="Related articles" className="py-3 bg-gray-50 dark:bg-gray-800 h-full">
            <div className="px-4 mx-auto max-w-screen-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Bài viết cùng chủ đề</h2>
              <div className="grid gap-12 grid-cols-1 place-items-center mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {postRelative !== null && postRelative.map((postsRel, index) => {
                  return (
                    <article key={index} className="max-w-xs cursor-pointer">
                      <a href={postsRel.id}>
                        <img src="https://source.unsplash.com/random/800x800/?city-lights"
                          className="mb-4 rounded h-40 w-full border-none object-cover" alt="..." />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white line-clamp-1">
                        <a href="#">{postsRel.title}</a>
                      </h2>
                      <div className="mb-4 text-gray-500 dark:text-white/50 line-clamp-2" dangerouslySetInnerHTML={{ __html: postsRel.body }}>
                      </div>
                      <div className="inline-flex justify-start items-center">
                        <a className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 outline-none dark:focus-blue-500 font-medium rounded-md text-base px-2.5 py-1.5 text-center inline-flex items-center justify-end"
                          href={postsRel.id}>
                          Hít tiếp
                        </a>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>}
    </div>
  );
}

export default Post;