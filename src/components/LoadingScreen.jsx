import React, { useEffect, useState } from "react";

const GROUP_PHOTO =
  "https://res.cloudinary.com/dqxwpxame/image/upload/v1751764890/357070966_299139499195106_4093967020498687689_n_qvpzna.jpg";

const LoadingScreen = ({ onDone }) => {
  const [stage, setStage] = useState("entering"); // entering | developed | fading

  useEffect(() => {
    const t1 = setTimeout(() => setStage("developed"), 1200);
    const t2 = setTimeout(() => setStage("fading"), 2500);
    const t3 = setTimeout(() => onDone(), 3100);
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
        transition: "opacity 1s ease",
      }}
    >
      {/* Polaroid */}
      <div
        style={{
          background: "#fff",
          padding: "14px 14px 52px 14px",
          borderRadius: "4px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.1)",
          width: "260px",
          transform:
            stage === "entering"
              ? "translateY(50px) rotate(-4deg) scale(0.85)"
              : "translateY(0px) rotate(-2deg) scale(1)",
          transition: "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
        }}
      >
        {/* Photo area */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1",
            background: "#d1d5db",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Grey base — visible while developing */}
          <div
            style={{ width: "100%", height: "100%", background: "#d1d5db" }}
          />

          {/* Photo wipes in from left */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              clipPath:
                stage === "entering" ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
              transition: "clip-path 1.1s ease 0.4s",
            }}
          >
            <img
              src={GROUP_PHOTO}
              alt="SPJ class"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Shine sweep */}
          {stage === "developed" && (
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                animation: "shine 1s ease forwards",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* Polaroid caption */}
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', 'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "#6b7280",
              letterSpacing: "0.05em",
              opacity: stage === "developed" ? 1 : 0,
              transition: "opacity 0.5s ease 0.9s",
              margin: 0,
            }}
          >
            loading memories...
          </p>
        </div>

        {/* Tape */}
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "52px",
            height: "20px",
            background: "rgba(167, 139, 250, 0.45)",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Site title */}
      <div
        style={{
          marginTop: "2.25rem",
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
            fontSize: "1.15rem",
            color: "#7c3aed",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          SPJ Pips 💌
        </p>
      </div>

      <style>{`
        @keyframes shine {
          0%   { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%)  translateY(100%)  rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
