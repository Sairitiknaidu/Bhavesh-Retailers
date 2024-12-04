// frontend/src/components/User/Dashboard.js
import React from "react";
import "./Dashboard.css";

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    description: "Description for Card 1. Here is some details.",
    image:
      "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+1", // Use an appropriate image link
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description for Card 2. Here is some details.",
    image:
      "https://images.pexels.com/photos/29501456/pexels-photo-29501456/free-photo-of-starbucks-coffee-shop-on-sunny-urban-street.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+2",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description for Card 3. Here is some details.",
    image:
      "https://images.pexels.com/photos/257856/pexels-photo-257856.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+3",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Description for Card 4. Here is some details.",
    image:
      "https://images.pexels.com/photos/9656528/pexels-photo-9656528.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+4",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Description for Card 5. Here is some details.",
    image:
      "https://images.pexels.com/photos/1029286/pexels-photo-1029286.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+5",
  },
  {
    id: 6,
    title: "Card 6",
    description: "Description for Card 5. Here is some details.",
    image:
      "https://images.pexels.com/photos/1029286/pexels-photo-1029286.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+6",
  },
  {
    id: 7,
    title: "Card 7",
    description: "Description for Card 5. Here is some details.",
    image:
      "https://images.pexels.com/photos/1029286/pexels-photo-1029286.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+7",
  },
  {
    id: 8,
    title: "Card 8",
    description: "Description for Card 5. Here is some details.",
    image:
      "https://images.pexels.com/photos/1029286/pexels-photo-1029286.jpeg?auto=compress&cs=tinysrgb&w=600?text=Card+8",
  },
  // You can add more cards as needed
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      <p>Manage your digital visiting cards here.</p>
      <div className="dashboard-content">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-buttons">
              <button className="card-button">Edit</button>
              <button className="card-button delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
