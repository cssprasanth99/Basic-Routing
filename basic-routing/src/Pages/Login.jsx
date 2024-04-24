import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form>
        <br />
        <br />
        <input type="text" placeholder="Enter the Gmail-id" />
        <br />
        <br />
        <input type="text" placeholder="Enter Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
