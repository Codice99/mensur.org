---
layout: page
title: Search
permalink: /search/
---

Search Mensur by keyword, name, topic or article title.

<div class="search-box">
 <input id="site-search-input" type="search" placeholder="Search Mensur..." autocomplete="off">
</div>

<div id="site-search-status" class="search-status">
 Type at least two characters to search the website.
</div>

<div id="site-search-results" class="search-results"></div>

<script>
document.addEventListener("DOMContentLoaded", async function {
 const input = document.getElementById("site-search-input");
 const results = document.getElementById("site-search-results");
 const status = document.getElementById("site-search-status");

 let index = [];

 function clean(text) {
 return (text || "").toString.toLowerCase;
 }

 function excerpt(content, query) {
 const plain = (content || "").replace(/\s+/g, " ").trim;
 const lower = plain.toLowerCase;
 const pos = lower.indexOf(query.toLowerCase);

 if (pos === -1) {
 return plain.slice(0, 220) + (plain.length > 220 ? "..." : "");
 }

 const start = Math.max(0, pos - 90);
 const end = Math.min(plain.length, pos + 170);
 return (start > 0 ? "..." : "") + plain.slice(start, end) + (end < plain.length ? "..." : "");
 }

 function render(query) {
 const q = clean(query).trim;

 results.innerHTML = "";

 if (q.length < 2) {
 status.textContent = "Type at least two characters to search the website.";
 return;
 }

 const terms = q.split(/\s+/).filter(Boolean);

 const matches = index
 .map(item => {
 const title = clean(item.title);
 const content = clean(item.content);
 const haystack = title + " " + content;

 let score = 0;

 for (const term of terms) {
 if (title.includes(term)) score += 8;
 if (content.includes(term)) score += 2;
 if (haystack.includes(term)) score += 1;
 }

 return { ...item, score };
 })
 .filter(item => item.score > 0)
 .sort((a, b) => b.score - a.score)
 .slice(0, 20);

 if (!matches.length) {
 status.textContent = "No results found.";
 return;
 }

 status.textContent = matches.length + " result" + (matches.length === 1 ? "" : "s") + " found.";

 for (const item of matches) {
 const card = document.createElement("article");
 card.className = "search-result-card";
 card.innerHTML = `
 <h2><a href="${item.url}">${item.title}</a></h2>
 <p>${excerpt(item.content, q)}</p>
 <a class="search-result-link" href="${item.url}">Open result →</a>
 `;
 results.appendChild(card);
 }
 }

 try {
 const response = await fetch("/search.json?v=search-v1");
 index = await response.json;
 } catch (error) {
 status.textContent = "Search index could not be loaded.";
 return;
 }

 input.addEventListener("input", function {
 render(input.value);
 });

 const params = new URLSearchParams(window.location.search);
 const initial = params.get("q");

 if (initial) {
 input.value = initial;
 render(initial);
 }
});
</script>
