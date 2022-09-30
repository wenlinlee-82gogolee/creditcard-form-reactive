import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: any;
  @Input() label: string;
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    // return this.control.touched && this.control.dirty && this.control.errors;

    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
