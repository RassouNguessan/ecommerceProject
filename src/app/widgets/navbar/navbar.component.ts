import { CommonModule } from "@angular/common";
import { Component, HostListener, Input, signal } from "@angular/core";
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from "@angular/router";
import { ChangeDetectorRef } from "@angular/core";
import { User } from "../../utils/types";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  flashMessage = signal(true);
  @Input() user: User | null = null;

  //  user = {
  //   name: "User Name",
  //   photoUrl: "/assets/images/profil_icon.png",
  // };
  selectedOption: string | null | undefined = null;
  dropdownOpen = false;

  options = [
    {
      label: "Paramètre",
      value: "/purchase",
      icon: "/assets/images/Groupe 14974.png",
    },
    { label: "Profil", value: "/profile", icon: "/assets/icons/profil.png" },
  ];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  // Masquer certains éléments de la barre de navigation
  hideNavItems(): boolean {
    // Les routes concernées
    const hiddenRoutes = [
      "/login",
      "/register/individual",
      "/register/company",
      "/register",
    ];
    return hiddenRoutes.includes(this.router.url);
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: { label: string; value: string; icon: string }): void {
    this.selectedOption = this.user?.first_name; // Garder le nom de l'utilisateur affiché
    this.router.navigate([option.value]).then(() => {
      this.dropdownOpen = false; // Replier le dropdown après la navigation
    });
  }

  // Masquer le menu déroulant si on clique en dehors
  @HostListener("document:click", ["$event"])
  clickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest(".custom-select")) {
      this.dropdownOpen = false;
    }
  }
}
