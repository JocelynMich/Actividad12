import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import Header from './componentes/header';
import Card from './componentes/card';
import ListaUsuarios from './users';
import './App.css'; // Ajusta el CSS general aquí

const supabase = createClient('https://xbepsvnmfjoczbakxrli.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZXBzdm5tZmpvY3piYWt4cmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTM1NDQsImV4cCI6MjAyODg2OTU0NH0.wXibqavxV96MBjsBGqDG2JXHLiL1xEjYMSI2GdtD1cM");

function App() {
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

  const cards = ['users', 'clients', 'products', 'sessions', 'categories', 'directions', 'genders', 'sessionsProducts'];

  function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  return (
    <div>
      <Header />
      <ListaUsuarios />

      <div className="container" id="cardContainer">
        {cards.map(cardName => (
          <Card
            key={cardName}
            title={toTitleCase(cardName)}
            onButtonClick={() => window.location.href = `${cardName}.html`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;