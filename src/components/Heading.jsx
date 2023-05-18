import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="fixed top-0 pt-2 z-30 flex h-20 w-full flex-1 flex-row bg-gray-100 dark:bg-gray-900">
      <div className="flex grow flex-col md:ml-44 ml-16 sm:ml-24 xl:ml-48">
        <h1
          className="mb-1 text-center text-lg font-semibold text-gray-900 dark:text-white sm:mb-2 sm:text-2xl md:text-xl lg:text-2xl">
          Đoàn trường Lương Thế Vinh</h1>
        <h2 className="text-md md:text-normal text-center font-normal text-gray-500 dark:text-white/50 sm:text-lg">Những
          câu chuyện chưa kể</h2>
      </div>
      <div className="flex-0 flex h-full xl:w-44 md:w-40 w-12 sm:w-20 items-center justify-end mr-4">
        <Link to="/create"
          className="inline-flex items-center sm:px-3 sm:py-2 p-2 font-medium text-sm text-center text-white bg-green-700 rounded-md hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="w-6 h-6 inline mr-0 md:mr-2 lg:md-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p className="hidden md:inline lg:inline">Thêm bài viết</p>
        </Link>
      </div>
    </div>
  );
}

export default Heading;