const ErrorPage = () => {
  const goback = () => {
    window.location.replace("/");
  }
  return (
    <section className="flex items-center min-h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-xl text-center">
          <h2 className="mb-5 font-extrabold text-8xl dark:text-white/90">
            <span className="sr-only">Oops!</span>
            404
          </h2>
          <p className="mb-8 dark:text-gray-400 text-2xl">Not Found</p>
          <p className="mb-8 text-2xl font-semibold md:text-xl">Sorry, an unexpected error has occurred.</p>
          <button onClick={goback} className="px-8 py-3 font-semibold text-lg rounded dark:bg-blue-400 dark:text-gray-900">Back to Homepage</button>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;