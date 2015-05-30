var $form =$("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#publicar_nav"),
	$list = $("#contenido"),
	$post = $(".item").first(),
	$lista = $("#contenido");

function mostrarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
	$titulo.val("");
	$url.val("");
	return false;
}
function agregarPost(){
	var url=$url.val(),
		titulo = $titulo.val(),
		$clone=$post.clone();

	$clone.find(".titulo_item a")
		.text(titulo)
		.attr("href", url);
	$clone.hide();
	$list.prepend($clone);
	$lista.slideToggle();
	$form.slideToggle();
	$clone.fadeIn();
	return false;
}

//Eventos
$button.click(mostrarFormulario)
$form.on('submit', agregarPost );