---
title: Notes
hide:
  - navigation
  - toc
  - feedback
template: index.html
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notes</title>
  <link rel="stylesheet" href="/assets/css/index.css">
  <link rel="stylesheet" href="/assets/css/header.css">
  <style>
    .notes-landing {
      max-width: 700px;
      margin: 4em auto 2em auto;
      padding: 2em;
      background: var(--md-default-bg-color);
      border-radius: 12px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.04);
    }
    .notes-landing h1 {
      font-family: 'Crimson Pro', serif;
      font-size: 2.2em;
      font-weight: 400;
      margin-bottom: 0.5em;
      color: var(--md-default-fg-color--light);
    }
    .notes-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5em;
      margin-top: 2em;
    }
    .note-link {
      display: block;
      padding: 1.5em 1.2em;
      border: 1px solid var(--md-default-fg-color--lighter);
      border-radius: 8px;
      text-decoration: none;
      background: var(--md-default-bg-color);
      transition: box-shadow 0.2s, border-color 0.2s;
    }
    .note-link:hover {
      border-color: var(--md-default-fg-color--light);
      box-shadow: 0 4px 16px rgba(0,0,0,0.07);
    }
    .note-title {
      font-family: 'Crimson Pro', serif;
      font-size: 1.3em;
      color: var(--md-default-fg-color--light);
      margin-bottom: 0.3em;
    }
    .note-desc {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1em;
      color: var(--md-default-fg-color--lighter);
    }
  </style>
</head>
<body>
  <div class="notes-landing">
    <h1>Notes</h1>
    <div class="notes-list">
      <a class="note-link" href="/notes/electrical">
        <div class="note-title">Electrical</div>
        <div class="note-desc">PCB Design</div>
      </a>
      <a class="note-link" href="/notes/robotics">
        <div class="note-title">Robotics</div>
        <div class="note-desc">Control systems & automation</div>
      </a>
      <a class="note-link" href="/notes/manufacturing">
        <div class="note-title">Manufacturing</div>
        <div class="note-desc">Production processes & optimization</div>
      </a>
    </div>
  </div>
</body>
</html> 