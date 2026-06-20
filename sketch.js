(() => {
  const PANEL_ID = "rowcounter-panel";

  const existing = document.getElementById(PANEL_ID);
  if (existing) {
    existing.remove();
  }

  const tables = Array.from(document.querySelectorAll("table.js-sort-table"));
  const counts = tables
    .map((table, index) => ({
      index: index + 1,
      rows: table.querySelectorAll("tr").length,
    }))
    .filter((item) => item.rows > 0);
  const total = counts.reduce((sum, item) => sum + item.rows, 0);

  const panel = document.createElement("div");
  panel.id = PANEL_ID;
  panel.style.cssText = [
    "position:fixed",
    "top:16px",
    "right:16px",
    "z-index:2147483647",
    "min-width:220px",
    "max-width:min(360px,calc(100vw - 32px))",
    "max-height:calc(100vh - 32px)",
    "overflow:auto",
    "box-sizing:border-box",
    "padding:14px",
    "border:1px solid #1f2937",
    "border-radius:6px",
    "background:#fff",
    "color:#111827",
    "font:14px/1.4 Arial,sans-serif",
    "box-shadow:0 8px 24px rgba(0,0,0,.22)",
  ].join(";");

  const header = document.createElement("div");
  header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px";

  const title = document.createElement("strong");
  title.textContent = "RowCounter";

  const close = document.createElement("button");
  close.type = "button";
  close.textContent = "x";
  close.setAttribute("aria-label", "Stäng RowCounter");
  close.style.cssText = [
    "width:24px",
    "height:24px",
    "border:1px solid #9ca3af",
    "border-radius:4px",
    "background:#f9fafb",
    "color:#111827",
    "cursor:pointer",
    "font:16px/20px Arial,sans-serif",
  ].join(";");
  close.addEventListener("click", () => panel.remove());

  header.append(title, close);

  const summary = document.createElement("div");
  summary.textContent = `${total} rad(er) i tabeller med class="js-sort-table"`;

  panel.append(header, summary);

  if (counts.length > 1) {
    const list = document.createElement("ol");
    list.style.cssText = "margin:10px 0 0 20px;padding:0";

    for (const item of counts) {
      const row = document.createElement("li");
      row.textContent = `Tabell ${item.index}: ${item.rows} rad(er)`;
      list.append(row);
    }

    panel.append(list);
  }

  document.body.append(panel);
})();
