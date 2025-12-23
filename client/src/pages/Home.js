import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const userID = window.localStorage.userID;
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchSubs = async () => {
      const response = await axios.get(
        `http://localhost:3001/subscriptions/${userID}`
      );
      setSubs(response.data);
    };
    fetchSubs();
  }, [userID]);

  // Current month info
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#121212",
        color: "#eaeaea",
        padding: "32px clamp(20px, 5vw, 64px)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>
          Hello 
        </h1>
        <p style={{ opacity: 0.7 }}>
          Your subscription renewals for{" "}
          <strong>
            {today.toLocaleString("default", { month: "long" })} {year}
          </strong>
        </p>
      </div>

      {/* Calendar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "14px",
        }}
      >
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;

          const todaysSubs = subs.filter(
            (sub) => sub.dateOfRenewal === day
          );

          return (
            <div
              key={day}
              style={{
                background: "#1e1e1e",
                borderRadius: "14px",
                padding: "12px",
                minHeight: "100px",
                border: "1px solid #2a2a2a",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Date number */}
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  opacity: 0.6,
                  marginBottom: "8px",
                }}
              >
                {day}
              </div>

              {/* Subscriptions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {todaysSubs.map((sub, idx) => (
                  <div
                    key={idx}
                    style={{
                      fontSize: "12px",
                      padding: "6px 8px",
                      background: "#2a2a2a",
                      borderRadius: "8px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={sub.name}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
