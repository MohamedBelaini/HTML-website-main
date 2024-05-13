
let text = document.getElementById('text');

function get_info(id) {
    if (id == 'btn1') {
        text.innerHTML = `
        <span class='span_btn'>Shorts:</span> la visualizzazione di contenuti a breve termine, come i video di breve durata su piattaforme come TikTok e YouTube Shorts, possono avere effetti negativi sul nostro cervello, influenzando l'attenzione, la concentrazione e la memoria. Questo può presentare sfide particolari quando si cerca di rimanere concentrati durante le lezioni o durante la visione di contenuti più lunghi.
        `
    } else if (id == 'btn2') {
        text.innerHTML = `
        <span class='span_btn'>Isolamento sociale:</span>L'uso eccessivo dei social media può portare a un senso di isolamento sociale poiché le interazioni online possono sostituire quelle faccia a faccia, riducendo il contatto umano reale.` 
    } else if (id == 'btn3') {
        text.innerHTML = `
        <span class='span_btn'>Depressione e ansia:</span> Alcune ricerche suggeriscono che l'uso frequente dei social media possa essere correlato a livelli più alti di depressione e ansia, poiché confrontarsi costantemente con le vite "perfette" degli altri può causare sentimenti di inadeguatezza e insoddisfazione.`
    } else if (id == 'btn4') {
        text.innerHTML = `
        <span class='span_btn'>Disturbi del sonno:</span> L'esposizione alla luce blu dei dispositivi digitali prima di coricarsi può interferire con il ciclo sonno-veglia, rendendo più difficile addormentarsi e compromettendo la qualità del sonno. ` 
    } 
}