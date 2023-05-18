const Loader = () => {
  return (
    <div id="spinner"
      className="absolute z-30 flex items-center justify-center w-full min-h-screen m-auto overflow-hidden bg-opacity-100 bg-blue-50 dark:bg-gray-900">
      <div id="loader" className="relative grid grid-cols-3 gap-0.5 w-24 h-24">
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
        <div id="subloader" className="relative w-full h-full bg-blue-600/80"></div>
      </div>
    </div>
  );
}

export default Loader;