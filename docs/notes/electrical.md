---
title: Electrical Notes
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
  <title>Electrical Notes - PCB Design</title>
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
      cursor: pointer;
      position: relative;
      padding-right: 30px;
    }
    .notes-landing h2 {
      font-family: 'Crimson Pro', serif;
      font-size: 1.6em;
      font-weight: 400;
      margin-bottom: 0.5em;
      color: var(--md-default-fg-color--light);
    }
    .notes-landing h1::after {
      content: '▼';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: transform 0.3s ease;
    }
    .notes-landing h1.collapsed::after {
      transform: translateY(-50%) rotate(-90deg);
    }
    .notes-content {
      margin-top: 2em;
      font-family: 'JetBrains Mono', monospace;
      color: var(--md-default-fg-color--lighter);
      font-size: 1.1em;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
    }
    .notes-content.collapsed {
      max-height: 0;
      margin-top: 0;
    }
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const headers = document.querySelectorAll('.notes-landing h1');
      const contents = document.querySelectorAll('.notes-landing h1 + .notes-content');
      
      // Set all sections as collapsed by default
      headers.forEach(header => {
        header.classList.add('collapsed');
      });
      contents.forEach(content => {
        content.classList.add('collapsed');
      });

      // Add click handlers
      headers.forEach(header => {
        header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          this.classList.toggle('collapsed');
          content.classList.toggle('collapsed');
        });
      });
    });
  </script>
</head>
<body>
  <div class="notes-landing">
    <h1>Parts of a PCB</h1>
    <div class="notes-content">
      <img src="/assets/images/pcb/whatispcb2.jpg" alt="What is a PCB" style="max-width: 100%; margin-bottom:4em 0;">    
      <p>*Soldermask prevents copper layers from contacting each other.</p>
      <p style="margin-bottom: 4em;">*Prepreg is a cheap material, helps in adhesion between layers </p>    
      <img src="/assets/images/pcb/soldermask.png" alt="What is a PCB" style="max-width: 50%; margin: 0 auto 2em auto; display: block;">  
      <p>*The soldermask is the dark green material. The light green lines are copper traces. The white material is silkscreen, printed. </p>
      <p style="margin-bottom: 4em;">*The large holes at the top of the images, are the through holes which carry copper all the way through the board (the places we solder to). The small holes seen here, are "vias" connecting wires from one layer to another layer.</p>            
      <h2>Key Steps of Design</h2>
      <p>1. Schematic Capture</p>
      <p>2. Peparing the schematic for layout</p>
      <p style="margin-left: 2em;">   - Attaching package symbols (footprints)</p>
      <p style="margin-left: 2em;">   - Creating a netlist</p>
      <p>3. Layout</p>
      <p style="margin-bottom: 4em;">4. Prepare for manufacturer - gerber / drill files</p>
    </div>
    <h1>Design Guidelines</h1>
    <div class="notes-content">
      <h2>Trace Width</h2>
      <p>*Needs to take into account operating temp, voltage, current, etc. to define ideal trace width</p>
      <a href="https://www.4pcb.com/trace-width-calculator.html" target="_blank" style="display: block; margin-bottom: 4em; color: var(--md-accent-fg-color, #007bff); text-decoration: underline;">Online Trace Width Calculator</a>
    </div>         
    <h1>Manufacturing Deliverables</h1>
    <div class="notes-content">
      <img src="/assets/images/pcb/output.png" alt="What is a PCB" style="max-width: 100%; margin-bottom:4em 0;">    
    </div>
    <h1>Standards</h1>
    <div class="notes-content">
      <iframe src="/assets/images/pcb/ipc2221a.pdf" style="width: 100%; height: 600px; border: none; margin-bottom: 4em;"></iframe>
    </div>    
  </div>
</body>
</html> 