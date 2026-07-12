import avocado from "../assets/images/avocado.png";
import blueberry from "../assets/images/blueberry.png";
import cappuccino from "../assets/images/cappuccino.png";
import curs from "../assets/images/curs.png";
import salad from "../assets/images/salad.jpg";
import granola from "../assets/images/granola.png";

export const categories = [
  "Breakfast & Brunch",
  "Coffee & Drinks",
  "Pastries",
  "Sides",
];

export const menuItems = [
  {
    id: 1,
    image: avocado,
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough with a poached egg",
    price: "12.99",
    category: "Breakfast & Brunch",
  },
  {
    id: 2,
    image: blueberry,
    name: "Blueberry Muffin",
    description: "Fresh blueberries in a moist muffin",
    price: "4.99",
    category: "Pastries",
  },
  {
    id: 3,
    image: cappuccino,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk",
    price: "4.99",
    category: "Coffee & Drinks",
  },
  {
    id: 4,
    image: curs,
    name: "Croissant",
    description: "Buttery, flaky pastry",
    price: "3.99",
    category: "Pastries",
  },
  {
    id: 5,
    image: salad,
    name: "Green Salad",
    description: "Mixed greens with vinaigrette",
    price: "8.99",
    category: "Sides",
  },
  {
    id: 6,
    image: granola,
    name: "Granola Bowl",
    description: "Oats with nuts and fresh fruit",
    price: "7.99",
    category: "Breakfast & Brunch",
  },
];
