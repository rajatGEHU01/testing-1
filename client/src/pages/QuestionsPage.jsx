import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function QuestionsPage() {
  const { category, company } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/questions?category=${category}&company=${company}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.log(err));
  }, [category, company]);

  return (
    <div className="questions-page">
      <h2>
        {company} - {category.toUpperCase()}
      </h2>

      {questions.length === 0 ? (
        <p>No questions found</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="question-card">
            <p><strong>Q{index + 1}:</strong> {q.question}</p>

            <details>
              <summary>Show Answer</summary>
              <p>{q.answer}</p>
            </details>
          </div>
        ))
      )}
    </div>
  );
}