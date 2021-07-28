import {
  standardGet,
} from 'core/utils/ajax';

// City
export const fetchCities = () => standardGet('/api/cities');

// District
export const fetchDistricts = () => standardGet('/api/districts');
export const fetchDistrictByIdCity = (id) => standardGet(`/api/districts/${id}`);
