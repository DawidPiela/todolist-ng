import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  taskContent = '';

  tasks = ['Go Shopping', 'Clean Desk', 'Wash The Car'];

  constructor() { }

  ngOnInit() {
  }

  onAddTask() {
    this.tasks.push(this.taskContent);
    this.taskContent = '';
  }

  onRemoveTask(i) {
    this.tasks.splice(i, 1);
  }

}
