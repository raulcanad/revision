import React, { useEffect } from 'react';
//Tipo de Componente: Se utiliza React.FC (o React.FunctionComponent) para indicar que Componente es un componente funcional de React.
const Componente: React.FC = () => {
  useEffect(() => {
    console.log('El componente se montó o actualizó');

    return () => {
      console.log('El componente se desmontó');
    };
  }, []); // Ejecuta solo una vez al montarse

  return <div>Componente montado</div>;
};

export default Componente;
