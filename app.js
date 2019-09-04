console.log('app rodando!');



function fetch_disciplinas(){
	let URL = "https://lab01-projsw-ufcg.herokuapp.com/api/disciplinas";
	fetch(URL)
	.then(response => response.json())
	.then(dados => {
		console.log(dados);
		window.disciplinas = dados
		disciplinas = document.querySelector("#disciplinas");
		console.log(disciplinas)
		dados.map(dado => {
			var $p = document.createElement('p')
			$p.innerHTML = dado.nome
			disciplinas.appendChild($p)
		})
				
			
	})
}

fetch_disciplinas();