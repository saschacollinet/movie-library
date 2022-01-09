import styled from "styled-components/macro";
import AddMovie from "../AddMovie/AddMovie";
import MoviesList from "../MoviesList/MoviesList";

export default function App() {
  return (
    <Wrapper>
      <AddMovie />
      <MoviesList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0 1rem;
`;
