import { GeoAddressModel } from '../models/GeoAddressModel';
import { GeoCoordinatesModel } from '../models/GeoCoordinatesModel';

const GEO_BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export default async function geoApi({
  latitude,
  longitude,
}: GeoCoordinatesModel) {
  const url = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
  });
  const response = await fetch(`${GEO_BASE_URL}?${url}`);

  if (!response.ok) {
    throw new Error(
      response.status === 404 ? `(${url}) Not found` : response.statusText,
    );
  }

  const json = await response.json();

  return json as GeoAddressModel;
}
