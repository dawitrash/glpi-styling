/*	__________________________________
 *	|
 *	|	NUBODATA GLPI JS
 *	|
 *	|	David M.	17/11
 *	|_________________________________
*/

/*
	Asigna la clase correspondiente en base a criterios de texto en cada fila
*/

function coloringGlpi() {

	var rows = document.getElementsByTagName("tr")

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]

		/*
			NOTIFICACIONES: IPERIUS Y MOSY
		*/
		// Errores Iperius backup - red
		if ( row.innerHTML.includes("Copia de seguridad finalizada con errores") ) {
			row.className += " glpi-iperius"
		}
		if ( row.innerHTML.includes("Copia de seguridad finalizada con avisos") ) {
			row.className += " glpi-iperius"
		}
		// MOSY resolved - green
		if ( row.innerHTML.includes("Resolved") ) {
			row.className += " glpi-mosyResolved"
		}
		// MOSY error average - orange
		if ( row.innerHTML.includes("MOSY Average") ) {
			row.className += " glpi-mosyOrange"
		}
		// MOSY high or disaster - black
		if ( row.innerHTML.includes("MOSY High") ) {
			row.className += " glpi-mosyRed"
		}
		if ( row.innerHTML.includes("MOSY Disaster") ) {
			row.className += " glpi-mosyRed"
		}

		/*
			CATEGORÍAS: AUREA, MOSY/IPERIUS, VOIP
		*/
		// AUREA
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; AURE") ) {
			row.className += " glpi-cat-aurea"
		}
		// MOSY / IPERIUS
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; MOSY") ) {
			row.className += " glpi-cat-mosyiperius"
		}
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; IPERIUS") ) {
			row.className += " glpi-cat-mosyiperius"
		}
		// VOIP
		if ( row.innerHTML.includes("Root entity &gt; NBDT &gt; VOIP") ) {
			row.className += " glpi-cat-voip"
		}
	}

}
coloringGlpi()