import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../services/providers/context/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteMoviesAction } from "../../services/store/slices/FavoriteMoviesSlice";

export default function FavoriteMovies() {
  const navigation = useNavigate();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.favoriteMovies.FavoriteMovies);

  useEffect(() => {
    dispatch(FavoriteMoviesAction());
  }, []);

  const FavMovies = movies.filter((movie) => movie.Favorite === true);


  if (!Array.isArray(movies)) {
    return <div>Error: Movies data is not in the expected format.</div>;
  }

  const cardStyle = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#343a40",
  };

  const textStyle = {
    color: theme === "light" ? "#212529" : "#f8f9fa",
  };

  return (
    <>
      {FavMovies.length > 0 ? (
        <Row sm={12} md={6} lg={4} xl={4} className="m-4 g-4">
          {FavMovies.map(
            ({ id, backdrop_path, overview, original_title, Favorite }) => (
              <Col key={id} className="mt-5">
                <Card style={cardStyle} className="h-100">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  />
                  <Card.Body>
                    <Card.Title style={textStyle}>{original_title}</Card.Title>
                    <Card.Text style={textStyle}>{overview}</Card.Text>
                    <div className="d-flex justify-content-center">
                      <Card.Link
                        className={
                          theme === "light"
                            ? "btn btn-dark text-light"
                            : "btn btn-light text-dark"
                        }
                        onClick={() => {
                          navigate(`/moviesdetails/${id}`);
                        }}
                      >
                        Details
                      </Card.Link>
                      <Card.Link
                        onClick={() => handleFavoriteClick(id)}
                        className={
                          theme === "light"
                            ? "btn btn-dark text-light"
                            : "btn btn-light text-dark"
                        }
                      >
                        <i
                          className={
                            Favorite
                              ? "fas fa-heart text-danger"
                              : "far fa-heart"
                          }
                        ></i>
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
