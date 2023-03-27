import agua from "../img/agua.png";
import aceite from "../img/aceite.jpg";
import yerba from "../img/yerba.jpg";
import choclo from "../img/choclo.png";
import cerveza from "../img/cerveza.webp";
import coca from "../img/coca.webp";
import vino from "../img/vino.webp";
import fideos from "../img/fideos.webp";
import papel from "../img/papel.webp";
import detergente from "../img/detergente.webp";
import jabon from "../img/jabon.webp";
import jabonRopa from "../img/jabonRopa.webp";

const Products = [
  {
    id: 1,
    name: "Agua",
    title: "Eco de los Andes",
    precio: 115,
    image: agua,
    category: "bebidas",
  },
  {
    id: 2,
    name: "Gaseosas",
    title: "Coca Cola",
    price: 520,
    image: coca,
    category: "bebidas",
  },
  {
    id: 3,
    name: "Cerveza",
    title: "Andes",
    price: 330,
    image: cerveza,
    category: "bebidas",
  },
  {
    id: 4,
    name: "Vinos",
    title: "Catena",
    price: 1100,
    image: vino,
    category: "bebidas",
  },

  {
    id: 5,
    name: "Aceite",
    title: "Natura",
    price: 500,
    image: aceite,
    category: "almacen",
  },

  {
    id: 6,
    name: "Yerba",
    title: "Playadito",
    price: 650,
    image: yerba,
    category: "almacen",
  },
  {
    id: 7,
    name: "Conservas",
    title: "Mcain",
    price: 110,
    image: choclo,
    category: "almacen",
  },

  {
    id: 8,
    name: "Fideos",
    title: "Don Vicente",
    price: 180,
    image: fideos,
    category: "almacen",
  },
  {
    id: 9,
    name: "Detergente",
    title: "Cascade",
    price: 170,
    image: detergente,
    category: "limpieza",
  },
  {
    id: 10,
    name: "Jabon",
    title: "Rexona",
    price: 220,
    image: jabon,
    category: "limpieza",
  },
  {
    id: 11,
    name: "Jabon de ropa",
    title: "Skip",
    price: 650,
    image: jabonRopa,
    category: "limpieza",
  },
  {
    id: 12,
    name: "Papel Higienico",
    title: "Higienol",
    price: 420,
    image: papel,
    category: "limpieza",
  },
];

export default Products;
