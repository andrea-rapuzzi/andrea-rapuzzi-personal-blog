--- 
layout: ../../layouts/MarkdownPostLayout.astro
title: "Come gestire attività CRO nel 2024"
author: "Andrea Rapuzzi"
description: "Trust the process"
image: 
    url: ""
    alt: ""
pubDate: 2024-03-28
tags: ["cro", "blogging", "digital marketing"]
---

Da circa un anno abbiamo avviato in Pirelli un nuovo tavolo di lavoro volto ad ottimizzare dell'esperienza utente e il tasso di conversione del nostro sito principale.
Questo nuovo approccio, focalizzato sulla CRO, non solo ci ha portato a riconsiderare gli strumenti con cui lavoriamo, ma ci ha anche obbligato a ridefinire i framework e i processi alla base delle nostre attività.

## Strumenti

Per quanto riguarda gli strumenti, il nostro stack attuale si basa su 3 principali tool:

- **Google Analytics 4** per analizzare gli eventi principali tracciati sul sito;
- **Contentsquare** per approfondire le interazioni e i percorsi di navigazione;
- **Optimizely** per l'orchestrazione degli esperimenti (Google Optimize R.I.P.).

Siamo ancora lontani dal riuscire a sfruttare appieno il potenziale di questi 3 strumenti, ma come anticipavo il vero cambio di marcia che abbiamo compiuto è principalmente  legato alla revisione dei processi di lavoro che definiscono il coinvolgimento degli stakeholder interni ed esterni nel processo di UX.

## Framework e processi

Dopo varie revisioni, e qualche immancabile risposta piccata, abbiamo adottato un processo che potremmo definire un *Triple Diamond*, rivisto e adattato ai nostri bisogni.


Il modello *Double Diamond* (ideato dal Design Council, [fonte](https://www.designcouncil.org.uk/our-resources/the-double-diamond/)) è sicuramente un ottimo punto di partenza  per gestire i progetti di innovazione, ma può risultare poco adatto a team con cambiamenti frequenti e non lineari come il nostro. Inoltre penso non si presti molto alla sperimentazione, che è il fulcro del  lavoro che stiamo cercando di introdurre in Pirelli.

Per questo motivo abbiamo preso spunto dal modello *Triple Diamond* ideato da Design Collective ([fonte](https://uxdesign.cc/why-the-double-diamond-isnt-enough-adaa48a8aec1)) e lo abbiamo adattato ai nostri bisogni interni, semplificando dove serviva e ridefinendo alcune delle attività da portare a termine all'interno di ciascuna fase. 

![Triple Diagram Flow](/images/blogpost/Triple_Diamond.png)

Per quanto banale, chiave per il successo di questa revisione è stata la chiara assegnazione delle responsabilità tra i vari team/agenzie coinvolti. Il processo si è articolato essenzialmente in 2 fasi. 
Nella prima abbiamo lavorato ad un espansione del "core team", che inzialmente si occupava delle maggior parte delle fasi progettuali, mentre nel nuovo assetto si va a focalizzare sulle fasi di **Analisi** e **Test**. I team di UI e Sviluppo invece entrano appieno nel flusso di CRO, andando a occuparsi della fase di **Prototipazione**.

I vari gate (Brief, Report, POC e Roll-out) sono gestiti dal Project Manager per garantire tempi e deliverable consistenti.

Un esempio significativo di come la separazione dei compiti abbia migliorato la collaborazione tra i vari team è stato il modo in cui abbiamo ri-strutturato i report creati durante la fase di analisi. Evitando di includere design dettagliati nei report, abbiamo migliorato il rapporto con il team di UI, che ha mantenuto piena ownership del lavoro di progettazione e non ha visto sminuito il proprio apporto al tavolo di lavoro. 

In modo simile, delegando gran parte del lavoro di front-end al team di sviluppo, abbiamo reso il team di sviluppo maggiormente responsabile e coinvolto nel processo di creazione.

In pratica abbiamo ottenuto di più facendo meno.

Per i più stoici di seguito qualche riga di dettaglio che entra nel merito delle principali fasi del nostro Triple Diamond: 

### 1 ANALIZE

#### 1.1 Raccolta 

In questa prima fase esplorativa nasce da una richiesta formale (a.k.a. *brief*) di un qualsiasi stakeholder del team per approfondire un determinato argomento. Le richieste possono provenire dal team CRO, dal team di UI/UX o da referenti business. 

Il team inizia ad analizzare il problema su vari livelli di profondità:

- **Site level**: analisi del traffico, dei percorsi principali, delle conversioni chiave;
- **Page Level**: analisi delle performance di singole pagine (tasso di uscita, conversioni);
- **Zone level**: una volta identificate le aree più succose andiamo ad analizzare le performance di singole pagine in termini di Exit rate, Conversioni. All'interno di questo livello solitamente andiamo ad inserire anche un'analisi dei session recording per avere una visione qualitativa della UX.


#### 1.2 Insight

A valle di questa prima fase di analisi, procediamo di discussione e sintesi le principali informazioni, trasformando i dati raccolti in insight azionabili attraverso modifiche dell'esperienza utente sul sito.

L'output finale è un *report* contenente analisi, insight e proposte di miglioramento per il team di UI/UX. Non andiamo mai oltre un mockup di bassissima fedeltà in modo da lasciare al team di UI piena libertà di interpretazione dei risultati

###  2. PROTOTYPE

Questa fase si divide in due sezioni: DESIGN e SVILUPPO. 

#### 2.1 Design
Il team di UI/UX crea flussi e interfacce; una volta cocordata la l'esperienza overall vengono definiti/ridfefiniti i componenti della UI basati sul design system.


#### 2.2
Una volta finalizzato il design passiamo alla vero e proprio sviluppo. Il team di developer inizia quindi a realizzare i componenti lato front-end (stack React), mentre il core team di CRO configura su Optimizely l'orchestrazione dell'esperimento.

### 3. Test

Creato il POC (*proof of concept*) possiamo procedere con l'ultima fase del processo: il test.

#### 3.1 Test

In questa fase, l'esperimento viene messo in produzione per valutarne l'impatto sulle metriche. La durata varia chiaramente in base ai volumi di traffico, ma generalmente possiamo dire che ci attestiamo inorno alle 3-4 settimane.

#### 3.2
A valle dell'esperimento viene redatto un report dettagliato sui risultati (GA4 e Contentsquare). Se il test ha successo, viene passato al team di rollout; in caso contrario, si discute di eventuali miglioramenti per un nuovo test. Per massimazzere i risultati, mentre il team di dev si occupa del rollout, manteniamo la variante vincente attiva sul 100% dei vissitator
