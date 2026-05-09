import React, { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../lib/supabase";
import staticImages from "../data/gallery";

const CLOUD_NAME = "dqxwpxame";
const UPLOAD_PRESET = "gallery_lel";
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

const GalleryPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("photos");
  const [lightbox, setLightbox] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("uploaded_at", { ascending: true });

    if (error) {
      console.error("Error fetching items:", error.message);
      setItems(staticImages.map((i) => ({ ...i, type: "image" })));
    } else if (data.length === 0) {
      await seedStaticImages();
    } else {
      setItems(data);
    }
    setLoading(false);
  };

  const seedStaticImages = async () => {
    const rows = staticImages.map((img) => ({
      src: img.src,
      alt: img.alt,
      type: "image",
    }));
    const { data, error } = await supabase
      .from("gallery_images")
      .insert(rows)
      .select();
    if (error) {
      console.error("Seed error:", error.message);
      setItems(staticImages.map((i) => ({ ...i, type: "image" })));
    } else {
      setItems(data);
    }
  };

  const photos = items.filter((i) => i.type === "image");
  const videos = items.filter((i) => i.type === "video");
  const activeItems = activeTab === "photos" ? photos : videos;

  const prev = useCallback(() => {
    setLightbox((i) => (i - 1 + activeItems.length) % activeItems.length);
  }, [activeItems.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i + 1) % activeItems.length);
  }, [activeItems.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow =
      lightbox !== null || showUpload ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, showUpload]);

  const handleUploadSuccess = (newItem) => {
    setItems((prev) => [...prev, newItem]);
    setShowUpload(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 sm:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-2 rounded-lg p-2 bg-white shadow-md inline-block">
          Class Gallery 📸
        </h1>
        <p className="text-lg text-gray-600">
          A collection of photos and videos from our JHS years
          <span className="block text-sm">(may or may not have epic pics)</span>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Click any item to view full size · Use ← → to navigate
        </p>
        <button
          onClick={() => setShowUpload(true)}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          + Add {activeTab === "photos" ? "a Photo" : "a Video"}
        </button>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["photos", "videos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition duration-200 border-none cursor-pointer capitalize
                ${
                  activeTab === tab
                    ? "bg-purple-600 text-white shadow"
                    : "bg-purple-50 text-purple-500 hover:bg-purple-100"
                }`}
            >
              {tab === "photos" ? `📷 Photos` : `🎬 Videos`}
              <span
                className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab ? "bg-purple-500" : "bg-purple-200 text-purple-600"}`}
              >
                {tab === "photos" ? photos.length : videos.length}
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 text-purple-400">
            <div
              className="w-10 h-10 border-4 border-purple-200 border-t-purple-500 rounded-full mb-4"
              style={{ animation: "spin 0.8s linear infinite" }}
            />
            <p className="text-sm">Loading gallery...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : activeItems.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">
              {activeTab === "photos" ? "📷" : "🎬"}
            </p>
            <p className="font-medium">No {activeTab} yet.</p>
            <p className="text-sm mt-1">Be the first to add one!</p>
          </div>
        ) : (
          <div style={{ columns: "auto 180px", columnGap: "0.75rem" }}>
            {activeItems.map((item, index) =>
              item.type === "video" ? (
                <VideoTile
                  key={item.id}
                  item={item}
                  onClick={() => setLightbox(index)}
                />
              ) : (
                <GalleryTile
                  key={item.id}
                  image={item}
                  onClick={() => setLightbox(index)}
                />
              ),
            )}
          </div>
        )}
      </main>

      {lightbox !== null && (
        <Lightbox
          item={activeItems[lightbox]}
          index={lightbox}
          total={activeItems.length}
          onClose={() => setLightbox(null)}
          onPrev={prev}
          onNext={next}
        />
      )}

      {showUpload && (
        <UploadModal
          defaultType={activeTab === "videos" ? "video" : "image"}
          onClose={() => setShowUpload(false)}
          onSuccess={handleUploadSuccess}
        />
      )}
    </div>
  );
};

// ─── Photo Tile ───────────────────────────────────────────────────────────────

const GalleryTile = ({ image, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block w-full mb-3 rounded-lg overflow-hidden cursor-pointer transition duration-300"
      style={{
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.18)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-auto block transition duration-300"
        style={{ filter: hovered ? "brightness(0.8)" : "brightness(1)" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x300/cccccc/000000?text=Photo";
        }}
      />
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🔍</span>
        </div>
      )}
    </div>
  );
};

// ─── Video Tile ───────────────────────────────────────────────────────────────

const VideoTile = ({ item, onClick }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block w-full mb-3 rounded-lg overflow-hidden cursor-pointer transition duration-300"
      style={{
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.18)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-auto block"
      />
      {/* Play icon overlay when not hovered */}
      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <div className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
            <span style={{ fontSize: "1rem", marginLeft: "2px" }}>▶</span>
          </div>
        </div>
      )}
      {/* Caption on hover */}
      {hovered && item.alt && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-xs px-2 py-1 truncate">
          {item.alt}
        </div>
      )}
    </div>
  );
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────

