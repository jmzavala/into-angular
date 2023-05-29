import { Component } from '@angular/core';
import {Project} from "../../model/project";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects: Project[] = [];

  constructor() {
    this.projects.push({
      name: "Portafolio",
      description: "Mi portafolio personal",
      date: new Date(),
      tags: ["Angular", "Bootstrap", "HTML", "CSS", "TypeScript"],
      git: "",});

  }

}
