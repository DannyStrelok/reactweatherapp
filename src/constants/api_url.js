
const location = "Madrid, es";
const api_key = "dd2b496f5430517a515f84f8458cd9ec";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
