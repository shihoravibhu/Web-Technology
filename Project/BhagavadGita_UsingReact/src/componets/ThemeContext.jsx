/* This code snippet is creating a custom theme provider in a React application. */
// import React, { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => setDarkMode((prev) => !prev);

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }