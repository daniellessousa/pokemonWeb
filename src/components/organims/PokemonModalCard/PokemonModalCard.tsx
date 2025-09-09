// PokemonModal.tsx (apenas pequenos ajustes)
"use client";

import { TypeIcon } from "@/components/atoms";
import { typePowerNames } from "@/utils/typeIcons";
import { getTypeGradient } from "@/utils/typePowerColors";
import React, { useEffect } from "react";
import { CiDumbbell } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TfiRulerAlt } from "react-icons/tfi";

type PokemonModalProps = {
  pokemon: any;
  img: string;
  name: string;
  height: string;
  width: string; // Note: este prop está nomeado como "width" mas representa o peso
  onClose: () => void;
};

export function PokemonModal({
  pokemon,
  img,
  name,
  onClose,
  height,
  width, // Este é realmente o peso
}: PokemonModalProps) {
  if (!pokemon) return null;
  const gradientColor = getTypeGradient(pokemon.types[0].type.name);

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={handleOverlayClick}
      />

      <div
        className={`relative bg-gray-900 rounded-2xl p-6 w-full max-w-sm mx-4 shadow-xl border border-gray-700 text-white z-50 ${gradientColor}`}
        onClick={handleModalClick}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-3 right-3 text-gray-300 hover:text-white"
          aria-label="Fechar modal"
        >
          <IoMdCloseCircleOutline className="w-6 h-6" />
        </button>

        <div className="flex justify-center relative">
          <img
            src={img}
            alt={name}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-50 h-50 z-10 drop-shadow-lg"
          />
        </div>

        <div className="mt-25 text-center">
          <h2 className="text-2xl font-bold">• {name} •</h2>
        </div>

        <div className="flex justify-around items-center mt-4 border-y border-gray-600 py-3">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">{height}</span> {/* Altura */}
            <div className="flex items-center gap-1 text-gray-300 text-sm">
              <TfiRulerAlt /> Altura
            </div>
          </div>

          <div className="flex gap-2">
            {pokemon.types.map((t: any) => (
              <TypeIcon
                key={t.type.name}
                type={t.type.name}
                className="w-8 h-8"
              />
            ))}
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">{width}</span> {/* Peso */}
            <div className="flex items-center gap-1 text-gray-300 text-sm">
              <CiDumbbell /> Peso
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {pokemon.stats.map((s: any) => (
            <div key={s.stat.name} className="flex items-center gap-2">
              <span className="capitalize text-sm">
                {typePowerNames[s.stat.name] && React.createElement(typePowerNames[s.stat.name], { className: "inline w-4 h-4 mr-1" })}
              </span>
              <span className="w-8 text-sm">{s.base_stat}</span>
              <div className="flex-1 bg-neutral-900 h-2 rounded">
                <div
                  className={`h-2 px-1 rounded ${s.base_stat > 60
                      ? "bg-green-500"
                      : s.base_stat > 45
                        ? "bg-yellow-500"
                        : "bg-orange-500"
                    }`}
                  style={{ width: `${(s.base_stat / 100) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}