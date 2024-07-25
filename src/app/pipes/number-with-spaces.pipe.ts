import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatNumber",
  standalone: true,
})
export class NumberWithSpacesPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== "number") {
      return value;
    }

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); //Formatage des nombres purn l'ajout de l'espace a chaque milliers
  }
}
