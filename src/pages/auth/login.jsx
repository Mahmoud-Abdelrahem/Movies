import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/providers/context/authLogin";
import { Authlogin } from "../../services/utils/auth/auth";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState({ usernameError: "", passwordError: "" });

  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name == "username") {
      setUser({ ...user, [e.target.name]: e.target.value });
      setError({
        ...error,
        usernameError:
          e.target.value.length == 0 ? "This field is required" : "",
      });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
      setError({
        ...error,
        passwordError:
          e.target.value.length == 0 ? "This field is required" : "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error.usernameError === "" && error.passwordError === "") {
      try {
        const log = await Authlogin(user.username, user.password);
        console.log(log);
        localStorage.setItem("token", log.data.data.accessToken);
        localStorage.setItem("refreshToken", log.data.data.refreshToken);
        setToken(log.data.data.accessToken);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-50 mx-auto mt-5"
      >
        <div className="form-group">
          <label htmlFor="exampleInputusername1" className="form-label">
            UserName
          </label>
          <input
            type="username"
            className="form-control"
            id="exampleInputusername1"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <small id="usernameHelp" className="form-text text-muted text-center">
            We'll never share your username with anyone else.
          </small>
          <p className="text-danger">{error.usernameError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <small id="PasswordHelp" className="form-text text-muted text-center">
            We'll never share your Password with anyone else.
          </small>
          <p className="text-danger">{error.passwordError}</p>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-100 ">
          Login
        </button>
      </form>

      <div className="text-center text-md-start mt-4 pt-2">
        <p className="small fw-bold mt-2 pt-1 mb-2">
          Don't have an account?{" "}
          <a href="/register" className="link-danger">
            Register
          </a>
        </p>
      </div>
    </>
  );
}
