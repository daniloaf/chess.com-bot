# Requirements

- Node v10+
- Yarn/npm

# Setup

Install all node dependencies using yarn or npm:

```bash
$ yarn install
```

Create a `.env` file in the root folder with the following values:

```
TELEGRAM_BOT_TOKEN=<telegram_bot_token>
MONGODB_URI=<mongo_db_uri>
```

# Running

Make sure your mongo instance is running. Use yarn/npm to start the bot:

```bash
$ yarn watch
```
