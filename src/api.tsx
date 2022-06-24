const URLS = [
  'http://localhost:8080/films/1',
  'http://localhost:8080/films/2',
  'http://localhost:8080/films/3',
];

export async function GetCinemas() {
  const data = await Promise.all(URLS.map(async url => {
    const resp = await fetch(url);

    return resp.json();
  }));

  return data;
}
