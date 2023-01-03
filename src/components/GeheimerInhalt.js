import { useEffect, useState } from 'react';

const GeheimerInhalt = ({ setEingeloggt }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchWithToken = async () => {
      try {
        // const token = localStorage.getItem('jwt');
        // const myHeaders = new Headers({
        //   Authorization: 'Bearer: ' + token,
        // });
        // const response = await fetch('http://localhost:4000/nurEingeloggt', {
        //   headers: myHeaders,
        // });
        const response = await fetch('http://localhost:4000/nurEingeloggt', {
          credentials: 'include',
        });
        if (!response.ok) {
          localStorage.removeItem('jwt');
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
