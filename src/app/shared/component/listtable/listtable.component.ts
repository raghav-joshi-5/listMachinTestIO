import { Component, OnInit, Input } from '@angular/core';
import { Ilist } from '../../module/list';

@Component({
  selector: 'app-listtable',
  templateUrl: './listtable.component.html',
  styleUrls: ['./listtable.component.scss'],
})
export class ListtableComponent implements OnInit {
  @Input() gettodos!: Array<Ilist>;
  constructor() {}

  ngOnInit(): void {}
}
