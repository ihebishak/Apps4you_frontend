import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslateCacheService } from "ngx-translate-cache";
import { OpportunityService } from "../api/opportunity.service";
import { Opportunity } from "../Bean/Opportunity";

@Component({
  selector: "app-opportunity",
  templateUrl: "./opportunity.component.html",
  styleUrls: ["./opportunity.component.css"],
})
export class OpportunityComponent implements OnInit {
  opportunities: Opportunity[];
  result: string;
  totalLength: any;
  page: number = 1;

  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService,
    public opportunityService: OpportunityService
  ) {
    translateCacheService.init();
    /*translate.addLangs(['fr', 'en', 'de', 'es', 'pt']);
    translate.setDefaultLang('en');*/
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/fr|en|de|es|pt/) ? browserLang : "en");
  }

  public getAllOpportunities(): void {
    this.opportunityService.getAllOpportunities().subscribe(
      (res: Opportunity[]) => {
        this.opportunities = res;
        this.totalLength = res.length;
        console.log(this.opportunities);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit() {
    this.getAllOpportunities();
  }
}
