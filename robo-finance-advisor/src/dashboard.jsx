import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [active, setActive] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const u = localStorage.getItem("obo_user");
    if (u) {
      try {
        setUserName(JSON.parse(u).name || "");
      } catch {}
    }
  }, []);

  const trending = [
    { id: 1, name: "Bitcoin", value: "₹25,00,000", change: "+4%" },
    { id: 2, name: "Ethereum", value: "₹1,50,000", change: "+2%" },
    { id: 3, name: "Tesla", value: "₹80,000", change: "-1%" },
    { id: 4, name: "Apple", value: "₹1,20,000", change: "+3%" },
    { id: 5, name: "Nifty 50", value: "₹22,000", change: "+0.8%" },
  ];

  return (
    <section>
      <h1 className="page-title">Welcome back{userName ? `, ${userName}` : ""} 👋</h1>

      <h2 className="section-title">🔥 Trending Assets</h2>
      <div className="row">
        {trending.map((a) => (
          <article
            key={a.id}
            onClick={() => setActive(a.id)}
            className={`card ${active === a.id ? "active-blue" : ""}`}
          >
            <div className="card-head">
              <h3>{a.name}</h3>
              <div className={`change ${a.change.includes("+") ? "up" : "down"}`}>{a.change}</div>
            </div>
            <div className="card-value">{a.value}</div>
            <button className="btn card-btn">Invest</button>
          </article>
        ))}
      </div>

      <h2 className="section-title">⭐ Recommended For You</h2>
      <div className="row">
        {[
          { id: 11, name: "Gold", value: "₹55,000", change: "+1%" },
          { id: 12, name: "Silver", value: "₹70,000", change: "-2%" },
          { id: 13, name: "Google", value: "₹1,75,000", change: "+5%" },
          { id: 14, name: "Amazon", value: "₹2,00,000", change: "+3%" },
        ].map((a) => (
          <article
            key={a.id}
            onClick={() => setActive(a.id)}
            className={`card ${active === a.id ? "active-red" : ""}`}
          >
            <div className="card-head">
              <h3>{a.name}</h3>
              <div className={`change ${a.change.includes("+") ? "up" : "down"}`}>{a.change}</div>
            </div>
            <div className="card-value">{a.value}</div>
            <button className="btn card-btn">View</button>
          </article>
        ))}
      </div>
    </section>
  );
}
