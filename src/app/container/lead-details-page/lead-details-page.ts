import { Component, Input } from '@angular/core';
import { Leads } from '../../Models/Leads';

@Component({
  selector: 'app-lead-details-page',
  imports: [],
  templateUrl: './lead-details-page.html',
  styleUrl: './lead-details-page.css',
})
export class LeadDetailsPage {
  @Input()
  lead! : Leads;
}
