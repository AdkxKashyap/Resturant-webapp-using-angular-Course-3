import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish'
import { DishService } from '../services/dish.service'; //provides method to retrive all the dishes
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
  dishes:Dish[];
  color="warn"


  constructor(private dishService:DishService) { } //Constructor is called FIRST
onSelect(dish: Dish){ 
    
  }
  ngOnInit() {
  this.dishService.getDishes().then(dishes=>this.dishes=dishes);
  }

}
