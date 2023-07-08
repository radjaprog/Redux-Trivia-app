import axios from "axios";

const handleError = (e) => {};

class TriviaService {
  async getRandomClue() {
    try {
      const { data } = await axios.get("http://jservice.io/api/random", {
        params: {
          count: 30,
        },
      });

      return data;
    } catch (e) {
      console.log(e);
      handleError(e);
    }
  }

  async getCategories() {
    try {
      const { data } = await axios.get(
        "http://jservice.io/api/categories?count=10"
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getCluesByCategory(categoryId, page = 1) {
    const perPage = 100;
    const offset = page * perPage - perPage;
    console.log(categoryId);

    try {
      const { data } = await axios.get(`http://jservice.io/api/clues`, {
        params: {
          category: categoryId,
          offset,
        },
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

const triviaService = new TriviaService();

export default triviaService;
