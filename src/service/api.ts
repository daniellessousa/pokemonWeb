export const getPokemons = async (limit = 151) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  return res.json();
};

export const getPokemon = async (nameOrId: string | number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  return res.json();
};

export const getPokemonByName = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}