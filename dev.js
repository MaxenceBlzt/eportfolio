// Shows local drafts (todos.local.js, not published) when a page is opened from disk.
if (location.protocol === 'file:') {
  document.head.appendChild(document.createElement('script')).src = 'todos.local.js';
}
