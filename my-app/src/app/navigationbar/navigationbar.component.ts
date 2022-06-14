import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
@Input() title:any;
  constructor() { }

  ngOnInit(): void {
  }

}
