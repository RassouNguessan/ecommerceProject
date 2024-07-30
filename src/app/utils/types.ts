//fichier qui nous sert à créer des interfaces que nous allons utiliser dans tout notre projet

// export interface Options {
//     headers?: HttpHeaders | {
//         [header: string]: string | string[];
//     };
//     observe?: 'body';
//     context?: HttpContext;
//     params?: HttpParams | {
//         [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
//     };
//     reportProgress?: boolean;
//     responseType?: 'json';
//     withCredentials?: boolean;
//     transferCache?: {
//         includeHeaders?: string[];
//     } | boolean;
// }

export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  email: string;
  phoneNumber: number;
  landLineNumber?: number;
  denomination?: string;
  country?: string;
  code: number;
  type?: [];
  category?: [];
  subCategory?: [];
  urlLink?: string;
  password: string;
  confirmationPassword: string;
  isAdmin?: boolean;
}

export interface passwordReset {
  email: string;
  otpCode: number;
  resetDate: Date;
}

export class CardDetail {
  id: number | undefined;
  priceCard: number | undefined;
  nbAvailable: number | undefined;
  star: number | undefined;
  favorite: boolean | undefined;
  promo: boolean | undefined;
  picture: string | undefined;
  available: boolean | undefined;
  cardTitle: string | undefined;
  detailCard: string | undefined;
  relevantStore: string | undefined;
}

export interface CardInfo {
  id: number;
  cardImage: string;
  nbBonCommande: number;
  montantBon: number;
  dateAndTime: string;
  available: string | number;
  montant?: number;
}

export enum Registrationstate {
  One,
  Two,
  Three,
  Last,
}

export interface Card {
  id: number;
  // Données de card details
  available: string;
  cardTitle: string;
  detailCard: string;
  relevantStore: string;
  //=========================
  price: number;
  nbAvailable: number;
  star: number;
  favorite: boolean;
  promo: boolean;
  picture: string;
  created: Date;
}

export interface summaryList {
  id: number;
  title: string;
  icon: string;
  people_number?: number;
  number?: number;
  amount?: number;
  category?: number;
  canal?: number;
}


export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface ReserCredentials {
  email: string;
  new_password: string;
}
