export interface PokemonsData {
    name: string;
    url: string;
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface PokemonCardData {
    name: string;
    id: number;
    image: string;
    height: string;
    weight: string;
    types: string[];
}