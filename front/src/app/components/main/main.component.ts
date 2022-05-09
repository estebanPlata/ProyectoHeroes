import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
/* import {Heroes} from '../../shared/interface/heroes.interface' */

export interface Heroe{
  name:string;
  category:string;
  city:string;
  status:string;
  typesOfPower:any;
  car:boolean;
  kindOfCar:string;

}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataHeroes:any;
  heroe: Heroe ={
    name:'',
    category:'',
    city:'',
    status:'',
    typesOfPower:'',
    car:false,
    kindOfCar:'',
  };
  searchValue:any

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.dataService.getData().subscribe((res)=>{
      this.dataHeroes = res;
    })
  }
  saveHeroe(){
    let data={
      title: this
    }
  }

}
