'use client';
import { useCarouselPokemon } from "@/hooks/useCarrouselPokemon";
import { getPokemons } from "@/service/api";
import { useEffect, useState } from "react";
import { PokemonsData, PokemonType, PokemonCardData} from "@/interfaces/pokemons";

export function useHome() {
  const [initialPokemons, setInitialPokemons] = useState<PokemonCardData[]>([]);
  console.log(initialPokemons, "initialPokemons");
  const [loadingInitial, setLoadingInitial] = useState(true);
  const { selectedType, filteredPokemons, loading, filterByType, clearFilter } = useCarouselPokemon();

    useEffect(() => {
    const fetchInitialPokemons = async () => {
      try {
        const data = await getPokemons();

        const pokemons = await Promise.all(
          data.results.map(async (p: PokemonsData, index: number) => {
            const res = await fetch(p.url);
            const details = await res.json();
            console.log(details, "details");

            return {
              name: p.name,
              id: index + 1,
              image: details.sprites.other["official-artwork"].front_default,
              height: details.height / 10 + " M",
              weight: details.weight / 10 + " KG",
              types: details.types.map((t: PokemonType) => t.type.name),
            };
          })
        );

        setInitialPokemons(pokemons);
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
      } finally {
        setLoadingInitial(false);
      }
    };

    fetchInitialPokemons();
  }, []);

    return {
      initialPokemons,
      loadingInitial,
      selectedType,
      filteredPokemons,
      loading,
      filterByType,
      clearFilter
    };
}