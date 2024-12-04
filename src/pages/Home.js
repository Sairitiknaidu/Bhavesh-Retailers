import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  /*Functionality implementation */
  const [templates, setTemplates] = useState([]);
  const [videos, setVideos] = useState([]);
  const [aiPrompt, setAiPrompt] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  useEffect(() => {
    // Fetch templates
    axios.get("/api/templates").then((response) => setTemplates(response.data));
    // Fetch videos
    axios.get("/api/videos").then((response) => setVideos(response.data));
  }, []);

  const handleGenerateTemplate = async () => {
    try {
      const response = await axios.post("/api/ai/generate-template", {
        prompt: aiPrompt,
      });
      setTemplates([...templates, response.data]);
    } catch (error) {
      console.error("Error generating template:", error);
    }
  };

  const handleGenerateVideo = async () => {
    try {
      const response = await axios.post("/api/ai/generate-video", {
        description: videoDescription,
      });
      setVideos([...videos, response.data]);
    } catch (error) {
      console.error("Error generating video:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#004aad",
          padding: "10px 20px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Bhavesh Retailers
        </div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "15px",
          }}
        >
          <li>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/demo"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Demo
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/reseller-panel"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Reseller Panel
            </Link>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <main>
        <section>
          <h2>Premade Templates</h2>
          <div>
            {templates.map((template, index) => (
              <div key={index}>
                <h3>{template.name}</h3>
                <p>{template.month}</p>
                <p>Options: {template.customizationOptions.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>AI-Based Videos</h2>
          <div>
            {videos.map((video, index) => (
              <div key={index}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* AI Implemention */}

      <section>
        <h2>Generate AI Template</h2>
        <input
          type="text"
          placeholder="Enter prompt for template"
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
        />
        <button onClick={handleGenerateTemplate}>Generate Template</button>
      </section>

      <section>
        <h2>Generate AI Video</h2>
        <input
          type="text"
          placeholder="Enter description for video"
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
        />
        <button onClick={handleGenerateVideo}>Generate Video</button>
      </section>

      <section>
        <h2>Premade Templates</h2>
        <div>
          {templates.map((template, index) => (
            <div key={index}>
              <h3>{template.name}</h3>
              <img src={template.imageUrl} alt={template.name} />
              <p>{template.month}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>AI-Based Videos</h2>
        <div>
          {videos.map((video, index) => (
            <div key={index}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#004aad",
          color: "#fff",
          padding: "10px 20px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Bhavesh Retailers. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
