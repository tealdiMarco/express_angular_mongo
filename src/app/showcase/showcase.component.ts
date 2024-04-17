import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
  

  async getDati() {

  
    let busta = await fetch("http://localhost:6969/api/getData")

    let risposta = await busta.json()
    console.log(risposta);

  }
  async getTeam() {
    let Team = "";
   

    console.log(Team)

    let busta = await fetch("http://localhost:6969/api/getPlaterTeam", 
    {
      "method":"POST",
      "headers":{"Content-Type":"application/x-www-form-urlencoded"},
      "body": JSON.stringify(Team)
    });

    let risposta = await busta.json()
    console.log(risposta);

  }

}
