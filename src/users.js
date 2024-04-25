import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://xbepsvnmfjoczbakxrli.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZXBzdm5tZmpvY3piYWt4cmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTM1NDQsImV4cCI6MjAyODg2OTU0NH0.wXibqavxV96MBjsBGqDG2JXHLiL1xEjYMSI2GdtD1cM");

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  async function getUsuarios() {
    const { data, error } = await supabase.from("usuarios").select();

    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      setUsuarios(data);
    }
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            Nombre: {usuario.nombre}. FechaCreacion: {usuario.fechacreacion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;