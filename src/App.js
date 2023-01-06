import './App.css';
import EinloggenFormular from './components/EinloggenFormular.js';
import GeheimerInhalt from './components/GeheimerInhalt.js';
import { useState, useEffect } from 'react';

function App() {
  const [eingeloggt, setEingeloggt] = useState(false);
  useEffect(() => {
    const checklogin = async () => {
      // Wichtig: Die Option credentials muss gesetzt sein, damit Cookie von fetch mitgesendet wird
      const response = await fetch('http://localhost:4000/checklogin', {
        credentials: 'include',
      });
      if (response.ok) {
        setEingeloggt(true);
      }
    };
    checklogin();
  }, []);
  return (
    <div className="App">
      <h1>Einloggen Testseite</h1>
      {eingeloggt ? (
        <GeheimerInhalt setEingeloggt={setEingeloggt} />
      ) : (
        <EinloggenFormular setEingeloggt={setEingeloggt} />
      )}
    </div>
  );
}

export default App;
