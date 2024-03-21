// Импортирую хук useState из пакета 'react'
import { useState } from "react";

export default function Header({addCard}) {
  // Получаю состояние isOpen и функцию setIsOpen из хука useState, с базовым значением false
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState); // Прописываю функцию для выпадания элемента

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>
              {/* <a href="#popNewCard">Создать новую задачу</a>*/} Создать новую задачу 
            </button>
            <a
              onClick={toggleDropdown} // Подключаю функцию выпадания элемента через подпись на событие OnClick
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            {isOpen && ( // Прописываю логику открытия/закрытия ВЫПАДАЮЩЕГО ЭЛЕМЕНТА через логический оператор И
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
