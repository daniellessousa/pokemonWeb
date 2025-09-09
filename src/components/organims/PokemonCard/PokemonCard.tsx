// PokemonCard.tsx
"use client";

import { PokemonCardProps } from "./interface";
import backgroundCard from "../../../assets/half-pokeball.svg";
import { TfiRulerAlt } from "react-icons/tfi";
import { CiDumbbell } from "react-icons/ci";
import { capitalize, getTypeColor, getTypeGradient } from "@/utils/typePowerColors";
import { useState } from "react";
import { PokemonModal } from "@/components/organims";

export function PokemonCard({ name, image, height, weight, types }: PokemonCardProps) {
  const mainType = types[0];
  const gradientColor = getTypeGradient(mainType);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleOpenModal() {
    // se já temos dados, só abre sem refazer fetch
    if (pokemonData) {
      setIsModalOpen(true);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemonData(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setPokemonData(null);
  }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundCard})` }}
      className={`relative rounded-2xl border border-gray-800 p-4 text-center overflow-visible ${gradientColor} bg-no-repeat bg-top mt-15 cursor-pointer`}
      onClick={handleOpenModal}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleOpenModal();
      }}
    >
      <img
        src={image}
        alt={name}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-70 h-70 z-10 drop-shadow-lg"
      />

      <h2 className="text-white text-2xl font-bold mt-43">• {capitalize(name)} •</h2>
      <div className="flex justify-center gap-2 mt-2">
        {types.map((type) => (
          <span
            key={type}
            className={`px-2 py-1 text-xs font-bold text-white rounded-md ${getTypeColor(type)}`}
          >
            {type.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-3 text-white">
        <div className="text-center">
          <div className="font-semibold text-lg">{height}</div>
          <div className="text-base opacity-80 flex items-center gap-1">
            <TfiRulerAlt /> Altura
          </div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-lg">{weight}</div>
          <div className="text-base opacity-80 flex items-center gap-1">
            <CiDumbbell /> Peso
          </div>
        </div>
      </div>

      {isModalOpen && pokemonData && (
        <PokemonModal
          height={height}
          width={weight}
          img={image}
          name={name}
          pokemon={pokemonData}
          onClose={handleCloseModal}
        />
      )}

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <span className="bg-black/60 px-3 py-1 rounded">Carregando...</span>
        </div>
      )}
    </div>
  );
}
