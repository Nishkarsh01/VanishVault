# VanishVault
 a web-based application that allows authenticated users to create secure private rooms for sharing sensitive information. Once all assigned users have accessed the shared data within these rooms, the information is automatically and permanently deleted from the database, ensuring the highest level of data privacy and security.

 # Developed By
 Team Mohawk CodeReady for Bell Geekfest Hackathon 2023
 
 Members:
 1) Nishkarsh Dubb (Nish) (He/him/his)
 2) Mackenzie Van Vliet (she/her)
 3) Jaskaran Singh Malhotra (he/him)
 4) Rodrigo Wong Mac (he/him)

# Objective/Why would you use it

- Allow authenticated users to create secure private rooms for sharing sensitive information. 
- Once all assigned users have accessed the shared data within these rooms, the information is automatically and permanently deleted from the database, ensuring the highest level of data privacy and security.

## Use cases 
- Vanish Vault can be used for sending messages from patient to provider in compliance with PHIPA (personal health information protection act).
- Instead of using email or Teams, employees in HR can send employee based information using Vanish Vault  
- Vanish Vault can be used for sending sensitive customer information in SMB in compliance with GDPR (general data protection regulation).
- For digital marketing departments, Vanish Vault can be used to send shared account details.
- Police services can use Vanish Vault in SARs (Search and Rescue) missions to communicate important location and time details from their secure servers to third party teams.

# Video Demo
[![Indeed Clone Demo]("coverimage")]("video link")

 # High Level Application Design
We aim to design the application with microservice architecture and divid the whole backend application into the above shown services. All services for now will use the same user DB (MongoDB)
![High Level Application Design](documentationImages/HighLevelDesign.drawio%20(1).png)

 # Entity Relationship (ERD) Diagrams
![ERD Diagram](documentationImages/ERD%20Diagram.png)

# Tech Stack
- Mongo DB 
- Express and Node.js
- React.JS (Vite)
- Node.js

## Installation or Getting Started
Run the following command in the terminal:

	git clone https://github.com/Nishkarsh01/VanishVault.git
or download the zip file from github.

## Usage

- To start the node.js server: 

After extracting the files,

    cd backend
    npm i
    npm start

- To start the frontend application: 

After extracting the files,

    cd FrontEnd
    npm i
    npm run dev

## Collaborate
To collaborate, reach us out on 
[wongmacr@gmail.com]()
[nishkarsh.dubb@mohawkcollege.ca]()
[mackenzievanvliet@gmail.com]()
[jaskaran20020@gmail.com]()


