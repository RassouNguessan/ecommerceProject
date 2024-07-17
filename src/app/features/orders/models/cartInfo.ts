export interface CardInfo {
    id: number;
    cardImage: string;
    nbBonCommande: number;
    montantBon: number;
    dateAndTime: string;
    available: string | number;
    montant?: number;
  }