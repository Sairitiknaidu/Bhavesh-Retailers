import React, { useState } from "react";
import axios from "axios";

const ResellerPanel = () => {
  const [reseller, setReseller] = useState(null);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [pincode, setPincode] = useState("");
  const [creditAmount, setCreditAmount] = useState(0);

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/resellers/login", loginDetails);
      setReseller(response.data.reseller);
      alert("Login successful");
    } catch (error) {
      alert("Error logging in");
    }
  };

  const verifyPincode = async () => {
    try {
      const response = await axios.post("/api/resellers/verify-pincode", {
        resellerId: reseller._id,
        pincode,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const updateCredits = async (type) => {
    try {
      await axios.post("/api/resellers/update-credits", {
        resellerId: reseller._id,
        type,
        amount: creditAmount,
        description: `${
          type === "credit" ? "Added" : "Deducted"
        } ${creditAmount}`,
      });
      alert(
        `${
          type === "credit" ? "Credits added" : "Credits deducted"
        } successfully`
      );
    } catch (error) {
      alert("Error updating credits");
    }
  };

  if (!reseller) {
    return (
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <h2 style={styles.title}>Reseller Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h2 style={styles.title}>Welcome, {reseller.name}</h2>
        <p style={styles.credits}>Available Credits: {reseller.credits}</p>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Verify PIN Code</h3>
          <input
            type="text"
            placeholder="Enter PIN Code"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            style={styles.input}
          />
          <button onClick={verifyPincode} style={styles.button}>
            Verify
          </button>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Update Credits</h3>
          <input
            type="number"
            placeholder="Enter Amount"
            value={creditAmount}
            onChange={(e) => setCreditAmount(Number(e.target.value))}
            style={styles.input}
          />
          <button onClick={() => updateCredits("credit")} style={styles.button}>
            Add Credits
          </button>
          <button onClick={() => updateCredits("debit")} style={styles.button}>
            Deduct Credits
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  loginBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    width: "90%",
    maxWidth: "400px",
  },
  dashboard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    width: "90%",
    maxWidth: "600px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#333",
    fontSize: "1.8rem",
  },
  credits: {
    textAlign: "center",
    color: "#555",
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  section: {
    marginBottom: "2rem",
  },
  sectionTitle: {
    marginBottom: "1rem",
    color: "#333",
    fontSize: "1.4rem",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "1rem",
    padding: "0.8rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    display: "inline-block",
    padding: "0.8rem 1.2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
    marginRight: "0.5rem",
  },
};

export default ResellerPanel;
