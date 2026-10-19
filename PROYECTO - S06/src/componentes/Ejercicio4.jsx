import { useState } from 'react';

// Hermano 1 (Envía)
const Hermano1 = ({ setDatos }) => {
  return (
    <div style={{ border: '1px solid orange', padding: '10px' }}>
      <h4>Hermano 1</h4>
      <button onClick={() => setDatos({ nombre: "Jaime", apellido: "Suasnábar" })}>
        Enviar datos al Hermano 2
      </button>
    </div>
  );
};

// Hermano 2 (Recibe)
const Hermano2 = ({ datos }) => {
  return (
    <div style={{ border: '1px solid purple', padding: '10px' }}>
      <h4>Hermano 2</h4>
      {datos ? (
        <p>Datos recibidos: {datos.nombre} {datos.apellido}</p>
      ) : (
        <p>Esperando datos...</p>
      )}
    </div>
  );
};

// Padre (Intermediario)
const Ejercicio4 = () => {
  const [datosCompartidos, setDatosCompartidos] = useState(null);

  return (
    <div style={{ border: '2px solid blue', padding: '20px' }}>
      <h3>Componente Padre (Intermediario)</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Hermano1 setDatos={setDatosCompartidos} />
        <Hermano2 datos={datosCompartidos} />
      </div>
    </div>
  );
};
export default Ejercicio4;