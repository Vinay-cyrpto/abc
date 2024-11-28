# Kuvaka Chatroom - Chat Application 
Kuvaka Chatroom is chat application build with the power of MERN Stack.


![login page](./images/Kuvaka_Chatroom_login.png)

![register page](./images/Kuvaka_Chatroom_register.png)

![home page](./images/Kuvaka_Chatroom.png)

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.
### Installation

#### First Method
```shell
git clone https://github.com/Vinay-cyrpto/kuvaka-chatroom
cd kuvaka-chatroom
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```
you can use this mongoDB connection:
MONGO_URL="mongodb+srv://vinaypatelknw:HRZxOGE2TyWhUWtJ@cluster0.woa4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/chat"

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```
Done! Now open localhost:3000 in your browser.

#### Second Method
- This method requires docker and docker-compose to be installed in your system.
- Make sure you are in the root of your project and run the following command.

```shell
docker compose build --no-cache
```
after the build is complete run the containers using the following command
```shell
docker compose up
```
now open localhost:3000 in your browser.