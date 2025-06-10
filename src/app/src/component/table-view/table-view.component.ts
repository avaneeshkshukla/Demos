import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  users: any[] = [];
  headers: string[] = [];

  constructor(private getData: GetDataService, private router: Router) {}

  ngOnInit(): void {
    this.getData.getUsers().subscribe(data => {
      this.users = data;
      if (data.length > 0) {
        this.headers = Object.keys(data[0]);
      }
    });
  }

  navigateToDetails(user: any): void {
    this.router.navigate(['/details', user.id], { state: { user } });
  }
}
