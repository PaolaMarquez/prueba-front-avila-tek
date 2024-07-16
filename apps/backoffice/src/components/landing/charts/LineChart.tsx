"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults, ScriptableContext } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

interface Props {
  label: string;
  data: number[];
  borderColor: string;
}

export default function LineChart() {
  const revenueData = [
    {
      label: "Jan",
      revenue: 64854,
      cost: 32652,
    },
    {
      label: "Feb",
      revenue: 54628,
      cost: 42393,
    },
    {
      label: "Mar",
      revenue: 117238,
      cost: 50262,
    },
    {
      label: "Apr",
      revenue: 82830,
      cost: 64731,
    },
    {
      label: "May",
      revenue: 91208,
      cost: 41893,
    },
    {
      label: "Jun",
      revenue: 103609,
      cost: 83809,
    },
    {
      label: "Jul",
      revenue: 90974,
      cost: 44772,
    },
    {
      label: "Aug",
      revenue: 82919,
      cost: 37590,
    },
    {
      label: "Sep",
      revenue: 62407,
      cost: 43349,
    },
    {
      label: "Oct",
      revenue: 82528,
      cost: 45324,
    },
    {
      label: "Nov",
      revenue: 56979,
      cost: 47978,
    },
    {
      label: "Dec",
      revenue: 87436,
      cost: 39175,
    },
  ];

  const gradientBackground = (context: ScriptableContext<"line">) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#e6d9fd");
    gradient.addColorStop(1, "#e6d9fd00"); // se agrega "00" al final para hacerlo transparente
    return gradient;
  };

  function datasetTemplate({ label, borderColor, data }: Props) {
    return {
      label: label,
      data: data,
      borderColor: borderColor,
      pointRadius: 0,
      backgroundColor: gradientBackground,
      borderWidth: 2,
    };
  }
  return (
    <Line
      id="canvas"
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          datasetTemplate({
            label: "Revenue",
            borderColor: "#53389e",
            data: revenueData.map((data) => data.revenue),
          }),
          datasetTemplate({
            label: "Cost",
            borderColor: "#7f56d9",
            data: revenueData.map((data) => data.cost),
          }),
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            text: "Users over time",
            font: {
              family: "Arial",
              size: 18,
              weight: "bold",
            },
          },
          legend: {
            display: false,
            labels: {
              font: {
                size: 14,
              },
              color: "#6347b7",
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
            ticks: {
              display: false,
              stepSize: 25000,
            },
          },
        },
        elements: {
          line: {
            fill: "start",
          },
        },
      }}
    />
  );
}
