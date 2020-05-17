
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Thing } from '../entities/thing';

@Pipe({name: 'filterThing'})
@Injectable()
export class FilterThing implements PipeTransform {
    
    transform(items: Thing[], search: any): any {

        console.log(search);
        console.log(items);

        if (search === undefined) {
            return items;
        }

        search = search.toLowerCase();
        return items.filter(thing => thing.where && thing.where.toLowerCase().includes(search) ||
        thing.what && thing.what.toLowerCase().includes(search));
    }
}