import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import {TodoProvider} from  "../../providers/todo/todo"
import {ArchivedTodosPage} from "../archived-todos/archived-todos"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled=false;
  public archivedTodosPage=ArchivedTodosPage;

  constructor(private toastController: ToastController, private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
   this.todos = this.todoProvider.getTodos();
  }

archiveTodo(todoIndex){
  this.todoProvider.archiveTodo(todoIndex);
}

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

toggleReorder(){
  this.reorderIsEnabled=!this.reorderIsEnabled;
}

itemReordered($event){
  reorderArray(this.todos, $event);
}

openToEditAlert(todoIndex){
  let editTodoAlert = this.alertController.create({
    title: "Edit your ToDo",
    message: "Edit Your ToDo",
    inputs:[
      {
        type: "text",
        name: "editToDoInput",
        value: this.todos [todoIndex]
      }
    ],
    buttons: [
      {
      text: "Cancel"
    },
    {
      text: "Edit ToDo",
      handler: (inputData)=> {
         let todoText;
         todoText = inputData.editToDoInput;
         this.todoProvider.editTodo(todoText, todoIndex);

         editTodoAlert.onDidDismiss(()=>{
        
          let editTodoToast = this.toastController.create({
         
            message:"Todo edited - carah Alak",
            duration: 3000
  
           });
          editTodoToast.present();
        });

         
      }
      }
    ]
  });
  editTodoAlert.present();

}

openToDoAlert(){
  let addTodoAlert = this.alertController.create({
    title: "Add A ToDo",
    message: "Enter Your ToDo",
    inputs:[
      {
        type: "text",
        name: "addToDoInput"
      }
    ],
    buttons: [
      {
      text: "Cancel"
    },
    {
      text: "Add ToDo",
      handler: (inputData)=> {
         let todoText;
         todoText = inputData.addToDoInput;
         this.todoProvider.addTodo(todoText);

         addTodoAlert.onDidDismiss(()=>{
        
          let addTodoToast = this.toastController.create({
         
            message:"Todo added - carah Alak",
            duration: 2000
  
           });
          addTodoToast.present();
        });

         
      }
      }
    ]
  });
  addTodoAlert.present();
}

}
