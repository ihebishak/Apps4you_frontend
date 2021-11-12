import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Client } from "../Bean/Client";
import { TranslateCacheService } from "ngx-translate-cache";
import { ActivatedRoute } from "@angular/router";
import { OpportunityService } from "../api/opportunity.service";

@Component({
  selector: "app-single-opportunity",
  templateUrl: "./single-opportunity.component.html",
  styleUrls: ["./single-opportunity.component.css"],
})
export class SingleOpportunityComponent implements OnInit {
  profileForm: FormGroup;
  error: string;

  fileUpload = { status: "", message: "", filePath: "" };
  selectedFile: FileList;
  currentFile: File;
  progress = 0;
  message = "";
  file: File;
  fileInfos: Observable<any>;

  client = new Client();
  formData = new FormData();

  id: any;
  opportunity: any;

  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private fb: FormBuilder,
    private opportunityService: OpportunityService,
    private route: ActivatedRoute
  ) {
    translateCacheService.init();
    /*translate.addLangs(['fr', 'en', 'de', 'es', 'pt']);
    translate.setDefaultLang('en');*/
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/fr|en|de|es|pt/) ? browserLang : "en");
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("uid");
    console.log(this.id);
    this.opportunity = this.route.snapshot.data.opportunity;
    console.log(this.opportunity);
  }

  getOpportunityById(id: string) {
    this.opportunityService.getOpportunityById(this.id).subscribe(
      (res: any) => {
        this.opportunity = res;
        console.log(this.opportunity);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  sendEmail(formData) {
    this.opportunityService.sendingEmail(formData).subscribe(
      (data) => console.log("send mail ok "),
      (error) => console.log("erreur send mail")
    );
  }

  createUser(client) {
    this.opportunityService.createUser(client).subscribe(
      (data) => console.log("create user ok "),
      (error) => console.log("erreur create user")
    );
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  submit() {
    this.formData.append("file", this.file);
    this.formData.append("fullname", this.client.fullName);
    this.formData.append("email", this.client.emailClient);
    this.formData.append("subject", this.client.subject);
    this.formData.append("comment", this.client.comment);
    this.sendEmail(this.formData);
    this.createUser(this.client);
  }
}
