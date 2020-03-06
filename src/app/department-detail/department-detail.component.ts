import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
   <h3>You selected department with name = {{departmentName}} and id = {{departmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departmentName;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let name = this.route.snapshot.paramMap.get('name');
    this.departmentId = id;
    this.departmentName = name;
  }

}
