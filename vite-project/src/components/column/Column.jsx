/* eslint-disable react/jsx-key */
import Card from "../card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            name={card.title}
            topic={card.them}
            date={card.date}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}