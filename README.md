## Getting Started

First, run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

(Might not be needed after commiting toast messages)In another terminal go to /routes and start the server (it's running on port 1407)

    cd ./src/app/api/routes
    npm start

## ENV file

In the api directory create a .env file with API_JWT_SECRET=example

You can use this command to generate the secret key:

    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

Or you can go to this website: https://numbergenerator.org/random-32-digit-hex-codes-generator


## Missing modules

You can install all modules by running the command:

    npm install