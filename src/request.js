import axios from "axios";

async function request(
  endpoint,
  params,
  headers = {
    "Content-Type": "application/json",
  }
) {
  const response = await axios.get(
    `https://api.spoonacular.com/${endpoint}?apiKey=${process.env.REACT_APP_API_KEY}`,
    {
      headers,
      params,
    }
  );
  return response.data;
}

export default request;
