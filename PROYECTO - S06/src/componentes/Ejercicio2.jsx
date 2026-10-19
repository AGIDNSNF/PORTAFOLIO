// Componente 4 (El que recibe y muestra)
const Componente4 = ({ datos }) => (
  <div style={{ border: '2px solid black', padding: '20px', background: '#ffeb3b' }}>
    <h3>Componente 4 (Destino)</h3>
    <div style={{ border: '1px solid #ccc', padding: '10px', background: 'white' }}>
      <p><strong>Nombre:</strong> {datos.nombre}</p>
      <p><strong>Dirección:</strong> {datos.direccion}</p>
      <p><strong>Ciudad:</strong> {datos.ciudad}</p>
    </div>
  </div>
);

// Componente 3
const Componente3 = ({ datos }) => (
  <div style={{ border: '2px solid green', padding: '20px', background: '#8bc34a' }}>
    <h3>Componente 3</h3>
    <Componente4 datos={datos} />
  </div>
);

// Componente 2
const Componente2 = ({ datos }) => (
  <div style={{ border: '2px solid orange', padding: '20px', background: '#ffc107' }}>
    <h3>Componente 2</h3>
    <Componente3 datos={datos} />
  </div>
);

// Componente 1 (Origen)
const Ejercicio2 = () => {
  const objetoDatos = { nombre: "Jaime", direccion: "Jr. Junin 450", ciudad: "Huancayo" };
  return (
    <div style={{ border: '2px solid blue', padding: '20px', background: '#2196f3' }}>
      <h3>Componente 1 (Origen)</h3>
      <Componente2 datos={objetoDatos} />
    </div>
  );
};
export default Ejercicio2;