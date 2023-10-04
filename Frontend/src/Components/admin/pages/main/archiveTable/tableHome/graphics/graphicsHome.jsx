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
import { useEffect, useState } from "react";
import {  getAprilClient, getAprilVehicle, getAugustClient, getAugustVehicle, getDecemberVehicle, getDecemberClient, getFebruaryClient, getFebruaryVehicle, getJanuaryClient, getJanuaryVehicle, getJulyClient, getJulyVehicle, getJuneClient, getJuneVehicle, getMarchClient, getMarchVehicle, getMayClient, getMayVehicle, getNovemberClient, getNovemberVehicle, getOctoberClient, getOctoberVehicle, getSeptemberClient, getSeptemberVehicle} from "../../../../archive/funtionHome";

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
  const [januaryVehicle, setJanuaryVehicle] = useState([]);
  const [februaryVehicle, setFebruaryVehicle] = useState([]);
  const [marchVehicle, setMarchVehicle] = useState([]);
  const [aprilVehicle, setAprilVehicle] = useState([]);
  const [mayVehicle, setMayVehicle] = useState([]);
  const [juneVehicle, setJuneVehicle] = useState([]);
  const [julyVehicle, setJulyVehicle] = useState([]);
  const [augustVehicle, setAugustVehicle] = useState([]);
  const [septemberVehicle, setSeptemberVehicle] = useState([]);
  const [octoberVehicle, setOctoberVehicle] = useState([]);
  const [novemberVehicle, setNovemberVehicle] = useState([]);
  const [decemberVehicle, setDecemberVehicle] = useState([]);  
  useEffect(() => {
    getJanuaryVehicle(setJanuaryVehicle);
    getFebruaryVehicle(setFebruaryVehicle);
    getMarchVehicle(setMarchVehicle);
    getAprilVehicle(setAprilVehicle);
    getMayVehicle(setMayVehicle);
    getJuneVehicle(setJuneVehicle);
    getJulyVehicle(setJulyVehicle);
    getAugustVehicle(setAugustVehicle);
    getSeptemberVehicle(setSeptemberVehicle);
    getOctoberVehicle(setOctoberVehicle);
    getNovemberVehicle(setNovemberVehicle);
    getDecemberVehicle(setDecemberVehicle);
  }, []);
  const Data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
    datasets: [
      {
        label: "# of Votes",
        data: [januaryVehicle.length, februaryVehicle.length,marchVehicle.length,aprilVehicle.length, mayVehicle.length, 
          juneVehicle.length, julyVehicle.length, augustVehicle.length, 
          septemberVehicle.length,octoberVehicle.length, novemberVehicle.length, 
          decemberVehicle.length ],
        backgroundColor: [
          "#60f7ff",
          "#ffff51",
          "#725097",
          "#0b4c90",
          "#464980",
          "#fdcae1c5",
          "#84b6f4",
          "#fdfd96",
          "#77dd77",
          "#ff6961",
          "#7052ff",
          "#d06aff",
          "#ff81ff"
        ],
        borderWidth: .5,
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
  const [dicemberClient, setDecemberClient] = useState([]);
  useEffect(() => {
    getJanuaryClient(setJanuaryClient);
    getFebruaryClient(setFebruaryClient);
    getMarchClient(setMarchClient);
    getAprilClient(setAprilClient);
    getMayClient(setMayClient);
    getJuneClient(setJuneClient);
    getJulyClient(setJulyClient);
    getAugustClient(setAugustClient);
    getSeptemberClient(setSeptemberClient);
    getOctoberClient(setOctoberClient);
    getNovemberClient(setNovemberClient);
    getDecemberClient(setDecemberClient);
  }, []);

  const Data2 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
    datasets: [
      {
        label: "# de Clientes",
        data: [januaryClient.length, februaryClient.length,marchClient.length,aprilClient.length, mayClient.length, 
          juneClient.length, julyClient.length, augustClient.length, 
          septemberClient.length,octoberClient.length, novemberClient.length, 
          dicemberClient.length ],
        backgroundColor: [
          "#fdcae1c5",
          "#84b6f4",
          "#fdfd96",
          "#77dd77",
          "#ff6961",
          "#7052ff",
          "#d06aff",
          "#ff81ff",
          "#60f7ff",
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
