// frontend/src/components/Admin/FreeDemoTracker.js
import React from "react";
import "./FreeDemoTracker.css"; // Importing the CSS file

const demoUsersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@email.com",
    contact: "+91 98765 43210",
    status: "Scheduled",
  },
  {
    id: 2,
    name: "Vivaan Patel",
    email: "vivaan.patel@email.com",
    contact: "+91 87654 32109",
    status: "Completed",
  },
  {
    id: 3,
    name: "Reyansh Gupta",
    email: "reyansh.gupta@email.com",
    contact: "+91 76543 21098",
    status: "Pending",
  },
  {
    id: 4,
    name: "Atharv Rao",
    email: "atharv.rao@email.com",
    contact: "+91 65432 10987",
    status: "Scheduled",
  },
  {
    id: 5,
    name: "Krishna Mehta",
    email: "krishna.mehta@email.com",
    contact: "+91 54321 09876",
    status: "Completed",
  },
];

const FreeDemoTracker = () => {
  return (
    <div className="free-demo-container">
      <h1>Free Demo Tracker</h1>
      <table className="demo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {demoUsersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeDemoTracker;
