import {useEffect, useState} from "react";

const About = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    const getAbout = async () => {
      await fetch("http://localhost:8080/users")
        .then((res) => res.json())
        .then((res) => setAbout(res[0].about));
    };

    getAbout();
  }, []);
  return (
    <>
      <div className="about-container">
        <h2>About Me:</h2>
        <p>{about}</p>
      </div>
    </>
  );
};

export default About;
