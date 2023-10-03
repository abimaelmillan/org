import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");
  const { registrarColaborador, crearEquipo } = props;

  //event se suele representar solamente con la letra e
  const manejarShipping = (e) => {
    e.preventDefault();

    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };
    registrarColaborador(datosEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarShipping}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required={true}
          valor={nombre}
          actualizarValor={actualizarNombre}></Campo>
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}></Campo>
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}></Campo>
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}></ListaOpciones>
        <Boton>Crear</Boton>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar Titulo"
          required={true}
          valor={titulo}
          actualizarValor={actualizarTitulo}></Campo>
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hexadecimal"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"></Campo>
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
