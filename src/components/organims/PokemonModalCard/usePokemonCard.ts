import { getTypeGradient } from "@/utils/typePowerColors";
import { useEffect } from "react";

interface PokemonModalProps {
    pokemon: any;
    onClose: () => void;
}

export function usePokemonCard({
    pokemon,
    onClose,
}: PokemonModalProps) {
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
    
    return {
        gradientColor,
        handleOverlayClick,
        handleModalClick
    };
}