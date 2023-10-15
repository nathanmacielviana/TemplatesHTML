/* AÃ§ÃĢo de eventos sobre o botÃĢo menu da tag nav (mobile). */
/* ParÃĒmetros: Nome do evento, funÃ§ÃĢo. */
openMenu.addEventListener('click', () => {

	/* SobrepÃĩe a propriedade display: none aplicada no
	   CSS por display: flex que o torna visÃ­vel. */ 
	menu.style.display = "flex"

	/* Captura o tamanho do menu nav e aplica na posiÃ§ÃĢo. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* ApÃģs 10 milÃĐsimos de segundo, adiciona o atributo style, */
	/* e adiciona as propriedades CSS.*/
	setTimeout(()=> {
		/* Faz o menu nav aparecer na velocidade em que foi
		   determinado na propriedade transition no CSS.*/
		menu.style.opacity = '1'

		/* Move o menu nav para a posiÃ§ÃĢo 0 a direita. Utiliza 
		   tambÃĐm a velocidade definida, na propriedade transition 
		   no CSS para realizar o movimento mais suave.*/
		menu.style.right = "0"

		/* Oculta o botÃĢo que torna visÃ­vel o elemento nav.*/
		openMenu.style.display = 'none'
	}, 10);
})

/* AÃ§ÃĢo de eventos sobre o botÃĢo X da tag nav (mobile). */
/* ParÃĒmetros: Nome do evento, funÃ§ÃĢo. */
closeMenu.addEventListener('click', () => {

	/* Faz o menu nav desaparecer na velocidade em que foi
	   determinado na propriedade transition no CSS. */
	menu.style.opacity = '0'

	/* Captura o tamanho do menu nav e aplica na posiÃ§ÃĢo. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Torna visÃ­vel o botÃĢo que apresenta o menu nav. */
	/* openMenu.style.display = 'block'*/
	
	/* ApÃģs 200 milÃĐsimos de 1 segundo, remove o atributo style. */
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})