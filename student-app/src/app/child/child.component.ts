import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() dateCh!: any;
  @Input() showCh!: boolean;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();

  emitNewValue(): void {
    this.eventEmitter.emit("Child Text");
  }
}
