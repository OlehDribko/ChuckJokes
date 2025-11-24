export async function handleJokeRequest(url) {
  try {
    const response = await fetch(url);
    const data = response.json();

    return data;
  } catch (error) {
    throw new error();
  }
}
