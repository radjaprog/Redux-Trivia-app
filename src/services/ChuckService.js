import axios from "axios";

const handleError = (e) => {
  // alert(e.response.data.message);
  // e['response']['data']['message']
};

class ChuckService {
  //WITHOUT SAGA:

  // With SAGA:
  async getRandomJoke(category) {
    const categoryFilter = category ? `?category=${category}` : "";

    try {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/random" + categoryFilter
      );
      return data;
    } catch (e) {
      console.log(e);
      handleError(e);
    }
  }

  async getJokeCategories() {
    try {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      return data;
    } catch (e) {
      console.log(e);
      handleError(e);
    }
    return [];
  }
}

const chuckService = new ChuckService();
export default chuckService;
