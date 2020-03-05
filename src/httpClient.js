import Axios from "axios";

const httpClient = Axios.create({
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json"
  }
});

export default httpClient;
