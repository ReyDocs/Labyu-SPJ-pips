import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ClassmatesPage from "./components/ClassmatesPage";
import GalleryPage from "./components/GalleryPage";
import LoadingScreen from "./components/LoadingScreen";
import classmates from "./data/classmates";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedClassmate, setSelectedClassmate] = useState(null);

  const handleLoadingDone = useCallback(() => setLoading(false), []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "classmates":
        return (
          <ClassmatesPage
            classmates={classmates}
            selectedClassmate={selectedClassmate}
            setSelectedClassmate={setSelectedClassmate}
          />
        );
      case "gallery":
        return <GalleryPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadingDone} />}
      <div style={{ minHeight: "100vh", background: "#f5f3ff" }}>
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSelectedClassmate={setSelectedClassmate}
        />
        <main>{renderPage()}</main>
      </div>
    </>
  );
};

export default App;
