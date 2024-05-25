
import React from 'react';

const CharacterTable = ({ characters, onFetchCharacter }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(character => (
          <tr key={character.id}>
            <td>{character.id}</td>
            <td><img src={character.image} alt={character.name} width="60" /></td>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.species}</td>
           
            <td>
              <button onClick={() => onFetchCharacter(character.id)}>Fetch</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharacterTable;
