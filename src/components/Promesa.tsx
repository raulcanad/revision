import React, { useEffect, useState } from 'react';

// Definimos el tipo de la respuesta que esperamos de la promesa
interface RespuestaDatos {
  mensaje: string;
}

// Función que simula una solicitud de datos
function obtenerDatos(): Promise<RespuestaDatos> {
  return new Promise((resolve, reject) => {
    console.log("Realizando solicitud...");

    setTimeout(() => {
      const exito = true; // Cambia a false para simular un error

      if (exito) {
        resolve({ mensaje: "Datos obtenidos correctamente" });
      } else {
        reject("Error al obtener los datos");
      }
    }, 2000); // Espera 2 segundos
  });
}

// Componente de React
const DatosComponent: React.FC = () => {
  const [mensaje, setMensaje] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    obtenerDatos()
      .then((respuesta) => {
        setMensaje(respuesta.mensaje);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <div>{mensaje}</div>
      )}
    </div>
  );
};

export default DatosComponent;
