// useHero.ts
"use client"; 

import { getPokemonByName } from "@/service/api";
import { useEffect, useState } from "react";

interface TypePokemon {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export function useHero() {
  const [types, setTypes] = useState<TypePokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonByName('charizard');
      setTypes(response.types); 
    }
    fetchData();
  }, []);

  return {
    types
  };
}