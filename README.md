# RowCounter

Bookmarklet som räknar antal rader i tabeller med class="js-sort-table" eller "greyproptable" på aktuell sida.
Rubrikraden räknas inte.
Tabeller med noll rader visas inte i listan.

Skapa ett bokmärke med följande innehåll:

```text
javascript:(()=>{const s=document.createElement('script');s.src='https://christernilsson.github.io/RowCounter/sketch.js';document.head.appendChild(s)})()
```

Exempel:
https://member.schack.se/ShowTournamentServlet?id=18578
