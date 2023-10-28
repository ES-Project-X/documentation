---
sidebar_position: 2
---

# Architecture

## Description

Our architecture revolves around the cloud services provided by Amazon Web Services.

- Amazon API Gateway: redirects requests to the correct service.
- Amazon Cognito: handles the authentication of our users.
- Amazon ECS: orquestrates and scales our Docker containerized services.
  - Map Tiles: provided by a CyclOSM tile server, that generates the images that are displyed in the map.
  - Routing Engine: powered by GraphHopper, generates the most adequate route for a cyclist to take.
  - Web UI: allows the users to interact with our system in a easy and intuitive way.
  - REST API: manages information about points of interest, routes and users.
- Amazon RDS: stores the data that our API provides.
- Amazon CloudWatch: allows the monitoring of our cloud infrastructure and logging from our services.

## Architecture Diagram

![Architecture Diagram](/img/architecture_diagram_v1.0.svg)