const Lightbox = ({ item, index, total, onClose, onPrev, onNext }) => {
  const isVideo = item.type === "video";

  return (
    <div
      className="lightbox-overlay fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-sm opacity-60">
        {index + 1} / {total}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white text-2xl opacity-70 hover:opacity-100 bg-transparent border-none cursor-pointer transition"
      >
        ✕
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center"
        style={{ maxWidth: "min(90vw, 780px)", maxHeight: "80vh" }}
      >
        {isVideo ? (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-w-full rounded-lg block"
            style={{ maxHeight: "78vh" }}
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full rounded-lg block"
            style={{ maxHeight: "78vh", objectFit: "contain" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/333/aaa?text=Photo+Missing";
            }}
          />
        )}
      </div>

      <p
        onClick={(e) => e.stopPropagation()}
        className="text-white text-sm opacity-50 mt-3 italic text-center"
      >
        {item.alt}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center border border-white border-opacity-30 bg-white bg-opacity-10 hover:bg-opacity-20 cursor-pointer transition"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center border border-white border-opacity-30 bg-white bg-opacity-10 hover:bg-opacity-20 cursor-pointer transition"
      >
        →
      </button>
    </div>
  );
};

// ─── Upload Modal ─────────────────────────────────────────────────────────────

const UploadModal = ({ defaultType, onClose, onSuccess }) => {
  const [uploadType, setUploadType] = useState(defaultType);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const acceptedTypes = uploadType === "image" ? "image/*" : "video/*";
  const maxSize = uploadType === "image" ? 10 * 1024 * 1024 : MAX_VIDEO_SIZE;
  const maxSizeLabel = uploadType === "image" ? "10MB" : "50MB";

  const handleFile = (selected) => {
    if (!selected) return;
    const isImage = selected.type.startsWith("image/");
    const isVideo = selected.type.startsWith("video/");
    if (uploadType === "image" && !isImage) {
      setErrorMsg("Please select an image file (JPG, PNG, GIF, etc.)");
      return;
    }
    if (uploadType === "video" && !isVideo) {
      setErrorMsg("Please select a video file (MP4, MOV, etc.)");
      return;
    }
    if (selected.size > maxSize) {
      setErrorMsg(`File is too large. Maximum size is ${maxSizeLabel}.`);
      return;
    }
    setErrorMsg("");
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setCaption("");
    setStatus("idle");
    setErrorMsg("");
  };

  // Reset preview when switching type
  const handleTypeSwitch = (type) => {
    setUploadType(type);
    reset();
  };

  const handleUpload = async () => {
    if (!file) return;
    setStatus("uploading");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const endpoint =
        uploadType === "image"
          ? `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
          : `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;

      const cloudRes = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      if (!cloudRes.ok) {
        const err = await cloudRes.json();
        throw new Error(err.error?.message || "Cloudinary upload failed");
      }

      const cloudData = await cloudRes.json();
      const itemAlt =
        caption.trim() ||
        (uploadType === "image" ? "SPJ class photo" : "SPJ class video");

      const { data, error } = await supabase
        .from("gallery_images")
        .insert({ src: cloudData.secure_url, alt: itemAlt, type: uploadType })
        .select()
        .single();

      if (error) throw new Error(error.message);

      setStatus("success");
      setTimeout(() => onSuccess(data), 800);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-purple-700">Add to Gallery</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Type switcher */}
        <div className="flex gap-2 mb-5">
          {["image", "video"].map((type) => (
            <button
              key={type}
              onClick={() => handleTypeSwitch(type)}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition duration-200 border-none cursor-pointer
                ${
                  uploadType === type
                    ? "bg-purple-600 text-white"
                    : "bg-purple-50 text-purple-500 hover:bg-purple-100"
                }`}
            >
              {type === "image" ? "📷 Photo" : "🎬 Video"}
            </button>
          ))}
        </div>

        {/* Drop zone */}
        {!preview ? (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById("upload-input").click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition duration-200
              ${dragOver ? "border-purple-500 bg-purple-50" : "border-purple-200 hover:border-purple-400 hover:bg-purple-50"}`}
          >
            <div className="text-4xl mb-3">
              {uploadType === "image" ? "📷" : "🎬"}
            </div>
            <p className="text-gray-600 font-medium">
              Drag & drop a {uploadType} here
            </p>
            <p className="text-gray-400 text-sm mt-1">or click to browse</p>
            <p className="text-gray-300 text-xs mt-2">
              {uploadType === "image" ? "JPG, PNG, GIF" : "MP4, MOV, AVI"} · Max{" "}
              {maxSizeLabel}
            </p>
            <input
              id="upload-input"
              type="file"
              accept={acceptedTypes}
              className="hidden"
              onChange={(e) => handleFile(e.target.files[0])}
            />
          </div>
        ) : (
          <div className="relative mb-4">
            {uploadType === "image" ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-56 object-cover rounded-xl"
              />
            ) : (
              <video
                src={preview}
                controls
                className="w-full max-h-56 rounded-xl"
              />
            )}
            <button
              onClick={reset}
              className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm border-none cursor-pointer transition"
            >
              ✕
            </button>
          </div>
        )}

        {/* Caption */}
        {preview && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Caption{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              placeholder={
                uploadType === "image"
                  ? "e.g. SPJ graduation day 2024"
                  : "e.g. Pep rally 2023"
              }
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={80}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-purple-400 transition"
            />
          </div>
        )}

        {errorMsg && <p className="text-red-500 text-sm mt-3">{errorMsg}</p>}
        {status === "success" && (
          <p className="text-green-600 text-sm mt-3 font-medium">
            ✓ {uploadType === "image" ? "Photo" : "Video"} added to gallery!
          </p>
        )}

        {preview && status !== "success" && (
          <button
            onClick={handleUpload}
            disabled={status === "uploading"}
            className={`w-full mt-5 py-2.5 rounded-full font-bold text-white transition duration-200
              ${
                status === "uploading"
                  ? "bg-purple-300 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 cursor-pointer"
              }`}
          >
            {status === "uploading"
              ? "Uploading..."
              : `Upload ${uploadType === "image" ? "Photo" : "Video"}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
