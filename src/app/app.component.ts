import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'koka2';
  lobio = false;
  likaJ(){
    console.log('Koka')
  };
  ia: string = 'deda';
  // inputF(event:any){
  //   this.inputshiracweria=event.target.value;
  //   console.log(event.target.value*5)
  // };
  check=false;
  kai(){
    console.log('kai')
    this.check=true
  };
}


