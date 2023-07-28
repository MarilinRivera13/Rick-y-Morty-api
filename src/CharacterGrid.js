import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CharacterGrid.css';
import CharacterCard from './CharacterCard';

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters data:', error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterGrid;
