import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-filtered-radio-button',
  imports: [FormsModule, CommonModule],
  templateUrl: './home-filtered-radio-button.html',
  styleUrl: './home-filtered-radio-button.css',
})
export class HomeFilteredRadioButton {
  radioValues: string[] = ['All', 'Open', 'Completed', 'In Progress', 'Closed'];

  @Output()
  dataFromRadio: EventEmitter<string> = new EventEmitter();

  sendreloadrequest: EventEmitter<string> = new EventEmitter();
  radioButtonValue: string = 'All';

  @Input()
  datagetting: any;

  getValueFromRadio() {
    this.dataFromRadio.emit(this.radioButtonValue);
  }

  reloadtheapifetch() {
    this.radioButtonValue = 'All';
    this.dataFromRadio.emit(this.radioButtonValue);
  }
}
