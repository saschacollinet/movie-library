import { useState } from "react";
import styled from "styled-components/macro";
import Axios from "axios";

export default function MoviesList() {
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");

  return (
    <div>
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
}

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
