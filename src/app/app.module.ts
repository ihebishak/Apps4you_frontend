import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SpecialtiesComponent } from "./specialties/specialties.component";
import { ServicesComponent } from "./services/services.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { FooterComponent } from "./footer/footer.component";
import { ValuesComponent } from "./values/values.component";
import { RealisationComponent } from "./realisation/realisation.component";
import { PartnersComponent } from "./partners/partners.component";
import { DoingComponent } from "./doing/doing.component";
import { NgxPaginationModule } from "ngx-pagination";

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { OpportunityComponent } from "./opportunity/opportunity.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SingleOpportunityComponent } from "./single-opportunity/single-opportunity.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  TranslateCacheModule,
  TranslateCacheService,
  TranslateCacheSettings,
} from "ngx-translate-cache";
import { OpportunityResolver } from "./_resolvers/opportunity-resolver";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialtiesComponent,
    ServicesComponent,
    ContactsComponent,
    FooterComponent,
    ValuesComponent,
    RealisationComponent,
    PartnersComponent,
    DoingComponent,
    OpportunityComponent,
    NavbarComponent,
    SingleOpportunityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: (translateService, translateCacheSettings) => {
          return new TranslateCacheService(
            translateService,
            translateCacheSettings
          );
        },
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheName: "mylang",
      cacheMechanism: "Cookie",
      cookieExpiry: 1,
    }),
  ],
  providers: [OpportunityResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
