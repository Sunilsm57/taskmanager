import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    // If you need to perform any initialization logic, you can do it here
  }

  addTask() {
    const { title, description, status } = this.taskForm.value;
    console.log('Adding task:', title, description, status);
    this.taskService.addTask(title, description, status).subscribe(
      (task) => {
        console.log('Task added:', task);
        window.location.reload();
        // You can perform further actions after adding a task, such as refreshing the task list
      },
      (error) => {
        console.error('Error adding task:', error);
        // Handle the error, such as displaying an error message to the user
      }
    );
  }
}
