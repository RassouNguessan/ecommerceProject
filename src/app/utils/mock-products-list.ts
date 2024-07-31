import { voucherDetail } from "./types";

export const BUYED: voucherDetail[] = [
  {
    id: 1,
    image_uri: "./assets/images/10000@2x.png",
    qty: 100,
    price: 25000,
    date: "20-04-2024",
    hour: "16:35:53",
    currency: "FCFA",
    state: "Disponible",
    star: 0,
  },
  {
    id: 2,
    image_uri: "./assets/images/25000@2x.png",
    qty: 50,
    price: 10000,
    date: "20-04-2024",
    hour: "16:47:17",
    currency: "FCFA",
    state: "Disponible",
    star: 0,
  },
];

export const FAVORITES: voucherDetail[] = [
  {
    id: 1,
    image_uri: "./assets/images/10000@2x.png",
    qty: 200,
    price: 10000,
    date: "20-04-2024",
    hour: "16:35:53",
    currency: "FCFA",
    state: "Favoris",
    amount: 10000,
    star: 4,
    favorite: true,
    rating: 134
  },
  {
    id: 2,
    image_uri: "./assets/images/30000@2x.png",
    qty: 50,
    price: 30000,
    date: "20-04-2024",
    hour: "16:47:17",
    currency: "FCFA",
    state: "Favoris",
    amount: 30000,
    star: 5,
    favorite: true,
    rating: 216
  },
];
