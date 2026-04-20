import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Leads } from '../../Models/Leads';
import { HomeFilteredRadioButton } from '../home-filtered-radio-button/home-filtered-radio-button';

@Component({
  selector: 'app-first-data-loading-page',
  imports: [CommonModule, HomeFilteredRadioButton],
  templateUrl: './first-data-loading-page.html',
  styleUrl: './first-data-loading-page.css',
})
export class FirstDataLoadingPage implements OnChanges {
  dataavaialble: boolean = true;
  leadlist!: Leads;

  @Input()
  data: any[] = [];

  @ViewChild(HomeFilteredRadioButton)
  radiocomponent!: HomeFilteredRadioButton;

  @Input()
  searchElementfromTemplate: string = '';

  sortthedata: any[] = [];
  selectedStatus: string = 'All';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['searchElementfromTemplate']) {
      this.applyFilters();
    }
  }

  handlefilteringthevalue(event: string) {
    this.selectedStatus = event;
    this.applyFilters();
  }

  applyFilters() {
    const filteredvalue = this.searchElementfromTemplate.toLowerCase().trim();

    this.sortthedata = this.data.filter((item: any) => {
      const techStack = Array.isArray(item.techStack) ? item.techStack.join(' ') : '';
      const searchableContent = [
        item.clientName,
        item.projectTitle,
        item.description,
        techStack,
        item.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesStatus = this.selectedStatus === 'All' || item.status === this.selectedStatus;
      const matchesSearch = !filteredvalue || searchableContent.includes(filteredvalue);

      return matchesStatus && matchesSearch;
    });
  }

  sendTheObject(a: Leads) {
    this.leadlist = a;
    this.getAllLeadJsonObject.emit(a);
  }

  @Output()
  getAllLeadJsonObject = new EventEmitter();

  resetdatafetch() {
    this.radiocomponent.reloadtheapifetch();
  }
}
