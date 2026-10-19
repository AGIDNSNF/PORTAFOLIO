import './Ejercicio5.css';

const Ejercicio5 = () => {
  const estudiantes = [
    { id: 1, name: "Ana", city: "Lima" },
    { id: 2, name: "Luis", city: "Huancayo" },
    { id: 3, name: "Carlos", city: "Arequipa" },
    { id: 4, name: "Maria", city: "Trujillo" }
  ];

  return (
    <div className="tabla-container">
      <h3>Lista de Estudiantes</h3>
      <table className="tabla-estudiantes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((est) => (
            <tr key={est.id}>
              <td>{est.id}</td>
              <td>{est.name}</td>
              <td>{est.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Ejercicio5;