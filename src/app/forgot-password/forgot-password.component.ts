import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailModel } from 'app/model/email.mode';
declare var $: any;
const api_url = "http://localhost:8080/auth/forgot"

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  email: EmailModel = new EmailModel
  ngOnInit(): void {
  }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "O e-mail com sua nova senha foi enviado"

    },{
        type: type[2],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
  forgot(){
    this.http.post<string>(api_url, this.email).subscribe(
      x => {
        this.showNotification('top','center')
        this.router.navigate(['/login'])
    }
    )
  }

}
