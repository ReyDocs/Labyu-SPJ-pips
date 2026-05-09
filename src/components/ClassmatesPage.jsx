import React, { useState } from "react";

const ClassmatesPage = ({
  classmates,
  selectedClassmate,
  setSelectedClassmate,
}) => {
  const [search, setSearch] = useState("");

  const filtered = classmates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (selectedClassmate) {
    return (
      <DetailView
        classmate={selectedClassmate}
        onBack={() => setSelectedClassmate(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 sm:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-2 rounded-lg p-2 bg-white shadow-md inline-block">
          To: My SPJ Pips
        </h1>
        <p className="text-lg text-gray-600">
          Sorry sa Pics, wala akong mga solo pics ninyo hehehe
        </p>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* Search bar */}
        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-full border border-purple-200 bg-purple-50 text-gray-700 text-sm focus:outline-none focus:border-purple-400 transition"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {search && (
          <p className="text-sm text-gray-500 text-center mb-4">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "
            {search}"
          </p>
        )}

        {filtered.length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            No classmates found with that name.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((classmate) => (
              <li
                key={classmate.id}
                className="bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer flex items-center space-x-4"
                onClick={() => setSelectedClassmate(classmate)}
              >
                <img
                  src={classmate.picture}
                  alt={classmate.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-300 flex-shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/64x64/cccccc/000000?text=${classmate.name[0]}`;
                  }}
                />
                <div className="overflow-hidden">
                  <h3 className="text-lg font-semibold text-purple-700 truncate">
                    {classmate.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 truncate">
                    🎵{" "}
                    <span className="font-semibold">{classmate.songTitle}</span>{" "}
                    by <span className="italic">{classmate.songArtist}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

const DetailView = ({ classmate, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 sm:p-8">
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="space-y-6">
          <button
            onClick={onBack}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            ← Back to Classmates
          </button>

          <div className="flex flex-col items-center mb-6">
            <img
              src={classmate.picture}
              alt={classmate.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-400 shadow-lg mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/100x100/cccccc/000000?text=${classmate.name[0]}`;
              }}
            />
            <h2 className="text-3xl font-bold text-purple-700">
              {classmate.name}
            </h2>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              My Message:
            </h3>
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {classmate.message}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Their Song:
            </h3>
            <p className="text-gray-800">
              <span className="font-bold">{classmate.songTitle}</span> by{" "}
              <span className="italic">{classmate.songArtist}</span>
            </p>
            {classmate.songReason && (
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Reason:</span>{" "}
                {classmate.songReason}
              </p>
            )}
            {classmate.songLink && classmate.songLink !== "#" && (
              <a
                href={classmate.songLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Listen Here ↗
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClassmatesPage;
