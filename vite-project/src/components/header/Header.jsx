// Импортирую хук useState из пакета 'react'
import { useState } from "react";
import * as S from "./Header.Styled";

export default function Header({ addCard }) {
  // Получаю состояние isOpen и функцию setIsOpen из хука useState, с базовым значением false
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState); // Прописываю функцию для выпадания элемента

  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight>
            <a href="" target="_self">
              <S.HeaderLogoImg src="public/logo.png" alt="logo" />
            </a>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <a href="" target="_self">
              <S.HeaderLogoImg src="public/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderBtnMain id="btnMainNew" onClick={addCard}>
              {/* <a href="#popNewCard">Создать новую задачу</a>*/} Создать
              новую задачу
            </S.HeaderBtnMain>
            <S.HeaderUser
              onClick={toggleDropdown} // Подключаю функцию выпадания элемента через подпись на событие OnClick
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </S.HeaderUser>
            {isOpen && ( // Прописываю логику открытия/закрытия ВЫПАДАЮЩЕГО ЭЛЕМЕНТА через логический оператор И
              <S.HeaderPopUser
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <S.PopUserName>Ivan Ivanov</S.PopUserName>
                <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
                <S.PopUserTheme>
                  <S.PopUserThemeP>Темная тема</S.PopUserThemeP>
                  <S.PopUserThemeInput
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  />
                </S.PopUserTheme>
                <S.PopUserButton type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </S.PopUserButton>
              </S.HeaderPopUser>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
}
