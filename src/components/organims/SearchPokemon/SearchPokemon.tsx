// SearchPokemon.tsx
"use client";

import { FiSearch } from 'react-icons/fi';
import { useSearchPokemon } from './useSearchPokemon';
import { PokemonModal } from "@/components/organims";

export function SearchPokemon() {
  const { 
    search, 
    setSearch, 
    searchedPokemon, 
    isModalOpen, 
    loading, 
    handleSearch, 
    handleCloseModal 
  } = useSearchPokemon();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <span className="flex items-center gap-2 text-white text-sm font-semibold" >
        <FiSearch className="text-white" />
        Encontre seu pokémon:
      </span>

      <div className="flex overflow-hidden border border-gray-800 rounded shadow bg-[#0B0E11] p-4 rounded-md">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
          id="search"
          placeholder="Eu escolho você!"
          className="bg-[#0B0E11] text-white placeholder-gray-400 px-4 py-2 w-full focus:outline-none rounded-sm"
        />
        <button 
          onClick={handleSearch}
          className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 flex items-center justify-center rounded-sm cursor-pointer"
          disabled={loading}
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <FiSearch className="text-white" />
          )}
        </button>
      </div>

      {isModalOpen && searchedPokemon && (
        <PokemonModal
          height={(searchedPokemon.height / 10) + " M"}
          width={(searchedPokemon.weight / 10) + " KG"}
          img={searchedPokemon.sprites.other["official-artwork"].front_default}
          name={searchedPokemon.name}
          pokemon={searchedPokemon}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}