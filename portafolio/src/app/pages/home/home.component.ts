import { Component } from '@angular/core';
import {Project} from "../../model/project";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects: Project[] = [];
  //Colors:

  //    background-color: #ffe0cb;
  //    background-color: #eaffd0;
  //    background-color: #d0eaff;
  //    background-color: #eaffd0;
  //    background-color: #e2dbf8;
  //    background-color: #fbe0f2;
  //    background-color: #eaeff3;
  constructor() {
    this.projects.push({
      id:1,
      name: "Portafolio",
      description: "Mi portafolio personal",
      date: new Date(),
      color:"#eaffd0",
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});
    this.projects.push({
      id:2,
      name: "Proyecto 2",
      description: "Descripción del proyecto 2",
      date: new Date(),
      color:"#e2dbf8",
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});
    this.projects.push({
      id:3,
      name: "Proyecto 3",
      description: "Descripción del proyecto 3",
      date: new Date(),
      color:"#fbe0f2",
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});
    this.projects.push({
      id:4,
      name: "Proyecto 4",
      description: "Descripción del proyecto 4",
      date: new Date(),
      color:"#eaeff3",
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});
    this.projects.push({
      id:5,
      name: "Proyecto 5",
      description: "Descripción del proyecto 5",
      date: new Date(),
      color:"#ffe0cb",
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});

  }

}
