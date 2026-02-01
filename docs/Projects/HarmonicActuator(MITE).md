---
title: Harmonic Drive Actuator (Mite)
description: The magic of any robot is in the muscles.
hide:
  - navigation
  - tags
template: project.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="Harmonic Drive Actuator (Mite)">
  <meta name="description" content="The magic of any robot is in the muscles.">
  <meta name="keywords" content="Drone, Robotics, CAD, Simulation, Senior Design">
  <meta name="author" content="Brandon King">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://teddywarner.org/Projects/IAM3DPayloadPickup/">
  <meta property="og:title" content="Harmonic Drive Actuator (Mite)">
  <meta property="og:description" content="The magic of any robot is in the muscles.">
  <meta property="og:image" content="https://teddywarner.org/assets/images/IAM3DPayloadPickup/thumb.jpg">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://teddywarner.org/Projects/IAM3DPayloadPickup/">
  <meta property="twitter:title" content="Harmonic Drive Actuator (Mite)">
  <meta property="twitter:description" content="The magic of any robot is in the muscles.">
  <meta property="twitter:image" content="https://teddywarner.org/assets/images/IAM3DPayloadPickup/thumb.jpg">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/projects/project.css">
  <link rel="stylesheet" href="../../assets/css/header.css">
</head>

  <nav class="main-navigation">
    <ul>
      <li><a class="home" href="/"><span class="navnum">01</span> Home</a></li>
      <li><a class="proj" href="/proj"><span class="navnum">02</span> Projects</a></li>
    </ul>
  </nav>
  
  <div class="blur-overlay"></div>

<script src="../../assets/js/header.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
  });
</script>
  
<div class="return2feed"><a href="/proj"><i class="fa-solid fa-arrow-left-long"></i> Project Feed</a></div>

# Harmonic Drive Actuator (MITE)

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><span class="abt" id="name">Brandon King</span><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Spring, 2026 </span> <span class="readTime"></span></span></span>
</div>

---

<h2 style="text-align:left; margin-top: 2em;">Thesis</h2>

</center>
My team was tasked with designing and simulating a drone capable of completeing the IAM3D payload challenge. This challenge consisted of picking up a small 100g block of PLA and racing around an obstacle course in under 15 minutes. I was selected to be the CAD / hardware engineer due to my previous experience.

<br>
After a few technical reviews our team had reached our final component specs. We were using off the shelf ESCs, motors, and an electromagnet for pickup.

<br>
<h2 style="text-align:left; margin-top: 2em;">Design</h2>
I approached the design as I always do:

1. Manufacturning method - Is it being 3D printed, injection molded, CNC
2. Electromechanical access - All those wires need to lead to somewhere
3. Ease of assembly / disassembly - Hard to reach places are even harder to screw bolts into

<br>
One stipulation of this challenge was: the more parts 3D printed parts on the drone, the higher the design score. Through a few design reviews the initial concept evolved into a compact drone that consisted of 20 3d printed parts. This design had two cameras, one in the front for racing views and one in the bottom for payload views. 


<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/IAM3D/crosssection.png" alt="Microbot CAD Model" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Cross Section</p>
    </div>
  </div>
  <br>
</center>

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/IAM3D/sideview.png" alt="Microbot CAD Model" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Side View</p>
    </div>
  </div>
  <br>
</center>

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/IAM3D/topview.png" alt="Microbot CAD Model" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Top View</p>
    </div>
  </div>
  <br>
</center>

<h2 style="text-align:left; margin-top: 2em;">Simulation</h2>

One of the main parts of our senior design was validation. Since we were not actually building or flying this drone, we were expected to validate our design and component choices using simulation. **All simulations were ran in SolidWorks flow sim.**

<br>
To ensure the batter had proper cooling I ran CFD. This was run assuming slowest flight speeds possible, as low as 2.25m/s. The results did show higher temperatures than expected around the 4S battery. This caused the team to switch from PLA to PETG for the battery standoff.

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/IAM3D/CFD.png" alt="Microbot CAD Model" style="width:100%; max-width:900px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Battery Cooling</p>
    </div>
  </div>
  <br>
</center>

<br>
To ensure the landing legs could take a hard landing impact, FEA was run. Through some rough calculations, the force of a 15mph deceleration was found and applied evenly to all four feet. Given that plastics are hard to simulate, our factor of safety was lower than imagined at a 2. This is likely due to the complexity of printed plastics anistropic nature. 

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/IAM3D/FEA.png" alt="Microbot CAD Model" style="width:100%; max-width:900px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">15mph Landing</p>
    </div>
  </div>
  <br>
</center>

</center>
*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[ETA]: Estimated Time of Arrival
*[ISO]: International Organization for Standardization
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[JTAG]: Joint Test Action Group
*[IDE]: Integrated Development Environment
*[Rx]: Receiving Signal
*[Tx]: Transmitting Signal
*[VCC]: Voltage Common Collector (+)
*[GND]: Ground / Common Drain (-)
*[IC]: Integrated Circuit
*[LED]: Light-Emitting Diode
*[Cap]: Capacitor
*[SPST]: Single Pole Single Throw Switch
*[SPDT]: Single Pole Double Throw Switch
*[DPST]: Double Pole Single Throw Switch
*[DPDT]: Double Pole Double Throw Switch
*[EEPROM]: Electrically Erasable Programmable Read-Only Memory
*[PCB]: Printed Circuit Board
*[PWM]: Pulse Width Modulation
*[SPI]: Serial Peripheral Interface
*[I2C]: Inter-Integrated Circuit
*[UART]: Universal Asynchronous Receiver/Transmitter
*[ADC]: Analog-to-Digital Converter
*[DAC]: Digital-to-Analog Converter
*[MCU]: Microcontroller Unit
*[FPGA]: Field-Programmable Gate Array
*[SLA]: Stereolithography
*[DLP]: Digital Light Processing 
*[SLS]: Selective Laser Sintering
*[PLA]: Polylactic Acid 
*[ABS]: Acrylonitrile Butadiene Styrene 
*[PETG]: Polyethylene Terephthalate Glycol 
*[CAD]: Computer-Aided Design
*[CAM]: Computer-Aided Manufacturing
*[G-code]: A language for controlling CNC machines
*[PID]: Proportional-Integral-Derivative (control loop feedback mechanism)
*[MOSFET]: Metal-Oxide-Semiconductor Field-Effect Transistor
*[BJT]: Bipolar Junction Transistor
*[SMD]: Surface-Mount Device
*[THT]: Through-Hole Technology
*[DIP]: Dual In-line Package
*[ESC]: Electronic Speed Controller
*[BEC]: Battery Eliminator Circuit
*[LiPo]: Lithium Polymer 
*[NiMH]: Nickel-Metal Hydride 
*[EMI]: Electromagnetic Interference
*[ESD]: Electrostatic Discharge

