'use client';

import { useState } from 'react';
import { PokemonCardData } from '@/interfaces/pokemons';

export function useCarouselPokemon() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonCardData[]>([]);
  const [loading, setLoading] = useState(false);

  const filterByType = async (type: string) => {
    setLoading(true);
    setSelectedType(type);
    
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      
      const limitedPokemons = data.pokemon.slice(0, 20);
      
      const pokemonsWithDetails = await Promise.all(
        limitedPokemons.map(async (p: any) => {
          const res = await fetch(p.pokemon.url);
          const details = await res.json();
          
          return {
            name: p.pokemon.name,
            id: details.id,
            image: details.sprites.other["official-artwork"].front_default,
            height: details.height / 10 + " M",
            weight: details.weight / 10 + " KG", 
            types: details.types.map((t: any) => t.type.name),
          };
        })
      );
      
      setFilteredPokemons(pokemonsWithDetails);
    } catch (error) {
      console.error('Erro ao filtrar por tipo:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearFilter = () => {
    setSelectedType(null);
    setFilteredPokemons([]);
  };

  return {
    selectedType,
    filteredPokemons,
    loading,
    filterByType,
    clearFilter
  };
}