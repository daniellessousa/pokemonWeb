'use client';

import TypeCarousel from "@/components/molecules/TypeCarousel/TypeCarousel";
import { GoPaste } from "react-icons/go";

interface CarrouselPokemonProps {
  onTypeSelect: (type: string) => void;
  selectedType: string | null;
  onClearFilter: () => void;
}

export function CarrouselPokemon({ onTypeSelect, selectedType, onClearFilter }: CarrouselPokemonProps) {
  return (
    <div>
      <div className="display flex items-center justify-between">
        <div className="flex items-center">
          <GoPaste className="text-white ml-2 mr-2" />{" "}
          <h2 className="text-center text-sm font-semibold text-white">
            Busque por tipo:
          </h2>
        </div>
        {selectedType && (
          <button 
            onClick={onClearFilter}
            className="text-xs text-purple-400 hover:text-purple-300 mr-2"
          >
            Limpar filtro
          </button>
        )}
      </div>
      <div
        className="border border-gray-800 rounded shadow p-2 mt-2"
        style={{ backgroundColor: "rgba(6, 11, 21, .8)" }}
      >
        <TypeCarousel onTypeSelect={onTypeSelect}/>
      </div>
    </div>
  );
}