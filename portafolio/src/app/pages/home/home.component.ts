import { Component } from '@angular/core';
import {Work} from "../../model/work";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  works: Work[] = [];

  constructor() {
    this.works.push({
      name: "Portafolio",
      description: "Mi portafolio personal",
      date: new Date(),
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});

  }

}
