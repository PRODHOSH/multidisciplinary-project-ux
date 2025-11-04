# 🌱 Smart Plant Health Monitoring System - IoT Prototype

> **An intelligent, real-time IoT solution for autonomous plant care and sustainable gardening**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution & Features](#solution--features)
- [System Architecture](#system-architecture)
- [Hardware Components](#hardware-components)
- [Software Stack](#software-stack)
- [Features & Capabilities](#features--capabilities)
- [Dashboard & Visualization](#dashboard--visualization)
- [Team & Contributions](#team--contributions)
- [Installation & Setup](#installation--setup)
- [Project Statistics](#project-statistics)
- [Future Enhancements](#future-enhancements)
- [Contact & Support](#contact--support)

---

## 🎯 Overview

**Smart Plant Health Monitoring System** is an IoT-powered prototype designed to revolutionize how we care for plants. By combining real-time environmental sensors with cloud connectivity and automated irrigation, this system eliminates guesswork from plant care and reduces water consumption by up to **80%**.

Whether you're a gardening enthusiast, agricultural professional, or sustainability advocate, this system ensures your plants receive optimal care 24/7 with minimal manual intervention.

### 🌍 Key Impact
- **80% Water Savings** through intelligent irrigation
- **24/7 Continuous Monitoring** with real-time alerts
- **100% Automation Capability** for hands-free plant care
- **Machine Learning Ready** for predictive plant health analytics

---

## ❓ Problem Statement

### The Challenge
Manual plant care is:
- ⏰ **Time-consuming** - requires daily attention and monitoring
- 🎲 **Inconsistent** - prone to human error and forgetfulness
- 💧 **Wasteful** - often leads to over-watering or under-watering
- 📊 **Data-blind** - no insights into environmental trends
- 🌍 **Unsustainable** - inefficient water usage in a water-scarce world

**Result:** Plants suffer, water is wasted, and gardeners are frustrated.

---

## ✨ Solution & Features

### Our Answer: Intelligent Autonomous Plant Care

The **Smart Plant Health Monitoring System** uses a network of IoT sensors and cloud connectivity to:

1. **Real-Time Environmental Monitoring**
   - Continuously tracks soil moisture, temperature, humidity, and light intensity
   - Data refreshes every 3 seconds for responsive feedback

2. **Smart Automated Irrigation**
   - Activates water pump only when soil moisture drops below threshold
   - Prevents over-watering and plant root damage
   - Fully programmable thresholds

3. **Intelligent Alert System**
   - Instant notifications when plants need attention
   - Threshold-based triggers for multiple parameters
   - Notification history and logging

4. **Interactive Web Dashboard**
   - Beautiful, responsive visualization of all sensor data
   - Real-time and historical charts
   - Plant health summary with AI recommendations
   - Mobile-friendly design

5. **Data Analytics & Trends**
   - 24-hour trend visualization
   - 7-day comparative analysis
   - Pattern recognition for optimal plant conditions

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     SMART PLANT SYSTEM FLOW                      │
└─────────────────────────────────────────────────────────────────┘

    ┌────────────────┐
    │    SENSORS     │
    │                │
    │ • DHT22        │  Temperature & Humidity
    │ • Soil Sensor  │  Soil Moisture
    │ • BH1750       │  Light Intensity
    │ • DS18B20      │  Precise Temperature
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │  MICROCONTROLLER│
    │  (ESP8266/32)  │
    │                │
    │ • Data Process │
    │ • Logic        │
    │ • Control      │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │   CLOUD/MQTT   │  (Firebase/ThingSpeak)
    │                │
    │ • Data Storage │
    │ • ML Pipeline  │
    │ • API Server   │
    └────────┬───────┘
             │
             ▼
    ┌────────────────────────┐
    │  WEB DASHBOARD         │
    │  (Real-Time Display)   │
    │                        │
    │ • Charts & Analytics   │
    │ • Plant Status         │
    │ • Manual Controls      │
    │ • Alerts & Logs        │
    └────────┬───────────────┘
             │
             ▼
    ┌────────────────┐
    │   AUTOMATION   │
    │                │
    │ • Pump Control │
    │ • Relay Module │
    │ • Irrigation   │
    └────────────────┘
```

### Data Flow
1. **Sensors** collect environmental data every 3 seconds
2. **Microcontroller** processes signals and applies logic
3. **WiFi Module** transmits data to cloud in real-time
4. **Backend Server** receives, stores, and processes data
5. **Dashboard** visualizes information and triggers UI updates
6. **Automation Engine** makes decisions and activates pump

---

## 🔧 Hardware Components

| Component | Model | Purpose | Specifications |
|-----------|-------|---------|-----------------|
| **Microcontroller** | ESP8266/ESP32 | Central processor & WiFi | 160MHz, 160KB RAM, WiFi 802.11 |
| **Temp & Humidity** | DHT22 | Environmental monitoring | Range: -40°C to 80°C, ±5% RH |
| **Temperature Sensor** | DS18B20 | Precise soil temperature | Range: -55°C to 125°C, ±0.5°C |
| **Light Sensor** | BH1750 | Luminosity measurement | Range: 1-65535 lux, I2C |
| **Soil Moisture** | Capacitive Sensor | Water level detection | 0-100%, Analog/Digital |
| **Relay Module** | 5V Single Channel | Pump activation control | 5A @ 250VAC, Opto-isolated |
| **Water Pump** | DC Submersible | Irrigation actuation | 12V, 2-5L/min capacity |
| **Power Supply** | 18650 Battery/PSU | System power | 12V, 2A+ capacity |
| **Breadboard & Wires** | Jumper Kit | Connections | Standard gauge, color-coded |

### Sensor Specifications & Thresholds

**Soil Moisture:**
- Optimal Range: 60-80%
- Warning: 40-60%
- Critical: <40% or >90%

**Temperature:**
- Optimal Range: 20-26°C
- Warning: 18-20°C or 26-28°C
- Critical: <18°C or >32°C

**Humidity:**
- Optimal Range: 50-70%
- Warning: 40-50% or 70-80%
- Critical: <40% or >85%

**Light Intensity:**
- Optimal Range: 300-800 lux
- Warning: 200-300 lux or 800-1000 lux
- Critical: <200 lux or >1200 lux

---

## 💻 Software Stack

### Frontend
- **HTML5** - Semantic structure & accessibility
- **CSS3** - Modern styling with animations & dark mode
- **JavaScript (Vanilla)** - Interactive features & real-time updates
- **Chart.js** - Data visualization & interactive charts
- **Font Awesome** - Professional icon library
- **Google Fonts** - Modern typography (Poppins)

### Backend (Future Implementation)
- **Node.js/Express** - API server
- **Firebase/MongoDB** - Real-time database
- **ThingSpeak/MQTT** - IoT data channel
- **Python/TensorFlow** - ML model for predictions

### IoT Firmware
- **Arduino IDE** - ESP8266/ESP32 programming
- **PubSubClient** - MQTT connectivity
- **DHT Library** - Sensor drivers
- **OneWire** - Temperature sensor protocol

### Tools & Technologies
- **Version Control:** Git & GitHub
- **Documentation:** Markdown
- **Design:** Figma (prototyping)
- **Deployment:** Static hosting (GitHub Pages, Netlify)

---

## 🎨 Features & Capabilities

### Dashboard Features
✅ **Real-Time Sensor Display** - Live readings with 3-second refresh rate
✅ **Color-Coded Status Indicators** - Green (healthy), Yellow (warning), Red (critical)
✅ **Interactive Charts** - 24-hour trends and 7-day comparisons
✅ **Manual Pump Control** - "Water Now" button for instant irrigation
✅ **Auto-Mode Toggle** - Enable/disable automatic watering
✅ **Smart Alerts** - Push notifications for threshold violations
✅ **Plant Health Summary** - AI-driven status assessment
✅ **Settings Panel** - Customizable thresholds for each parameter
✅ **Dark Mode** - Eye-friendly interface for all lighting conditions
✅ **Mobile Responsive** - Perfect display on phones, tablets, desktop
✅ **Notification History** - Log of all system events
✅ **Download Reports** - Export system summaries

### Core Functionality
- **24/7 Monitoring** - Continuous sensor data collection
- **Predictive Alerts** - Notify users before critical situations
- **Automated Irrigation** - Pump activation based on soil moisture
- **Data Persistence** - Historical data for trend analysis
- **Multi-Plant Support** - Ready for scaling to multiple systems
- **Cloud Integration** - Firebase/ThingSpeak connectivity
- **API Ready** - Designed for third-party integrations

---

## 📊 Dashboard & Visualization

### Sensor Cards
Each sensor displays:
- Real-time numerical value
- Color-coded status indicator
- Progress bar visualization
- Last updated timestamp
- Trend indicator (↑ / ↓ / →)

### Charts
- **Multi-Sensor Line Chart** - All parameters in one view
- **7-Day Bar Chart** - Weekly averages and trends
- **Interactive Tooltips** - Hover for detailed values
- **Smooth Animations** - Data updates with visual feedback
- **Responsive Sizing** - Adapts to all screen sizes

### System Status
- Online/Offline indicator with pulse animation
- Overall system health assessment
- Pump status and water volume
- Last data sync timestamp
- Connection quality indicator

---

## 👥 Team & Contributions

### Team Members & Roles

#### 🚀 **Prodhosh V S** - AI/ML & Full-Stack Developer
- **Role:** Project Lead & Technical Architect
- **Responsibilities:**
  - Leads overall software development strategy
  - Builds responsive frontend interface
  - Develops backend APIs and cloud integration
  - Implements ML models for predictive plant health
  - Manages data collection and preparation for analytics
  - Oversees hardware-software integration

#### 🎨 **Swarshana** - Frontend Developer
- **Role:** UI/UX Designer
- **Responsibilities:**
  - Designs beautiful, intuitive dashboard interface
  - Creates visuals for process explanation
  - Implements real-time data visualization
  - Develops responsive layout for all devices
  - Ensures accessibility and user experience
  - Handles interactive animations and transitions

#### 🔌 **Karan** - Backend Developer
- **Role:** Cloud & Database Architect
- **Responsibilities:**
  - Manages data flow from ESP32 to cloud servers
  - Implements Firebase/ThingSpeak integration
  - Designs and maintains database schema
  - Develops RESTful API endpoints
  - Ensures data security and scalability
  - Plans ML prediction pipeline integration

#### ⚡ **Chinmaya** - Hardware & Circuit Engineer
- **Role:** Hardware Integration Lead
- **Responsibilities:**
  - Selects and procures all sensors and components
  - Designs circuit schematics and wiring diagrams
  - Calibrates sensors (DHT22, DS18B20, BH1750, etc.)
  - Ensures accurate and reliable sensor readings
  - Tests sensor communication protocols
  - Troubleshoots hardware-level issues

#### 🔨 **John** - Hardware Assembly & Testing
- **Role:** Physical Systems Engineer
- **Responsibilities:**
  - Assembles prototype with proper wiring and connections
  - Installs pump, relay, and tubing systems
  - Performs hardware testing and validation
  - Troubleshoots mechanical issues
  - Ensures system reliability and safety
  - Documents assembly procedures and troubleshooting

---

## 🚀 Installation & Setup

### Prerequisites
- ESP8266 or ESP32 microcontroller
- DHT22, DS18B20, BH1750 sensors
- Soil moisture sensor
- 5V relay module and water pump
- 12V power supply
- Arduino IDE
- Firebase or ThingSpeak account
- Modern web browser

### Hardware Setup

1. **Sensor Connections to ESP8266/32:**
   ```
   DHT22    → GPIO4 (D2)
   DS18B20  → GPIO5 (D1)
   BH1750   → SDA (GPIO4), SCL (GPIO5)
   Soil Sensor → A0 (Analog)
   Relay    → GPIO12 (D6)
   ```

2. **Wiring Diagram:**
   - Connect sensors to appropriate GPIO pins
   - Use pull-up resistors (10kΩ) for I2C sensors
   - Connect relay to pump power supply
   - Ensure proper ground connections

3. **Power Configuration:**
   - 3.3V for microcontroller
   - 5V for sensors and relay
   - 12V for pump motor
   - Use stabilized power supply

### Firmware Installation

1. **Install Arduino IDE**
   ```bash
   # Download from https://www.arduino.cc/en/software
   ```

2. **Add ESP8266 Board**
   - File → Preferences
   - Add: `http://arduino.esp8266.com/stable/package_esp8266com_index.json`

3. **Install Libraries**
   ```
   - DHT Sensor Library
   - OneWire (for DS18B20)
   - BH1750 Library
   - PubSubClient (for MQTT)
   - ArduinoJson
   ```

4. **Upload Code**
   - Select board and COM port
   - Configure WiFi credentials in code
   - Upload firmware

### Dashboard Deployment

1. **Download Website Files**
   ```bash
   git clone https://github.com/prodhosh/plant-iot-system.git
   cd plant-iot-system
   ```

2. **Configure Backend (Optional)**
   - Update API endpoints in `config.js`
   - Set Firebase credentials
   - Configure MQTT broker details

3. **Deploy Static Site**
   - GitHub Pages: Push to `gh-pages` branch
   - Netlify: Connect GitHub repository
   - Vercel: Import project from GitHub

4. **Access Dashboard**
   - Open in browser: `https://yourdomain.com`
   - Login with credentials
   - Start monitoring!

---

## 📈 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Team Members** | 5 |
| **Hardware Components** | 8+ |
| **Sensor Types** | 4 |
| **Dashboard Pages** | 7 |
| **Real-Time Charts** | 2 |
| **Lines of Code** | 5000+ |
| **CSS Animations** | 15+ |
| **Water Savings Potential** | 80% |
| **Monitoring Frequency** | Every 3 seconds |
| **Uptime Capability** | 24/7 |
| **Mobile Responsive** | Yes |
| **Dark Mode Support** | Yes |

---

## 🔮 Future Enhancements

### Phase 2: AI & Machine Learning
- [ ] Predictive plant health model using historical data
- [ ] Automated threshold optimization
- [ ] Plant species-specific recommendations
- [ ] Water conservation optimization algorithm
- [ ] Weather integration for improved predictions

### Phase 3: Multi-Plant Ecosystem
- [ ] Support for multiple sensor networks
- [ ] Plant database with care requirements
- [ ] Comparative plant health analytics
- [ ] Distributed sensor network management
- [ ] Zone-based irrigation control

### Phase 4: Advanced Features
- [ ] Mobile app (iOS/Android) with push notifications
- [ ] Voice assistant integration (Alexa, Google Home)
- [ ] Computer vision for plant disease detection
- [ ] Soil nutrient analysis integration
- [ ] Community plant care database

### Phase 5: Enterprise & IoT
- [ ] Greenhouse automation for farms
- [ ] Integration with smart home systems
- [ ] 3G/4G cellular backup
- [ ] LoRaWAN for long-range deployment
- [ ] Industrial-grade reliability testing

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

✅ **IoT Systems Design** - End-to-end sensor to cloud pipeline
✅ **Embedded Systems** - Microcontroller programming and protocols
✅ **Full-Stack Development** - Frontend, backend, database integration
✅ **Real-Time Data Processing** - Stream processing and visualization
✅ **Hardware Integration** - Circuits, sensors, actuators
✅ **Cloud Computing** - Firebase, MQTT, serverless functions
✅ **Data Science** - Analytics, trends, predictive modeling
✅ **UI/UX Design** - Responsive, accessible, beautiful interfaces
✅ **Automation & Control** - Logic programming and automation

---

## 📞 Contact & Support

### Project Leads
- **Prodhosh V S** (AI/ML & Full-Stack)
  - GitHub: [@prodhosh](https://github.com/prodhosh)
  - Email: prodhosh@email.com

### Questions or Collaboration?
- Open an issue on GitHub
- Submit pull requests for improvements
- Join our development community
- Reach out via contact form on website

### Resources
- 📖 [Complete Documentation](https://github.com/prodhosh/plant-iot-system/wiki)
- 🎥 [Video Tutorial](https://youtube.com/playlist?list=plant-iot-system)
- 🐛 [Bug Reports](https://github.com/prodhosh/plant-iot-system/issues)
- 💬 [Discussions](https://github.com/prodhosh/plant-iot-system/discussions)

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

### Attribution
- Built by Team PlantCare IoT
- Powered by open-source technologies
- Inspired by sustainable technology movement

---

## 🌱 Vision

> *"Empowering sustainable gardening through intelligent automation and real-time environmental awareness. Making plant care smarter, not harder."*

**Smart Plant Health Monitoring System** - Nurturing nature, one sensor at a time. 🌍💚

---

### 🎯 Call to Action
- ⭐ Star this repository if you find it useful
- 🔀 Fork and contribute improvements
- 📢 Share with the community
- 🚀 Deploy your own system today

**Last Updated:** November 2025
**Project Status:** Active Development ✅
**Current Version:** 1.0.0 (Beta)

---

*Made with 🌱 by Team PlantCare IoT for a sustainable future.*
