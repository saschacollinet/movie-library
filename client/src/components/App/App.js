import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Axios from "axios";

export default function App() {
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");

  const [newDescription, setNewDescription] = useState("");

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Wrapper>
        <WrapperMovies>
          <Form>
            <label>Title:</label>
            <input
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <label>Length in minutes:</label>
            <input
              type="number"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Genre:</label>
            <input
              type="text"
              onChange={(event) => {
                setGenre(event.target.value);
              }}
            />
            <label>Description:</label>
            <input
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <label>Director:</label>
            <input
              type="text"
              onChange={(event) => {
                setDirector(event.target.value);
              }}
            />
            <button onClick={addMovie}>Add Movie</button>
          </Form>
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
        </WrapperMovies>
      </Wrapper>
    </div>
  );

  function addMovie() {
    Axios.post("http://localhost:3001/create", {
      title: title,
      length: length,
      genre: genre,
      description: description,
      director: director,
    }).then(() => {
      console.log("Success.");
    });
  }

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const WrapperMovies = styled.div`
  margin: 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & input {
    width: 300px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
  }

  & button {
    width: 300px;
    height: 50px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Movies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MovieCard = styled.div`
  padding: 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 25px;
  text-align: center;
`;
