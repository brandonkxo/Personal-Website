---
title: FROTHED
description: N/A
hide:
  - navigation
  - tags
template: project.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="FROTHED">
  <meta name="description" content="FROTHED">
  <meta name="keywords" content="FROTHED">
  <meta name="author" content="Brandon King">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://teddywarner.org/Projects/BraunStereoRedesign/">
  <meta property="og:title" content="Braun Stereo Redesign - Brandon King">
  <meta property="og:description" content="My take on the 1965 Braun HiFi walls stereo.">
  <meta property="og:image" content="https://teddywarner.org/assets/images/AdaptableAquaponics/hero.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://teddywarner.org/Projects/BraunStereoRedesign/">
  <meta property="twitter:title" content="Braun Stereo Redesign - Brandon King">
  <meta property="twitter:description" content="My take on the 1965 Braun HiFi walls stereo.">
  <meta property="twitter:image" content="https://teddywarner.org/assets/images/AdaptableAquaponics/hero.png">

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
      <li><a class="proj" href="/resume"><span class="navnum">03</span> Resumes</a></li>
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


# FROTHED

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><span class="abt" id="name">Brandon King</span><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Dec, 2024 - June 2025</span> <span class="readTime"></span></span></span>
  <span class="share" style=" color: inherit;">
</div>

---

<h2 style="text-align:left; margin-top: 2em;">Thesis</h2>
The matcha market is set to double to 9 Billion by 2030, with an estimated 20 million people drinking it daily. The Problem? **There is no keurig equivalent, no machine which provides matcha at the touch of a button**

<br>
I took this idea for an all in one machine from napkin sketch to prototype in just 3 months. I wanted to quickly get to an MVP which provided the same consistency and foam as a normal matcha shot.

<h2 style="text-align:left; margin-top: 2em;">Design</h2>
I started the napkin sketch phase as I always do:

1. Patent Research
2. Open source docs
3. Technical Papers

<br>
From there, I had a few problems to deal with. First, most consumer hardware is injection molded. This is mainly for cost savings, but also the cheapest way to make **complex food safe parts.** Since low volume injection molding is still very cost prohibitive, I designed this prototype to use CNC for all food safe parts. Additionally you'll see aluminum extrusions used for a box shaped base. This was done for speed of design and assembly.

<br>
The main IP of this machine lies in the mixing chamber geoemtry, inlet and outlets, and heating. I designed, simulated, and built 6 potential mixing chamber designs, along with 5 different mixing head geometries. Since this is an on going project for me with real market potential, I will not dive deep into the weeds here. I have attached a photo with some geometry omitted, so you can get a sense of the basic design.

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/FROTHED/Skeleton.png" alt="Microbot CAD Model" style="width:50%; max-width:900px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Skeleton CAD</p>
    </div>
  </div>
  <br>
</center>

<h2 style="text-align:left; margin-top: 2em;">Firmware</h2>
For the electronics side of things, I went with a skeleton PCB. For the first prototype, I just wanted to prove consistency and foam levels. So it really didn't make sense, for the sake of time, to design, test, and prototype a custom pcb board.

<br>
For the brains I choose the ESP32 to allow for OTA updates and remote diagnostics on heating temps, flow rates, etc.

<br>
For the firmware I choose ESPAsyncWebServer, an open source wifi-enabled host. The web server sets up mutliple HTTP endpoints that map to specific functions on the machine, so I can control and test from across the room. There are also manual controls enabled, which allow for one shot (short press), or an automated cleaning flush (long press). Most of the code is pretty basic compared to stuff I've written (neural networks, MPC, etc). 

