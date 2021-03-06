window.onload = function(){
	var mae = localStorage.getItem('mae');
	var crianca = localStorage.getItem('crianca');
	var sobrenome_mae = localStorage.getItem('sobrenome_mae');
	var sobrenome_crianca = localStorage.getItem('sobrenome_crianca');
	var colegio = localStorage.getItem('colegio');
	var rg = localStorage.getItem('rg');
	var cpf = localStorage.getItem('cpf');
	var data_inicio = localStorage.getItem('data_inicio');
	var data_fim = localStorage.getItem('data_fim');
	data_inicio = data_inicio.replaceAll('/', '  ');
	data_fim = data_fim.replaceAll('/', '  ');
	$('.mae').text(mae);
	$('.nome_crianca').text(crianca);
	$('.crianca_sobrenome').text(sobrenome_crianca);
	$('.mae_sobrenome').text(sobrenome_mae);
	$('.colegio').text(colegio);
	$('.rg').text(rg);
	$('.cpf').text(cpf);
	$('.data_inicio').text(data_inicio);
	$('.data_fim').text(data_fim);
	window.print();
	window.history.go(-1);
}

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
