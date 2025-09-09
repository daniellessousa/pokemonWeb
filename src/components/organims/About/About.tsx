import Image from "next/image";
import trainer from "@/assets/treinador-pk.png";
export function About() {
  return (
    <div className="bg-black py-12">
      <div className="flex justify-between items-center mx-auto max-w-7xl gap-7">
        <Image src={trainer} alt="logo" className="w-100" />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-white">
            Viva a emoção de capturar e batalhar: Seja um mestre Pokémon no
            PokédExplore!
          </h2>
          <p className="text-white">
            Descubra um mundo repleto de aventuras com o PokédExplore! Agora,
            você pode se tornar um verdadeiro treinador Pokémon, capturando suas
            criaturas favoritas com apenas um clique. Espere a pokebola surgir,
            clique e encare um Pokémon surpresa para adicionar à sua pokédex.
            Monte um poderoso deck e desafie seus amigos em empolgantes
            batalhas! A jornada começa agora. Prepare-se para ser o melhor
            treinador de todos os tempos!
          </p>
        </div>
      </div>
    </div>
  );
}
