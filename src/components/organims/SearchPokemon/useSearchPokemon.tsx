import { useState } from 'react';

export function useSearchPokemon() {
  const [search, setSearch] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon não encontrado');
      
      const data = await response.json();
      setSearchedPokemon(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      alert('Pokémon não encontrado!');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchedPokemon(null);
  };

  return {
    search,
    setSearch,
    searchedPokemon,
    isModalOpen,
    loading,
    handleSearch,
    handleCloseModal
  };
}