import { useState } from 'react';

const EinloggenFormular = ({ setEingeloggt }) => {
  const [input, setInput] = useState('');
  const bodyObj = { userName: input };
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        'https://cookie-test-backend.onrender.com/login',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(bodyObj),
          credentials: 'include',
        }
      );
      const data = await response.json();
      console.log(data);
      setEingeloggt(true);
    } catch (error) {
      console.log(error);
      setEingeloggt(false);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="userName">User Name: </label>
      <input
        type="text"
        id="userName"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button>Einloggen</button>
    </form>
  );
};

export default EinloggenFormular;
