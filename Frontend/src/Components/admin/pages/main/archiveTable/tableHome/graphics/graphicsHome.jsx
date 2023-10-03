import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

export const GraphicsVehicle = () => {
  const [dataVehicle, setDataVehicle] = useState([]);
  const getVehicle = async () => {
    const res = await axios.get("http://localhost:3005/DateVehicle");
    setDataVehicle(res.data);
}
useEffect(()=>{
  getVehicle();
}, [setDataVehicle]);

  const Data = {
    labels: ["RED", "hola", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: dataVehicle.map((item) => item.total),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={Data} />;
};

export const GraphicsCustomer = () => {
  //Variable de estado para almacenar la consulta  que obtiene los clientes por mes
  const [januaryClient, setJanuaryClient] = useState([]);
  const [february, serFebruaryClient ] = useState([]);

  const getJanuary = async () => {
    const res = await axios.get("http://localhost:3005/january/client")
    setJanuaryClient(res.data)
  }
  const getFebruary = async() => {
      const res = await axios.get("http://localhost:3005/february/client");
      serFebruaryClient(res.data)

  }

useEffect(()=>{
  getJanuary();
  getFebruary();
},[setJanuaryClient, serFebruaryClient]);

  const Data2 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [
      {
        label: "# of Votes",
        data: "",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(23, 235, 164, 0.2)",
          "rgba(255, 255, 64, 0.2)",
          "rgba(144, 64, 255, 0.2)",
          "rgba(64, 249, 255, 0.2)",
          "rgba(83, 255, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={Data2} />;
};

export const Earnings = () => {
  let beneficios = [0, 56, 20, 36, 80, 40, 30, 0, 25, 30, 12, 60];
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let midata = {
    labels: meses,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Beneficios",
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Otra línea",
        borderColor: "rgb(255, 255, 255)",
        data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
      },
    ],
  };

  let misoptions = {
    scales: {
      y: {
        min: 0,
        ticks: { color: "rgb(255, 255, 255)" },
        max:200
      },
      x: {
        ticks: { color: "rgb(255, 255, 255)" },
      },
    },
  };
  return <Line data={midata} options={misoptions} />;
};
