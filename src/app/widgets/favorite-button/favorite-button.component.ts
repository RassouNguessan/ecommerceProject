import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-favorite-button",
  standalone: true,
  imports: [],
  templateUrl: "./favorite-button.component.html",
  styleUrl: "./favorite-button.component.scss",
})
export class FavoriteButtonComponent implements AfterViewInit {
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  ngAfterViewInit(): void {
    if (typeof window === "undefined") return;

    document.addEventListener("DOMContentLoaded", function () {
      const favoriteContainer = document.getElementById("favoriteContainer");

      const stars = favoriteContainer?.querySelectorAll(".star");
      let filledStars = 0;

      const updateStars = (count: number) => {
        stars?.forEach((star, index) => {
          if (index < count) {
            star.classList.add("filled");
          } else {
            star.classList.remove("filled");
          }
        });
      };

      favoriteContainer?.addEventListener("mouseenter", () => {
        updateStars(filledStars);
      });

      favoriteContainer?.addEventListener("mouseleave", () => {
        updateStars(filledStars);
      });

      stars?.forEach((star, index) => {
        star.addEventListener("click", () => {
          filledStars = index + 1;
          updateStars(filledStars);
        });

        star.addEventListener("mouseenter", () => {
          updateStars(index + 1);
        });

        star.addEventListener("mouseleave", () => {
          updateStars(filledStars);
        });
      });
    });
  }
}
