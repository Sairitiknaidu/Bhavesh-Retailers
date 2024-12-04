// frontend/src/pages/Demo.js
import React, { useState } from "react";
import "./Demo.css"; // Ensure you create this CSS file for styling
import demoCardImage from "../assets/demo-card.png"; // Make sure you have an image in this path

const Demo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the demo card creation logic, e.g., submit to an API
    console.log({ name, email, phone, title });
  };

  return (
    <div className="container demo-container">
      <header className="demo-header">
        <h1>Create a Free Demo Card</h1>
        <p>Fill in the details below to create your demo card.</p>
      </header>

      <form onSubmit={handleSubmit} className="demo-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="input-field"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="input-field"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
          className="input-field"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
          required
          className="input-field"
        />
        <button type="submit" className="button">
          Create Demo Card
        </button>
      </form>

      <div className="demo-preview">
        <h2>Demo Card Preview</h2>
        <div className="demo-card">
          <img
            src={demoCardImage}
            alt="Demo Card"
            className="demo-card-image"
          />
          <div className="demo-card-details">
            <h3>{name ? name : "Your Name"}</h3>
            <p>{title ? title : "Your Title"}</p>
            <p>{email ? email : "youremail@example.com"}</p>
            <p>{phone ? phone : "+123 456 7890"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
