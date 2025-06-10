import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  user: any;
  keys: any;
  idKey: any;
  constructor(private route: ActivatedRoute, private getData: GetDataService, private router: Router) {
    const nav = window.history.state;
    if (nav.user)
      this.user = nav.user;
    else {
      this.idKey = this.route.snapshot.paramMap.get('id')
      this.getData.getUsers().subscribe(data => {
        this.user = data.filter(el => el.id == this.idKey)
        this.keys = Object.keys(this.user);
      })
    }
  }

  ngOnInit(): void {    
    this.keys = Object.keys(this.user);
  }

  goBack(){
    this.router.navigate(['/']);
  }
  
}
