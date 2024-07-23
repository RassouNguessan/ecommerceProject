import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { AchatsComponent } from "../../widgets/achats/achats.component";
import { AddCartButtonComponent } from "../../widgets/add-cart-button/add-cart-button.component";
import { BackbuttonComponent } from "../../widgets/backbutton/backbutton.component";
import { Bannier1Component } from "../../widgets/bannier-1/bannier-1.component";
import { Bannier2Component } from "../../widgets/bannier-2/bannier-2.component";
import { Bannier3Component } from "../../widgets/bannier-3/bannier-3.component";
import { Bannier4Component } from "../../widgets/bannier-4/bannier-4.component";
import { BasketComponent } from "../../widgets/basketcomponent/basketcomponent.component";
import { BeneficiaryListComponent } from "../../widgets/beneficiary-list/beneficiary-list.component";
import { BodyComponent } from "../../widgets/body/body.component";
import { BtnAddBasketComponent } from "../../widgets/btn-add-basket/btn-add-basket.component";
import { BuyvouchersComponent } from "../../widgets/buyvouchers/buyvouchers.component";
import { CardComponent } from "../../widgets/card/card.component";
import { CardDetailComponent } from "../../widgets/card-detail/card-detail.component";
import CardVisaMastercardPaymentComponent from "../../widgets/card-visa-mastercard-payment/card-visa-mastercard-payment.component";
import { CartsuccessComponent } from "../../widgets/cartsuccess/cartsuccess.component";
import { ChanneldistributionComponent } from "../../widgets/channeldistribution/channeldistribution.component";
import { ChoiceComponent } from "../../widgets/choice/choice.component";
import { ClientComponent } from "../../widgets/clients/client.component";
import { CompanyComponent } from "../../widgets/company/company.component";
import { DetailbasketComponent } from "../../widgets/detailbasket/detailbasket.component";
import { DetailorderComponent } from "../../widgets/detailorder/detailorder.component";
import { DetailpaymentComponent } from "../../widgets/detailpayment/detailpayment.component";
import { DistributedComponent } from "../../widgets/distributed/distributed.component";
import { DistributeinduvidualComponent } from "../../widgets/distributeinduvidual/distributeinduvidual.component";
import { DistributionChannelComponent } from "../../widgets/distribution-channel/distribution-channel.component";
import { EntrepriseComponent } from "../../widgets/entreprise/entreprise.component";
import { FavoriteButtonComponent } from "../../widgets/favorite-button/favorite-button.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { RegisterComponent } from "../../widgets/form-register/register.component";
import { FormsComponent } from "../../widgets/forms/forms.component";
import { GreatdealComponent } from "../../widgets/greatdeal/greatdeal.component";
import { HeaderComponent } from "../../widgets/header/header.component";
import { HeartComponent } from "../../widgets/heart/heart.component";
import { HorizontalCardComponent } from "../../widgets/horizontal-card/horizontal-card.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";
import { IndexComponent } from "../../widgets/index/index.component";
import { IndividualComponent } from "../../widgets/individual/individual.component";
import { LoadingChargeComponent } from "../../widgets/loading-charge/loading-charge.component";
import { LoginComponent } from "../../widgets/login/login.component";
import { LottieBagComponent } from "../../widgets/lottie-bag/lottie-bag.component";
import { LottieFilesComponent } from "../../widgets/lottie-files/lottie-files.component";
import { LottieSuccesComponent } from "../../widgets/lottie-succes/lottie-succes.component";
import { LottieValidateComponent } from "../../widgets/lottie-validate/lottie-validate.component";
import { LottiesComponent } from "../../widgets/lotties/lotties.component";
import { LottiesucessComponent } from "../../widgets/lottiesucess/lottiesucess.component";
import { MeansPaymentComponent } from "../../widgets/means-payment/means-payment.component";
import { MyorderComponent } from "../../widgets/myorder/myorder.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { OrderComponent } from "../../widgets/order/order.component";
import { OrderSuccessComponent } from "../../widgets/order-success/order-success.component";
import { OrderdetailAmountComponent } from "../../widgets/orderdetail-amount/orderdetail-amount.component";
import { PageNotFoundComponent } from "../../widgets/page-not-found/page-not-found.component";
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
import { PasswordResetComponent } from "../../widgets/password-reset/password-reset.component";
import { PaymentComponent } from "../../widgets/payment/payment.component";
import { PromosComponent } from "../../widgets/promotions/promos.component";
import { PurchaseComponent } from "../../widgets/purchase/purchase.component";
import { PurchaseAvailableComponent } from "../../widgets/purchase-available/purchase-available.component";
import { PurchaseAvailable2Component } from "../../widgets/purchase-available-2/purchase-available.component";
import { PurchaseMostComponent } from "../../widgets/purchase-most/purchase-most.component";
import { PurchasePromoComponent } from "../../widgets/purchase-promo/purchase-promo.component";
import { PurchaseRecentViewComponent } from "../../widgets/purchase-recent-view/purchase-recent-view.component";
import { QuantityButtonComponent } from "../../widgets/quantity-button/quantity-button.component";
import { RegisterIndexComponent } from "../../widgets/register/register.component";
import { SecMsgComponent } from "../../widgets/sec-msg/sec-msg.component";
import { SecuritizationpayComponent } from "../../widgets/securitizationpay/securitizationpay.component";
import { SeesuccessComponent } from "../../widgets/seesuccess/seesuccess.component";
import { StoreconcernsComponent } from "../../widgets/storeconcerns/storeconcerns.component";
import { SuccessComponent } from "../../widgets/success/success.component";
import { TotalPriceCardComponent } from "../../widgets/total-price-card/total-price-card.component";
import { VoucherComponent } from "../../widgets/voucher/voucher.component";

