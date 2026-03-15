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
Since late 2025, I have been working nights and weekends on a bipedal humanoid. No arms or head, just the legs and torso (to house the electronics, batteries, etc). For the muscles of the humanoid, I choose to go with harmonic drives.

<br>
Now why are harmonics so popular in humanoids and industrial robot arms?

  1. Extremely precise, near zero backlash - Due to high % of teeth engaged at any one time
  2. High reduction ratios in small diameters - can easily hit 100:1 in <100mm diameter
  3. Lightweight components - the flex spline is a thin walled circle

<br>
So what are the drawbacks of these drives?

  1. Very expensive - can be 5X the cost of a simple planetary BLDC acuator.
  2. Very calculation intensive (more on this below)

<br>
<h2 style="text-align:left; margin-top: 2em;">Calculation Hurdles</h2>
While reading current papers on harmonic drive design, I realized there were no good calculators. All of the fatigue life calculations, along with the conjugate teeth design was most likely propeitery software at the top robotics companies. 

**So I built my own:**


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

One of the main hurdles in harmonic drive design is simulation validation. It is complex and timely, as each calcualator generated tooth geometry needs to be validated / tweaked using FEA. 

<br>
For my simulation process I started with the flexspline cup and the wave generator (solidbody). I then ran a non linear deformation study to obtain the deformed flex spline shape. From there, I could export that deformed shape and apply a constant torque to it, to rotate it along the circular spline and get our meshing stresses.

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

