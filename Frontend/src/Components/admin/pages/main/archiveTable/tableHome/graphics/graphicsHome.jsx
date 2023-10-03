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
import { getApril, getAugust, getDicember, getFebruary, getJanuary, getJuly, getJune, getMarch, getMay, getNovember, getOctober, getSeptember } from "../../../../archive/funtionHome";

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
  const [januaryClient, setJanuaryClient] = useState([]);
  const [februaryClient, setFebruaryClient] = useState([]);
  const [marchClient, setMarchClient] = useState([]);
  const [aprilClient, setAprilClient] = useState([]);
  const [mayClient, setMayClient] = useState([]);
  const [juneClient, setJuneClient] = useState([]);
  const [julyClient, setJulyClient] = useState([]);
  const [augustClient, setAugustClient] = useState([]);
  const [septemberClient, setSeptemberClient] = useState([]);
  const [octoberClient, setOctoberClient] = useState([]);
  const [novemberClient, setNovemberClient] = useState([]);
  const [dicemberClient, setDicemberClient] = useState([]);
  useEffect(() => {
    getJanuary(setJanuaryClient);
    getFebruary(setFebruaryClient);
    getMarch(setMarchClient);
    getApril(setAprilClient);
    getMay(setMayClient);
    getJune(setJuneClient);
    getJuly(setJulyClient);
    getAugust(setAugustClient);
    getSeptember(setSeptemberClient);
    getOctober(setOctoberClient);
    getNovember(setNovemberClient);
    getDicember(setDicemberClient);
  }, []);

  const Data2 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
    datasets: [
      {
        label: "# de Clientes",
        data: [januaryClient.length, februaryClient.length, marchClient.length, aprilClient.length, mayClient.length, juneClient.length, julyClient.length, augustClient.length, septemberClient.length, octoberClient.length, novemberClient.length, dicemberClient.length],
        backgroundColor: [
          "#fdcae1c5",
          "#84b6f4",
          "#fdfd96",
          "#77dd77",
          "#ff6961",
          "#7052ff",
          "#d06aff",
          "#ff81ff",
          "#ff7360",
          "#ffff51",
          "#725097",
          "#0b4c90",
          "#464980",
          
        ],
        borderWidth: .5,
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
