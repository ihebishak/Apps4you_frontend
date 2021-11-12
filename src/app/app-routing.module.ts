import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OpportunityComponent } from "./opportunity/opportunity.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { SingleOpportunityComponent } from "./single-opportunity/single-opportunity.component";
import { OpportunityResolver } from "./_resolvers/opportunity-resolver";

const routes: Routes = [
  { path: "opportunity", component: OpportunityComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "", component: HomeComponent },
  {
    path: "opportunity/:uid",
    component: SingleOpportunityComponent,
    runGuardsAndResolvers: "always",
    resolve: { opportunity: OpportunityResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
})
export class AppRoutingModule {}
