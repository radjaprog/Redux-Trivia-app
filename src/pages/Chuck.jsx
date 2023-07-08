import React, { useEffect, useState } from "react";
import { selectCategories, selectJoke } from "../store/chuck/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  performGetJokeCategories,
  performGetRandomJoke,
} from "../store/chuck/slice";
import chuckService from "../services/ChuckService";

export default function Chuck() {
  // // // WIUTHOUT SAGA:
  // const [chucks, setChucks] = useState([]);
  // const fetchChucks = async () => {
  //   const data = await chuckService.getRandomJoke();
  //   setChucks(data);
  // };

  // //// Without SAGA useEffect
  // useEffect(() => {
  //   fetchChucks();
  // }, []);

  //SAGA:
  const joke = useSelector(selectJoke);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories]);

  //SAGA useEffect:
  useEffect(() => {
    dispatch(performGetRandomJoke());
    dispatch(performGetJokeCategories());
  }, [dispatch]);

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(performGetRandomJoke(selectedCategory));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedCategory}
          onChange={handleChangeCategory}
          className="form-select form-select-lg mb-3"
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>

        <button className="btn btn-primary mb-3" type="submit">
          Get new joke
        </button>
      </form>

      <h2>{joke}</h2>
    </div>
  );
}
