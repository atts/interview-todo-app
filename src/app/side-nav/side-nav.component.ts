import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );
  
  categories: any;
  data: any;
  selectedData: any;
  selectedCategory = '';
  itemClicked = false;

  constructor(private breakpointObserver: BreakpointObserver, private readonly service: DataServiceService ) {}
  
  ngOnInit() {
    this.service.getCategories().subscribe((res) => {
      this.categories = res;
    });
    this.service.getData().subscribe((res) => {
      this.data = res;
    });
  }

  selectCategory(event:any) {
    this.selectedData = this.data[event.target.innerText]
    this.selectedCategory = event.target.innerText;
  }

  deleteItem(id:any) {
    this.selectedData = this.selectedData.filter((item: any) => item.id !== id);
    // call service delete operation
  }

  handleCheckBox(id:any) {
    let curr = this.selectedData.filter((item:any) => item.id===id)
    curr[0].striked = !curr[0].striked;
  }
}
