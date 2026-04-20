import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Lead } from '../Models/Leads';
import { Header } from '../header/header';
import { FirstDataLoadingPage } from './first-data-loading-page/first-data-loading-page';
import { LeadDetailsPage } from './lead-details-page/lead-details-page';
import { Search } from './search/search';

@Component({
  selector: 'app-container',
  imports: [Header, Search, FirstDataLoadingPage, LeadDetailsPage, NgIf],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  leads: Lead[] = [];
  searchQuery: string = '';
  selectedLead: Lead | null = null;

  apiUrl: string =
    'https://69df1d8bd6de26e119289320.mockapi.io/api/leads/leads';

  constructor() {
    void this.fetchLeads(this.apiUrl);
  }

  onSearchChange(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  async fetchLeads(url: string): Promise<Lead[]> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Issue');
    }

    this.leads = await response.json();
    return this.leads;
  }

  onLeadSelected(event: Lead) {
    this.selectedLead = event;
    console.log(this.selectedLead);
  }

  closePopup() {
    this.selectedLead = null;
  }
}
