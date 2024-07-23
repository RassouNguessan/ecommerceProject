import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { Bannier4Component } from "../bannier-4/bannier-4.component";
import { CommonModule } from "@angular/common";
import { ImgBlockComponent } from "../img-block/img-block.component";

@Component({
  selector: "app-bannier-1",
  standalone: true,
  templateUrl: "./bannier-1.component.html",
  styleUrl: "./bannier-1.component.scss",
  imports: [Bannier4Component, ImgBlockComponent, CommonModule],
})
export class Bannier1Component implements AfterViewInit {
  @ViewChild("banner") banner!: ElementRef;
  @ViewChild("top") top!: ElementRef;
  @ViewChild("bottom") bottom!: ElementRef;

  isVisible = false;
  bannerMinHeight = 600;

  constructor(private router: Router) {}

  purchaseOrder() {
    this.router.navigate(["/distributed"]);
  }

  onIs() {
    this.isVisible = !this.isVisible;
  }

  scrollToBottom() {
    window.scroll({
      top: this.banner.nativeElement.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  ngAfterViewInit() {
    this.adjustHeight();
  }

  adjustHeight() {
    if (typeof window === "undefined" || window === null) return;

    const secondNavbar = document.getElementById("second-navbar");
    if (secondNavbar) {
      const newHeight = window.innerHeight - secondNavbar.clientHeight;

      const okHeight =
        newHeight < this.bannerMinHeight ? this.bannerMinHeight : newHeight;

      this.banner.nativeElement.style.height = `${okHeight}px`;

      this.top.nativeElement.style.height = `${okHeight - 150}px`;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.adjustHeight();
  }
}
