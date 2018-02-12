import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "orderBy"
})
export class OrderPipe implements PipeTransform {
  transform(values: any[], field: string, direction: boolean): any[] {
    if (!values || values.length < 2) {
      return values;
    }

    return _.orderBy(values, [field], [direction ? "asc" : "desc"]);
  }

}
