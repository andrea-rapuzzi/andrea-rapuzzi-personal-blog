--- 
layout: ../../layouts/MarkdownPostLayout.astro
title: "Obsidian, anno 1"
author: "Andrea Rapuzzi"
description: "e qualche considerazione sulla ricerca dell'app note perfetta"
image: 
    url: "/images/blogpost/obsidian-interfaccia.png"
    alt: "Schermata di Obsidian sul mio PC"
pubDate: 2023-12-06
tags: ["productivity", "apps"]
---

Chi mi conosce sa che negli anni ho sviluppato un certa ossessione per le app di produttività e nello specifico per le applicazione che utilizzo per gestire le note.

Come ci racconta il tormentato Horselover Fat in Valis (Philip K. Dick, 1981) la natura dell'universo è informazione e i nostri pensieri non sono altro che gli sforzi del nostro cervello di fruire, organizzare e ri-organizzare le informazioni relative all'universo stesso. 

Da questi pochi pensieri nasce la mia ricerca senza fine dello strumento perfetto per dare struttura alle mie informazioni. Nonostante l'obiettivo sia molto semplice, le modalità per raggiungerlo sono estremamente eterogenee e anche piccole differenze possono portare a impatti significativi. Cercare di razionalizzare i propri pensieri è un vero e proprio linguaggio che usiamo con noi stessi per dare senso a quello che ci circonda.

Dopo tanto affannarmi penso però di aver finalmente trovato la mia soluzione: **Obsidian**.

## Perché Obsidian?

La bellezza di Obsidian risiede essenzialmente in 3 aspetti principali:

- **Flessibilità**: l'app *vanilla* è abbastanza scarna, ma la moltitudine di plugin sviluppati dalla community danno la possibilità all'utente di adattare l'applicazione a qualsiasi processo/attività. 
  
- **Apertura**: l'applicazione permette di creare/modificare/visualizzare file di testo in formato markdown. Fornisce quindi la possibilità ai suoi utenti di esportare quanto creato in maniera estremamente semplice e veloce, senza alcun lock-in.
  
- **Privacy**: tutto quello che puoi fare su Obsidian può viaggiare in locale, o attraverso il proprio sistema di cloud-sync preferito. Dando la possibilità all'utente di definire un setup in linea con le sue esigenze

Offre le stesse possibilità di Notion o altri software similari, garantendo però una maggiore indipendenza e soprattutto un'esperienza libera dalle migliaia di feature inutili.

## Il mio setup
Ma veniamo al cuore della questione, come funziona il mio Obsidian? Innanzi tutto Obsidian si articola in Vault, ovvero delle cartelle in cui contenere i propri file di testo.

Per il mio setup ho creato *vault* per la gestione delle note, uno per il "Lavoro", salvato direttamente all'interno di OneDrive Aziendale, l'altro dedicato al mio utilizzo "Personale" all'interno di iCloud. La possibilità di caricare questi pacchetti di testo su cloud diversi mi permette di accedere dai device che preferisco, senza avere compromessi riguardo a policy aziendali o gap di sicurezza.

In termini di cartelle e tag ammetto che c'è ancora un po' di confusione, ma sto cercando di imparare dal [migliore](https://stephango.com/vault)

### Plugin e Temi
Come anticipato qualche riga sopra, la propria esperienza di Obsidian dipende dal setup che viene impostato dall'utente. Nel mio caso ho cercato di limitare al massimo l'utilizzo di plugin non necessari per tenere l'ambiente pulito. I principali sforzi sono stati nella creazione din un interfaccia che mi aiutasse a concentrarmi sull'attività di scrittura.

- **Minimal Theme e Minimal Theme Settings**: sono 2 strumenti indispensabili per tirare a lucido la UI dell'applicazione e renderla essenziale.
- **Hider**: fornisce gli ultimi aiuti di cosmesi per rimuovere tutti i componenti della UI non strettamente necessari nel mio utilizzo giornaliero.
- **Editor Syntax Highlight**: mi aiuta a soddisfare le mie velleità di developer permettendo di evidenziare la formattazione del codice in maniera semplice ed efficace
- **Advaced Tables**: per gestire le tabelle md in maniera più semplice fino a quando questa funzione non verrà integrata nell'applicazione vanilla.
- **Dataview**: per avere all'occorrenza qualche funzione database-like.


## Limitazioni
L'app tuttavia non si può dire perfetta. Come ogni software è estremamente *opinionated* e questo come sempre porta a dei tradeoff che possono essere più o meno significativi.

La sincronizzazione cross-device, soprattutto da mobile può essere abbastanza scomoda se non si decide di fare *optin* sul sync a pagamento offerto.

Un altro gap che potrebbe far storcere il naso è l'impossibilità di collaborazione tra più utenti (almeno in maniera nativa). Personalmente ho sempre vissuto la creazione di contenuti testuali come un esperienza principalmente individuale, ma ciononostante non può non essere menzionato tra le limitazioni della soluzione.

In ultimo, Obsidian non è un database, per quanto  sia presente una estensiva capacità di gestire meta-dati e siano sicuramente disponibili molteplici plugin in questo ambito, sicuramente non permette di fare *manipulation/visualization* in maniera semplice come su Notion o Airtable.