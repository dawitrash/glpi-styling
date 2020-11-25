// NUBODATA GLPI JS - github.com/dawichi
// [glpi]/js/common.min.js

/*
	Asigna la clase correspondiente en base a criterios de texto en cada fila
*/

function coloringGlpi() {

	const rows = document.getElementsByTagName("tr")

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]

		/*
			FILAS: Colorear el fondo
		*/
		// IPERIUS - copia con errores
		if ( row.innerHTML.includes("Copia de seguridad finalizada con errores") ) {
			row.style.backgroundColor = "#ff9800"
		}
		// IPERIUS - copia con avisos
		if ( row.innerHTML.includes("Copia de seguridad finalizada con avisos") ) {
			row.style.backgroundColor = "#ffdddd"
		}
		// MOSY - problem resolved
		if ( row.innerHTML.includes("MOSY Resolved") ) {
			row.style.backgroundColor = "#ddffdd"
		}
		// MOSY - error average
		if ( row.innerHTML.includes("MOSY Average") ) {
			row.style.backgroundColor = "#ffe9cb"
		}
		// MOSY - error high or disaster
		if ( row.innerHTML.includes("MOSY High") || row.innerHTML.includes("MOSY Disaster") ) {
			row.style.backgroundColor = "black"
			row.className += " nbdt-whitetext"
		}
		// AUREA
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; AURE") ) {
			row.style.backgroundColor = " #e8f0ff"
		}
		// VOIP
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; VOIP") ) {
			row.style.backgroundColor = "#ffffcc"
		}
		/*
			CATEGORÍAS: Colorear las primeras columnas de la fila
		*/
		// AUREA
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; AURE") ) {
			row.firstElementChild.style.backgroundColor = "#2196f3"
		}
		// MOSY
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; MOSY") ) {
			row.firstElementChild.style.backgroundColor = "#f44336"
		}
		// IPERIUS
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; BCKP") ) {
			row.firstElementChild.style.backgroundColor = "#ff9635"
		}
		// VOIP
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; APPS &gt; VOIP") ) {
			row.firstElementChild.style.backgroundColor = "#ffc107"
		}
	}
}

// Ejecuta la función solo en esa URL
var urlStr = document.URL
if (urlStr.startsWith("https://izar.nubodata.com/front/ticket.php") ) {
	
	coloringGlpi()
}
