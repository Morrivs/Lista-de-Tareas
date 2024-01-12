const input = document.getElementById('Ingresar-Tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea(){
  if(input.value){
    //crear tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    //texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos')
    tareaNueva.appendChild(iconos);

    //iconos
    let completar = document.createElement('i');
    completar.classList.add('bi','bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea)

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    //agregar tarea a la lista
    listaDeTareas.appendChild(tareaNueva);

    input.value = "";

  }else{
    alert('Por favor ingrese una tarea')
  }
}

function completarTarea(e){
  let tarea = e.target.parentNode.parentNode;  //cuando se le haga click obtendra el valor del nodo padre(elemento) no del icono ademas identifica en donde se hizo el evento
  tarea.classList.toggle('completada'); //permite alternar una clase
}

function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode; //ademas target permite detectar en cual de los botones generados se hizo click
  tarea.remove();
}

boton.addEventListener('click', agregarTarea);

//si se presiona enter agregara la tarea
input.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){ //key identifica cual tecla fue presionada
    agregarTarea();
  }
})
