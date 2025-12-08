import { URL } from "./constants.js";

export async function api(path) {
  try {
    const response = await fetch(`${URL}${path}`);
    if (!response.ok) {
      throw new Error(`Response status is ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("HTTP error: ", error.message);
    throw error;
  }
}
