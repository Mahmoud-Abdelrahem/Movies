import { useSelector, useDispatch } from "react-redux";

function Home() {
  const loader = useSelector((state) => state.loader.loader);

  return (
    <>
      {loader ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h1>Home</h1>
        </div>
      )}
    </>
  );
}

export default Home;
