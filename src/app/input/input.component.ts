import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() type: string = "text";
  constructor() { 
    console.log(this.control);
  }

  ngOnInit(): void {

  }

  showErrors(){
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
