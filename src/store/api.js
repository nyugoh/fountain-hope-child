import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),
    register: credentials =>
      axios.post("/api/register", { credentials }).then(res => res.data.user)
  },
  kids: {
    add: kid => axios.post("/api/kids", { kid }).then(res => res.data.kid)
  }
};
