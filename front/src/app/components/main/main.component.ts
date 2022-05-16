import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
/* import {Heroes} from '../../shared/interface/heroes.interface' */
import Swal from 'sweetalert2';

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

  valueFormUpdate: any = {
    id: '',
    name: '',
    category: '',
    city: '',
    status: '',
    typesOfPower: '',
    car: false,
    kindOfCar: '',
  };
  arrayValue: any;

  words2 = [{ value: '' }];

  pokemonSearch: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  // agregar campo para agregrar poder
  add() {
    this.words2.push({ value: '' });
  }

  // trae todo
  getData() {
    this.dataService.getData().subscribe((res) => {
     /*  console.log(res); */
      this.dataHeroes = res;
    });
  }

  // guardar heroe
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

  // secciona item por id
  selectItemById(value: any) {
    this.arrayValue = value.typesOfPower;
    this.valueFormUpdate = {
      id: value._id,
      name: value.name,
      category: value.category,
      city: value.city,
      status: value.status,
      typesOfPower: value.typesOfPower,
      car: value.car,
      kindOfCar: value.kindOfCar,
    };
  }

  // actualiza heroe
  updateState() {
    let lstNumero: any = document.getElementsByClassName('numero2'),
      arrayGuardar = [];
    for (var i = 0; i < lstNumero.length; i++) {
      arrayGuardar[i] = lstNumero[i].value;
    }
    let data = {
      _id: this.valueFormUpdate.id,
      name: this.valueFormUpdate.name,
      category: this.valueFormUpdate.category,
      city: this.valueFormUpdate.city,
      status: this.valueFormUpdate.status,
      typesOfPower: arrayGuardar,
      car: this.valueFormUpdate.car,
      kindOfCar: this.valueFormUpdate.kindOfCar,
    };
    this.dataService.putDate(data).subscribe(() => {
      this.getData();
      alert('dato editado');
    });
  }

  // elimina heroe
  deleteState(item: any) {
    if (window.confirm("¿Esta seguro que desea aliminar el dato?")) {
      this.dataService.deleteDate(item).subscribe(() => {
        this.getData();
        alert('dato eliminado');
      });
    }
  }
}
