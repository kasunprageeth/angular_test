import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchName' // Name of the pipe to use in template
})
export class SearchNamePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Check if no search term is provided
        if (!args) {
            return value; // Return the original value without filtering
        }
        // Filter the array based on the search term
        return value.filter((value: any) => {
            // Check if item's name or title includes the search term (case insensitive)
            return (value.name.toLocaleLowerCase().includes(args)) || (value.title.toLocaleLowerCase().includes(args));
        })

    }
}