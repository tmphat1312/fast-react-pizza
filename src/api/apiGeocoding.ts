type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export async function getAddress({ latitude, longitude }: GeoCoordinates) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );

  if (!res.ok) {
    throw Error('Failed getting address');
  }

  return await res.json();
}
