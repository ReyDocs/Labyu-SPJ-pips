import React from "react";

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] text-center p-4 sm:p-8 bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-4">
          To: My SPJ pips
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Hi guys. I have been thinking of ways to give something to you guys
          since we're going to go our separate ways for real this time. I've
          decided to create this small website containing a message for each of
          you and with a corresponding song that kinda reminds me of each and
          every one of you. Some may not be 100% accurate hehe. Goodluck sa
          ating college and future lives!!
        </p>
        <div className="w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://res.cloudinary.com/dqxwpxame/image/upload/v1751764890/357070966_299139499195106_4093967020498687689_n_qvpzna.jpg"
            alt="Class Memories Banner"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x300/cccccc/000000?text=Banner+Image+Missing";
            }}
          />
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setCurrentPage("classmates")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-xl"
          >
            Open Your Letter
          </button>
          <button
            onClick={() => setCurrentPage("gallery")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-xl"
          >
            Browse Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
