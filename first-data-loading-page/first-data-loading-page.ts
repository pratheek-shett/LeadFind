import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges,EventEmitter,Output } from '@angular/core';
import { HomeFilteredRadioButton } from "../home-filtered-radio-button/home-filtered-radio-button";
import { Leads } from '../../Models/Leads';

@Component({
  selector: 'app-first-data-loading-page',
  imports: [CommonModule, HomeFilteredRadioButton],
  templateUrl: './first-data-loading-page.html',
  styleUrl: './first-data-loading-page.css',
})
export class FirstDataLoadingPage implements OnChanges {


  leadlist! : Leads
   @Input()
   data: any[] = [];

   @Input()
   searchElementfromTemplate:string = "";

   sortthedata:any[] = [];
   selectedStatus: string = 'All';

    ngOnChanges(changes: SimpleChanges) {
      if (changes['data'] || changes['searchElementfromTemplate']) {
        this.applyFilters();
      }
    }

    handlefilteringthevalue(event:string){
      this.selectedStatus = event;
      this.applyFilters();
    }

    applyFilters(){
      const filteredvalue = this.searchElementfromTemplate.toLowerCase().trim();

      this.sortthedata = this.data.filter((item:any) => {
        const matchesStatus =
          this.selectedStatus === 'All' || item.status === this.selectedStatus;

        const matchesSearch =
          !filteredvalue ||
          item.projectTitle.toLowerCase().includes(filteredvalue) ||
          item.techStack.some((tech: string) =>
            tech.toLowerCase().includes(filteredvalue)
          );

        return matchesStatus && matchesSearch;
      });
    }

    sendTheObject(a:Leads){
         this.leadlist= a
         this.getAllLeadJsonObject.emit(a);
    }
    
    @Output()
    getAllLeadJsonObject = new EventEmitter();

    // sendLeadObjectToParent(){
    //   this.getAllLeadJsonObject.emit(this.leadlist)
    // }


}

