import { Card } from "./card";

  
export const CARDS: Card[] = [
    {
        id: 1,
        price: 10000,
        nb_available: 5,
        star: 5,
        like:true,
        promo :true,
        picture: "/assets/images/15 000@2x.png",
        created: new Date()
    },
    {
        id: 2,
        price: 15000,
        nb_available: 100,
        star: 2,
        like:true,
        promo :false,
        picture: "/assets/images/15 000@2x.png",
        created: new Date()
    },
    {
        id: 3,
        price: 20000,
        nb_available: 50,
        star: 2,
        like:true,
        promo :false,
        picture: "/assets/images/20 000@2x.png",
        created: new Date()
    },
    {
        id: 4,
        price: 25000,
        nb_available: 5,
        star: 2,
        like:false,
        promo :true,
        picture: "/assets/images/25 000@2x.png",
        created: new Date()
    },
    {
        id: 5,
        price: 30000,
        nb_available: 5,
        star: 1,
        like:false,
        promo :true,
        picture: "/assets/images/30 000@2x.png",
        created: new Date()
    },
    // {
    //     id: 6,
    //     price: 50000,
    //     nb_available: 5,
    //     star: 2,
    //     like:false,
    //     picture: "/assets/images/50 000@2x.png",
    //     created: new Date()
    // },
    // {
    //     id: 7,
    //     price: 100000,
    //     nb_available: 5,
    //     star: 2,
    //     like:true,
    //     picture: "/assets/images/100 000@2x.png",
    //     created: new Date()
    // },
    // {
    //     id: 8,
    //     price: 200000,
    //     nb_available: 5,
    //     star: 2,
    //     like:true,
    //     picture: "/assets/images/200 000@2x.png",
    //     created: new Date()
    // },
];