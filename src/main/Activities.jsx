import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const Activities = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/stats") // Replace with your API endpoint URL
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setChartData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: chartData.map((item) => item.date),
          datasets: [
            {
              label: "Activities",
              data: chartData.map((item) => item.activityCount),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
          ],
        },
        options: {
          // Configure the chart options as needed
        },
      });
    }
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default Activities;
