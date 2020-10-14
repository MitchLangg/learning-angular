import {Content} from "./content-interface";

export class ContentList {
  private _items: Content[];

  constructor() {
    this._items = [];
  }

  get items(): Content[] {
    return this._items;
  }

  add(newItem: Content): void {
    this._items.push(newItem);
  }

  numArray(): any {
    return this._items.length;
  }

  contentProperties(index: number): string {
    return "<h1>" + this._items[index].title + "</h1>" +
      '<img src="' + this._items[index].imgUrl + '" alt="pic" width="325" height="250">' +
      '<h2> Author: ' + this._items[index].author + '</h2>' +
      '<h3> Tags: ' + this._items[index].tags + '</h3>' +
      '<h3> Type: ' + this._items[index].type + '</h3>' +
      '<p>Information: ' + this._items[index].body + '</p>';
  }


}
