import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslateCacheService } from "ngx-translate-cache";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService
  ) {
    translateCacheService.init();
    /*translate.addLangs(['fr', 'en', 'de', 'es', 'pt']);
    translate.setDefaultLang('en');*/
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/fr|en|de|es|pt/) ? browserLang : "en");
  }

  ngOnInit() {}
}
