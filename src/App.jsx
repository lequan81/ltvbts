import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Heading from './components/Heading'
import Loader from './components/Loader'
import Post from './components/Post'
import AppContext from './hook/context'
import useFetch from './hook/useFetch'
import BlogList from './pages/BlogList'
import ErrorPage from './pages/error-page'

function App() {
  // https://obvious-tested-walk.glitch.me/blogs
  const { isPending, data: posts } = useFetch("https://obvious-tested-walk.glitch.me/blogs")
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <>
              {isPending && <Loader />}
              <AppContext.Provider value={{ posts }}>
                <div className="bg-gray-100 dark:bg-gray-900 min-h-screen w-full overflow-hidden">
                  <div className="flex w-full items-center justify-between">
                    <Heading />
                    <div className="h-full pb-8 sm:pb-20 mt-20 grow flex justify-center" id="content">
                      <div
                        className="mt-2 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-0 gap-y-4 sm:gap-x-6 md:gap-x-8 max-w-full mx-auto pl-6 pr-6">
                        {posts && <BlogList />}
                      </div>
                    </div>
                  </div>
                </div>
              </AppContext.Provider>
            </>
          } />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
