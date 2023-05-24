import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-20">
      <div className="container bg-sky-200 text-center">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5">Go Back to Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};



export default ErrorPage;