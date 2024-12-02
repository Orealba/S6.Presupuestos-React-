import { Card } from './Card';

const cards = [
  {
    id: 1,
    title: 'Seo',
    text: 'Programación de una web responsive completa',
    price: 300,
  },
  {
    id: 2,
    title: 'Ads',
    text: 'Programación de una web responsive completa',
    price: 400,
  },
  {
    id: 3,
    title: 'Web',
    text: 'Programación de una web responsive completa',
    price: 500,
  },
];
const Cards = () => {
  return (
    <div className="flex flex-col items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Cards;
