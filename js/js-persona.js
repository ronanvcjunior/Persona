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
}

function openPersona(persona) {
	var foto = 'imagens/' + persona + '.png'
	
	document.getElementById('popup').style.display = 'block'
	document.getElementById('body').style.overflowY = 'hidden'
	document.getElementById('personaFoto').src = foto

	if (persona === 'ricardo') {
		document.getElementById('divisao').style.background = '#379bf7'
		document.getElementById('personaResumo').style.background = '#379bf7'

		document.getElementById('personaName').innerHTML = 'Ricardo'
		document.getElementById('sexo').innerHTML = 'Masculino'
		document.getElementById('idade').innerHTML = '20 anos'
		document.getElementById('cidade').innerHTML = 'São Luís do Maranhão'
		document.getElementById('cursa').innerHTML = 'Engenharia da Computação na UFG'

		document.getElementById('paragrafo1').innerHTML = 'A rotina de Ricardo consiste em organizar suas tarefas pela manhã, fazer estágio durante a tarde, estudar no período da noite e jogar durante a madrugada, não costuma praticar esportes. Ricardo é um menino eclético, gosta de ouvir funk, eletrônica e rock. Em seu tempo livre gosta de assistir desenhos, seu preferido é O Incrível Mundo de Gumball. Também gosta de jogos online e ver vídeos na internet, principalmente stream de jogos, seu hobby favorito no momento é Genshin. Suas redes sociais mais usadas são twitter, whatsapp, reddit e instagram. Costuma se informar por leitura de apostilas, artigos, livros, jornais, reddit e pela internet no geral.' + '<br>' + 'O estudante é um menino que gosta de rir e se divertir, é paciente, persistente e tímido. Para o futuro, quer se formar e ter um bom emprego, que seja confortável e não cansativo, também deseja se casar, tornar-se mais confiante e estabilizado. Ricardo enfrenta o medo da pandemia, a ansiedade de não conseguir se formar no tempo certo e de haver muita concorrência no mercado de trabalho.' + '<br>' + 'O jovem tem interesse em sites que delegam estágio, inclusive já usou alguns, tem preferência por sites com informações claras e sucintas, que sejam de fácil acesso e uso, sempre espera encontrar várias oportunidades de trabalho.'
	} else if (persona === 'nicole') {
		document.getElementById('divisao').style.background = '#9bdc28'
		document.getElementById('personaResumo').style.background = '#9bdc28'

		document.getElementById('personaName').innerHTML = 'Nicole'
		document.getElementById('sexo').innerHTML = 'Feminino'
		document.getElementById('idade').innerHTML = '20 anos'
		document.getElementById('cidade').innerHTML = 'Sanclerlândia de Goiás'
		document.getElementById('cursa').innerHTML = 'Design Gráfico na UFG'

		document.getElementById('paragrafo1').innerHTML = 'Nicole começa seu dia trabalhando, à tarde faz faculdade, logo após faz uma caminhada ou vai para academia e termina o dia assistindo um filme. A estudante gosta de ouvir funk, sertanejo e pop, em seu tempo livre gosta de assistir filmes de terror e beber uma cerveja. Suas redes sociais mais usadas são o Pinterest e Instagram, onde busca referências de design e compartilha seus trabalhos, além disso, usa muito o WhatsApp para se comunicar. Busca informações principalmente em livros e redes sociais, como facebook e instagram, através de referências que conheceu na faculdade.' + '<br>' + 'Nicole é uma pessoa ansiosa, alegre e engraçada. Faz serviço voluntário em uma Empresa Júnior (EJ), onde é gerente de projetos. Apesar de não estabelecer planos para o futuro, planeja terminar o curso e ter um bom serviço, ser uma pessoa mais confiante, organizada e independente financeiramente, também quer constituir uma família. Seus maiores medos são de não conseguir terminar a faculdade no tempo certo e não ser feliz na sua profissão. Nicole nunca acessou sites de delegação de estágio, mas vê com bons olhos começar a utilizá-los, desde que tenha um sistema de busca eficaz, que organize os estágios por áreas de atuação, e que seja um site esteticamente agradável e seguro.'
	}
}