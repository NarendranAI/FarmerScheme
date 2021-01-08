import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FarmerSchemeView';
  flag=false;
  public somefn()
  {
<<<<<<< HEAD
    this.flag!=this.flag;
=======
    this.flag=!this.flag;
  }
  image1=false;
  public image1toggle()
  {
    this.image1=!this.image1;
  }
  image2=false;
  public image2toggle()
  {
    this.image2=!this.image2;
  }
  image3=false;
  public image3toggle()
  {
    this.image3=!this.image3;
  }
  image4=false;
  public image4toggle()
  {
    this.image4=!this.image4;
>>>>>>> 222cb16fe5e283d1b6f72d1cfb38f984d9497bd4
  }
}
