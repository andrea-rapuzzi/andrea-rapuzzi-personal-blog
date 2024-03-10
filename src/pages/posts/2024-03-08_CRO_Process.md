--- 
layout: ../../layouts/MarkdownPostLayout.astro
title: "Processi CRO e dinamiche di lavoro"
author: "Andrea Rapuzzi"
description: "Trust the process"
image: 
    url: ""
    alt: ""
pubDate: 2024-03-28
tags: ["cro", "blogging", "digital marketing"]
---

Da circa un anno, abbiamo avviato presso Pirelli un nuovo flusso di ottimizzazione della conversione (CRO) mirato a migliorare l'esperienza degli utenti sul nostro sito principale dei prodotti per auto.

Questo nuovo approccio non solo ci ha spinto a riconsiderare gli strumenti tecnologici con cui analizziamo l'esperienza utente, formuliamo ipotesi e testiamo gli esperimenti, ma ci ha anche portato a ridefinire i framework di lavoro e i processi utilizzati all'interno del team di Pirelliani e delle agenzie coinvolte.

Per quanto riguarda gli strumenti, utilizziamo principalmente:

- **Google Analytics 4** per analizzare gli eventi principali tracciati;
- **Contentsquare** per approfondire le interazioni e i percorsi di navigazione;
- **Optimizely** per l'orchestrazione degli esperimenti (Google Optimize R.I.P.).

Sebbene stiamo ancora esplorando appieno il potenziale di questi strumenti, il vero progresso che abbiamo compiuto nelle ultime settimane è stato principalmente dovuto al cambiamento nei framework e alla distribuzione del lavoro.



## Framework

Dopo varie revisioni,e qualche immancabile risposta piccata, abbiamo adottato un processo che potremmo definire un Triple Diamond rivisitato e migliorato.



Le origini del modello *Double Diamond* evangelizzato dal Design Council ([link](https://www.designcouncil.org.uk/our-resources/the-double-diamond/)) sono sicuramente fondamentali per la riuscita di ogni progetto di innovazione, ma può risultare poco adatto a team con cambiamenti rapidi e non lineari. Inoltre, non si presta bene alla sperimentazione, che è il fulcro del nostro lavoro qui a Pirelli.

Per questo motivo abbiamo preso spunto dal modello *Triple Diamond* proposto in post medium da Design Collective ([link](https://uxdesign.cc/why-the-double-diamond-isnt-enough-adaa48a8aec1)) e l'abbiamo adattato per guidare il nostro processo interno. La nostra versione semplifica le proposte del modello TD, ma si adatta meglio alle competenze presenti nel nostro team.

La nostra rielaborazione, semplifica al punto giusto le proposte del modello TD, ma soprattutto si cala meglio sulle professionalità presenti nel nostro team.

![Triple Diagram Flow](/images/blogpost/Triple_Diamond.png)


Per quanto banale chiave del successo di questa revisione dei processi è stata la chiara definizione delle responsabilità tra i vari team/agenzie coinvolte. In particolare, il team di Analytics & CRO è responsabile delle fasi di Analisi e Test, mentre il team di UI/UX e sviluppo gestisce la fase di Prototipazione. I vari gate (Brief, Report, POC e Roll-out) sono gestiti dal Project Management per garantire tempi e deliverable consistenti.

Un esempio significativo di come la separazione dei compiti abbia migliorato la collaborazione è stato il modo in cui abbiamo strutturato i report durante la fase di analisi. Evitando di includere design dettagliati nei report, abbiamo migliorato il rapporto con il team di UI/UX, che ha mantenuto piena proprietà del lavoro di progettazione. 

In modo simile, delegando gran parte del lavoro di front-end al team di sviluppo e evitando modifiche dirette tramite Optimizely, abbiamo reso il team di sviluppo maggiormente responsabile e coinvolto nel processo di creazione.

Ma vediamo nel dettaglio da cosa si compone ciascuna fase e gate:

### Analyze

#### Raccolta 

In questa prima fase esplorativa nasce da una richiesta formale (a.k.a. *brief*) di un qualsiasi stakeholder del team per approfondire un determinato argomento. Le richieste possono provenire dal team CRO, dal team di UI/UX o da referenti business. 

Il team inizia ad analizzare il problema su vari livelli di profondità:

- **Section-level**: analisi del traffico, dei percorsi principali, delle conversioni chiave;

- **Page Level**: analisi delle performance di singole pagine (tasso di uscita, conversioni);

- **Page-level**: una volta identificate le aree più succose andiamo ad analizzare le performance di singole pagine in termini di Exit rate, Conversioni. All'interno di questo livello solitamente andiamo ad inserire anche un'analisi dei session recording per avere una visione qualitativa della UX.

- **Zone-level**: analisi di componenti specifiche delle pagine (tasso di click, esposizione delle zone, attrattività dei contenuti).


#### Insight

A valle di questa prima fase di analisi, procediamo di discussione e sintesi le principali informazioni, trasformando i dati raccolti in insight azionabili attraverso modifiche dell'esperienza utente sul sito.

L'output finale è un *report* contenente analisi, insight e proposte di miglioramento per il team di UI/UX.

### Prototype

Questa fase si divide in due sezioni: DESIGN e SVILUPPO. Il team di UI/UX crea flussi e interfacce, mentre il team di sviluppo implementa il design e prepara l'AB test. Il team di Optimizely si occupa della configurazione dell'esperimento.

In parallelo al team di front-end, il team  Optmizely si occupa di finalizzare il setup dell'esperimento, impostando variabili e metriche da monitorare durante l'analisi.


### Test

Creato il POC (*proof of concept*) possiamo procedere con l'ultima fase del processo: il test.

In questa fase, l'esperimento viene messo in produzione per valutarne l'impatto sulle metriche. Dopo 2-3 settimane, viene redatto un report dettagliato sui risultati. Se il test ha successo, viene passato al team di rollout; in caso contrario, si discute di eventuali miglioramenti per un nuovo test.
