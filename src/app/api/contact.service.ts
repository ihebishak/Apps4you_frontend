import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent,
} from "@angular/common/http";
import { Contact } from "../Bean/Contact";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public contactUs(formData) {
    return this.http.post<any>("http://localhost:8040/contactUs", formData);
  }

  public createContact(contact: Contact) {
    return this.http.post<any>("http://localhost:8040/saveContact", contact);
  }
}
