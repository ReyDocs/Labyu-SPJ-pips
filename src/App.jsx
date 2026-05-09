import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ClassmatesPage from "./components/ClassmatesPage";
import GalleryPage from "./components/GalleryPage";
import classmates from "./data/classmates";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedClassmate, setSelectedClassmate] = useState(null);

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
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream-50)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedClassmate={setSelectedClassmate}
      />
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;
