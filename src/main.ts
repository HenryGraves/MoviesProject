import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Observable } from 'rxjs';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// let source = Observable.fromEvent(document, 'mousemove').map(
//   (e: MouseEvent) => { return { x: e.clientX, y: e.clientY }; }).filter( coord => coord.x > 100 );

// source.subscribe((coords) => {
//   console.log(coords);
// });


// let input = document.getElementById("input");
// //get movies from movies.json
// let filterMovies = [];
// let movies = [];
// let xhr = new XMLHttpRequest();
// let url = "./assets/movies.json";
// xhr.open("GET",url);
// xhr.send();

// xhr.addEventListener("load", () => {
//   movies = JSON.parse(xhr.responseText);
//   printMovies(movies);

//   input.addEventListener("input", (e) => {
//     let target : any = e.target;
//     let filter:string = target.value;
//     filter = filter.toUpperCase();
//   //filter movies
//     filterMovies = movies.filter((m) =>  {
//       let title: string = m.title;
//       title = title.toUpperCase();
//       console.log(title);
//       return title.indexOf(filter) !== -1;
//       });
//       printMovies(filterMovies);
//   });
// });
// //print out filtered movies
// function printMovies(movies) {
//   let table = document.getElementById("table");

//   //table.innerText = "";
//   let row = table.getElementsByTagName("tr");
//   while(row.length > 1)
//   {
//     row[1].parentNode.removeChild(row[1]);
//   }
//   movies.forEach(m => {
//     let row = document.createElement("tr");
//     let title = document.createElement("td");
//     title.innerText = m.title;
//     row.appendChild(title);
//     let price = document.createElement("td");
//     price.innerText = m.price.toString();
//     row.appendChild(price);
//     let date = document.createElement("td");
//     date.innerText = m.releaseDate.toString();
//     row.appendChild(date);
//     let starRating = document.createElement("td");
//     starRating.innerText = m.starRating.toString();
//     row.appendChild(starRating);
//     table.appendChild(row);
//   });
// }
