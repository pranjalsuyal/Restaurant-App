import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IlZ74KNF1eAtbnNb1x3p4zamLjk4Zl4BIEGOpZMFMzSEi80uWEfjcVIVoqhB3ynJDkF-D10KT7p3SEC300wE0Rrr9b11hqqhxOd7zMOCfaCZr52XD-2gpNdUzD-hXnYx",
  },
});
