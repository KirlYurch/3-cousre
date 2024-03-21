import Column from "../column/Column";

const statusList = [ // Отрисовываю названия колонок через список статусов
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function Main({ cardList, isLoading }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
          {isLoading
              ? "Данные загружаются, пожалуйста подождите..."
              :statusList.map((item) => (  // Создаю условие через данный массив для отрисовки нужного количества колонок, куда будут переданы карточки, подходящие по условию
                  <Column
                    key={item}
                    title={item}
                    cardList={cardList.filter((card) => card.status === item)}
                  />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}