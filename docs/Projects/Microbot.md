---
title: MicroBot
description: Goal was to make an affordable and compact 6DOF robotic arm, using OTS components for electronics and mechanical linkages. Arm went from design to prototype within 4 months.
hide:
  - navigation
  - tags
  - toc
template: project.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="Von Niemann Probe - Brandon King">
  <meta name="description" content="Documentation of my work on the Von Niemann Probe project, a robotic system for autonomous exploration.">
  <meta name="keywords" content="Robotics, Autonomous Systems, Exploration, AI, Machine Learning">
  <meta name="author" content="Brandon King">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="/projects/Microbot/">
  <meta property="og:title" content="Von Niemann Probe - Brandon King">
  <meta property="og:description" content="Documentation of my work on the Von Niemann Probe project.">
  <meta property="og:image" content="https://teddywarner.org/assets/images/VonNiemannProbe/hero.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="/projects/Microbot/">
  <meta property="twitter:title" content="Von Niemann Probe - Brandon King">
  <meta property="twitter:description" content="Documentation of my work on the Von Niemann Probe project.">
  <meta property="twitter:image" content="https://teddywarner.org/assets/images/VonNiemannProbe/hero.png">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/projects/project.css">
  <link rel="stylesheet" href="../../assets/css/projects/vnp.css">
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

# MicroBot

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><span class="abt" id="name">Brandon King</span><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Summer, 2022 </span> <span class="readTime"></span></span></span>
  <span class="share" style=" color: inherit;">
</div>

---


<h2 style="text-align:left; margin-top: 2em;">Thesis</h2>

</center>
The goal with Microbot was to design a small 6DOF robot arm, while retaining the ability to pickup <150g payload. I was a broke college student at the time, so the smaller joint lengths meant less money spent on motors.

<br>
I started the napkin sketch phase as I always do:

1. Patent Research
2. Open source docs
3. Technical Papers

<br>
After some quick arm length and torque calcs, I landed on this design footprint which was 300mm x 300mm:

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/index/Microbot.jpg" alt="Microbot CAD Model" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Early CAD model</p>
    </div>
  </div>
  <br>
</center>
<h2 style="text-align:left; margin-top: 2em;">Design Process</h2>

I believe design and hardware iteration should be intertwined. **Often these two are seperated which leads to a delayed feedback loops**

<br>
For about a month I spent my nights testing and iterating on each joint. This process includes tolerances, ease of assembly, wiring configurations, etc.

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/index/Microbot2.jpg" alt="Chess.com Tweet Screenshot" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Full Assembly</p>
    </div>
  </div>
  <br>
</center>
<h2 style="text-align:left; margin-top: 2em;">Initial testing</h2>

Once each joint had been redesigned a few times, I landed on a aesthetic/function that I was happy with. Initial testing of the assembled arm included: testing motors/electronics, stopless homing, etc.




<center>
  <div style="position:relative; width:50%; padding-bottom:88.89%; margin: 0 auto; height:0; overflow:hidden; border:4px solid white; border-radius:12px;">
    <iframe 
      src="https://www.youtube.com/embed/XBXw3IASWTM?autoplay=1&mute=1&si=6G86YshtbvfoWcXj" 
      style="position:absolute; top:-10%; left:0; width:100%; height:120%; border:0;" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen 
      referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
  </div>
  <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Axis Homing</p>
