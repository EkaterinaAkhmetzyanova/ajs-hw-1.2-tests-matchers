export default function sortHeroes(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
