import "./ListaOpciones.css";
const ListaOpciones = () => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "Ux y Diseño",
    "Movil",
    "Innovación y Gestión",
  ];

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
