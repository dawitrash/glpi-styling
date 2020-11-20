/*	__________________________________
 *	|
 *	|	NUBODATA GLPI JS
 *	|
 *	|	David M.	17/11
 *	|_________________________________
*/

/*
	Asigna la clase correspondiente en base a criterios de texto en cada fila
	Las clases son de W3CSS, un framework con colores ya asignados a las mismas  
*/

// --- Link w3CSS ---
var head = document.getElementsByTagName('HEAD')[0]
var link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'https://www.w3schools.com/w3css/4/w3.css'
head.appendChild(link)


function coloringGlpi() {
	
	// Modify row background and category colors
	const rows = document.getElementsByTagName("tr")
	
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]

		/*
			FILAS: IPERIUS Y MOSY
		*/
		// Errores Iperius backup
		if ( row.innerHTML.includes("Copia de seguridad finalizada con errores") ) {
			row.className += " w3-pale-red"
		}
		if ( row.innerHTML.includes("Copia de seguridad finalizada con avisos") ) {
			row.className += " w3-pale-red"
		}
		// MOSY problem resolved
		if ( row.innerHTML.includes("Resolved") ) {
			row.className += " w3-pale-green"
		}
		// MOSY error average
		if ( row.innerHTML.includes("MOSY Average") ) {
			row.className += " w3-pale-yellow"
		}
		// MOSY error high or disaster
		if ( row.innerHTML.includes("MOSY High") || row.innerHTML.includes("MOSY Disaster") ) {
			row.className += " w3-black"
		}
		
		/*
			CATEGORÍAS: AUREA, MOSY/IPERIUS, VOIP
		*/
		// AUREA
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; AURE") ) {
			row.firstElementChild.className += " w3-blue"
		}
		// MOSY / IPERIUS
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; MOSY") ||  row.innerHTML.includes("Root entity &gt; NBDT &gt; IPERIUS") ) {
			row.firstElementChild.className += " w3-red"
		}
		// VOIP
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; VOIP") ) {
			row.firstElementChild.className += " w3-yellow"
		}
	}

	// Modify Table structure
	const tables = document.getElementsByClassName("tab_cadrehov")
	
	console.log(tables[0])
	tables[0].className += " w3-table w3-small w3-card-4"
}
coloringGlpi()
