import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin h-32 w-32 rounded-full border-t-4 border-red-500 border-solid"></div>
    </div>
  );
};

export default Loader;
