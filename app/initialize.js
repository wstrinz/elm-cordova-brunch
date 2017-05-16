document.addEventListener('DOMContentLoaded', () => {
  var node = document.getElementById('elmApp');
  var storedState = localStorage.getItem('elm-todo-save');
  var startingState = storedState ? JSON.parse(storedState) : null;
  var todomvc = Elm.Main.fullscreen(startingState);
  todomvc.ports.setStorage.subscribe(function(state) {
    localStorage.setItem('elm-todo-save', JSON.stringify(state));
  });

  console.log('Initialized app + Elm');
});
