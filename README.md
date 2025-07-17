# Dzidzo: Augmented Reality Web Education Platform

![Dzidzo Logo](https://github.com/marknature/Dzidzo-Edutech_AR-VR/raw/main/logo.png)
*Transforming African education through immersive and accessible technology*

## 📚 Table of Contents

* [Project Overview](#project-overview)
* [Key Features](#key-features)
* [Technology Stack](#technology-stack)
* [Installation & Setup](#installation--setup)
* [Project Structure](#project-structure)
* [Development Approach](#development-approach)
* [Testing](#testing)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

<br>

## 🌍 Project Overview

**Dzidzo** (meaning *"education"* in Shona) is a browser-based platform that brings Augmented Reality (AR) and interactive 3D experiences to education, especially targeting African learners and institutions with limited access to immersive technology.

This current version builds upon [Dzidzo Version 2](https://github.com/marknature/Dzidzo_AR-VR_Verion-2), transforming the original static template into a full-stack web application with backend support, content management, and emerging AR integrations.

🛠 **Devpost Submission**: [Dzidzo on Devpost](https://devpost.com/software/dzidzo)

<br>

## ✨ Key Features

### ✅ Current Functionality

* Responsive educational interface with custom branding
* Basic AR content integration using lightweight libraries
* Modular and extensible content pages
* Prototype classroom and lesson navigation
* Simple user authentication (PHP/MySQL)
* Modular PHP routing with potential Django backend upgrade

### 🔄 In Development

* Interactive 3D modules with **Three.js**
* AR-enhanced lesson visualizations via **AR.js**
* Django-powered backend (for future scalability)
* Student progress tracking dashboard
* Role-based admin dashboard for lesson control
* VR support and gamified learning modules

<br>

## 🧰 Technology Stack

### 🌐 Frontend

* HTML5, CSS3, JavaScript
* SCSS for maintainable styling
* Bootstrap (responsive design)
* AR.js for AR on the web
* Three.js (3D object rendering)

### ⚙️ Backend

* PHP (Current)
* SQL
* Python (Planned integration)

### 🔧 Tooling

* Gulp for asset management
* Webpack (module bundling)
* Git for version control
* VS Code + Jupyter for development

<br>

### ⚙️ Setup Instructions

1. **Clone Repository**

```bash
git clone https://github.com/marknature/Dzidzo-Edutech_AR-VR.git
cd Dzidzo-Edutech_AR-VR
```

2. **Install Node Dependencies**

```bash
npm install
```

3. **Python Virtual Environment (if Django is used)**

```bash
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate         # Windows
pip install -r requirements.txt
```

4. **Configure MySQL Database**

* Create a database called `dzidzo`
* Update `config/database.php` with your DB credentials

5. **Run Local Development Servers**

```bash
# Start frontend
npm run dev

# Start PHP backend
php -S localhost:8000

# Or Django (if active)
python manage.py runserver
```

<br>

## 🔨 Development Approach

We follow a **modular, iterative** approach:

### Phase 1: Static Template Customization ✅

* Adapt UI for education
* Dzidzo branding
* Landing page & routing

### Phase 2: Backend Foundation ✅

* PHP backend
* Auth system
* Lesson content integration

### Phase 3: AR Integration (Ongoing) 🔄

* JavaScript-based AR viewer
* 3D object embedding (OBJ/GLTF)
* Marker-based lessons

### Phase 4: Full Immersive Classroom (Planned) 🧪

* Django migration
* VR integration
* Real-time multiplayer learning

<br>

## ✅ Testing

We manually validate:

* Template rendering across devices
* AR content loading
* Link & route resolution
* Form inputs and validation
* Component modularity

To run test tools:

```bash
npm test
```

<br>

## 🌐 Deployment

### Traditional Hosting

* Upload project to a cPanel or shared hosting server
* Ensure PHP/MySQL configuration is correct

### Docker Deployment (Planned)

```bash
docker-compose up --build
```

<br>

## 🤝 Contributing

We’re building for learners—**by learners**. Contributions are welcome!

### Steps:

1. Fork this repo
2. Create a feature branch
3. Make changes (with clear commit messages)
4. Submit a PR

**Dev Guidelines:**

* Use SCSS and modular JS
* Keep PHP logic clean and separate
* Add tests for major features
* Follow naming conventions and comments

<br>

## 📄 License

Licensed under the [Boost Software License - Version 1.0](LICENSE).
Open source, for the future of immersive education.

<br>

## 🌟 Related Links

* 🔗 [DevPost: Dzidzo](https://devpost.com/software/dzidzo)
* 🧠 [Version 2 (Previous Build)](https://github.com/marknature/Dzidzo_AR-VR_Verion-2)
* 🧪 [Current Version](https://github.com/marknature/Dzidzo-Edutech_AR-VR)

<br>

**Made with ❤️ and ambition by Mark Chindudzi and the Dzidzo team.**
*"Dzidzo is not just a platform—it's the future of African learning."*
