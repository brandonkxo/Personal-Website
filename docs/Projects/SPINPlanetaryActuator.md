---
title: SPIN Planetary Actuator
description: 5:1 Quasi-Direct-Drive Actuator which uses simpleFOC open source library to act as a virtual spring.
hide:
  - navigation
  - tags
template: project.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="SPIN Planetary Actuator - Brandon King">
  <meta name="description" content="5:1 Quasi-Direct-Drive Actuator which uses simpleFOC open source library to act as a virtual spring.">
  <meta name="keywords" content="Actuator, Robotics, simpleFOC">
  <meta name="author" content="Brandon King">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://teddywarner.org/Projects/SPINPlanetaryActuator/">
  <meta property="og:title" content="SPIN Planetary Actuator - Brandon King">
  <meta property="og:description" content="5:1 Quasi-Direct-Drive Actuator which uses simpleFOC open source library to act as a virtual spring.">
  <meta property="og:image" content="https://teddywarner.org/assets/images/learnedSpec/hero.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://teddywarner.org/Projects/SPINPlanetaryActuator/">
  <meta property="twitter:title" content="SPIN Planetary Actuator - Brandon King">
  <meta property="twitter:description" content="5:1 Quasi-Direct-Drive Actuator which uses simpleFOC open source library to act as a virtual spring.">
  <meta property="twitter:image" content="https://teddywarner.org/assets/images/learnedSpec/hero.png">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
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

# SPIN Planetary Actuator

<div style="margin-top: -0.8em;">
  <span class="abtlinks"><span class="abt" id="name">Brandon King</span><span class="abt" style="font-weight: 300; padding-left: 6px;"><span class="year">| Summer, 2022 </span> <span class="readTime"></i></span></span></span>
  <span class="share" style=" color: inherit;">
</div>

---

<h2 style="text-align:left; margin-top: 2em;">Thesis</h2>

</center>
I needed a compact actuator to use in my self balancing robot. I Had two SPIN Servos lying around, sent over by my good friends at Atopile. 

<br>
So I started the napkin sketch phase as I always do:

1. Patent Research
2. Open source docs
3. Technical Papers

<br>
After some quick calculations on motor density and reduction ratios, I decided to go for a Quasi direct drive approach, with a 5:1 reduction ratio. I targeted 2.75Nm max torque.

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/SPINActuator/spin.13.5.png" alt="Microbot CAD Model" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">CAD Render</p>
    </div>
  </div>
  <br>
</center>
<h2 style="text-align:left; margin-top: 2em;">Design / Firmware</h2>

I designed the planetary reducer from scratch, while sticking to off the shelf bearing sizes. I used helical gears, for a quieter power transmission.

<br>
For firmware, I went with the SimpleFOC library. This is an open source project, which takes the complexity out of field orientated control by allowing PID tuning through a web gui. FOC, or field orientated control, is critical for any repeatable robotic system. Without a closed feedback loop of position, an actuator can get lost in a **sea of position**.

<center>
  <br>
  <div class="tweet-container">
    <div class="tweet-item single">
      <img src="/assets/images/SPINActuator/crossv2.png" alt="Microbot CAD Model" style="width:100%; max-width:550px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" />
      <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Cross Section</p>
    </div>
  </div>
  <br>
</center>

<center>
  <div style="position:relative; width:50%; padding-bottom:88.89%; margin: 0 auto; height:0; overflow:hidden; border:4px solid white; border-radius:12px;">
    <iframe 
      src="https://www.youtube.com/embed/WNyjMFktEKs?si=wz-2AtrcvoVBJCjS" 
      style="position:absolute; top:-10%; left:0; width:100%; height:120%; border:0;" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen 
      referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
  </div>
  <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Tolerance Testing</p>
</center>
<h2 style="text-align:left; margin-top: 2em;">Initial testing</h2>

Below you can see my make-shift testing setup. I attached a lever arm with known length (100mm) and a scale below. I let the motor run to stall torque, then recorded. 

<br>
Throughout this testing I was getting .7Nm of max torque. Which is **4x** less than expected. After a few frustrating hours, I realized that the datasheet that was sent with my motors was outdated. This sheet was from the initial run of SPIN servos, with much less torque density.





