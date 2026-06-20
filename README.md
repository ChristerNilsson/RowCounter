# RowCounter

Bookmarklet som räknar antal rader där class börjar med "memberrow_" på aktuell sida.
Tabeller med noll matchande rader visas inte i listan.

Skapa ett bokmärke med följande innehåll:

```text
javascript:(()=>{const s=document.createElement('script');s.src='https://christernilsson.github.io/RowCounter/sketch.js';document.head.appendChild(s)})()
```

Exempel:
https://member.schack.se/ShowTournamentServlet?id=18578
