import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl('Giant', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  });

  sendData(): void {
    if(this.contactForm.valid) {
      alert('Data sent successfully !');
    } else {
      alert('Data failed to sent !');
    }
  }
}
