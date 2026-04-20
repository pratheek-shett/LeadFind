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
import { Lead } from '../../Models/Leads';
import { HomeFilteredRadioButton } from '../home-filtered-radio-button/home-filtered-radio-button';

@Component({
  selector: 'app-first-data-loading-page',
  imports: [CommonModule, HomeFilteredRadioButton],
  templateUrl: './first-data-loading-page.html',
  styleUrl: './first-data-loading-page.css',
})
export class FirstDataLoadingPage implements OnChanges {
  @Input()
  leads: Lead[] = [];

  @ViewChild(HomeFilteredRadioButton)
  statusFilterComponent!: HomeFilteredRadioButton;

  @Input()
  searchQuery: string = '';

  filteredLeads: Lead[] = [];
  selectedStatus: string = 'All';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['leads'] || changes['searchQuery']) {
      this.applyFilters();
    }
  }

  onStatusFilterChange(status: string) {
    this.selectedStatus = status;
    this.applyFilters();
  }

  applyFilters() {
    const normalizedQuery = this.searchQuery.toLowerCase().trim();

    this.filteredLeads = this.leads.filter((item: Lead) => {
      const techStack = Array.isArray(item.techStack)
        ? item.techStack.join(' ')
        : '';
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

      const matchesStatus =
        this.selectedStatus === 'All' || item.status === this.selectedStatus;
      const matchesSearch =
        !normalizedQuery || searchableContent.includes(normalizedQuery);

      return matchesStatus && matchesSearch;
    });
  }

  onLeadSelected(lead: Lead) {
    this.leadSelected.emit(lead);
  }

  @Output()
  leadSelected = new EventEmitter<Lead>();

  resetFilters() {
    this.statusFilterComponent.resetFilter();
  }
}
