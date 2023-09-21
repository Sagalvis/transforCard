import { createContext, useState } from "react";
import axios from "axios";

const PASSWORDTOKEN = 'PASSWORDTOKEN'

export const AuthContext = createContext();

export function AuthContextProviteder({children}){
  const [isAuthTenticated, setAuthTenticated] = useState(localStorage.getItem(PASSWORDTOKEN));

  const loginEmployees = 
}



export const Log = async (correo, contraseña) => {
  if (correo && contraseña) {
    try {
      const response = await axios.post(
        "http://localhost:3005/postLoginEmployees",
        {
          correo: correo,
          contraseña: contraseña,
        }
      );
      console.log(response.data, "😎😎😎");
      const result = response.data;
      if (response.data === "") {
        alert("El usuario no existe");
      } else {
        localStorage.setItem("user", JSON?.stringify(result));
        alert("Login ")
        setTimeout(() => {
          window.location.href = "http://localhost:5173/admin";
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      alert("Usuario y/o contraseña no válidos");
    }
  } else {
    alert(
      "Usuario y/o contraseña no ingresados, por favor ingrese los campos requeridos"
    );
  }
};