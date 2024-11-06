import React from "react";
import { useParams } from "react-router-dom";

export const menuItems = [
  {
    name: "Margherita",
    price: "199,-",
    description:
      "Zio pizza sauce and cheese mix, Parmigiano Reggiano, fresh basil",
    allergens: "Milk, Wheat",
  },
  {
    name: "Capricciosa",
    price: "249,-",
    description:
      "Zio pizza sauce and cheese mix, Roli’s prosciutto cotto, Porcini mushroom, olives, oregano",
    allergens: "Milk, Wheat",
  },
  {
    name: "Pepperoni",
    price: "249,-",
    description:
      "Zio pizza sauce and cheese mix, Roli’s pepperoni salame, roasted pepper",
    allergens: "Milk, Wheat",
  },
  {
    name: "Parma Prosciutto",
    price: "255,-",
    description:
      "Zio pizza sauce and cheese mix, Parma prosciutto, rucola, semi-sundried cherry tomatoes, Parmigiano Reggiano",
    allergens: "Milk, Wheat",
  },
  {
    name: "Chicken pizza",
    price: "244,-",
    description:
      "Røros cream, Zio cheese mix, Sortkäl, Roli's Chicken Sausage, Roasted Pepper, Spring Onion",
    allergens: "Milk, Wheat",
  },
  {
    name: "Zio Pizza Special (Spicy)",
    price: "254,-",
    description:
      "Røros cream, Zio cheese mix, Cavolo Nero, Roli’s chorizo, n’duja, chevre, Zio's Chilli honey",
    allergens: "Milk, Wheat",
  },
  {
    name: "Porchetta",
    price: "254,-",
    description:
      "Røros Rømme, Fiordilatte Mozzarella, Rolli’s Home-made Porchetta, rucola, pomodorini pelati rossi semisecchi, Zio’s chili honey",
    allergens: "Milk, Wheat",
  },
  {
    name: "Raindeer Pizza",
    price: "254,-",
    description:
      "Røros Rømme, Fiordilatte Mozzarella, Minced Raindeer meat, porcini mushrooms, roasted pepper, Tyttebærsyltetøy",
    allergens: "Milk, Wheat",
  },
  {
    name: "Ultimate Vegetarian",
    price: "249,-",
    description:
      "Zio pizza sauce and cheese mix, eggplant, zucchini, Porcini mushroom, coriander",
    allergens: "Vegan on request, Milk, Wheat",
  },
  {
    name: "Caprese Vegetarian",
    price: "219,-",
    description: "Zio pizza sauce, Zio's cheese mix, fresh tomato, fresh basil",
    allergens: "Vegan on request, Milk, Wheat",
  },
  {
    name: "Mortadella",
    price: "254,-",
    description:
      'Røros cream, Zio cheese mix, Mortadella ham, burrata "The Queen of Cheese", pistacchio, Zio\'s chili honey',
    allergens: "Milk, Wheat",
  },
  {
    name: "Gluten-free Base",
    price: "45,-",
    description: "For all our pizzas",
    allergens: "",
  },
];

const MenuItem = () => {
  const { id } = useParams();
  const item = menuItems[id];

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <p>Allergens: {item.allergens}</p>
    </div>
  );
};

export default MenuItem;
