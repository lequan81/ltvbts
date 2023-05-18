import { ToastIcon, Toaster, resolveValue } from "react-hot-toast";

const Notify = () => {
  return (

    <Toaster position="top-center">
      {(t) => (
        <div className="transform p-4 flex bg-white dark:bg-gray-800 rounded shadow-lg">
          <ToastIcon toast={t} />
          <p className="px-2 dark:text-white">{resolveValue(t.message)}</p>
        </div>
      )}
    </Toaster>
  );
}

export default Notify