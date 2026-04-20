import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  subtitle: string = '';

  @Output()
  storethesearchvalue: EventEmitter<string> = new EventEmitter();

  sendTheSearchElement(){
   
  }

  getSearchValueFromField(event: HTMLInputElement) {
    this.subtitle = event.value;
    this.storethesearchvalue.emit(this.subtitle);
  }
}
