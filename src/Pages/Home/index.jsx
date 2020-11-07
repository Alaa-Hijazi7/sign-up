import React from "react";

const Home = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <h1>Hello World !</h1>
      <p>My name is Alaa</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
