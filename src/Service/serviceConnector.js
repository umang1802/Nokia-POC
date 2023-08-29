import axios from "axios";

// TO DO: MOVE this to env file
const TOKEN_URL =
  "https://login.microsoftonline.com/5d471751-9675-428d-917b-70f44f9630b0/oauth2/v2.0/token";

const CLIENT_ID = "4208b947-f8dc-4a6f-bd26-52d0d60e2f57";
const CLIENT_SECRET = "5b6685c6-5dea-4e6a-adb6-d0c510da6d08";
const SCOPE = "https://pfc-ui-dev.nsn.com/.default";

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
