import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { TranslateCacheService } from "ngx-translate-cache";
import { Observable } from "rxjs";
import { ContactService } from "../api/contact.service";
import { Contact } from "../Bean/Contact";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    translateCacheService.init();
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/fr|en|de|es|pt/) ? browserLang : "en");
  }

  profileForm: FormGroup;
  error: string;

  fileUpload = { status: "", message: "", filePath: "" };
  selectedFile: FileList;
  currentFile: File;
  progress = 0;
  message = "";
  file: File;

  fileInfos: Observable<any>;

  formData = new FormData();
  contact = new Contact();

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [""],
      profile: [""],
    });
  }

  contactUs(formData) {
    this.contactService.contactUs(formData).subscribe(
      (data) => console.log("send contact mail ok "),
      (error) => console.log("erreur send contact mail")
    );
  }

  createContact(contact) {
    this.contactService.createContact(contact).subscribe(
      (data) => console.log("create contact ok "),
      (error) => console.log("erreur create contact")
    );
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  submit() {
    this.formData.append("fullname", this.contact.fullName);
    this.formData.append("email", this.contact.email);
    this.formData.append("subject", this.contact.subject);
    this.formData.append("comment", this.contact.message);
    this.contactUs(this.formData);

    this.createContact(this.contact);
  }
}
