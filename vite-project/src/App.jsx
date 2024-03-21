import "./App.css";
import Main from "./components/main/Main.jsx";
import Header from "./components/header/Header.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import PopNewCard from "./components/popups/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit.jsx";
import PopBrowse from "./components/popups/PopBrowse.jsx";
import { useEffect, useState } from "react";
import { cardList } from "./Data.jsx"

function App() {  
  const [cards, setCards] = useState(cardList);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function addCard() { // Прописываю логику добавления новой задачи
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        topic: "Web Design",
        title: "Новая задача",
        date: "30.10.23",
        status: "Без статуса",
      },
    ]);
  }
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard}/>
        <Main isLoading={isLoading} cardList={cards}/>
      </Wrapper>
    </>
  );
}

export default App;
