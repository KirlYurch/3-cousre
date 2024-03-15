import "./App.css";
import Main from "./components/main/Main.jsx";
import Header from "./components/header/Header.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import PopNewCard from "./components/popups/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit.jsx";
import PopBrowse from "./components/popups/PopBrowse.jsx";

function App() {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
