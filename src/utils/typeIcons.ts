import { IconType } from "react-icons";
import fire from "../assets/power/fire.svg";
import flying from "../assets/power/flying.svg";
import bug from "../assets/power/bug.svg"; 
import dark from "../assets/power/dark.svg";
import dragon from "../assets/power/dragon.svg";
import electric from "../assets/power/electric.svg";
import fairy from "../assets/power/fairy.svg";
import fighting from "../assets/power/fighting.svg";
import ghost from "../assets/power/ghost.svg";
import grass from "../assets/power/grass.svg";
import ground from "../assets/power/ground.svg";
import ice from "../assets/power/ice.svg";
import normal from "../assets/power/normal.svg";
import poison from "../assets/power/poison.svg";
import psychic from "../assets/power/psychic.svg";
import rock from "../assets/power/rock.svg";
import steel from "../assets/power/steel.svg";
import water from "../assets/power/water.svg";
import { LuHeartPulse } from "react-icons/lu";
import { FaRegHandRock } from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";
import { PiSwordDuotone } from "react-icons/pi";
import { BsShieldPlus } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";

export const typeIcons: Record<string, string> = {
  fire: fire,
  flying: flying,
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water
};


export const typePowerNames: Record<string, IconType> = {
  hp: LuHeartPulse,
  attack: FaRegHandRock,
  defense: IoShieldHalfSharp,
  "special-attack": PiSwordDuotone,
  "special-defense": BsShieldPlus,
  speed: BsSpeedometer2,
}