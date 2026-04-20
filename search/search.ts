import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements AfterViewInit {
  subtitle: string = '';
  searchTerm: string = '';

  @Output()
  storethesearchvalue: EventEmitter<string> = new EventEmitter();

  @ViewChild('inputvalue', {})
  getdata!: ElementRef<HTMLInputElement>;

  @ViewChild('inputvalue')
  erasevalue!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.getdata.nativeElement.focus();
  }

  getSearchValueFromField() {
    this.subtitle = this.searchTerm.trim();
    this.storethesearchvalue.emit(this.subtitle);
  }

  erase() {
    this.searchTerm = '';
    this.erasevalue.nativeElement.value = '';
  }
}
