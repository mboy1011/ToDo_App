angular.module('apptodo',[]) 
	.controller('TodoCtrl', function(){
		var control = this;
  control.todos = [];
  
  control.getTotalTodos = function () {
        return contorl.todo.length;
  };
  control.addTodo = function () {
    control.todos.push({text:control.formTodoText, done:false});
    control.formTodoText = '';
  };
  
   control.clearCompleted = function () {
      var oldTodos = control.todos;
      control.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) control.todos.push(todo);
      });
    };

});

