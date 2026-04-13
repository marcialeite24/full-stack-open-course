# Part 0 - How the Web Works

An exploration of what actually happens when you open a browser and visit a website. Before writing any code, I wanted to understand the underlying mechanics — HTTP requests, server responses, how the DOM works, and how modern web apps differ from traditional ones.

## What I covered

### HTTP and the request-response cycle

Traced how browsers communicate with servers using GET and POST requests. Used the browser's Network tab in DevTools to inspect real HTTP traffic — headers, status codes, response bodies.

### Traditional vs. modern web apps

Compared traditional server-side rendered pages (where the server sends complete HTML on every request) with modern approaches where the browser does the heavy lifting.

### AJAX

Understood how JavaScript can fetch data in the background without reloading the page — the technique behind dynamic content updates.

### Single-Page Applications (SPAs)

Explored how SPAs work: a single HTML file is loaded once, and JavaScript manipulates the DOM to update the UI without full page refreshes.

### The DOM

Learned how the browser represents a page as a tree of elements, and how JavaScript can read and modify that tree programmatically.

### Sequence diagrams

Mapped out the flow of a traditional web request, a form submission, and an AJAX-based SPA interaction using sequence diagrams to visualize the client-server communication.
