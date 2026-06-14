---
name: backend-appwrite-nextjs
description: Build fullstack applications using Appwrite with Next.js. Always use Appwrite SDK correctly, prefer MCP/Context7 for latest Appwrite documentation and API references.
---

# Appwrite Fullstack Skill (Next.js + Appwrite)

This skill helps build fullstack applications using:

- Next.js latest App Router
- Appwrite Cloud / Self-hosted
- Appwrite Auth
- Appwrite Databases / TablesDB
- Appwrite Storage
- Appwrite Functions
- Appwrite Realtime
- Appwrite SSR with Next.js
- npm package manager
- MCP Docs integration for latest Appwrite documentation

Use this skill whenever building backend or fullstack features with Appwrite.

---

## Core Principle

Appwrite APIs change frequently.

Never assume Appwrite SDK syntax from memory when implementing complex features.

When uncertain:

ALWAYS query documentation first.

Priority:

1. Appwrite MCP Docs
2. Context7 docs retrieval
3. Official Appwrite documentation
4. Then generate code

Never hallucinate Appwrite SDK methods.

---

## Documentation Retrieval Rules

If implementing ANY Appwrite feature, first check latest docs.

Always call MCP/Context retrieval when working with:

- Authentication
- OAuth providers
- Session handling
- Database schema
- TablesDB
- Storage uploads
- File permissions
- Realtime subscriptions
- Server SDK
- Functions deployment
- API keys
- Team permissions
- Row level permissions
- Appwrite Sites deployment

If docs are needed:

Call:

```text
context7 resolve-library-id "appwrite"
```

Then:

```text
context7 get-library-docs
```

Alternative:

Use Appwrite MCP docs server.

Never rely on outdated SDK examples.

---

## Installation Rules

Always use npm.

Install SDK:

```bash
npm install appwrite
```

Never generate:

```bash
pnpm add appwrite
yarn add appwrite
```

---

## Environment Variables

Always use:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
APPWRITE_API_KEY=
APPWRITE_DATABASE_ID=
APPWRITE_BUCKET_ID=
APPWRITE_FUNCTION_ID=
```

Never hardcode secrets.

API keys must remain server-side only.

Never expose secret keys in frontend.

---

## Project Structure

Use:

```text
src/
 ├── app/
 │
 ├── components/
 │
 ├── lib/
 │   ├── appwrite/
 │   │   ├── client.ts
 │   │   ├── server.ts
 │   │   ├── auth.ts
 │   │   ├── database.ts
 │   │   ├── storage.ts
 │   │   └── realtime.ts
 │
 ├── actions/
 │
 ├── hooks/
 │
 └── types/
```

Never place Appwrite initialization inside components.

---

## Appwrite Client Initialization

Browser SDK:

```ts
import { Client } from "appwrite"

const client = new Client()

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
```

Always separate browser and server clients.

---

## Authentication Rules

Always prefer Appwrite Auth.

Supported:

- Email/password
- Magic URL
- Anonymous auth
- OAuth providers
- JWT auth

Never build custom auth manually.

Always verify latest auth API using docs.

Before generating auth code:

Check MCP docs.

---

## Database Rules

Prefer Appwrite TablesDB / latest database API.

Never assume collection APIs are unchanged.

Always verify docs before generating:

- createDocument
- updateDocument
- query syntax
- permissions

If database schema work is required:

Query docs first.

---

## Storage Rules

Use Appwrite Storage.

Pattern:

```ts
storage.createFile()
```

For uploads:

- validate file size
- validate MIME type
- restrict permissions

Never upload directly without validation.

Always verify latest upload API.

---

## Server Actions Integration

Prefer Next.js Server Actions.

Example:

```ts
"use server"

export async function createPost() {
  ...
}
```

Never expose server SDK in client components.

Server-only operations:

- create user
- admin actions
- delete resources
- API key operations

---

## Realtime Rules

Use Appwrite realtime only when needed.

Example use cases:

- chat
- notifications
- live dashboard
- collaborative editing

Avoid unnecessary subscriptions.

Always cleanup listeners.

---

## Permissions Rules

Always implement explicit permissions.

Never use:

```ts
Permission.read("any")
```

unless public content is intentional.

Prefer:

```ts
Permission.user(userId)
```

Check latest permission syntax via docs.

Never guess permission API.

---

## File Upload Rules

Use Appwrite Storage.

Always:

- validate type
- validate size
- handle upload errors

Example allowed:

- image/png
- image/jpeg
- application/pdf

Never trust client file metadata.

---

## Appwrite Functions

Use functions for:

- cron jobs
- webhooks
- email processing
- server jobs
- AI processing

Avoid running heavy backend logic inside frontend.

Before generating function deployment code:

Check latest docs.

---

## SSR Rules

When using Next.js:

Prefer server-side session handling.

Avoid localStorage auth patterns.

Prefer:

- cookies
- secure session management

Check latest Appwrite SSR integration docs first.

---

## Appwrite Sites Deployment

Appwrite Sites supports Next.js deployment.

Default build settings:

```bash
npm install
npm run build
```

Output:

```text
.next
```

Use environment variables inside Appwrite dashboard.

Supported:

- SSR
- App Router
- Server Components

Reference latest deployment docs before generating.

:contentReference[oaicite:2]{index=2}

---

## MCP Integration Rules

If agent has MCP access:

Always prefer Appwrite MCP.

API MCP:

```json
{
  "mcpServers": {
    "appwrite-api": {
      "command": "uvx",
      "args": ["mcp-server-appwrite"]
    }
  }
}
```

Docs MCP:

```json
{
  "mcpServers": {
    "appwrite-docs": {
      "url": "https://mcp-for-docs.appwrite.io"
    }
  }
}
```

Reference:

:contentReference[oaicite:3]{index=3}

---

## Code Generation Rules

When generating Appwrite code:

Always:

- check docs first
- verify latest SDK syntax
- use TypeScript
- separate server/client code
- use environment variables
- handle errors explicitly

Never:

- assume SDK methods
- hardcode secrets
- expose API keys
- mix frontend/backend client
- use outdated collection APIs without docs verification

---

## Agent Behavior Rules

If user asks Appwrite implementation:

Decision flow:

Step 1:

Check whether API/docs may have changed.

Step 2:

If uncertain → call Context7.

```text
context7 resolve-library-id "appwrite"
context7 get-library-docs
```

Step 3:

If Context7 unavailable → use Appwrite MCP docs.

Step 4:

Then generate code.

Never skip documentation lookup for advanced Appwrite features.

---

## Never Do

Never:

- expose APPWRITE_API_KEY in frontend
- put secrets in client code
- assume SDK syntax without docs
- skip auth validation
- skip permission rules
- generate Firebase code when user asks Appwrite
- mix browser SDK with admin SDK

---

## Output Standards

Generated code must be:

- Appwrite SDK accurate
- verified against latest docs
- strongly typed
- production-ready
- secure
- scalable
- SSR compatible
- optimized for Next.js