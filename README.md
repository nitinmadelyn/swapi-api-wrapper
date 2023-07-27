# Star Wars API Wrapper

SWAPI API wrapper to include `planet` data with `species` collection. NodeJS + TypeScript + MongoDB

## 🚀 Check out it's awesome features

1. Species collection with relevant Planet collection
2. Auth token to access api endpoint

## ⚙️ Infrastructure

- Node v18.x.x
- NPM or YARN (package manager)
- Docker & Docker Compose
- When you start the node server first time then 20 records of restaurants will be added to mongoDB's restaurants collections.
- For this small project to send an email `nodemailer` package has been used. But for production SendGrid, AWS SES, etc. can be used.
- TODO: add new endpoint to generate new token from refresh token

## 💻 How to setup

1. Ensure you have Docker and Docker Compose installed on your machine.
2. Clone this repository to your local machine.
3. Open a terminal and navigate to the cloned repository's root directory.
4. Install project dependency using `npm install` or `yarn install`
5. In order to send email, you need to add your gmail account credentials `email` & `app password` to `src/config/config.ts` file on line no.8-9. [How to generate App Password](https://support.google.com/mail/answer/185833?hl=en).
6. Run the following command to start the server:

   ```bash
   docker-compose up
   ```

## ✅ How to run tests

From the root directory execute `npm test` or `yarn test`

## 📄 API Documentation

You can find all the endpoints configuration from this [POSTMAN Collection](https://documenter.getpostman.com/view/1316746/2s946pZp4P)

## ❌ Out of scope

There's no web interface to reset the password when you click on the link received on your email. Instead you can use `/api/auth/reset-password` endpoint to reset your password.
