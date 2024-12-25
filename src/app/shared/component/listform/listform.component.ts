import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
  Output,
} from '@angular/core';
import { Ilist } from '../../module/list';

@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.scss'],
})
export class ListformComponent implements OnInit {
  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }
  @ViewChild('listItem') listItem!: ElementRef;
  @Output() emitListObj: EventEmitter<Ilist> = new EventEmitter<Ilist>();
  constructor() {}
  ngOnInit(): void {}
  onAddTodo() {
    if (!this.listItem.nativeElement.value.trim()) {
      return;
    }
    let newObj: Ilist = {
      listItem: this.listItem.nativeElement.value,
      listId: this.generateUuid(),
    };
    console.log(newObj);
    this.listItem.nativeElement.value = '';
    this.emitListObj.emit(newObj);
  }
}
