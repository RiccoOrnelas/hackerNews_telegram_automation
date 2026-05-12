# 📰 bot_dailyNews

A Node.js bot that delivers daily **Hacker News top stories** and **Who is Hiring** listings straight to your Telegram — no algorithm, no feed, just what matters.

## Tech Stack

- **Node.js** — runtime
- **axios** — HTTP requests
- **node-telegram-bot-api** — Telegram integration
- **dotenv** — environment variables

## Setup

```bash
git clone https://github.com/RiccoOrnelas/hackerNews_telegram_automation
cd hackerNews_telegram_automation
npm install
```

Create a `.env` file:

```env
TOKEN=your_telegram_bot_token
CHAT_ID=your_chat_id
```

Run locally:

```bash
node main.js
```

## Project Structure

```
├── .github/workflows/daily_news.yml
├── main.js
├── .env
├── .gitignore
└── package.json
```

## GitHub Actions

Runs automatically every day at **6:30 AM (Brasília time)** — no server needed.

1. Go to **Settings → Secrets and variables → Actions**
2. Add `TOKEN` and `CHAT_ID` as repository secrets
3. Done — workflow triggers daily at `cron: '30 9 * * *'` (UTC)

## License

MIT

A Node.js bot that delivers daily **Hacker News top stories** and **Who is Hiring** listings straight to your Telegram — no algorithm, no feed, just what matters.

## Features

- Fetches the top 5 random stories from Hacker News
- Fetches the latest 15 job listings from HN's Who is Hiring
- Delivers everything formatted in a single Telegram message
- Scheduled daily delivery via cron job
- Deployable on Railway with zero config

## Tech Stack

- **Node.js** — runtime
- **axios** — HTTP requests
- **node-telegram-bot-api** — Telegram integration
- **node-cron** — job scheduling
- **dotenv** — environment variables

## Getting Started

### Prerequisites

- Node.js 18+
- A Telegram bot token (get one from [@BotFather](https://t.me/BotFather))
- Your Telegram Chat ID

### Installation

```bash
git clone https://github.com/your-username/bot_dailyNews
cd bot_dailyNews
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
TOKEN=your_telegram_bot_token
CHAT_ID=your_chat_id
```

> To get your Chat ID: send any message to your bot, then access `https://api.telegram.org/bot<TOKEN>/getUpdates` and look for `chat.id` in the response.

### Run

```bash
node main.js
```

## Project Structure

```
bot_dailyNews/
├── main.js        # core logic
├── .env           # environment variables (never commit this)
├── .gitignore
└── package.json
```

## How It Works

1. `getNewsID(route)` — fetches a list of item IDs from the Hacker News API
2. `getNewsItem()` — picks 5 random stories and retrieves their details
3. `getJobsItem()` — picks 15 random job listings and retrieves their details
4. `send_notices()` — assembles and sends the formatted message via Telegram

The Hacker News API is open, free, and requires no authentication.

## Deploy on Railway

1. Push the project to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect your repository
4. Add the environment variables (`TOKEN`, `CHAT_ID`) in the Railway dashboard
5. Deploy — Railway detects Node.js automatically

## .gitignore

Make sure your `.env` is never committed:

```
node_modules/
.env
```

## License

MIT