$.ui.useOSThemes=false;
$.ui.splitview=false;

function buscar(){
	$.ui.popup({
		title:"<a class='icon magnifier big'>Buscar</a>",
		message:"<form name='formTarea'><input type='text' name='tareaUno'></input></form>",
		doneText:"Buscar",
	    cancelText: "Cancelar"
	});
    window.open("busqueda.html");
}

function denuncia(){
$.ui.popup({
		title: "<a class='icon location'> Denuncia</a>",
		message:"<p></p>",
		doneText:"Eliminar",
        cancelText:"No eliminar"
});
}

function estadisticas(){
	$.ui.popup({
		title: "<a class='icon graph'>Estadisticas</a>",
		message:"¿Seguro que deseas eliminar todas la tareas?",
		doneText:"Si",
	    cancelText:"No"
});
}

	
