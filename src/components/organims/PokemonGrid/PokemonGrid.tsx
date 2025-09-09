import { PokemonCard } from "@/components/organims";
import { PokemonCardData } from '@/interfaces/pokemons';

type Props = {
  pokemons: PokemonCardData[];
};

export function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mx-auto max-w-7xl">
        {pokemons.map(p => (
          <PokemonCard
            key={p.id}
            name={p.name}
            image={p.image} 
            height={p.height}
            weight={p.weight}
            types={p.types}
          />
        ))}
      </div>
    </div>
  );
}
