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
  submittedSearchText: string = '';
  searchTerm: string = '';

  @Output()
  searchChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }

  emitSearchValue() {
    this.submittedSearchText = this.searchTerm.trim();
    this.searchChange.emit(this.submittedSearchText);
  }

  clearSearch() {
    this.searchTerm = '';
    this.submittedSearchText = '';
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.focus();
  }
}
