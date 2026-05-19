# 📊 VM Monitor Frontend

A simple web dashboard for monitoring VM/backend metrics in real time.

---

# 🌐 Live Demo

👉 https://pranwagh11.github.io/vm_monitor_frontend/

---

# 🚀 Features

- Live system metrics dashboard
- Fetches data from backend API
- Lightweight static frontend (HTML/CSS/JS)
- Works directly in browser (no build required)

---

# 🔗 Backend Requirement

This frontend depends on a running backend API.

Default expected base URL:

```text
http://YOUR_VM_IP/api

# 🔥 Why build your own dashboard instead of using CloudWatch?
    1. Custom monitoring for your exact use case
    
    CloudWatch is generic infrastructure monitoring.
    
    Your dashboard is:
    
    designed specifically for your agents/VMs
    optimized for your workflow
    shows only the metrics your team needs
    customizable without AWS limitations
    
    Example:
    
    custom logs
    agent heartbeat
    internal status
    business metrics
    real-time events

#2. Real-time low-latency dashboard

    CloudWatch often has:
    
    delayed refresh
    aggregation intervals
    heavy UI
    
    Your dashboard:
    
    streams live metrics every few seconds
    lighter and faster
    purpose-built for operational visibility

#3. Multi-cloud / hybrid support

    CloudWatch mainly focuses on AWS.
    
    Your system can monitor:
    
    AWS EC2
    local VMs
    Docker containers
    on-prem servers
    edge devices
    Kubernetes nodes
    Raspberry Pi / IoT
    
    all from one UI.

#4. Lower operational cost

  CloudWatch pricing increases with:
  
  custom metrics
  dashboards
  logs ingestion
  retention
  
  Your dashboard:
  
  lightweight
  minimal infrastructure
  controllable retention/storage
  cheaper at scale for internal systems

#5. Full control over architecture

  With your own system:
  
  no vendor lock-in
  complete frontend customization
  custom APIs
  own alerting logic
  own retention rules
  own authentication model
  
  You control everything.

#6. Better learning & engineering value

  This project demonstrates:
  
  real-time systems
  frontend dashboarding
  polling/WebSocket architecture
  distributed monitoring
  observability concepts
  API integration
  scalable UI design
  
  That’s strong engineering experience beyond simply using managed AWS services.
