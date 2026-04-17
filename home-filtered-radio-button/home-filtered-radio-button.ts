import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-filtered-radio-button',
  imports: [FormsModule,CommonModule],
  templateUrl: './home-filtered-radio-button.html',
  styleUrl: './home-filtered-radio-button.css',
})
export class HomeFilteredRadioButton {

   radioValues : string[] = ["All", "Open", "Completed", "In Progress", "Closed"];
  

   @Output()
   dataFromRadio: EventEmitter<string> = new EventEmitter();
   radioButtonValue: string = "All"


   getValueFromRadio(){
    this.dataFromRadio.emit(this.radioButtonValue);
   }
}

