import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any;

  editingTask: any = null;
  editedTask: any = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
      },
      (error) => {
        console.error('Error getting tasks:', error);
        // Handle error
      }
    );
  }

  editTask(task: any) {
    // Set the task to be edited
    this.editingTask = task;
    // Clone the task to avoid directly mutating the original task object
    this.editedTask = { ...task };
  }

  updateTask() {
    // Call the updateTask method in the TaskService
    this.taskService
      .updateTask(
        this.editedTask._id,
        this.editedTask.title,
        this.editedTask.description,
        this.editedTask.status
      )
      .subscribe(
        (updatedTask) => {
          console.log('Task updated:', updatedTask);
          // Reset editing task and edited task objects
          this.editingTask = null;
          this.editedTask = {};
          // Refresh the task list after update
          this.getTasks();
        },
        (error) => {
          console.error('Error updating task:', error);
          // Handle error
        }
      );
  }

  cancelEdit() {
    // Reset editing task and edited task objects
    this.editingTask = null;
    this.editedTask = {};
  }
  deleteTask(taskId: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          console.log('Task deleted successfully');
          // Refresh the task list after deletion
          this.getTasks();
        },
        (error) => {
          console.error('Error deleting task:', error);
          // Handle error
        }
      );
    }
  }
}
