import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "orderBy"
})
export class OrderPipe implements PipeTransform {
  transform(values: any[], field: string, direction: boolean): any[] {
    return _.orderBy(values, [field], [direction ? "asc" : "desc"]);
  }

}
