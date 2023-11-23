import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/")
  };

  return (
    <div>
      <h2 className="my-10 text-center text-4xl">This is home page</h2>
      <div className="flex items-center justify-center">
        <button onClick={() => handleLogOut()} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
