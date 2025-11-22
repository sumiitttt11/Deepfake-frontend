// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error(
//       "404 Error: User attempted to access non-existent route:",
//       location.pathname
//     );
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">404</h1>
//         <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
//         <a href="/" className="text-blue-500 hover:text-blue-700 underline">
//           Return to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative px-6">

      {/* Floating Glowing Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      ></motion.div>

      {/* Animated 404 Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="text-8xl font-extrabold tracking-widest mb-4 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Shake animation for "Page not found" */}
      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl text-gray-300 mb-8"
      >
        Oops! Page not found.
      </motion.p>

      {/* Animated Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-lg font-medium shadow-lg"
      >
        Return to Home
      </motion.a>

      {/* Wavy line animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-10 rounded-full"
      />
    </div>
  );
};

export default NotFound;
