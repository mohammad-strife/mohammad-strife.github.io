import React from "react";

const ConnectionModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300 ease-out">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl transform transition-transform duration-300 ease-out scale-95">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">
          خطا در اتصال به اینترنت
        </h2>
        <p className="text-gray-700 mb-6">
          اینترنت را برسی کنید سپس دوباره امتحان کنید
        </p>
      </div>
    </div>
  );
};

export default ConnectionModal;
