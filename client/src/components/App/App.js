import styled from "styled-components/macro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddMovie from "../AddMovie/AddMovie";
import Footer from "../Footer/Footer";
import MoviesList from "../MoviesList/MoviesList";

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<MoviesList />} />
          <Route exact path="/add" element={<AddMovie />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0 4.5rem;
  background-image: linear-gradient(to right top, #65dfc9 0%, #6cdbeb 100%);
`;
