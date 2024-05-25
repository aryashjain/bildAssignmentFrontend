import React, { useEffect, useState } from 'react';
import CharacterTable from './CharacterTable';
import CharacterCard from './CharacterCard';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 42;
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/getCharacters?page=${page}`);
        const data = await response.json();
        setCharacters(data.result);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleFetchCharacter = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      {selectedCharacterId ? (
        <CharacterCard characterId={selectedCharacterId} />
      ) : (
        <>
          <CharacterTable characters={characters} onFetchCharacter={handleFetchCharacter} />
          <div className="pagination-controls">
            <button onClick={handlePreviousPage} disabled={page === 1}>
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={page === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
      {selectedCharacterId && (
        <button onClick={() => setSelectedCharacterId(null)}>Back to List</button>
      )}
    </div>
  );
}

export default App;
