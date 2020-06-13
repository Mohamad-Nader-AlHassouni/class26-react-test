import axios from "axios";

const url = "https://randomuser.me/api/?results=5";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    return data.results;
  } catch (error) {
      console.log(error)
    return null
  }
};
