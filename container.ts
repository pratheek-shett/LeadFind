import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Search } from './search/search';
import { FirstDataLoadingPage } from './first-data-loading-page/first-data-loading-page';
import { LeadDetailsPage } from "./lead-details-page/lead-details-page";
import { Leads } from '../Models/Leads';

@Component({
  selector: 'app-container',
  imports: [Header, Search, FirstDataLoadingPage, LeadDetailsPage, NgIf],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  data: any[] = [];
  searchElementfromTemplate: string = '';

  selectedLead!:Leads | null;

  constructor() {
    void this.getalldata(this.url);
  }

  updateSearchValue(event: string) {
    this.searchElementfromTemplate = event;
  }


  //fething the data
    url:string = "https://69df1d8bd6de26e119289320.mockapi.io/api/leads/leads"
     async getalldata(url:string){
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Issue")
      }
      this.data = await response.json();
      return this.data;
    }

    recieveObject(event:any){
      this.selectedLead = event;
      console.log(this.selectedLead)
    }

    closePopup(){
      this.selectedLead = null;
    }
}
