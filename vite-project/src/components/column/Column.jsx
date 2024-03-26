/* eslint-disable react/jsx-key */
import Card from "../card/Card";
import * as S from "./Column.Styled";

export default function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleP>{title}</S.ColumnTitleP>
      </S.ColumnTitle>
      <S.ColumnCards>
        {cardList.map((card) => (
          <Card
            name={card.title}
            topic={card.topic}
            date={card.date}
            key={card.id}
          />
        ))}
      </S.ColumnCards>
    </S.MainColumn>
  );
}
