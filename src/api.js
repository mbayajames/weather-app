import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async (city) => {
  const { data } = await axios.get(
    `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return data;
};
