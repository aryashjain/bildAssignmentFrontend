
import React, { useEffect, useState } from 'react';
const URL = process.env.REACT_APP_BASEURL ||'http://localhost:5000/api/v1';

const CharacterCard = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`${URL}/getCharacters/${characterId}`);
        const data = await response.json();
        setCharacter(data.result);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} width="200" />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location :</strong> {character.location.name}</p>    
    </div>
  );
};

export default CharacterCard;
