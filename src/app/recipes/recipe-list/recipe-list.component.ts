import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Kartoffelstock', 'Dies ist ein Kartoffelstock', 'https://image.brigitte.de/10957398/large1x1-622-622/2050547e4ef827ebb275c18137153005/jn/kartoffelpueree.jpg'),
    new Recipe('Roesti', 'Dies ist eine Rösti', 'https://recipecontent.fooby.ch/14205_3-2_480-320.jpg'),
    new Recipe('Spiegelei', 'Dies ist ein Spiegelei', 'https://bilder.t-online.de/b/75/62/48/96/id_75624896/700/tid_da/rezeptbild-spiegelei.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
