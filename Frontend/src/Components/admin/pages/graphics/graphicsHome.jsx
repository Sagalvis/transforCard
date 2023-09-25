import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let beneficios = [72, 50, 100, 200, 589];
let meses = ["enero", "febrero", "diciembre", "marzo"];

let opciones = {
  responsive: true,
  animation: false,
  plugin: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: { color: "rgba(0, 220, 195)" },
    }
  }
};

let midata = {
  labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: 'rgba(0, 220, 195, 0.5)'
        }
    ]
}

export default function Bars() {
  return <Bar data={midata} options={opciones} />
}
