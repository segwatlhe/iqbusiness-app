import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../service/registration.service';
import {Observable} from 'rxjs';
import {Person} from '../model/person';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.persons = this.registrationService.getPersonReport();
  }

}
