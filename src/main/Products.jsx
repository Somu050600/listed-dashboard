import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const Products = () => {
  const chartRef = useRef(null);
  const [playerData, setPlayerData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.balldontlie.io/api/v1/stats");
        const data = await response.json();
        setPlayerData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (playerData.length > 0 && !chartInstance) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance) {
        chartInstance.destroy();
      }

      const randomPlayer = getRandomPlayer(playerData);

      const dataset = {
        data: [
          randomPlayer.pts,
          randomPlayer.ast,
          randomPlayer.reb,
          randomPlayer.stl,
          randomPlayer.blk,
          randomPlayer.turnover, // Add any additional data values from the API
        ],
        backgroundColor: getRandomColors(6), // Generate random colors for each segment
      };

      const labels = [
        "Points",
        "Assists",
        "Rebounds",
        "Steals",
        "Blocks",
        "Turnovers",
      ]; // Customize the labels as per your needs

      const newChartInstance = new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [dataset],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              align: "center",
              labels: {
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            title: {
              display: true,
              text: "Categories",
              position: "left",
              font: {
                size: 16,
                weight: "bold",
              },
              padding: {
                top: 0,
                bottom: 0,
              },
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [playerData, chartInstance]);

  // Helper function to get a random player from the playerData array
  const getRandomPlayer = (players) => {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  };

  // Helper function to generate random colors
  const getRandomColors = (count) => {
    const colors = [];
    const letters = "0123456789ABCDEF";

    for (let i = 0; i < count; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }

    return colors;
  };

  return <canvas ref={chartRef} />;
};

export default Products;
