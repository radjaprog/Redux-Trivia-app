import React, { useState } from "react";
import Modal from "./Modal";

function SingleTrivia({ trivia }) {
  const { id, answer, question, value, airdate } = trivia;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <li>
        <h4>{question}</h4>
        <p>
          {new Date(airdate).toLocaleString()} {value}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => setIsModalVisible(true)}
        >
          Show answer
        </button>
        <hr />
      </li>
      {isModalVisible && (
        <Modal title={answer} onClose={() => setIsModalVisible(false)} />
      )}
    </>
  );
}

export default SingleTrivia;

// redux trivia
