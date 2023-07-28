import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const { name, status, episode, species, image } = character;

  return (
    <div className="character-card">
      <img className="character-image" src={image} alt={name} />
      <h2>{name}</h2>
      <div className={`status-indicator ${status === 'Alive' ? 'alive' : 'dead'}`}></div>
      <p>Episodio: {episode[0]}</p>
      <p>Especie: {species}</p>
    </div>
  );
};

export default CharacterCard;
