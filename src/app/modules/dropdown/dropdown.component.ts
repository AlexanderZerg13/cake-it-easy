import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Item from './item';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() items: Item[];

  @Output() selectedItemEvent = new EventEmitter<Item>();

  private showDropDown: boolean = false;
  private selectedItem: Item;

  constructor() { }

  ngOnInit() {
  }

  onToggle(): void {
    this.showDropDown = !this.showDropDown;
  }

  onClick(): void {
    if (this.showDropDown) {
      this.onToggle();
    }
  }

  itemClick(item: Item): void {
    this.onToggle();
    this.selectedItem = item;
    this.selectedItemEvent.emit(item);
  }
}
