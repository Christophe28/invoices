export const darkmode = (darkMode:boolean, otherClasse:string):string => {
  const darkModeActive = darkMode ? "darkmode" : "";
  return `${otherClasse} ${darkModeActive}`
}