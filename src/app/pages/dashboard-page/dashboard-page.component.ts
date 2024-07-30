import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { Banner1Component } from "../../widgets/banner-1/banner-1.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { Banner2Component } from "../../widgets/banner-2/banner-2.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { User } from '../../utils/types';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [NavbarComponent, Banner1Component, PurchaseMessageComponent, CardComponent, Banner2Component, Banner3Component, FooterComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{
  user: User | null = null;
  private apiUrl = 'https://users-service-enu3.onrender.com/api/v1';


  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<User>(`${this.apiUrl}/me`).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
