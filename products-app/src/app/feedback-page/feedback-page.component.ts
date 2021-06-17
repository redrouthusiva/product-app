import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {
  feedbackForm: FormGroup;
  msg: any;
  submitted = false; 

  constructor(private formBuilder: FormBuilder) { 
    this.feedbackForm = this.formBuilder.group({
      msg: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9_ ]*$')]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  ngOnInit() {
    
  }

  sendFeedback() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.feedbackForm.invalid) {
      console.log('invalid');
      return;
    }
    else{
      this.msg = 'Your feedback is submitted successfully';
      console.log(this.feedbackForm.value);
    }
    
  }

}
