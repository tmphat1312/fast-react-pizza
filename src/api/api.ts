const BASE_URL = import.meta.env.VITE_API_URL;

export default async function api<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(
      response.status === 404 ? `(${url}) Not found` : response.statusText,
    );
  }

  const json = await response.json();

  return json.data as T;
}
