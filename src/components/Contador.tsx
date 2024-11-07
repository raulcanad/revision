import React, { useState, useEffect } from 'react';

function Contador() {
  // Define el estado del contador, con un valor inicial de 0
  const [contador, setContador] = useState(0);

  // useEffect para mostrar un mensaje cada vez que el contador cambia
  useEffect(() => {
    console.log(`El contador ahora es: ${contador}`);
  }, [contador]); // La dependencia [contador] hace que este efecto se ejecute cuando el contador cambia

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
