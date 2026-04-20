import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-filtered-radio-button',
  imports: [FormsModule, CommonModule],
  templateUrl: './home-filtered-radio-button.html',
  styleUrl: './home-filtered-radio-button.css',
})
export class HomeFilteredRadioButton {
  statusOptions: string[] = ['All', 'Open', 'Completed', 'In Progress', 'Closed'];

  @Output()
  statusChange: EventEmitter<string> = new EventEmitter();

  selectedStatus: string = 'All';

  emitStatusChange() {
    this.statusChange.emit(this.selectedStatus);
  }

  resetFilter() {
    this.selectedStatus = 'All';
    this.statusChange.emit(this.selectedStatus);
  }
}
