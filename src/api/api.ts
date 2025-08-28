export async function getData(url: string) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

const cache = new Map();

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}
