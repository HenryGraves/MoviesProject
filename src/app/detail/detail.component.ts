import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { ListService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  movie;
  constructor(private listService: ListService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movie = this.listService.getMovies().find(m => {
      console.log(m);
      return m.uid === this.id;
    });

    console.log("id = " + this.id);
  }

  onClick() {
    this.router.navigate(['list']);
  }

}
