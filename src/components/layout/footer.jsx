import { useContext } from "react";
import { ThemeContext } from "../../services/providers/context/ThemeContext";

function Footer() {

  const { theme, setTheme } = useContext(ThemeContext);

  const cardStyle = {
    height: "100%",
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
  };

  const textStyle = {
    color: theme === 'light' ? '#212529' : '#f8f9fa'
  };

  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5" style={cardStyle}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-facebook-f" /> 
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                MDB Movies
              </h6>
              <p>
                Here you can Find All The Best Movies.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Movies</h6>
              <p>
                <a href="#!" className="text-reset">
                  Adventure
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Action
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Comedy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Horror
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">New Movies</h6>
              <p>
                <a href="#!" className="text-reset">
                  Release Date
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Popularity
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  F2
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Top Hunting
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                info@MDB.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3" /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        ©
        {new Date().getFullYear()} 
          Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDB.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
