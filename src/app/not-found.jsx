import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">
          404
        </h1>
        <div className="bg-white px-2 text-sm rounded rotate-12 absolute -mt-20 ml-24 border border-indigo-600 text-indigo-600">
          Page Not Found
        </div>

        <p className="text-gray-500 mt-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}


export default ErrorPage