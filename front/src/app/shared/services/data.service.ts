import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  endPoint: string = 'http://localhost:4000/superheroes';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.endPoint);
  }
  postData(data: any) {
    return this.http.post(this.endPoint, data);
  }
  putDate(data: any) {
    console.log(data);
    const dat = {
      _id: data.id,
      typesOfPower: data.typesOfPower,
      name: data.name,
      category: data.category,
      city: data.city,
      status: data.status,
      car: data.car,
      kindOfCar: data.kindOfCar,
    };
    return this.http.put(`${this.endPoint}/${data._id}`, dat);
  }
  deleteDate(data: any) {
    return this.http.delete(`${this.endPoint}/${data._id}`);
  }
}
