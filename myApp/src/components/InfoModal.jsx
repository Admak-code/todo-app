import React from "react";

function InfoModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-centerbackdrop-blur-sm"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-11/12 max-w-md text-center transform transition-all scale-100 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          🚀 Welcome to the To-Do App
        </h2>

        <p className="text-lg font-semibold text-gray-700 mb-2">
          ✨ Functionalities:
        </p>
        <ul className="text-center list-none list-inside space-y-2 text-gray-600">
          <li>✅ Add, delete, and edit tasks</li>
          <li>✅ Mark tasks as completed</li>
        </ul>

        <p className="text-lg font-semibold text-gray-700 mt-4">
          🛠 Tools Used:
        </p>
        <p className="text-gray-600 mb-2">
          React.js, JavaScript, HTML, Tailwind CSS
        </p>

        <p className="text-lg font-semibold text-gray-700">
          🎯 Target Audience:
        </p>
        <p className="text-gray-600 mb-6">
          Anyone who wants to stay organized – students, professionals, and
          teams.
        </p>

        <button
          onClick={onClose}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-md hover:shadow-xl transform transition hover:scale-105 hover:from-blue-600 hover:to-indigo-700"
        >
          Got It!
        </button>
      </div>
    </div>
  );
}

export default InfoModal;
