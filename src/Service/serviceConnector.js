import axios from "axios";

// TO DO: MOVE this to env file
const TOKEN_URL = "add token url"

const CLIENT_ID = "add client id";
const CLIENT_SECRET = "add secret";
const SCOPE = "add scope";

const BASE_URL = " https://pfc-nfort-dev.azurewebsites.net/api";

let ACCESS_TOKEN = "";

const getEndpoint = (url) => {
  // adding a separate function to handle api versions if needed
  return `${BASE_URL}/${url}`;
};

const getAccessToken = async () => {
  const requestBody = new URLSearchParams();
  requestBody.append("client_id", CLIENT_ID);
  requestBody.append("scope", SCOPE);
  requestBody.append("client_secret", CLIENT_SECRET);
  requestBody.append("grant_type", "client_credentials");

  try {
    const response = await axios.post(TOKEN_URL, requestBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    ACCESS_TOKEN = response.data.access_token;
    console.log("response.data.access_token----->", ACCESS_TOKEN);
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error.message);
    throw error;
  }
};

export const serviceConnector = async (url, method, reqBody=null, headers = {}) => {
  const URL = getEndpoint(url);
  try {
    const accessToken = await getAccessToken();
    const response = await axios({
      method: method,
      url: URL,
      // data: reqBody,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making authenticated API call:", error.message);
    throw error;
  }
};
