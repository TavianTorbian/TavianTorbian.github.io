# Prompt per Gemini in Antigravity — modalità Planning

> **Come usare questo file**: apri Google Antigravity, crea un nuovo workspace (o aprine uno già esistente) e copia nella cartella di lavoro sia `contenuti.md` sia l'intera sottocartella `immagini/`. Attiva la **modalità Planning** dell'agente (Gemini 3 Pro / Gemini 3.1 Pro). Copia tutto il contenuto fra le righe `---PROMPT INIZIO---` e `---PROMPT FINE---` come prompt iniziale e premi invio: l'agente produrrà un piano completo prima di iniziare a scrivere codice. Rivedilo, modificalo se serve, poi approvalo per far partire l'esecuzione.

---

## Suggerimenti d'uso (leggi prima di incollare)

1. **`contenuti.md` deve essere accessibile all'agente**: assicurati che il file sia nella root del workspace di Antigravity. È la fonte di verità per tutti i testi: senza di esso l'agente inventerà contenuti casuali.
2. **La cartella `immagini/` deve essere copiata nella root del workspace** prima di lanciare il prompt: l'agente userà i percorsi relativi `immagini/...` direttamente nei tag `<img>`.
3. Il prompt è pensato per la **modalità Planning**: l'agente genererà prima un piano dettagliato (lista di file da creare, ordine di lavoro, scelte di design), te lo mostrerà per approvazione, e solo dopo eseguirà il piano. Sfrutta la revisione del piano per aggiustare palette, font, struttura senza dover rifare tutto a posteriori.
4. Se durante l'esecuzione l'agente si interrompe (limiti di output, errore, ecc.), riprendi con: *"continua dal punto in cui ti sei fermato seguendo il piano approvato"*.
5. **Tipologia di sito**: HTML/CSS/JavaScript statico, perfetto per pubblicazione gratuita su Netlify.

---

## Personalizzazioni opzionali prima di lanciare il prompt

Il prompt è scritto per dare al modello la massima libertà su palette, font, mood e layout: ogni studente otterrà così un sito diverso. Se però vuoi indirizzarlo nella tua direzione, prima di incollarlo puoi aggiungere in fondo al prompt una breve nota tipo:

> *"Preferenze personali: palette `verde scuro + crema + oro`, mood `editoriale elegante`. Ispirazione: riviste tipo Monocle."*

Non è obbligatorio. Senza queste indicazioni Gemini sceglie tutto in autonomia rispettando i Principi di design.

Ricordati inoltre di **sostituire i dati personali** dentro `contenuti.md` prima di lanciare il prompt: nome, cognome, contatti, social, residenza, esperienze. Lascia "Alessandro Bianchi" e i dati di esempio solo se stai facendo una prova.

---

---PROMPT INIZIO---

# Ruolo
Agisci come un web designer e sviluppatore frontend senior, specializzato in siti personali statici per studenti di scuola superiore. Il tuo lavoro è progettare e scrivere il codice completo di un sito web personale a partire dal materiale presente nel workspace.

# Contesto
Sto preparando il sito personale di uno studente del quinto anno dell'IIS "Marconi Pieralisi" di Jesi, indirizzo Informatica e Telecomunicazioni. Il sito serve come progetto conclusivo del percorso di studi e verrà pubblicato gratuitamente su Netlify. Lo studente userà questo sito anche durante il colloquio dell'Esame di Stato.

Nel workspace trovi:
- `contenuti.md` → contiene **tutti i testi** già pronti per ogni sezione del sito. Devi usarli letteralmente, senza inventarne di nuovi: il tuo compito è la struttura, il design e il codice.
- `immagini/` → contiene le immagini già pronte, da referenziare con percorso relativo (es. `immagini/profilo.jpg`).

# Vincoli tecnici

- **Stack**: HTML5, CSS3, JavaScript vanilla. Niente framework JavaScript (no React, Vue, Angular, Svelte). Libreria CSS via CDN ammessa e a tua libera scelta. Libreria di icone via CDN ammessa.
- **Sito multi-pagina**: file `.html` separati, collegati da un menù di navigazione condiviso.
- **Responsive mobile-first** con CSS Grid e/o Flexbox. Breakpoint suggeriti: 480, 768, 1024 px.
- **Accessibilità**: tag semantici (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), `alt` significativo su tutte le immagini, focus visibile sugli elementi interattivi.
- **Performance**: niente librerie pesanti, `loading="lazy"` sulle immagini sotto il fold.
- **SEO base**: `<title>` e `<meta name="description">` su ogni pagina; `<meta property="og:title">` consigliato.
- **Immagini**: usa esattamente i nomi file presenti nella cartella `immagini/`, così come elencati nell'appendice di `contenuti.md`.

