import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Axios from "axios";

export default function MoviesList() {
  const [newDescription, setNewDescription] = useState("");

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Movies>
        {movieList.map((val) => {
          return (
            <MovieCard key={val.id}>
              <h2>{val.title}</h2>
              <p>
                <b>Length: </b>
                {val.length} min.
              </p>
              <p>
                <b>Genre: </b>
                {val.genre}
              </p>
              <p>
                <b>Description:</b>
              </p>
              <p>{val.description}</p>
              <p>
                <b>Director: </b>
                {val.director}
              </p>
              <label>
                <b>New Description:</b>
              </label>
              <form>
                <input
                  type="text"
                  placeholder="New description..."
                  onChange={(event) => {
                    setNewDescription(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateMovieDescription(val.id);
                  }}
                >
                  Update
                </button>
              </form>
              <form>
                <button
                  onClick={() => {
                    deleteMovie(val.id);
                  }}
                >
                  Delete
                </button>
              </form>
            </MovieCard>
          );
        })}
      </Movies>
    </div>
  );

  function getMovies() {
    Axios.get("http://localhost:3001/movies").then((response) => {
      console.log(response);
      setMovieList(response.data);
    });
  }

  function updateMovieDescription(id) {
    Axios.put("http://localhost:3001/update", {
      description: newDescription,
      id: id,
    }).then((response) => {
      alert("Updated.");
    });
  }

  function deleteMovie(id) {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  }
}

const Movies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MovieCard = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 25px;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
`;
