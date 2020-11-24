// NUBODATA GLPI JS - github.com/dawichi
// [glpi]/js/common.min.js

/*
	Asigna la clase correspondiente en base a criterios de texto en cada fila
	Las clases son de W3CSS, un framework con colores ya asignados a las mismas  
*/

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
			row.style.backgroundColor = "#ffdddd"
			row.style.color = "black"
		}
		if ( row.innerHTML.includes("Copia de seguridad finalizada con avisos") ) {
			row.style.backgroundColor = "#ffdddd"
			row.style.color = "black"
		}
		// MOSY problem resolved
		if ( row.innerHTML.includes("MOSY Resolved") ) {
			row.style.backgroundColor = "#ddffdd"
			row.style.color = "black"
		}
		// MOSY error average
		if ( row.innerHTML.includes("MOSY Average") ) {
			row.style.backgroundColor = "#ffffcc"
			row.style.color = "black"
		}
		// MOSY error high or disaster
		if ( row.innerHTML.includes("MOSY High") || row.innerHTML.includes("MOSY Disaster") ) {
			row.style.backgroundColor = "#9e9e9e"
			row.style.color = "white"
		}
		
		/*
			CATEGORÍAS: AUREA, MOSY/IPERIUS, VOIP
		*/
		// AUREA
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; AURE") ) {
			row.firstElementChild.style.backgroundColor = "#2196f3"
		}
		// MOSY / IPERIUS
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; MOSY") ||  row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; BCKP") ) {
			row.firstElementChild.style.backgroundColor = "#f44336"
		}
		// VOIP
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; VOIP") ) {
			row.firstElementChild.style.backgroundColor = "#ffeb3b"
		}
	}
}

var urlStr = document.URL
if (urlStr.startsWith("https://izar.nubodata.com/front/ticket.php") ) {
	
	coloringGlpi()
}
