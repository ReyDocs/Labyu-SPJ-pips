import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onDone }) => {
  const [stage, setStage] = useState("entering"); // entering | developed | fading

  useEffect(() => {
    // Stage 1 — polaroid slides in and "develops"
    const t1 = setTimeout(() => setStage("developed"), 1200);
    // Stage 2 — fade out
    const t2 = setTimeout(() => setStage("fading"), 2200);
    // Stage 3 — tell App we're done
    const t3 = setTimeout(() => onDone(), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: stage === "fading" ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* Polaroid */}
      <div
        style={{
          background: "#fff",
          padding: "12px 12px 40px 12px",
          borderRadius: "4px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1)",
          width: "180px",
          transform:
            stage === "entering"
              ? "translateY(40px) rotate(-4deg) scale(0.85)"
              : "translateY(0px) rotate(-2deg) scale(1)",
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
        }}
      >
        {/* Photo area */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1",
            background:
              stage === "entering"
                ? "#d1d5db"
                : "linear-gradient(135deg, #7c3aed, #3b82f6)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
            transition: "background 0.9s ease 0.4s",
          }}
        >
          {/* Develop wipe effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              clipPath:
                stage === "entering" ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
              transition: "clip-path 0.9s ease 0.4s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>📸</span>
          </div>

          {/* Shine overlay */}
          {stage === "developed" && (
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                animation: "shine 1s ease forwards",
              }}
            />
          )}
        </div>

        {/* Polaroid caption */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', 'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "#6b7280",
              letterSpacing: "0.05em",
              opacity: stage === "developed" ? 1 : 0,
              transition: "opacity 0.5s ease 0.9s",
            }}
          >
            loading memories...
          </p>
        </div>

        {/* Polaroid tape */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "40px",
            height: "18px",
            background: "rgba(167, 139, 250, 0.4)",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Title below */}
      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          opacity: stage === "developed" ? 1 : 0,
          transform:
            stage === "developed" ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.5s ease 0.8s",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#7c3aed",
            letterSpacing: "0.05em",
          }}
        >
          SPJ Pips 💌
        </p>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
