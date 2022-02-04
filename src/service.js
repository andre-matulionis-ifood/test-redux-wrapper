import axios from "axios";

export async function fetchPokemon(url) {
  const { data } = await axios(url);
  const { id, name, order, weight, height } = data;
  return { id, name, order, weight, height };
}