@Component({
  selector: "app-widgets-page",
  standalone: true,
  imports: [
    CardModule,
    DividerModule,
    AchatsComponent,
    AddCartButtonComponent,
    BackbuttonComponent,
    Bannier1Component,
    Bannier2Component,
    Bannier3Component,
    Bannier4Component,
    BasketComponent,
    BeneficiaryListComponent,
    BodyComponent,
    BtnAddBasketComponent,
    BuyvouchersComponent,
    CardComponent,
    CardDetailComponent,
    CardVisaMastercardPaymentComponent,
    CartsuccessComponent,
    ChanneldistributionComponent,
    ChoiceComponent,
    ClientComponent,
    CompanyComponent,
    DetailbasketComponent,
    DetailorderComponent,
    DetailpaymentComponent,
    DistributedComponent,
    DistributeinduvidualComponent,
    DistributionChannelComponent,
    EntrepriseComponent,
    FavoriteButtonComponent,
    FooterComponent,
    RegisterComponent,
    FormsComponent,
    GreatdealComponent,
    HeaderComponent,
    HeartComponent,
    HorizontalCardComponent,
    ImgBlockComponent,
    IndexComponent,
    IndividualComponent,
    LoadingChargeComponent,
    LoginComponent,
    LottieBagComponent,
    LottieFilesComponent,
    LottieSuccesComponent,
    LottieValidateComponent,
    LottiesComponent,
    LottiesucessComponent,
    MeansPaymentComponent,
    MyorderComponent,
    NavbarComponent,
    OrderComponent,
    OrderSuccessComponent,
    OrderdetailAmountComponent,
    PageNotFoundComponent,
    PaginationComponent,
    PasswordResetComponent,
    PaymentComponent,
    PromosComponent,
    PurchaseComponent,
    PurchaseAvailableComponent,
    PurchaseAvailable2Component,
    PurchaseMostComponent,
    PurchasePromoComponent,
    PurchaseRecentViewComponent,
    QuantityButtonComponent,
    RegisterComponent,
    RegisterIndexComponent,
    SecMsgComponent,
    SecuritizationpayComponent,
    SeesuccessComponent,
    StoreconcernsComponent,
    SuccessComponent,
    TotalPriceCardComponent,
    VoucherComponent,
  ],
  templateUrl: "./widgets-page.component.html",
  styleUrl: "./widgets-page.component.scss",
})
export class WidgetsPageComponent {
  data = {};
}
