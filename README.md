# hng12-stage0-backend-info-api

A simple API that returns basic information in JSON format,including an email address, the current date and time, and the URL of this project's GitHub repository. Built with Node.js and Express.js for the HNG12 Internship Stage 0 task.

## Setup Instructions (Local Development)

If you wish to run the API locally, follow these steps:

1.  **Clone the repository:**

```bash
git clone [https://github.com/Simbiat1/hng12-stage0-backend-info-api.git](https://github.com/Simbiat1/hng12-stage0-backend-info-api.git)
cd hng-stage-0-api  # To go into the project directory
```

2.  **Install dependencies:**

```bash
npm install
```

3.  **Create a `.env` file and add your own email and github url.**

```
HNG_EMAIL=your_email@example.com
GITHUB_URL=https://github.com/yourusername/yourrepo
```

_Note:_ The original `.env` file is _not_ committed to the repository for security reasons.

4.  **Start the server:**

```bash
node index.js
```

The server will start listening on port 4000.

## API Documentation

### Endpoint URL

`https://hng12-stage0-backend-info-api.onrender.com/info_api`

### Environment Variables

The email address and GitHub repository URL are stored as environment variables on the Render platform for security and configuration purposes. This ensures that sensitive information is not hardcoded in the source code.

### Example Usage

You can test the API using `curl`, Postman, or your browser's developer tools.

**Using (curl):**

```bash
curl http://localhost:4000/info_api  # to test locally
curl [https://hng12-stage0-backend-info-api.onrender.com/info_api](https://hng12-stage0-backend-info-api.onrender.com/info_api) # to test deployed API
```

**Using Postman or Browser Developer Tools:**

1. Open Postman or your browser's developer tools (usually by pressing F12).
2. Make a GET request to https://hng12-stage0-backend-info-api.onrender.com/info_api.

### Response Format

**Response (JSON):**

```json
{
  "email": "email@example.com", // Example email (set on Render)
  "current_datetime": "2020-10-28T12:34:56.789Z", // Example date/time (will be dynamically generated based on current date/time)
  "github_url": "(https://github.com/username/repo.git)" // Example GitHub URL (set on Render)
}
```

- `email`: A registered email address.
- `current_datetime`: The current date and time in ISO 8601 format (UTC).
- `github_url`: The URL of this project's GitHub repository.

## Backlink

`https://hng.tech/hire/nodejs-developers`
