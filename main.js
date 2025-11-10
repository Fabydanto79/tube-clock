// main.js - Formato 24 ore europeo con data corretta
function updateTimeAndDate() {
    const now = new Date();
    
    // Formato 24 ore
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    // Formato data europeo: GG/MM/AA
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    
    // Formato finale: HH:MM DD/MM/YY
    // Posizioni: 0-1=ore, 2-3=minuti, 4=spazio, 5-6=giorno, 7=/,  8-9=mese, 10-11=anno
    const displayStr = hours + minutes + ' ' + day + '/' + month + year;
    
    // Aggiorna tutti i 12 caratteri del display
    for (let i = 0; i < 12; i++) {
        const char = displayStr[i] || ' ';
        document.getElementById('char' + i + '1').textContent = char;
        document.getElementById('char' + i + '2').textContent = char;
    }
}

updateTimeAndDate();
setInterval(updateTimeAndDate, 60000);
