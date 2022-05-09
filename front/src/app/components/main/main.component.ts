import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
/* import {Heroes} from '../../shared/interface/heroes.interface' */

export interface Heroe {
  name: string;
  category: string;
  city: string;
  status: string;
  typesOfPower: any;
  car: boolean;
  kindOfCar: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  dataHeroes: any;
  heroe: Heroe = {
    name: '',
    category: '',
    city: '',
    status: '',
    typesOfPower: '',
    car: false,
    kindOfCar: '',
  };
  searchValue: any;

  words2 = [{ value: '' }, { value: '' }];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getData();
  }

  add() {
    this.words2.push({ value: '' });
  }

  getData() {
    this.dataService.getData().subscribe((res) => {
      this.dataHeroes = res;
    });
  }
  saveHeroe() {
    let lstNumero: any = document.getElementsByClassName('numero'),
      arrayGuardar = [];
    for (var i = 0; i < lstNumero.length; i++) {
      arrayGuardar[i] = lstNumero[i].value;
    }

    let data = {
      name: this.heroe.name,
      category: this.heroe.category,
      city: this.heroe.city,
      status: this.heroe.status,
      typesOfPower: arrayGuardar,
      car: this.heroe.car,
      kindOfCar: this.heroe.kindOfCar,
    };

    this.dataService.postData(data).subscribe((res) => {
      this.getData();
      alert('Heroe guardado exitosamente');
    });
  }
  deleteState(item: any) {
    this.dataService.deleteDate(item).subscribe(() => {
      this.getData();
      alert('dato eliminado');
    });
  }
}
