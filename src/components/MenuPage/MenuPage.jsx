import React from "react";
import PizzaCard from "../PizzaCard/PizzaCard";

const menuItems = [
  {
    name: "Margherita",
    price: "199,-",
    description:
      "Zio pizza sauce and cheese mix, Parmigiano Reggiano, fresh basil",
    allergens: "(M, W)",
    image: "resource/image/pizza/Margherita.avif", // Updated path
  },
  {
    name: "Capricciosa",
    price: "249,-",
    description:
      "Zio pizza sauce and cheese mix, Roli’s prosciutto cotto, Porcini mushroom, olives, oregano",
    allergens: "(M, W)",
    image: "resource/image/pizza/Capricciosa.avif", // Updated path
  },
  {
    name: "Pepperoni",
    price: "249,-",
    description:
      "Zio pizza sauce and cheese mix, Roli’s pepperoni salame, roasted pepper",
    allergens: "(M, W)",
    image: "resource/image/pizza/Pepperoni.avif", // Updated path
  },
  {
    name: "Parma Prosciutto",
    price: "255,-",
    description:
      "Zio pizza sauce and cheese mix, Parma prosciutto, rucola, semi-sundried cherry tomatoes, Parmigiano Reggiano",
    allergens: "(M, W)",
    image: "resource/image/pizza/ParmaProsciutto.avif", // Updated path
  },
  {
    name: "Chicken pizza",
    price: "244,-",
    description:
      "Røros cream, Zio cheese mix, Sortkäl, Roli's Chicken Sausage, Roasted Pepper, Spring Onion",
    allergens: "(M, W)",
    image: "resource/image/pizza/Margherita.avif", // Updated path
  },
  {
    name: "Zio Pizza Special (Spicy)",
    price: "254,-",
    description:
      "Røros cream, Zio cheese mix, Cavolo Nero, Roli’s chorizo, n’duja, chevre, Zio's Chilli honey",
    allergens: "(M, W)",
    image: "resource/image/pizza/Zio.avif", // Updated path
  },
  {
    name: "Porchetta",
    price: "254,-",
    description:
      "Røros Rømme, Fiordilatte Mozzarella, Rolli’s Home-made Porchetta, rucola, pomodorini pelati rossi semisecchi, Zio’s chili honey",
    allergens: "(M, W)",
    image: "resource/image/pizza/ParmaProsciutto.avif", // Updated path
  },
  {
    name: "Raindeer Pizza",
    price: "254,-",
    description:
      "Røros Rømme, Fiordilatte Mozzarella, Minced Raindeer meat, porcini mushrooms, roasted pepper, Tyttebærsyltetøy",
    allergens: "(M, W)",
    image: "resource/image/pizza/Margherita.avif", // Updated path
  },
  {
    name: "Ultimate Vegetarian",
    price: "249,-",
    description:
      "Zio pizza sauce and cheese mix, eggplant, zucchini, Porcini mushroom, coriander",
    allergens: "(Vegan on request, M, W)",
    image: "resource/image/pizza/UltimateVegetarianer.avif", // Updated path
  },
  {
    name: "Caprese Vegetarian",
    price: "219,-",
    description: "Zio pizza sauce, Zio's cheese mix, fresh tomato, fresh basil",
    allergens: "(Vegan on request, M, W)",
    image: "resource/image/pizza/Caprese.avif", // Updated path
  },
  {
    name: "Mortadella",
    price: "254,-",
    description:
      'Røros cream, Zio cheese mix, Mortadella ham, burrata "The Queen of Cheese", pistacchio, Zio\'s chili honey',
    allergens: "(M, W)",
    image: "resource/image/pizza/Mortadella.avif", // Updated path
  },
  {
    name: "Gluten-free Base",
    price: "45,-",
    description: "For all our pizzas",
    allergens: "",
    image: "resource/image/pizza/Margherita.avif", // Updated path
  },
];

const MenuPage = () => {
  return (
    <div className="menu-container">
      <h2>Our Pizzas</h2>
      <div className="pizza-cards-container">
        {menuItems.map((item, index) => (
          <PizzaCard key={index} pizza={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
