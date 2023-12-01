import React from "react";
import Task from "../components/Task";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [darkMode] = useOutletContext();
  return (
    <div className={darkMode ? 'darkMode home' : 'ligthMode home'}>
      <Task darkMode={darkMode}/>
    </div>
  );
}

export default Home;