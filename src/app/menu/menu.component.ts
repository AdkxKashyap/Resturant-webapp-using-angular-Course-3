import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../shared/dish'
import { DishService } from '../services/dish.service'; //provides method to retrive all the dishes
import { flyInOut,expand } from '../animations/app.animation';

  
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})


export class MenuComponent implements OnInit {
  dishes:Dish[];
  color="warn"
errMess: string;

  constructor(private dishService:DishService,   @Inject('BaseURL') private BaseURL) { } //Constructor is called FIRST
onSelect(dish: Dish){ 
    
  }
  ngOnInit() {
  this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }

}
