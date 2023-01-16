import { useEffect, useState } from 'react';

const GeheimerInhalt = ({ setEingeloggt }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchWithToken = async () => {
      try {
        const response = await fetch(
          'https://cookie-test-backend.onrender.com/nurEingeloggt',
          {
            credentials: 'include', // <- wichtig für Cookie
          }
        );
        if (!response.ok) {
          throw new Error('Einloggen fehlgeschlagen');
        }
        setEingeloggt(true);
        const data = await response.json();
        console.log(data);
        setMessage(data.message);
      } catch (error) {
        console.log(error);
        setEingeloggt(false);
      }
    };
    fetchWithToken();
  }, [setEingeloggt]);
  return <div>{message}</div>;
};

export default GeheimerInhalt;
