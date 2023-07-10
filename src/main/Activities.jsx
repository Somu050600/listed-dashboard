import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const Activities = () => {
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

      const randomPlayers = getRandomPlayers(playerData, 2, 3); // Adjust the number of players to show (between 2 to 3)

      const datasets = randomPlayers.map((player, index) => ({
        label: `${player.player.first_name} ${player.player.last_name}`,
        data: [
          player.pts,
          player.ast,
          player.reb,
          player.stl,
          player.blk,
          player.turnover, // Add any additional data values from the API
        ],
        borderColor: getRandomColor(), // Generate a random color for each line
        backgroundColor: "transparent",
        fill: false,
        lineTension: 0.4, // Adjust the line tension to make the lines curvy (0: straight lines, 1: very curvy lines)
      }));

      const labels = [
        "Points",
        "Assists",
        "Rebounds",
        "Steals",
        "Blocks",
        "Turnovers",
      ]; // Customize the labels as per your needs

      const newChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Categories",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              ticks: {
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Values",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              ticks: {
                font: {
                  size: 14,
                  weight: "normal",
                },
              },
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [playerData, chartInstance]);

  // Helper function to get random players from the playerData array
  const getRandomPlayers = (players, minCount, maxCount) => {
    const randomCount =
      Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    const shuffledPlayers = players.sort(() => 0.5 - Math.random());
    return shuffledPlayers.slice(0, randomCount);
  };

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <canvas ref={chartRef} />;
};

export default Activities;
