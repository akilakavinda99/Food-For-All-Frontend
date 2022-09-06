import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function DonationChart() {
  const days = [...Array(10).keys()].map((i) => i + 1);

  return (
    <div>
      <div className="card" style={{ width: 430 }}>
        <div className="card-body p-0 ps-4 pt-4 ">
          <h6 className="mb-0 ">Requests Chart</h6>
        </div>
        <div className="card-header p-0 m-3 bg-transparent">
          <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
            <div className="chart p-3">
              <Chart
                type="line"
                height={200}
                width={200}
                data={{
                  labels: days,
                  datasets: [
                    {
                      label: "This month",
                      tension: 0,
                      borderWidth: 0,
                      pointRadius: 5,
                      pointBackgroundColor: "rgba(255, 255, 255, .8)",
                      pointBorderColor: "transparent",
                      borderColor: "rgba(255, 255, 255, .8)",
                      borderWidth: 4,
                      backgroundColor: "transparent",
                      fill: true,
                      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      maxBarThickness: 6,
                    },
                    {
                      label: "Last month",
                      tension: 0,
                      borderWidth: 0,
                      pointRadius: 5,
                      pointBackgroundColor: "rgba(255, 255, 255, .1)",
                      pointBorderColor: "transparent",
                      borderColor: "rgba(255, 255, 255, .1)",
                      borderWidth: 4,
                      backgroundColor: "transparent",
                      fill: true,
                      data: [456, 342, 146, 258, 64, 521, 354, 74, 524],
                      maxBarThickness: 6,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  interaction: {
                    intersect: false,
                    mode: "index",
                  },
                  scales: {
                    y: {
                      grid: {
                        drawBorder: false,
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: false,
                        borderDash: [5, 5],
                        color: "rgba(255, 255, 255, .2)",
                      },
                      ticks: {
                        display: true,
                        padding: 10,
                        color: "#f8f9fa",
                        font: {
                          size: 14,
                          weight: 300,
                          family: "Roboto",
                          style: "normal",
                          lineHeight: 2,
                        },
                      },
                    },
                    x: {
                      grid: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        borderDash: [5, 5],
                      },
                      ticks: {
                        display: true,
                        color: "#f8f9fa",
                        padding: 10,
                        font: {
                          size: 14,
                          weight: 300,
                          family: "Roboto",
                          style: "normal",
                          lineHeight: 2,
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
