import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1f51] px-6">
      <div className="text-center">
        {/* Error Number */}
        <h1 className="text-[120px] font-extrabold text-[#ff3e54] drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#f7f7f7] mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[#d1d5db] mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg font-semibold shadow-md transition
              bg-[#ff3e54] text-white hover:bg-[#e23548]"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
