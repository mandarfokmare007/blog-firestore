import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface details {
  name: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  left: boolean = true;
  status: string = '';
  statusE: string = '';
  span: boolean = false;
  spanE: boolean = false;
  @ViewChild('f')
  form!: NgForm;
  @ViewChild('b')
  botton!: ElementRef;
  ngOnInit(): void {}
  OnSubmit(form: NgForm) {
    // console.log(this.Name[0]);
  }
  onmouseup() {
    if (this.form.invalid && this.left) {
      this.botton.nativeElement.style.transform = 'translateX(170px)';
      this.left = false;
    } else if (this.form.invalid && !this.left) {
      this.botton.nativeElement.style.transform = 'translateX(0px)';
      this.left = true;
    }
  }

  Name: details[] = [
    { name: 'mandar', email: 'mandar@gmail.com' },
    { name: 'omkar', email: 'omkar@gmail.com' },
    { name: 'kailas', email: 'kailas@gmail.com' },
    { name: 'tushar', email: 'tushar@gmail.com' },
  ];
  // Name :details[]= [
  //   { name: 'mandar' },
  //   { name: 'omkar' },
  //   { name: 'kailas' },
  //   { name: 'tushar' },
  // ];
  check() {
    let data = this.Name.map((item) => item.name);

    if (data.includes(this.form.value.name)) {
      this.span = true;
      this.status = 'Not Available';
    } else {
      this.status = 'Available';
    }
  }

  checkE() {
    let dataE = this.Name.map((item) => item.email);
    if (this.form.valid) {
      if (dataE.includes(this.form.value.email)) {
        this.spanE = true;
        this.statusE = 'Not Available';
      } else {
        this.statusE = 'Available';
      }
    } else {
      this.spanE = true;
      this.statusE = 'Not Valid';
    }
  }
}
