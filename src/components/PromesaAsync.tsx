import React, { useEffect, useState } from 'react';

// Definimos el tipo de la respuesta que esperamos de la API
interface Post {
  id: number;
  userId: number; // Agregamos userId a la interfaz
  title: string;
  body: string;
}

// Componente de React
const DatosComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(true);
  const [userIdEspecifico, setUserIdEspecifico] = useState<number>(1); // Valor inicial del userId
  const [tituloUserId, setTituloUserId] = useState<string | null>(null);

  // Función asincrónica para obtener datos de la API
  const fetchData = async (userId: number) => {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }
      const datos: Post[] = await respuesta.json();

      // Filtramos solo los posts correspondientes al userId específico
      const postsDelUserId = datos.filter(post => post.userId === userId);
      setPosts(postsDelUserId.slice(0, 3)); // Guardamos solo los 3 primeros posts

      // Obtenemos el título del primer post correspondiente al userId
      if (postsDelUserId.length > 0) {
        setTituloUserId(postsDelUserId[0].title);
      } else {
        setTituloUserId(null);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setCargando(false);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true); // Activar el estado de carga
    fetchData(userIdEspecifico); // Llamar a la función fetchData con el userId específico
  };

  useEffect(() => {
    fetchData(userIdEspecifico); // Llamamos a la función asincrónica al montar el componente
  }, [userIdEspecifico]);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Elige User ID:
          <input
            type="number" //flechas predeterminadas para type number
            value={userIdEspecifico}
            onChange={(e) => setUserIdEspecifico(Number(e.target.value))} // Actualizamos el userId desde el input
            min="1"
          />
        </label>
        <button type="submit">Buscar</button>
      </form>
      
      {error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <div>
          {tituloUserId && <h3>Título del User ID {userIdEspecifico}: {tituloUserId}</h3>} {/* Mostrar título del userId específico */}
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h2>User ID: {post.userId}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DatosComponent;