<div style="height:660px; overflow:scroll;">

  ``` py linenums="1" title="Code Snippet"

  void loop(void) {
  // Read button state (LOW when pressed due to pull-up)
  bool buttonPressed = (digitalRead(BUTTON_PIN) == LOW);
  
  // Button press detection
  if (buttonPressed && !buttonWasPressed) {
    // Button was just pressed
    buttonPressStartTime = millis();
    buttonWasPressed = true;
  } else if (!buttonPressed && buttonWasPressed) {
    // Button was just released
    unsigned long pressDuration = millis() - buttonPressStartTime;
    
    if (pressDuration >= LONG_PRESS_DURATION) {
      // Long press detected - start flush sequence
      if (currentFlushState == FLUSH_IDLE) {
        currentFlushState = FLUSH_PUMP_IN;
        flowSensor.resetTotalVolume();  // Reset volume counter
        Serial.println("Flush sequence started via long press");
      }
    } else {
      // Short press detected - start relay sequence first
      Serial.println("Button pressed! Starting relay sequence");
      brewButtonRelayTimer = millis();
      brewButtonRelayActive = true;
      
      // Start brewing process after relay sequence
      temperatureControlEnabled = true;
      manualPumpControl = false;  // Reset manual control when starting brewing process
      currentBrewingState = IDLE;  // Reset brewing state to start from beginning
    }
    buttonWasPressed = false;
  }

  blinkLED(LED_PIN, 500);  // Blink LED every 500ms

  // Handle flush sequence state machine
  switch (currentFlushState) {
    case FLUSH_IDLE:
      // Do nothing, waiting for sequence to start
      break;

    case FLUSH_PUMP_IN:
      // Run pump in until target volume is reached
      relayControl.setRelayState(25, HIGH);  // Pump IN ON
      
      if (flowSensor.getTotalVolume() >= TARGET_VOLUME) {
        relayControl.setRelayState(25, LOW);  // Pump IN OFF
        currentFlushState = FLUSH_STIR;
        flushTimer = millis();
        relayControl.setRelayState(27, HIGH);  // Turn on Stir Motor
      }
      break;

    case FLUSH_STIR:
      // Run stir motor for 5 seconds
      if (millis() - flushTimer >= FLUSH_STIR_TIME) {
        relayControl.setRelayState(27, LOW);  // Stir Motor OFF
        currentFlushState = FLUSH_PUMP_OUT;
        flushTimer = millis();
        relayControl.setRelayState(26, HIGH);  // Turn on Pump OUT
      }
      break;

    case FLUSH_PUMP_OUT:
      // Run pump out for 8 seconds
      if (millis() - flushTimer >= FLUSH_PUMP_OUT_TIME) {
        relayControl.setRelayState(26, LOW);  // Pump OUT OFF
        currentFlushState = FLUSH_IDLE;
        flowSensor.resetTotalVolume();  // Reset volume counter
      }
      break;
  }

  // Handle brewing process state machine
  if (temperatureControlEnabled && !manualPumpControl) {  // Only run if not in manual control
    float currentTemp = readThermistor();
    
    switch (currentBrewingState) {
      case IDLE:
        // Start the brewing process
        currentBrewingState = HEATING;
        ssrControl.setTemperatureThreshold(TARGET_TEMP);
        break;

      case HEATING:
        // Use SSRControl to maintain temperature
        ssrControl.update(currentTemp);
        
        if (currentTemp >= TARGET_TEMP) {
          currentBrewingState = PUMPING;
          pumpPulseTimer = millis();  // Initialize pump pulse timer
        }
        break;

      case PUMPING:
        // Continue maintaining temperature while pumping
        ssrControl.update(currentTemp);
        
        // Handle pump pulsing
        unsigned long currentPumpTime = millis();
        unsigned long pumpElapsedTime = currentPumpTime - pumpPulseTimer;
        unsigned long pumpCycleTime = pumpElapsedTime % (PUMP_ON_TIME + PUMP_OFF_TIME);
        
        if (pumpCycleTime < PUMP_ON_TIME) {
            relayControl.setRelayState(25, HIGH);  // Pump ON
        } else {
            relayControl.setRelayState(25, LOW);   // Pump OFF
        }
        
        if (flowSensor.getTotalVolume() >= TARGET_VOLUME) {
          relayControl.setRelayState(25, LOW);  // Ensure pump is off
          relayControl.setRelayState(33, HIGH); // Turn on Auger
          augerActive = true;
          augerTimer = millis();
          currentBrewingState = IDLE;
          temperatureControlEnabled = false;  // End the brewing process
          flowSensor.resetTotalVolume();  // Reset the total volume counter
        }
        break;
    }
  } else {
    // Only turn off SSR when control is disabled
    digitalWrite(12, LOW);  // Pin 12 is the default SSR pin
    currentBrewingState = IDLE;
  }

  // Check if auger timer has expired
  if (augerActive && (millis() - augerTimer >= 20000)) {
    relayControl.setRelayState(33, LOW);  // Turn off Auger after 2 seconds
    augerActive = false;
    // Start stir motor sequence
    relayControl.setRelayState(27, HIGH); // Turn on Stir Motor
    stirMotorActive = true;
    stirMotorTimer = millis();
    stirMotorPulseCount = 0;
  }

  // Handle stir motor pulsing
  if (stirMotorActive) {
    unsigned long currentTime = millis();
    unsigned long elapsedTime = currentTime - stirMotorTimer;
    unsigned long cycleTime = elapsedTime % (STIR_MOTOR_ON_TIME + STIR_MOTOR_OFF_TIME);
    
    if (stirMotorPulseCount < STIR_MOTOR_PULSE_COUNT) {
      if (cycleTime < STIR_MOTOR_ON_TIME) {
        relayControl.setRelayState(27, HIGH); // Motor ON
        stirMotorPulseCounted = false;        // Reset count flag
      } else {
        relayControl.setRelayState(27, LOW);  // Motor OFF
        
        if (!stirMotorPulseCounted) {
          stirMotorPulseCount++;
          stirMotorPulseCounted = true;
          Serial.print("Stir motor pulse count: ");
          Serial.println(stirMotorPulseCount);
        }
      }
    } else {
      // We've completed all pulses
      relayControl.setRelayState(27, LOW);  // Ensure motor is off
      stirMotorActive = false;
      Serial.println("Stir motor sequence complete");
      
      // Start the exit valve sequence
      relayControl.setRelayState(32, HIGH);  // Turn on exit valve relay
      valveRelayActive = true;
      valveRelayTimer = millis();
      
      // Set H-bridge for OPEN
      digitalWrite(22, LOW);
      digitalWrite(23, HIGH);
      relayControl.setRelayState(23, LOW);
      relayControl.setRelayState(22, HIGH);
    }
  }

  // Handle valve and pump out sequence
  if (valveRelayActive) {
    unsigned long currentTime = millis();
    unsigned long elapsedTime = currentTime - valveRelayTimer;
    
    // Allow pump out to happen regardless of temperature control state
    if (elapsedTime >= VALVE_OPEN_TIME && !pumpOutActive) {
        relayControl.setRelayState(26, HIGH);  // Use pin 26 for PUMP OUT
        pumpOutActive = true;
    }
    
    if (elapsedTime >= (VALVE_OPEN_TIME + PUMP_OUT_TIME)) {
        relayControl.setRelayState(32, LOW);  // Turn off exit valve
        if (pumpOutActive) {
            relayControl.setRelayState(26, LOW);  // Turn off PUMP OUT (pin 26)
            pumpOutActive = false;
        }
        valveRelayActive = false;
    }
  }

  // Update flow sensor readings every second using non-blocking timer
  if (millis() - flowSensorTimer >= FLOW_SENSOR_INTERVAL) {
    currentFlowRate = flowSensor.readFlowRate();
    flowSensorTimer = millis();
  }

  // Handle brew button relay control
  if (buttonWasPressed && !brewButtonRelayActive) {
      brewButtonRelayTimer = millis();
      brewButtonRelayActive = true;
  }
  
  if (brewButtonRelayActive) {
      unsigned long currentTime = millis();
      unsigned long elapsedTime = currentTime - brewButtonRelayTimer;
      
      if (elapsedTime >= BREW_BUTTON_RELAY_DELAY && elapsedTime < (BREW_BUTTON_RELAY_DELAY + BREW_BUTTON_RELAY_DURATION)) {
          relayControl.setRelayState(32, true);  // Turn on relay
      } else if (elapsedTime >= (BREW_BUTTON_RELAY_DELAY + BREW_BUTTON_RELAY_DURATION)) {
          relayControl.setRelayState(32, false);  // Turn off relay
          brewButtonRelayActive = false;
      }
  }
  ```

