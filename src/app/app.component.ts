import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  capturaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {
    this.capturaForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.capturaForm.valid) {
      this.service
        .enviarEmail(this.capturaForm.value)
        .pipe()
        .subscribe((r) => console.log(r));
      this.capturaForm.reset();
    } else {
      console.log('Formulário inválido.');
    }
  }
}
