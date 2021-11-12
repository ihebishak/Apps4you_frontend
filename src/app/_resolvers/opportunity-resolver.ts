import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { OpportunityService } from "../api/opportunity.service";

@Injectable()
export class OpportunityResolver implements Resolve<any> {
  constructor(private api: OpportunityService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.api.getOpportunityById(route.paramMap.get("uid")).pipe(
      map((results) => {
        return results;
      })
    );
  }
}
