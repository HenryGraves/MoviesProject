import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
    let url = '../../assets/movies.json'
    let obs = this.listService.getProducts(url);
    obs.subscribe( movies => {
      this.movies = movies;
      this.filteredMovies = this.movies;
    })
  }

  get listFilter(): string {
    return this._listFilter;
  }

  getList() {
    this.movies = this.listService.getMovies();
    this.filteredMovies = this.movies;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.filterMovies(this._listFilter);
    console.log(this.filteredMovies);
  }

  filterMovies(filter_by: string) {
    return this.movies.filter((m) => {
      let temp = m.title.toUpperCase();
      filter_by = filter_by.toUpperCase();
      return temp.indexOf(filter_by) !== -1;
    });
  }

  // member variables ------------------------------------
  filteredMovies;
  private _listFilter: string = "";
  movies;
}