</center>
<h2 style="text-align:left; margin-top: 2em;">Homing Code</h2>
<div style="height:660px; overflow:scroll;">

  ``` py linenums="1" title="6DOF Homing Code Snippet"

  delay(10000);
  digitalWrite(EN321_PIN, LOW);
  digitalWrite(EN4_PIN, LOW);
  digitalWrite(EN5_PIN, LOW);
  digitalWrite(EN6_PIN, LOW);
  delay(1000);
  // go to the home position (all joints equal to 0)
  // joint #2
  digitalWrite(DIR2_PIN, HIGH);
  int delValue=4000;
  int incValue = 7;
  int accRate=530;
  int totSteps=2791*2;
  for (int i=0; i < totSteps; i++)
  {
   if (totSteps > (2*accRate + 1)){
      if (i < accRate){
        //acceleration
        delValue = delValue - incValue;
      } else if (i > (totSteps - accRate)){
        //decceleration
        delValue = delValue + incValue;
      }
    } else {
      //no space for proper acceleration/decceleration
      if (i < ((totSteps - (totSteps % 2))/2)){
        //acceleration
        delValue = delValue - incValue;
      } else if (i > ((totSteps + (totSteps % 2))/2)){
        //decceleration
        delValue = delValue + incValue;
      }
    }
    digitalWrite(PUL2_PIN, HIGH);
    delayMicroseconds(delValue);
    digitalWrite(PUL2_PIN, LOW);
    delayMicroseconds(delValue);
  }
  // joint #3
  digitalWrite(DIR3_PIN, HIGH);
  delValue=4000;
  incValue=7;
  accRate=530;
  totSteps=6569;
  for (int i=0; i < totSteps; i++)
  {
   if (totSteps > (2*accRate + 1)){
      if (i < accRate){
        //acceleration
        delValue = delValue - incValue;
      } else if (i > (totSteps - accRate)){
        //decceleration
        delValue = delValue + incValue;
      }
    } else {
      //no space for proper acceleration/decceleration
      if (i < ((totSteps - (totSteps % 2))/2)){
        //acceleration
        delValue = delValue - incValue;
      } else if (i > ((totSteps + (totSteps % 2))/2)){
        //decceleration
        delValue = delValue + incValue;
      }
    }
    digitalWrite(PUL3_PIN, HIGH);
    delayMicroseconds(delValue);
    digitalWrite(PUL3_PIN, LOW);
    delayMicroseconds(delValue);
  }
  // joint #5
  digitalWrite(DIR5_PIN, HIGH);
  delValue=4000;
  incValue=7;
  accRate=530;
  totSteps=90/dl5;
  for (int i=0; i < totSteps; i++)
  {
   if (totSteps > (2*accRate + 1)){
      if (i < accRate){
        //acceleration
        delValue = delValue - incValue;
      } else if (i > (totSteps - accRate)){
        //decceleration
        delValue = delValue + incValue;
      }
    } else {
      //no space for proper acceleration/decceleration
      if (i < ((totSteps - (totSteps % 2))/2)){
        //acceleration
        delValue = delValue - incValue;
      } else if (i > ((totSteps + (totSteps % 2))/2)){
        //decceleration
        delValue = delValue + incValue;
      }
    }
    digitalWrite(PUL5_PIN, HIGH);
    delayMicroseconds(delValue);
    digitalWrite(PUL5_PIN, LOW);
    delayMicroseconds(delValue);
  }
  
  //--------------------------------------------------------GoGoGo-------------------
  curPos1=0.0;
  curPos2=0.0;
  curPos3=0.0;
  curPos4=0.0;
  curPos5=90.0;
  curPos6=0.0;
  float Xhome[6]={164.5, 0.0, 241.0, 90.0, 180.0, -90.0}; //{x, y, z, ZYZ Euler angles}
  
  float X1[6]={164.5, 0.0, 141.0, 90.0, 180.0, -90.0};
  float X11[6]={164.5+14.7, 35.4, 141.0, 90.0, 180.0, -90.0};
  float X12[6]={164.5+50.0, 50.0, 141.0, 90.0, 180.0, -90.0};
  float X13[6]={164.5+85.3, 35.4, 141.0, 90.0, 180.0, -90.0};
  float X14[6]={164.5+100.0, 0.0, 141.0, 90.0, 180.0, -90.0};
  float X15[6]={164.5+85.3, -35.4, 141.0, 90.0, 180.0, -90.0};
  float X16[6]={164.5+50.0, -50.0, 141.0, 90.0, 180.0, -90.0};
  float X17[6]={164.5+14.7, -35.4, 141.0, 90.0, 180.0, -90.0};

  float X18[6]={164.5+50.0, 0.0, 141.0, 90.0, 180.0, -90.0};
  
  float X2[6]={264.5, 0.0, 141.0, 0.0, 90.0, 0.0};
  float X3[6]={164.5, 100.0, 141.0, 90.0, 90.0, 0.0};
  float X4[6]={164.5, -100.0, 141.0, 90.0, -90.0, 0.0};
  
  float Jhome[6], J1[6], J11[6], J12[6], J13[6], J14[6], J15[6], J16[6], J17[6], J18[6], J2[6], J3[6], J4[6];
  InverseK(Xhome, Jhome);
  InverseK(X1, J1);
  InverseK(X11, J11);
  InverseK(X12, J12);
  InverseK(X13, J13);
  InverseK(X14, J14);
  InverseK(X15, J15);
  InverseK(X16, J16);
  InverseK(X17, J17);
  InverseK(X18, J18);
  InverseK(X2, J2);
  InverseK(X3, J3);
  InverseK(X4, J4);
  ```

</div>
<h2 style="text-align:left; margin-top: 2em;">Future Plans</h2>

I am now working on neural network pick and place using a low res camera on Joint 6.


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
