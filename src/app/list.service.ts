import { Injectable } from '@angular/core';
import { IMovie} from './movie';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class ListService {

  constructor(private http: Http) { }

  getProducts(url: string) : Observable<IMovie[]> {
    return this.http.get(url).map(res => <IMovie[]>res.json());
  }


  getProduct(url, id): Observable<IMovie> {
    return this.getProducts(url).map(movies => movies.find(m => m.uid.toUpperCase === id.toUpperCase) )
  }

  getMovies() {
    return this.movies;
  }

  movies = [ 
    {
    "uid": "d-011",
    "title": "Shrek",
    "releaseDate": "Feb 1, 1998",
    "price": 19.99,
    "discount": 0,
    "starRating": 4,
    "imageURL": "./assets/Shrek.jpg"
  }, {
    "uid": "D-410",
    "title": "Happy Feet",
    "releaseDate": "June 1, 2005",
    "price": 16.99,
    "discount": 0,
    "starRating": 4.5,
    "imageURL": "./assets/HappyFeet.gif"
  },
  {
    "uid": "P-002",
    "title": "Toy Story",
    "releaseDate": "Jan 3, 1993",
    "price": 22.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/ToyStory.jpeg"
  },
  {
    "uid": "P-003",
    "title": "Toy Story 2",
    "releaseDate": "Nov 30, 1998",
    "price": 24.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/ToyStory2.jpg"
  },
  {
    "uid": "P-013",
    "title": "The Incredibles",
    "releaseDate": "Dec 11, 2004",
    "price": 24.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/TheIncredibles.jpg"
  },
  {
    "uid": "P-014",
    "title": "Jurassic Park",
    "releaseDate": "June 16, 1995",
    "price": 12.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/JurassicPark.jpg"
  },
  {
    "uid": "P-015",
    "title": "The Untouchables",
    "releaseDate": "July 8, 1975",
    "price": 18.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/TheUntouchables.jpg"
  },
  {
    "uid": "P-016",
    "title": "Cinderella",
    "releaseDate": "Dec 20, 1964",
    "price": 15.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/Cinderella.jpg"
  },
  {
    "uid": "P-017",
    "title": "Robinhood",
    "releaseDate": "Sep 28, 1960",
    "price": 19.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/Robinhood.jpg"
  },
  {
    "uid": "P-019",
    "title": "The Three Amigos",
    "releaseDate": "Oct 19, 1988",
    "price": 24.99,
    "discount": 0,
    "starRating": 5,
    "imageURL": "./assets/TheThreeAmigos.jpg"
  }
]

}




