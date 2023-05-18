import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Blog = ({ title, subtitle, path, imgUrl = "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" }) => {
  return (
    <div className="blog h-[540px] sm:h-4/5 flex max-w-lg mx-auto cursor-pointer">
      <div href={path}>
        <div
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-xs mb-5 py-2.5 md:py-2 items-center transform transition duration-300 hover:scale-[1.02] hover:shadow-md">
          <Link to={path}>
            <div className="flex justify-center h-3/6 md:h-2/5 lg:h-1/2">
              <div className="w-full px-2">
                <img src={imgUrl}
                  className="rounded w-full h-full align-middle border-none object-cover" />
              </div>
            </div>
          </Link>
          <div className="flex flex-col justify-evenly grow gap-1 md:h-3/5 lg:h-1/2 h-auto mt-2">
            <Link to={path}>
              <div className="px-2 flex grow flex-col lg:gap-2">
                <div className="h-10 md:h-16">
                  <h5
                    className="text-gray-900 font-bold text-xl md:text-xl lg:text-2xl tracking-tight dark:text-white line-clamp-1 md:line-clamp-2 lg:line-clamp-2">
                    {title}
                  </h5>
                </div>
                <div className="h-20 flex items-start">
                  <div className="font-normal text-gray-700 break-normal dark:text-gray-200 line-clamp-3" dangerouslySetInnerHTML={{ __html: subtitle }}>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={path} className="p-2 lg:pt-1 lg:pb-2.5 flex justify-start items-center">
              <button className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 outline-none dark:focus-blue-500 font-medium rounded-lg text-md px-3 py-2 text-center inline-flex items-center justify-end">
                Hít thêm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  path: PropTypes.string,
  imgUrl: PropTypes.string
};

export default Blog;