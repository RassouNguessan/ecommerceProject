import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
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

// //interface pour la pagination créer en fonction du endpoint du serveur backend
// export interface PaginationParams {
//     [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
//     page: number;
//     perPage: number;
// }