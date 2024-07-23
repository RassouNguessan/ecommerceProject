import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-heart",
  standalone: true,
  imports: [],
  templateUrl: "./heart.component.html",
  styleUrl: "./heart.component.scss",
})
export class HeartComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof window === "undefined") return;

    document.addEventListener("DOMContentLoaded", function () {
      const favoriteContainer = document.getElementById("favoriteContainer");
      const heart = favoriteContainer?.querySelector(".heart");
      let isFilled = false;

      const updateHeart = (filled: boolean) => {
        if (filled) {
          heart?.classList.add("filled");
        } else {
          heart?.classList.remove("filled");
        }
      };

      favoriteContainer?.addEventListener("mouseenter", () => {
        updateHeart(true);
      });

      favoriteContainer?.addEventListener("mouseleave", () => {
        if (!isFilled) {
          updateHeart(false);
        }
      });

      heart?.addEventListener("click", () => {
        isFilled = !isFilled;
        updateHeart(isFilled);
      });
    });
  }
}
