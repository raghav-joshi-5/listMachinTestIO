import { Component, OnInit } from '@angular/core';
import { Ilist } from '../../module/list';

@Component({
  selector: 'app-listdash',
  templateUrl: './listdash.component.html',
  styleUrls: ['./listdash.component.scss'],
})
export class ListdashComponent implements OnInit {
  todoList: Array<Ilist> = [
    // {
    //   listId: '123',
    //   listItem: 'Html',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
  ongetTodos(listObj: Ilist) {
    this.todoList.push(listObj);
  }
}
