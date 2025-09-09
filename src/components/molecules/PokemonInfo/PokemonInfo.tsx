import { IoResizeOutline } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import {TypeTag, StatItem } from "@/components/atoms";
import { PokemonInfoProps } from "./interface";

export function PokemonInfo({ height, weight, types }: PokemonInfoProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {types.map((type, i) => (
          <TypeTag key={i} {...type} />
        ))}
      </div>
      <div className="flex gap-6">
        <StatItem icon={<IoResizeOutline size={18} />} value={height} label="Altura" />
        <StatItem icon={<GiWeight size={18} />} value={weight} label="Peso" />
      </div>
    </div>
  );
}
