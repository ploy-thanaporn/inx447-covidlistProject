import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CovidService } from '../covid.service';
import { ToastService } from '../toast.service';

export type VaccinationFormData = {
  firstName?: string;
  lastName?: number;
  birthdate?: Date;
  vaccineName?: string;
  dose?: string;
  date?: Date;
};

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.scss'],
})
export class VaccineFormComponent implements OnInit {
  @Input() data!: VaccinationFormData;

  formGroup!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CovidService,
    public readonly toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: [null],
      lastName: [null],
      birthdate: [null],
      vaccineName: [null],
      dose: [null],
      date: [null],
    });
  }

  submit(): void {
    this.isLoading = true;

    this.data = this.formGroup.value;

    this.service.createVaccination(this.data).subscribe(
      () => {
        this.isLoading = false;

        this.toastService.show(
          'ส่งข้อมูลสำเร็จ',
          'เราได้รัยข้อมูลของท่านแล้ว',
          'bg-success'
        );
      },
      (error) => {
        this.isLoading = false;

        this.toastService.show(
          'ข้อมูลผิดพลาด',
          'กรุณากรอกข้อมูลให้ครบถ้วน',
          'bg-danger'
        );
      }
    );
  }
}
