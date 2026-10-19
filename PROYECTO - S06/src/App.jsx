import { useState } from 'react';
import Ejercicio1 from './componentes/Ejercicio1';
import Ejercicio2 from './componentes/Ejercicio2';
import Ejercicio3 from './componentes/Ejercicio3';
import Ejercicio4 from './componentes/Ejercicio4';
import Ejercicio5 from './componentes/Ejercicio5';
import './App.css';

function App() {
  const [ejercicioActivo, setEjercicioActivo] = useState(1);

  const renderizarEjercicio = () => {
    switch(ejercicioActivo) {
      case 1: return <Ejercicio1 />;
      case 2: return <Ejercicio2 />;
      case 3: return <Ejercicio3 />;
      case 4: return <Ejercicio4 />;
      case 5: return <Ejercicio5 />;
      default: return <Ejercicio1 />;
    }
  };

  return (
    <div className="App">
      <h1>Laboratorio de React - Mg. Jaime Suasnábar</h1>
      
      {/* Menú de Navegación */}
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button 
            key={num}
            onClick={() => setEjercicioActivo(num)}
            style={{
              padding: '10px 20px',
              backgroundColor: ejercicioActivo === num ? '#007bff' : '#ccc',
              color: ejercicioActivo === num ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Ejercicio {num}
          </button>
        ))}
      </nav>

      {/* Área de Trabajo */}
      <main style={{ border: '1px dashed #999', padding: '20px', borderRadius: '8px' }}>
        {renderizarEjercicio()}
      </main>
    </div>
  );
}

export default App;