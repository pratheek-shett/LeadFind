import { Component, Input } from '@angular/core';
import { Leads } from '../../Models/Leads';
import { FirstDataLoadingPage } from '../first-data-loading-page/first-data-loading-page';

@Component({
  selector: 'app-lead-details-page',
  imports: [],
  templateUrl: './lead-details-page.html',
  styleUrl: './lead-details-page.css',
})
export class LeadDetailsPage {

  @Input() 

  @Input()
  lead! : Leads;


}
