
# Agriswift Backend API

Agriswift is a technological solution aimed at reducing food loss and wastage by empowering farmers and consumers through efficient food distribution and access.

## Introduction

According to a report by the Food and Agriculture Organization (FAO), Nigeria faces significant food loss and wastage, with an estimated 14 million tons of food wasted annually. Agriswift addresses this challenge by optimizing distribution channels, connecting farmers directly to consumers, and providing real-time market insights.

## Features

- **Digital Marketplace:** A user-friendly web platform and mobile application for farmers to list their produce for sale, enabling distributors and retailers to browse available crops, place orders, and schedule deliveries.
- **Transportation Optimization:** Utilizes route optimization algorithms and GPS tracking systems to plan efficient transportation routes, collaborate with local logistics providers, and monitor delivery vehicles in real-time.
- **Food Tracking and Traceability:** Implements blockchain technology for transparent and traceable tracking of crops from farm to fork, ensuring accuracy and accountability throughout the supply chain.
- **Real-Time Market Insights:** Integrates data analytics and machine learning algorithms to analyze market trends, demand patterns, and pricing dynamics, providing farmers with real-time market insights and pricing information.
- **Communication and Collaboration:** Facilitates seamless communication and collaboration between stakeholders through messaging, notifications, and feedback mechanisms, enabling stakeholders to handle crop availability, delivery schedules, and quality assurance effectively.
- **Financial Inclusion and Transparency:** Integrates payment gateways and digital wallets, offers financial services such as microfinance and credit facilities, and maintains transparent records of transactions and financial flows.

## Deployment

This project is deployed on [Render](https://render.com/). You can access the deployed server at [https://agriswift-backend.onrender.com](https://agriswift-backend.onrender.com).

## Dependencies

This project uses Node.js, Express, JWT, Bcrypt, Cookie-parser, Nodemailer and Sequelize ORM

## Usage

- * Register as a user on the platform, specifying your role as a farmer, retailer, or distributor.
- * Access the digital marketplace to list your produce for sale or browse available crops.
- * Place orders, schedule deliveries, and track delivery status in real-time.
- * Utilize market insights to optimize crop selection, timing of harvest, and pricing strategies.
- * Communicate and collaborate with other stakeholders to ensure seamless coordination and quality assurance.
- * Access financial services such as microfinance and credit facilities for investment in technology, inputs, and infrastructure improvements.

## Routes [https://agriswift-backend.onrender.com](https://agriswift-backend.onrender.com).


The server exposes the following routes:

# https://agriswift-backend.onrender.com/auth
- * post - /register
- * post - /login
- * post - /logout
- * post - /forgot-password

# https://agriswift-backend.onrender.com/users
- * get - /user/:id
- * patch - /update/:id
- * delete - /delete/:id

# https://agriswift-backend.onrender.com/produce
- * get -/listAll
- * post -/add
- * post - /getOne/:id
- * patch - /update/:id
- * post - /delete/:id