# Struttura del sito (mappa delle pagine)

- `index.html` — Pagina unica che riunisce tre sezioni scorrevoli, raggiungibili anche tramite ancore nel menù di navigazione (es. `#home`, `#chi-sono`, `#passioni`). Le tre sezioni vanno trattate come un **racconto unico e organico**, non come tre pagine accostate: il testo deve scorrere senza ripetizioni, e ogni argomento (presentazione, studi, passioni) va introdotto **una sola volta**, nel punto in cui viene approfondito. In particolare:
  - **Home / Hero**: nome + sottotitolo + 1 riga di benvenuto + CTA. **Non** anticipare contenuti delle sezioni successive (niente "qui troverai", "ti racconterò", liste di argomenti del sito): l'hero deve essere minimale e di impatto.
  - **Chi sono**: presentazione personale, percorso di studi, sguardo al futuro. **Non** elencare le passioni qui (vengono subito dopo).
  - **Passioni**: aperta da una breve frase di passaggio che fa da ponte con la sezione precedente, poi 4 blocchi (Musica, Calcio, Tecnologia, Viaggi) presentati come card o blocchi alternati testo/immagine, tutto sulla stessa pagina (senza link verso pagine esterne).
- `materie.html` — Pagina indice di tutte le materie, organizzate in tre gruppi: Area scientifico-tecnica, Area umanistica, Altro. Ogni materia è una card cliccabile verso la sua pagina:
  - `materia-informatica.html`
  - `materia-sistemi-reti.html`
  - `materia-tpsit.html`
  - `materia-gpoi.html`
  - `materia-matematica.html`
  - `materia-ia.html`
  - `materia-italiano.html`
  - `materia-storia.html`
  - `materia-inglese.html`
  - `materia-scienze-motorie.html`
- `educazione-civica.html` — Percorso completo di Educazione Civica come pagina singola con sezioni scorrevoli.
- `pcto.html` — Pagina dedicata al PCTO: descrizione azienda, ruolo, mansioni, hard/soft skills, riflessione.
- `contatti.html` — Pagina contatti + dati di contatto + link social.

# Stile visivo

## Principi di design (vincolanti)
Sono le regole di qualità a cui il sito deve aderire qualunque sia la direzione grafica che scegli. Considerale non negoziabili.

- **Gerarchia tipografica netta**: titoli ben distinguibili dal corpo, almeno 4 livelli visivi (h1, h2, h3, corpo). Niente "muri di testo" uniformi.
- **Massimo 2 font** in tutto il sito, scelti per contrastare bene fra loro.
- **Un solo accent color**, usato con parsimonia per CTA, link, micro-dettagli — mai per riempire ampie superfici.
- **Contrasto sempre adeguato** (WCAG AA come minimo): niente grigio chiaro su bianco per il corpo del testo.
- **Coerenza dei componenti** in tutte le pagine: stesso `border-radius`, stessa scala di ombre, stessi tempi di transizione.
- **Animazioni sobrie**: leggeri fade o slide sulla comparsa delle sezioni. Niente parallax aggressivo, niente auto-play, niente effetti che distraggono.
- **Personalità riconoscibile**: il sito non deve sembrare un template generico. Cerca un'identità visiva (palette + font + layout) che dia carattere senza tradire la sobrietà richiesta dal contesto (Esame di Stato).

## Direzioni grafiche (libertà totale)
Decidi tu, coerentemente con i principi qui sopra:

- **Palette**: 3-5 colori a tua scelta, dichiarati come variabili CSS in `:root`.
- **Tipografia**: una coppia di Google Fonts a tua scelta.
- **Mood grafico complessivo**: definiscilo tu in fase di piano (editoriale, magazine, tech minimal, warm document, ecc.) — qualunque direzione purché rispetti i principi sopra.
- **Libreria CSS esterna** (opzionale): se decidi di usarne una, indica nel piano quale e perché.

## Componenti chiave (direzioni, non dettagli)
- **Hero della Home**: testo + immagine profilo. Layout (foto a destra, sopra, sotto, ecc.) a tua scelta.
- **Card materie**: griglia responsive, ogni card con immagine + titolo + breve descrizione + hover percepibile ma discreto.
- **Navigazione**: sticky in alto. Su mobile, menù hamburger funzionante in JS vanilla.
- **Footer**: include link rapidi, social, contatti; impaginazione libera.

