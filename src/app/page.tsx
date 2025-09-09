"use client";
import {
  About,
  PokemonGrid,
  SearchPokemon,
  Hero,
  CarrouselPokemon,
} from "@/components/organims";
import { useHome } from "@/hooks/useHome";
import { Riple } from "react-loading-indicators";

export default function Home() {
  const {
    loading,
    filteredPokemons,
    selectedType,
    loadingInitial,
    filterByType,
    clearFilter,
    initialPokemons,
  } = useHome();

  if (loadingInitial) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">
          <Riple color="#ffffff" size="medium" text="" textColor="" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Hero />
      <About />
      <div className="bg-black py-12">
        <div className="flex justify-between items-stretch mx-auto max-w-7xl gap-7">
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <CarrouselPokemon
              onTypeSelect={filterByType}
              selectedType={selectedType}
              onClearFilter={clearFilter}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <SearchPokemon />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="bg-black py-12">
          <div className="text-white text-center">
            {" "}
            <Riple color="#ffffff" size="medium" text="" textColor="" />
          </div>
        </div>
      ) : (
        <PokemonGrid
          pokemons={selectedType ? filteredPokemons : initialPokemons}
        />
      )}

      {selectedType && filteredPokemons.length === 0 && !loading && (
        <div className="bg-black py-12">
          <div className="text-white text-center">
            Nenhum pokémon encontrado para o tipo {selectedType}.
          </div>
        </div>
      )}
    </div>
  );
}
