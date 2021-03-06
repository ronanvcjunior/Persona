function larguraTela() {
    var largura = parseFloat(window.innerWidth)

	if (largura >= 768) {
		document.getElementById('box1').setAttribute("class", 'box box3d')
		document.getElementById('box2').setAttribute("class", 'box box3d')
	} else {
		document.getElementById('box1').setAttribute("class", 'box')
		document.getElementById('box1').style.transform = 'none'
		document.getElementById('box2').setAttribute("class", 'box')
	}

	VanillaTilt.init(document.querySelectorAll(".box3d"), {
		max: 10,
		speed: 400
	});
}

larguraTela()

function closedPersona() {
	document.getElementById('popup').style.display = 'none'
	document.getElementById('body').style.overflowY = 'auto'

	document.getElementById('foto1').style.transform = 'translate3d(-50%, -50%, 50px)'
	document.getElementById('resumo1').style.transform = 'translate3d(-50%, 0, 50px)'
	document.getElementById('name1').style.transform = 'translate3d(0, 0, 50px)'

	document.getElementById('foto2').style.transform = 'translate3d(-50%, -50%, 50px)'
	document.getElementById('resumo2').style.transform = 'translate3d(-50%, 0, 50px)'
	document.getElementById('name2').style.transform = 'translate3d(0, 0, 50px)'
}

function openPersona(persona) {
	var foto = 'imagens/' + persona + '.png'
	
	document.getElementById('popup').style.display = 'block'
	document.getElementById('body').style.overflowY = 'hidden'

	document.getElementById('foto1').style.transform = 'translate3d(-50%, -50%, 0)'
	document.getElementById('resumo1').style.transform = 'translate3d(-50%, 0, 0)'
	document.getElementById('name1').style.transform = 'translate3d(0, 0, 0)'

	document.getElementById('foto2').style.transform = 'translate3d(-50%, -50%, 0)'
	document.getElementById('resumo2').style.transform = 'translate3d(-50%, 0, 0)'
	document.getElementById('name2').style.transform = 'translate3d(0, 0, 0)'

	document.getElementById('personaFoto').src = foto

	if (persona === 'ricardo') {
		document.getElementById('divisao').style.background = '#379bf7'
		document.getElementById('personaResumo').style.background = '#379bf7'

		document.getElementById('personaName').innerHTML = 'Ricardo'
		document.getElementById('sexo').innerHTML = 'Masculino'
		document.getElementById('idade').innerHTML = '20 anos'
		document.getElementById('cidade').innerHTML = 'S??o Lu??s do Maranh??o'
		document.getElementById('cursa').innerHTML = 'Engenharia da Computa????o na UFG'

		document.getElementById('paragrafo1').innerHTML = 'A rotina de Ricardo consiste em organizar suas tarefas pela manh??, fazer est??gio durante a tarde, estudar no per??odo da noite e jogar durante a madrugada, n??o costuma praticar esportes. Ricardo ?? um menino ecl??tico, gosta de ouvir funk, eletr??nica e rock. Em seu tempo livre gosta de assistir desenhos, seu preferido ?? O Incr??vel Mundo de Gumball. Tamb??m gosta de jogos online e ver v??deos na internet, principalmente stream de jogos, seu hobby favorito no momento ?? Genshin. Suas redes sociais mais usadas s??o twitter, whatsapp, reddit e instagram. Costuma se informar por leitura de apostilas, artigos, livros, jornais, reddit e pela internet no geral.' + '<br>' + 'O estudante ?? um menino que gosta de rir e se divertir, ?? paciente, persistente e t??mido. Para o futuro, quer se formar e ter um bom emprego, que seja confort??vel e n??o cansativo, tamb??m deseja se casar, tornar-se mais confiante e estabilizado. Ricardo enfrenta o medo da pandemia, a ansiedade de n??o conseguir se formar no tempo certo e de haver muita concorr??ncia no mercado de trabalho.' + '<br>' + 'O jovem tem interesse em sites que delegam est??gio, inclusive j?? usou alguns, tem prefer??ncia por sites com informa????es claras e sucintas, que sejam de f??cil acesso e uso, sempre espera encontrar v??rias oportunidades de trabalho.'
	} else if (persona === 'nicole') {
		document.getElementById('divisao').style.background = '#9bdc28'
		document.getElementById('personaResumo').style.background = '#9bdc28'

		document.getElementById('personaName').innerHTML = 'Nicole'
		document.getElementById('sexo').innerHTML = 'Feminino'
		document.getElementById('idade').innerHTML = '20 anos'
		document.getElementById('cidade').innerHTML = 'Sanclerl??ndia de Goi??s'
		document.getElementById('cursa').innerHTML = 'Design Gr??fico na UFG'

		document.getElementById('paragrafo1').innerHTML = 'Nicole come??a seu dia trabalhando, ?? tarde faz faculdade, logo ap??s faz uma caminhada ou vai para academia e termina o dia assistindo um filme. A estudante gosta de ouvir funk, sertanejo e pop, em seu tempo livre gosta de assistir filmes de terror e beber uma cerveja. Suas redes sociais mais usadas s??o o Pinterest e Instagram, onde busca refer??ncias de design e compartilha seus trabalhos, al??m disso, usa muito o WhatsApp para se comunicar. Busca informa????es principalmente em livros, redes sociais, como facebook, instagram e atrav??s de refer??ncias que conheceu na faculdade.' + '<br>' + 'Nicole ?? uma pessoa ansiosa, alegre e engra??ada. Faz servi??o volunt??rio em uma Empresa J??nior (EJ), onde ?? gerente de projetos. Apesar de n??o estabelecer planos para o futuro, quer terminar o curso e ter um bom servi??o, ser uma pessoa mais confiante, organizada e independente financeiramente, tamb??m quer constituir uma fam??lia. Seus maiores medos s??o de n??o conseguir terminar a faculdade no tempo certo e n??o ser feliz na sua profiss??o. Nicole nunca acessou sites de delega????o de est??gio, mas v?? com bons olhos come??ar a utiliz??-los, desde que tenha um sistema de busca eficaz, que organize os est??gios por ??reas de atua????o, e que seja um site esteticamente agrad??vel e seguro.'
	}
}