# Modalità di lavoro — Planning di Antigravity

Stiamo lavorando in **modalità Planning**: prima produci un piano completo, attendi la mia approvazione, poi esegui in autonomia tutto il piano dall'inizio alla fine senza chiedere conferme intermedie (salvo blocchi tecnici reali o ambiguità sui contenuti).

## 1. Cosa deve contenere il piano

Il piano da mostrarmi prima di scrivere codice, in modo conciso ma completo:

1. **Analisi del materiale**: conferma di aver letto `contenuti.md` ed esamina la cartella `immagini/`.
2. **Direzione visiva**: palette (3-5 colori con codici esadecimali), coppia di Google Fonts, mood grafico in 1-2 righe, eventuale libreria CSS scelta (quale e perché).
3. **Architettura**: lista dei file da creare con il loro scopo (es. `index.html`, `materie.html`, le singole pagine materia, `style.css`, `script.js`).
4. **Navigazione e componenti**: menù principale, link tra pagine, ancore interne della home, componenti riutilizzabili previsti (header, footer, card materia, ecc.).
5. **Wireframe testuale della home**: schema rapido (ASCII o elenco) che mostra l'ordine dei blocchi e il layout su desktop/mobile.

Mostra il piano in markdown. Non scrivere codice in questa fase.

## 2. Fase di esecuzione (dopo l'approvazione)

Una volta che ho approvato il piano, esegui tutto in autonomia:

- Crea ogni file `.html`, `.css`, `.js` nel workspace.
- Riusa header, footer e blocchi comuni in modo coerente fra le pagine.
- Verifica che ogni `<img src="...">` punti a un file realmente presente nella cartella `immagini/`.
- Verifica che ogni link interno (es. `materie.html`, `#chi-sono`) corrisponda a una destinazione esistente.
- Verifica la responsività con media query (breakpoint suggeriti: 480px, 768px, 1024px).
- Al termine, restituisci un breve resoconto: lista dei file creati, eventuali avvertenze o cose lasciate da fare manualmente (es. inserimento foto personale al posto del placeholder).

## 3. Convenzioni di codice
- HTML indentato a 2 spazi, sempre con `lang="it"` sul tag `<html>`.
- Classi CSS in kebab-case (`hero-section`, `subject-card`).
- Variabili CSS in `:root` per colori, spaziature, raggi, ombre.
- Commenti in italiano nelle sezioni principali del CSS.
- JavaScript moderno (const/let, arrow functions, querySelector, addEventListener).

## 4. Vincoli sul contenuto
- **Usa letteralmente** i testi del file `contenuti.md`. Non parafrasare, non sintetizzare, non aggiungere paragrafi.
- L'unica eccezione: per le **card di anteprima** delle materie nella pagina `materie.html` puoi usare la descrizione breve di una riga indicata nel file. Se manca, prendi le prime 12-18 parole della descrizione della materia.
- Niente Lorem Ipsum o testo segnaposto in nessuna pagina.
- Se trovi una vera ambiguità o una contraddizione nel materiale, **segnalala nel piano**: non improvvisare.

Procedi ora con la generazione del piano.

---PROMPT FINE---

---

## Cosa deve contenere il workspace di Antigravity prima di lanciare il prompt

1. ✅ Il file `contenuti.md` nella root del workspace (obbligatorio).
2. ✅ L'intera cartella `immagini/` con tutte le 25 immagini (obbligatorio: senza di essa i tag `<img>` punteranno a file inesistenti).
3. ✅ (Opzionale) Eventuali foto reali dello studente già rinominate `profilo.jpg`, `scuola-marconi.jpg`, ecc., a sostituire i placeholder.
4. ✅ (Opzionale) Un file `README.md` con eventuali preferenze personali aggiuntive (palette specifica, mood, riferimenti grafici).

## Come pubblicare il sito su Netlify (riassunto rapido per lo studente)

1. Crea un account gratuito su https://app.netlify.com/
2. Trascina la cartella del sito (con tutti i file `.html`, `style.css`, `script.js` e la sottocartella `immagini/`) direttamente nella dashboard di Netlify.
3. Netlify ti darà un URL pubblico tipo `https://nomecasuale.netlify.app`.
4. Da "Site settings → Change site name" puoi scegliere un nome più bello tipo `nome-cognome.netlify.app`.

Se vuoi gestire il sito da Git: pubblica la cartella su GitHub e collega il repository a Netlify — ogni `git push` aggiorna automaticamente il sito.
