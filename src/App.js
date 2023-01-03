import './App.css';
import EinloggenFormular from './components/EinloggenFormular.js';
import GeheimerInhalt from './components/GeheimerInhalt.js';
import { useState, useEffect } from 'react';

function App() {
  const [eingeloggt, setEingeloggt] = useState(false);
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setEingeloggt(true);
    }
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
