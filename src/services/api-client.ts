import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2929cfaf51324fc8a050020c8acc2de4",
  },
});
