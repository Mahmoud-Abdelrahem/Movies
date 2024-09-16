import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./MoviesDetalis.css";
import { ThemeContext } from "../../services/providers/context/themeContext";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import { FavoriteMoviesAction } from "../../services/store/slices/FavoriteMoviesSlice";

export default function MoviesDetalis() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Movies = useSelector((state) => state.favoriteMovies.FavoriteMovies);

  useEffect(() => {
    dispatch(FavoriteMoviesAction());
  }, []);

  const Movie =  Movies.find((movie) => movie.id == params.id);

  const MovieIndex = Movies.findIndex((movie) => movie.id == params.id);

  const { theme } = useContext(ThemeContext);
  const cardStyle = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#343a40",
  };

  const textStyle = {
    color: theme === "light" ? "#212529" : "#f8f9fa",
  };

  if (!Movie) return <div>Loading...</div>;

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <Card className="position-relative mt-5" style={cardStyle}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${Movie.backdrop_path}`}
              style={{ height: "500px", padding: "30px" }}
            />
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mt-5" style={cardStyle}>
            <div className="card-container" style={cardStyle}>
              <Card.Body className="card-body">
                <Card.Title className="card-title text-danger">
                  Movie Name : {Movie.original_title}
                </Card.Title>
                <Card.Text className="card-text text-info ">
                  Movie Overview : {Movie.overview}
                </Card.Text>
                <Card.Text style={textStyle} className="card-text">
                  {" "}
                  Movie Release Date : {Movie.release_date}
                </Card.Text>
                <Card.Text style={textStyle} className="card-text">
                  {" "}
                  Movie Rating : {Movie.vote_average}
                </Card.Text>
                <Card.Text style={textStyle} className="card-text">
                  {" "}
                  Movie Votes : {Movie.vote_count}
                </Card.Text>
                <Card.Text style={textStyle} className="card-text">
                  {" "}
                  Movie Language : {Movie.original_language}
                </Card.Text>
                <Card.Text style={textStyle} className="card-text">
                  {" "}
                  Movie Popularity : {Movie.popularity}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
      <Pagination className="d-flex justify-content-center mt-5">
      <Pagination.First onClick={() => {  navigate(`/moviesdetails/${Movies[0].id}`)   }} />
        <Pagination.Prev disabled={MovieIndex == 0} onClick={() =>{navigate(`/moviesdetails/${Movies[MovieIndex - 1].id}`)}} />
        <Pagination.Item onClick={() => {navigate(`/moviesdetails/${Movies[0].id}`)}}>
          {1}
        </Pagination.Item>

        <Pagination.Item onClick={() => {navigate(`/moviesdetails/${Movies[1].id}`)}}>
          {2}
        </Pagination.Item>
        <Pagination.Item onClick={() => {navigate(`/moviesdetails/${Movies[2].id}`)}}>
          {3}
        </Pagination.Item>
        <Pagination.Item onClick={() => {navigate(`/moviesdetails/${Movies[3].id}`)}}>
          {4}
        </Pagination.Item>

        <Pagination.Next disabled={MovieIndex == Movies.length - 1} onClick={() => {navigate(`/moviesdetails/${Movies[MovieIndex + 1].id}`)}} />
        <Pagination.Last onClick={() => {navigate(`/moviesdetails/${Movies[Movies.length - 1].id}`)}} />
      </Pagination>
    </Container>
  );
}
