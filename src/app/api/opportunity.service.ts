import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../Bean/Client";
import { Contact } from "../Bean/Contact";
import { Opportunity } from "../Bean/Opportunity";

@Injectable({
  providedIn: "root",
})
export class OpportunityService {
  constructor(private http: HttpClient) {}

  public sendingEmail(formData) {
    return this.http.post<any>("http://localhost:8040/send", formData);
  }

  public createUser(client: Client) {
    return this.http.post<any>("http://localhost:8040/saveClient", client);
  }

  public getAllOpportunities(): Observable<Opportunity[]> {
    return this.http.get<Opportunity[]>("http://localhost:8040/opportunities");
  }

  public getOpportunityById(id: string) {
    return this.http.get("http://localhost:8040/opportunity/" + id);
  }
}
