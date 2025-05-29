# Sample Application (for learning Doppler)

A Node.js application built with Express that displays system information including port, build time, and a masked API key.

Our goal would be to remove the .env file and have Doppler manage this for us, instead.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/foreza/doppler-simple-example.git
cd doppler-simple-example
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
API_KEY=your-secret-api-key
```

## Running the Application

1. For development (with auto-reload):
```bash
npm run dev
```

2. For production:
```bash
npm run build
```

The build command will:
- Update the build timestamp
- Start the server
- Display the API key in red in the console (for development purposes)

3. Access the application:
- Open your browser and navigate to `http://localhost:3000` (or whatever port you specified in .env)
- You'll see:
  - The current port number
  - The last build time
  - The API key (masked, showing only first 2 and last 2 characters)

## Development

- The application uses Express.js as the web framework
- Views are rendered using Jade template engine
- Environment variables are managed using dotenv
- Build information is stored in `build-info.json`
- Development mode includes auto-reload using nodemon

## Security Notes

- The `.env` file contains sensitive information and is gitignored
- API keys are masked in the UI, showing only first 2 and last 2 characters
- Full API keys are logged to console in red for development purposes only

## Available Scripts

- `npm start`: Starts the server
- `npm run build`: Updates build timestamp and starts the server
- `npm run dev`: Starts the server with auto-reload for development

## File Structure

```
.
├── .env                 # Environment variables (not in git)
├── .env.example        # Example environment variables
├── build-info.json     # Build timestamp information
├── app.js             # Main application file
├── routes/            # Route handlers
│   └── index.js       # Main route handler
└── views/             # Jade templates
    └── index.jade     # Main view template
```
