import React, { useEffect, useState } from "react";
import { selectCategories, selectClues } from "../store/trivia/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  performGetCategories,
  performGetCluesByCategory,
  performGetRandomClue,
} from "../store/trivia/slice";
import triviaService from "../services/TriviaService";
import SingleTrivia from "../components/SingleTrivia";

export default function TriviaApp() {
  const clues = useSelector(selectClues);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0]?.id
  );

  const [filteredClues, setFilteredClues] = useState(clues[0] ?? []);

  useEffect(() => {
    dispatch(performGetRandomClue());
    dispatch(performGetCategories());
  }, [dispatch]);

  useEffect(() => {
    setSelectedCategoryId(categories[0]);
  }, [categories]);

  useEffect(() => {
    setFilteredClues(clues);
  }, [clues]);

  useEffect(() => {
    console.log(selectedCategoryId);
  }, [selectedCategoryId]);

  const handleChangeCategory = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategoryId(selectedValue);

    dispatch(
      performGetCluesByCategory({
        categoryId: selectedValue,
        page: currentPage,
      })
    );
  };

  const filterClues = (e) => {
    const query = e.target.value.toLowerCase();

    if (query === ``) {
      setFilteredClues(clues);
    }

    setFilteredClues(
      clues.filter(
        (clue) =>
          clue.question.toLowerCase().includes(query) ||
          clue.answer.toLowerCase().includes(query)
      )
    );
  };

  const handleGoToPreviousPage = () => {
    const previousPage = currentPage - 1;
    dispatch(
      performGetCluesByCategory({
        categoryId: selectedCategoryId,
        page: previousPage,
      })
    );
    setCurrentPage(previousPage);
  };

  const handleGoToNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(
      performGetCluesByCategory({
        categoryId: selectedCategoryId,
        page: nextPage,
      })
    );
    setCurrentPage(nextPage);
  };

  return (
    <div>
      <input className="form-control mb-3" type="text" onChange={filterClues} />

      <select
        value={selectedCategoryId}
        onChange={handleChangeCategory}
        className="form-select form-select-lg mb-3"
      >
        {categories?.map((category) => (
          <option value={category.id} key={category.id}>
            {category.title}
          </option>
        ))}
      </select>

      <ul>
        {filteredClues?.length ? (
          filteredClues?.map((clue) => (
            <SingleTrivia trivia={clue} key={clue.id} />
          ))
        ) : (
          <p>No results found </p>
        )}
      </ul>
      <div style={{ display: " flex" }}>
        <button onClick={handleGoToPreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleGoToNextPage}>Next</button>
      </div>
    </div>
  );
}
