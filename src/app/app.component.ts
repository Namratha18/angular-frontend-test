import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  closeMenu() {
      document.getElementById("sideMenu").style.display = "none";
      document.getElementById("bodyElement").style.width = "100%";
  }

  openMenu() {
    console.log("click");
      document.getElementById("sideMenu").style.display = "block";
      document.getElementById("bodyElement").style.width = "80%";
  }
}
