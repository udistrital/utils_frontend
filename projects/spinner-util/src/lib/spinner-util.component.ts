import { Component } from '@angular/core';
import { SpinnerUtilService } from './spinner-util.service';

@Component({
  selector: 'spinner-util',
  templateUrl: './spinner-util.component.html',
  styleUrls: ['./spinner-util.component.scss']
})
export class SpinnerUtilComponent {
  isLoading$ = this.spinnerService.isLoading$;

  constructor( private spinnerService: SpinnerUtilService){ }

}