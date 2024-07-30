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

/*
export interface Individual {
  id?: number;
  nom: string;
  prenom: string;
  dob: Date;
  email: string;
  phone: number;
  code: number;
  pwd: string;
  cfrpwd: string;
}

export interface Enterprise {
  id?: number;
  nom: string;
  prenom: string;
  denomination: string;
  landlinenumber: number;
  phonenumber: number;
  email: string;
  country: string;
  code: number;
  type: [];
  category: [];
  subcategory: [];
  link: string;
  pwd: string;
  cfrpwd: string;
}

export interface Products {}

export class CardDetail {
  id: number | undefined;
  priceCard: number | undefined;
  nb_available: number | undefined;
  star: number | undefined;
  like: boolean | undefined;
  promo: boolean | undefined;
  picture: string | undefined;
  available: boolean | undefined;
  cardTitle: string | undefined;
  detailCard: string | undefined;
  relevantStore: string | undefined;
}
 */

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

export class Card {
  id: number | undefined;
  // Données de card details
  available: string | undefined;
  cardTitle: string | undefined;
  detailCard: string | undefined;
  relevantStore: string | undefined;
  //=========================
  price: number | undefined;
  nb_available: number | undefined;
  star: number | undefined;
  like: boolean | undefined;
  promo: boolean | undefined;
  picture: string | undefined;
  created: Date | undefined;
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
export interface sendOTP{
  email:string
}


export interface RegisterParticular {
  first_name: string;
  last_name:  string;
  birth_day:  Date;
  phone:      string;
  email:      string;
  password:   string;
}

export interface RegisterParticularResponse {
  id:                    string;
  first_name:            string;
  last_name:             string;
  email:                 string;
  phone:                 string;
  type:                  string;
  is_active:             boolean;
  number_fix:            string;
  company:               string;
  country:               string;
  professional_category: string;
  sub_category:          string;
  website:               string;
}
export interface RegisterProfessionnal {
  first_name:            string;
  last_name:             string;
  email:                 string;
  number_fix:            string;
  password:              string;
  company:               string;
  country:               string;
  professional_category: string;
  sub_category:          string;
  website:               string;
}

export interface RegisterProfessionnalResponse {
  id:                    string;
  first_name:            string;
  last_name:             string;
  email:                 string;
  phone:                 string;
  type:                  string;
  is_active:             boolean;
  number_fix:            string;
  company:               string;
  country:               string;
  professional_category: string;
  sub_category:          string;
  website:               string;
}