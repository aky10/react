import { useState, useEffect } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    Name: "default",
    Location: "default",
    Contact: "default",
  });
  useEffect(() => {
    userData();
  }, []);
  const userData = async () => {
    const data = await fetch("https://api.github.com/users/aky10");

    const json = await data.json();

    console.log(json);
    setUser(json);
  };

  return (
    <div className="m-10 ">
      {/* <img src={user.avatar_url} className="h-40 w-40"></img> */}
      <h3 className="font-bold text-xl my-5">Name:{user.name} Kumar Yadav</h3>
      <h3 className="font-bold text-xl my-5">Location: {user.location}</h3>
      <h3>Online Coding Platforms links</h3>
      <a
        className="font-bold text-xl my-5 px-2 text-blue-600"
        href="https://leetcode.com/aky8/"
      >
        {" "}
        Leetcode
      </a>
      <a
        className="font-bold text-xl my-5 px-2 text-blue-600"
        href="https://github.com/aky10"
      >
        {" "}
        Github
      </a>
      <a
        className="font-bold text-xl my-5 px-2 text-blue-600"
        href="https://codeforces.com/profile/aky8"
      >
        {" "}
        Codeforces
      </a>
    </div>
  );
};
export default User;
