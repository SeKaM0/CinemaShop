const API_URL = 'http://localhost:8080/films?page=1';

export async function getData() {
  const response = await fetch(API_URL);

  const data = await response.json();

  return data;
}