</div>

<h2 style="text-align:left; margin-top: 2em;">Testing</h2>
Even though Testing and Design are two separate headers in this project, they occured simultaneously. This is a core belief of mine: **that design and hardware testing must be intertwined. Often these are separated which leads to delayed feedback loops.**

For initial testing I focused on shot temperature, foaming, and consistency. With some tweaking of the thermoblock (heating element) and the dosing mechanism, I was getting consistent matcha shots everytime!

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single" style="overflow: hidden; width: 50%; max-width: 900px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); aspect-ratio: 4 / 5;">
      <img src="/assets/images/FROTHED/Skeleton2.jpeg" alt="Microbot CAD Model"
           style="width: 100%; height: auto; transform: translateY(-20%);" />
    </div>
    <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Skeleton Assembly</p>
  </div>
  <br>
</center>

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/FROTHED/cross1.png" alt="Microbot CAD Model" style="width:50%; max-width:900px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">First Shot</p>
    </div>
  </div>
  <br>
</center>

<center>
  <div style="position:relative; width:50%; padding-bottom:88.89%; margin: 0 auto; height:0; overflow:hidden; border:4px solid white; border-radius:12px;">
    <iframe 
      src="https://www.youtube.com/embed/tPA3lCJNyuU?si=RsL4HcIQIBWj4DM5" 
      style="position:absolute; top:-10%; left:0; width:100%; height:120%; border:0;" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen 
      referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
  </div>
  <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">No Foam Test</p>
</center>

<h2 style="text-align:left; margin-top: 2em;">Future Plans</h2>
I am now focused on an injection molded design, which allows for mass manufacturing. This reworked design will feature multiple improvements:

1. Integrated waste water container - built in flushes prevent dirty shots

2. Single or double shot buttons - no power button, auto on

3. Easy access hopper - allows for dumping an entire tin of powder

Below you can see a rough CAD of what the injection molded product will resemble. I took inspiration from the cloud plates and mugs that have gone viral recently.

<center>
  <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 40px; margin-top: 1em;">
    <div class="tweet-item single" style="text-align: center;">
      <img src="/assets/images/FROTHED/Render2.jpg" alt="Microbot CAD Model"
        style="width: 100%; max-width: 400px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Render</p>
    </div>
    
    <div class="tweet-item single" style="text-align: center;">
      <img src="/assets/images/FROTHED/cloudmug.jpg" alt="Microbot CAD Model"
        style="width: 100%; max-width: 400px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Inspo</p>
    </div>
  </div>
</center>