<center>
  <div style="position:relative; width:50%; padding-bottom:88.89%; margin: 0 auto; height:0; overflow:hidden; border:4px solid white; border-radius:12px;">
    <iframe 
      src="https://www.youtube.com/embed/WccIIucOj-U?si=i5aGs3WWHEOy3jlx" 
      style="position:absolute; top:-10%; left:0; width:100%; height:120%; border:0;" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen 
      referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
  </div>
  <p style="font-size: 0.9em; color: #666; margin-top: 0.5em;">Torque Testing</p>
</center>
<h2 style="text-align:left; margin-top: 2em;">Homing Code</h2>
<div style="height:660px; overflow:scroll;">

  ``` py linenums="1" title="SimpleFOC Library Firmware"

  #include <Arduino.h>
  #include <SimpleFOC.h>
  #include <SimpleFOCDrivers.h>
  #include <Wire.h>
  #include <settings/stm32/STM32FlashSettingsStorage.h>
  #include <encoders/ma730/MagneticSensorMA730SSI.h>
  #include <encoders/ma730/MagneticSensorMA730.h>
  #include <encoders/hysteresis/HysteresisSensor.h>
  #include <comms/telemetry/SimpleTelemetry.h>
  #include <comms/telemetry/TeleplotTelemetry.h>
  #include <utilities/stm32math/STM32G4CORDICTrigFunctions.h>


  #define SERIAL_SPEED 115200

  #define MUX_SELECT PA6
  #define BUTTON PB5
  #define BATT_VOLTAGE_SENSE PA4
  #define TEMP_SENSE PA5
  #define LED PC6

  // Define CAN bus pins
  #define CAN_TX_PIN PB9
  #define CAN_RX_PIN PB8


  // BLDC motor & driver instance
  BLDCMotor motor = BLDCMotor(5, 5.2f, 120.0f, 0.000831f); // int pp,  float R = NOT_SET, float KV = NOT_SET, float L = NOT_SET
  BLDCDriver3PWM driver = BLDCDriver3PWM(PA0, PA1, PA2);

  //Position Sensor
  MagneticSensorMA730 sensor = MagneticSensorMA730(PB12);
  HysteresisSensor hysteresisSensor = HysteresisSensor(sensor, 0.001f);

  LowsideCurrentSense current_sense = LowsideCurrentSense(0.003, 46, PB0, PB1, PA3);

  // settings
  STM32FlashSettingsStorage settings = STM32FlashSettingsStorage(); // use 1 page at top of flash

  // instantiate the commander
  Commander command = Commander(Serial);
  void doMotor(char* cmd) { command.motor(&motor, cmd); };
  void doSave(char* cmd) { settings.saveSettings(); };
  void doLoad(char* cmd) { settings.loadSettings(); };
  void doReinit(char* cmd) { motor.sensor_direction = Direction::UNKNOWN; motor.zero_electric_angle = NOT_SET; motor.initFOC(); };
  void doHysteresis(char* cmd) { hysteresisSensor._amount = atof(cmd); Serial.print("Hysteresis: "); Serial.println(hysteresisSensor._amount, 4); };
  void doSetSensor(char* cmd) {
    if (cmd[0]=='1') {
      motor.linkSensor(&hysteresisSensor);
      Serial.println("Using hysteresis");
    }
    else {
      motor.linkSensor(&sensor);
      Serial.println("Using MA730");
    }
  };

  // telemetry
  TextIO textIO = TextIO(Serial);
  //SimpleTelemetry telemetry = SimpleTelemetry();
  TeleplotTelemetry telemetry = TeleplotTelemetry();
  void doDownsample(char* cmd) { telemetry.downsample = atoi(cmd); };

  void setup() {
    Serial.begin(SERIAL_SPEED);
    while (!Serial);
    SimpleFOCDebug::enable(&Serial);

    Serial.print("spin servo - firmware version ");
    Serial.println(SPIN_SERVO_FIRMWARE_VERSION);

    // Wire.setSCL(PB8);
    // Wire.setSDA(PB9);
    // Wire.begin();
    // Wire.setClock(400000);

    SPI.setMISO(PB14);
    SPI.setMOSI(PB15);
    SPI.setSCLK(PB13);


    SimpleFOC_CORDIC_Config();

    // driver config
    // power supply voltage [V]
    driver.voltage_power_supply = 10;
    driver.voltage_limit = driver.voltage_power_supply*0.95f;
    driver.pwm_frequency	= 20000;

    driver.init();
    sensor.init();
    hysteresisSensor.init();


    FieldStrength fs = sensor.getFieldStrength();
    Serial.print("Field strength: 0x");
    Serial.println(fs, HEX);

    // link driver
    motor.linkDriver(&driver);
    motor.linkSensor(&hysteresisSensor);

    // current sense
    current_sense.linkDriver(&driver);
    current_sense.init();
    motor.linkCurrentSense(&current_sense);

    // aligning voltage
    motor.voltage_sensor_align = 2;
    motor.current_limit = 3;
    motor.voltage_limit = driver.voltage_limit / 2.0f;
    motor.velocity_limit = 1000.0f; // 1000rad/s = aprox 9550rpm

    // some defaults
    motor.PID_velocity.P = 0.05f;
    motor.PID_velocity.I = 0.05f;
    motor.PID_velocity.D = 0.000f;
    motor.PID_velocity.output_ramp = 1000;
    motor.LPF_velocity.Tf = 0.01f;
    motor.P_angle.P = 20.0f;
    motor.P_angle.I = 0.0f;
    motor.P_angle.D = 0.0f;
    motor.P_angle.output_ramp = 1000;
    motor.LPF_angle.Tf = 0.005f;

    motor.torque_controller = TorqueControlType::foc_current;
    motor.controller = MotionControlType::angle;
    motor.motion_downsample = 10;

    // load settings
    settings.addMotor(&motor);
    SimpleFOCRegister registers[] = { REG_SENSOR_DIRECTION, REG_ZERO_ELECTRIC_ANGLE, REG_VEL_LPF_T, REG_VEL_PID_P, REG_VEL_PID_I, REG_VEL_PID_D, REG_VEL_PID_LIM, REG_VEL_PID_RAMP, REG_ANG_LPF_T, REG_ANG_PID_P, REG_ANG_PID_I, REG_ANG_PID_D, REG_ANG_PID_LIM, REG_ANG_PID_RAMP, REG_CURQ_LPF_T, REG_CURQ_PID_P, REG_CURQ_PID_I, REG_CURQ_PID_D, REG_CURQ_PID_LIM, REG_CURQ_PID_RAMP, REG_CURD_LPF_T, REG_CURD_PID_P, REG_CURD_PID_I, REG_CURD_PID_D, REG_CURD_PID_LIM, REG_CURD_PID_RAMP, REG_VOLTAGE_LIMIT, REG_CURRENT_LIMIT, REG_VELOCITY_LIMIT, REG_MOTION_DOWNSAMPLE, REG_TORQUE_MODE, REG_CONTROL_MODE };
    settings.setRegisters(registers, sizeof(registers)/sizeof(SimpleFOCRegister));
    settings.settings_version = 2;
    settings.init();
    //settings.loadSettings();

    // initialize motor
    motor.init();

    // align sensor and start FOC
    Serial.print("Aligning...");
    motor.initFOC();

    // add commands
    command.echo = true;
    command.add('M', doMotor, "motor commands");
    command.add('s', doSave, "save settings");
    command.add('l', doLoad, "load settings");
    command.add('d', doDownsample, "downsample telemetry");
    command.add('r', doReinit, "reinit motor");
    command.add('h', doHysteresis, "hysteresis amount");
    command.add('S', doSetSensor, "set sensor (0=MA730, 1=hysteresis)");
    // add telemetry
    telemetry.addMotor(&motor);
    telemetry.downsample = 0; // off by default, use register 28 to set
    uint8_t telemetry_registers[] = { REG_TARGET, REG_ANGLE, REG_VELOCITY, REG_SENSOR_MECHANICAL_ANGLE, REG_ITERATIONS_SEC };
    telemetry.setTelemetryRegisters(sizeof(telemetry_registers)/sizeof(SimpleFOCRegister), telemetry_registers);
    telemetry.init(textIO);

    Serial.println(F("Motor ready."));
    Serial.println(F("Set the target using serial terminal:"));
  }


  void loop() {
    // Motion control function
    motor.move();
    // main FOC algorithm function
    motor.loopFOC();
    // user communication
    command.run();
    // telemetry
    telemetry.run();
  }
  ```

</div>
<h2 style="text-align:left; margin-top: 2em;">Future Plans</h2>

I am now switching to a higher torque integrated BLDC reducer, similar to MIT mini cheetah, for my balancing bot.


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
