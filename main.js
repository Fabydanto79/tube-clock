function updateTimeAndDate() {
    const now = new Date();
    
    // Formato 24 ore - mantiene le ore da 0 a 23
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    // Rimuove AM/PM e usa direttamente il formato 24 ore
    let timeStr = hours + minutes;
    if (timeStr.startsWith('0')) {
        timeStr = ' ' + timeStr.slice(1);
    }
    
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    
    if (month.startsWith('0')) {
        month = ' ' + month.slice(1);
    }
    
    if (day.startsWith('0')) {
        day = ' ' + day.slice(1);
    }
    
    // Formato finale: HHmm MMddyy (senza AM/PM)
    const displayStr = timeStr + month + day + year;
    
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayStr[i];
        document.getElementById('char' + i + '2').textContent = displayStr[i];
    }
}

updateTimeAndDate();
setInterval(updateTimeAndDate, 60000);
