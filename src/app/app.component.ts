import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'random-user';

  user: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  // latest rxJs with subscribe

  ngOnInit() {
    // const swal: SweetAlert = _swal as any;
    this.userService.getUser().subscribe({
      next: (user: any) => {
        this.user = user.results[0];
        console.log(this.user);
      },
      error: (err) => {
        console.log('>>>>>>', err);
        this.toastr.error(err);
      },
      complete: () => console.info('complete'),
    });
  }

  anotherMe() {
    this.user = '';
    console.log('>>>>>>');
    this.ngOnInit();
  }
}
