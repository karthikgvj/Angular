import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-form';

 constructor(private _enrollmentService: EnrollmentService){}

  userModel = new User('', 1234567890);

   onSubmit(){
     this._enrollmentService.enroll(this.userModel)
     .subscribe (
       data => console.log('success', data),
       error => console.log('error!',error)
       
     )
   }
}
