import { useState } from 'react';

const Hijo = ({ enviarDato }) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h4>Componente Hijo</h4>
      <button onClick={() => enviarDato("¡Hola Padre, soy el Hijo!")}>
        Enviar mensaje al Padre
      </button>
    </div>
  );
};

const Ejercicio3 = () => {
  const [mensajeDelHijo, setMensajeDelHijo] = useState("");

  return (
    <div style={{ border: '2px solid green', padding: '20px' }}>
      <h3>Componente Padre</h3>
      <p>Mensaje recibido: <strong>{mensajeDelHijo}</strong></p>
      <Hijo enviarDato={setMensajeDelHijo} />
    </div>
  );
};
export default Ejercicio3;