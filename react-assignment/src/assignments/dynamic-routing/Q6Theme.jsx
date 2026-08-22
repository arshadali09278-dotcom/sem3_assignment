import React, { createContext, useContext, useState } from 'react';

const ThemeCtx = createContext();

const DeepChild = () => {
  let theme = useContext(ThemeCtx);
  return (
    <div style={{background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding:"10px"}}>
      <p>Current theme: {theme}</p>
    </div>
  );
};

const Middle = () => {
  return <DeepChild />;
};

const Q6Theme = () => {
  let [theme, setTheme] = useState("light");

  return (
    <ThemeCtx.Provider value={theme}>
      <div style={{padding:"20px"}}>
        <h2>Q6 - Theme Context</h2>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
        <Middle />
      </div>
    </ThemeCtx.Provider>
  );
};

export default Q6Theme;
