"use client";
import logo from "@/assets/pokedexplore.svg";
import charizard from "@/assets/charizard.png";
import "./index.css";
import { useHero } from "./useHero";
import { typeIcons } from "@/utils/typeIcons";
import { PiLightningDuotone } from "react-icons/pi";
import { Wave } from "@/components/molecules";
import Image from "next/image";
import { Button } from "@/components/atoms";

export function Hero() {
  const { types } = useHero();
  
  return (
    <section className="background min-h-screen relative pb-40">
      <div>
        <div className="flex justify-center pt-7">
          <Image src={logo} alt="logo" className="w-80" />
        </div>
        <div className="flex justify-between items-center mx-auto max-w-7xl gap-7">
          <div className="max-w-xl z-10 display flex flex-col gap-4">
            <h1 className="text-6xl font-bold">Charizard</h1>
            <div className="flex gap-2 align-center">
              {types.map((typeInfo) => (
                <Image
                  key={typeInfo.type.name}
                  src={typeIcons[typeInfo.type.name]}
                  alt={typeInfo.type.name}
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <p className="text-base font-semibold">
              Charizard, o imponente Pokémon voador e de fogo, é a evolução
              final do adorável Charmander. Com suas asas majestosas e chamas
              ardentes, Charizard domina os céus e inspira respeito. Sua força e
              coragem são lendárias, e seu fogo destrutivo é capaz de incinerar
              seus oponentes. Apesar de seu temperamento selvagem, Charizard é
              conhecido por formar laços profundos e leais com seus treinadores.
              Sua presença imponente e habilidades de voo o tornam um
              companheiro valioso e protetor em qualquer equipe.
            </p>

            <Button className="cursor-pointer bg-zinc-900 rounded-md gap-2 hover:bg-zinc-800 display flex justify-center py-3 opacity-90 align-center">
              <PiLightningDuotone color="#fff" className="w-6 h-6" /> Mais
              detalhes
            </Button>
          </div>

          <div>
            <Image
              src={charizard}
              alt="Charizard"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      </div>

      <Wave />
    </section>
  );
}
