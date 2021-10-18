import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../service/registration.service';
import {Observable} from 'rxjs';
import {Person} from '../model/person';
import {NotificationService} from '../service/notification.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private registrationService: RegistrationService, private notifyService: NotificationService) { }

  ngOnInit() {
    this.getPersons();
  }

  public getPersons() {
    this.registrationService.getPersonReport().subscribe(
      data => {
        this.persons = data;
      },
      error => {
        console.error(error);
        this.notifyService.showError('Retrieval of report is unsuccessful', 'IQ Business');
      }
    );
  }

}
