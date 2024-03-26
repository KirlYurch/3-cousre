import Column from "../column/Column";
import * as S from "./Main.Styled.js";

const statusList = [
  // Отрисовываю названия колонок через список статусов
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function Main({ cardList, isLoading }) {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoading
              ? "Данные загружаются, пожалуйста подождите..."
              : statusList.map(
                  (
                    item // Создаю условие через данный массив для отрисовки нужного количества колонок, куда будут переданы карточки, подходящие по условию
                  ) => (
                    <Column
                      key={item}
                      title={item}
                      cardList={cardList.filter((card) => card.status === item)}
                    />
                  )
                )}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
}
