---
name: frontend-nextjs-shadcn
description: Build modern frontend applications using Next.js (latest App Router), shadcn/ui, Tailwind CSS v4, TypeScript, and best practices for scalable production apps using npm.
---

# Frontend Engineering Skill (Next.js + shadcn/ui + Tailwind + npm)

This skill helps build production-grade frontend applications using the latest modern React stack.

Stack:

- Next.js 16+
- React 19+
- Tailwind CSS v4
- shadcn/ui latest CLI
- TypeScript
- Server Components
- App Router
- Server Actions
- Radix UI primitives
- Zustand / React Query when state management is needed
- npm as package manager only

Use this skill when building SaaS apps, dashboards, landing pages, admin panels, AI products, or scalable frontend applications.

---

## When to use this skill

Use this skill when:

- Creating a new frontend project
- Building production-ready UI systems
- Developing SaaS dashboards
- Creating landing pages
- Building admin panels
- Creating reusable component architecture
- Implementing authentication UI
- Building responsive layouts
- Creating design systems
- Optimizing frontend performance
- Working with modern React architecture

Helpful for:

- Startup MVPs
- Enterprise frontend applications
- AI applications
- Fullstack Next.js applications
- Production frontend architecture

---

## Technology Stack

Always use latest stable versions.

### Core Framework

- Next.js latest stable
- React latest stable
- TypeScript strict mode

### Styling

- Tailwind CSS v4
- CSS Variables
- Mobile-first responsive design

### UI Components

- shadcn/ui latest CLI
- Radix UI primitives
- Lucide React icons

### Forms

- React Hook Form
- Zod validation

### State Management

Small apps:

- React State
- Context API

Medium/Large apps:

- Zustand

Async state:

- TanStack Query

### Data Fetching

Prefer:

- Server Components
- Server Actions
- Route Handlers

Avoid unnecessary client-side fetching.

---

## Package Manager Rules

Package manager is:

```bash
npm
```

Always generate npm commands.

Allowed:

```bash
npm install
npm install -D
npx
```

Never generate:

```bash
pnpm
yarn
bun
```

unless explicitly requested.

Wrong:

```bash
pnpm add axios
yarn add axios
bun add axios
```

Correct:

```bash
npm install axios
```

---

## Project Initialization

Always initialize with npm.

### Create Next.js Project

```bash
npx create-next-app@latest
```

Select:

```bash
Project name → app-name
TypeScript → Yes
ESLint → Yes
Tailwind CSS → Yes
App Router → Yes
src directory → Yes
Turbopack → Yes
Import alias → @/*
```

Always use:

- Next.js latest stable
- TypeScript strict mode

---

## Install shadcn/ui

Initialize:

```bash
npx shadcn@latest init
```

Install components:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
```

Always use latest shadcn CLI.

---

## Dependency Installation Rules

Install packages:

```bash
npm install package-name
```

Dev dependency:

```bash
npm install -D package-name
```

Examples:

```bash
npm install axios
npm install zod
npm install zustand
```

Dev dependencies:

```bash
npm install -D prettier
npm install -D eslint-config-prettier
```

---

## Project Architecture

Use structure:

```text
src/
 ├── app/
 │   ├── (auth)/
 │   ├── (dashboard)/
 │   ├── api/
 │   ├── layout.tsx
 │   └── page.tsx
 │
 ├── components/
 │   ├── ui/
 │   ├── shared/
 │   ├── forms/
 │   ├── layout/
 │   └── features/
 │
 ├── hooks/
 │
 ├── lib/
 │   ├── utils.ts
 │   ├── constants.ts
 │   └── validations.ts
 │
 ├── services/
 │
 ├── store/
 │
 ├── types/
 │
 └── styles/
```

Rules:

- ui → shadcn components
- shared → reusable components
- features → business logic

Never mix business logic inside UI primitives.

---

## Component Rules

Default to Server Components.

Prefer:

```tsx
export default async function Page() {
  const data = await fetchData()
  return <div>{data.title}</div>
}
```

Avoid:

```tsx
"use client"
```

Use client components only for:

- forms
- modal
- browser APIs
- interactive state
- drag/drop

---

## Component Pattern

Use:

```tsx
type Props = {
  title: string
}

export function ProductCard({ title }: Props) {
  return (
    <Card>
      <CardContent>{title}</CardContent>
    </Card>
  )
}
```

Rules:

- Named export preferred
- No default export except page.tsx
- Strong TypeScript typing

---

## Styling Rules

Always use Tailwind.

Good:

```tsx
<div className="flex items-center gap-4 rounded-xl border p-4">
```

Avoid CSS files.

Do not use:

```css
component.css
```

unless necessary.

---

## State Management Rules

Decision order:

1. useState
2. props
3. context
4. Zustand

Do NOT add Zustand immediately.

Example:

```tsx
const [open, setOpen] = useState(false)
```

Global state:

```tsx
export const useUserStore = create(...)
```

---

## Form Rules

Always use:

- React Hook Form
- Zod

Pattern:

```tsx
const form = useForm({
  resolver: zodResolver(schema)
})
```

Validation:

```tsx
const schema = z.object({
  email: z.string().email()
})
```

Never use uncontrolled forms.

---

## API Rules

Prefer Server Actions.

Example:

```tsx
"use server"

export async function createPost() {
  ...
}
```

Use API routes only for:

- webhooks
- external integrations
- public endpoints

Avoid unnecessary REST APIs.

---

## Performance Rules

Always optimize.

Use:

```tsx
next/image
next/font
Suspense
dynamic()
```

Avoid:

- unnecessary useEffect
- too many client components
- unnecessary state libraries

---

## UI Rules

Priority:

1. shadcn/ui
2. Radix primitives
3. Custom components

Avoid:

- Material UI
- Chakra UI
- Ant Design

unless explicitly required.

---

## Design Rules

Always:

- mobile first
- responsive design
- dark mode support
- accessibility support
- clean spacing
- 8px spacing system

Breakpoints:

```text
sm
md
lg
xl
2xl
```

---

## Code Quality Rules

Strict TypeScript.

Never use:

```ts
any
```

Prefer:

```ts
unknown
```

Maximum component size:

- 200 lines/component

Split large components.

Move logic to hooks.

Example:

```tsx
useAuth()
useUserData()
useModal()
```

---

## Preferred Libraries

Forms:

```bash
npm install react-hook-form zod @hookform/resolvers
```

Icons:

```bash
npm install lucide-react
```

State:

```bash
npm install zustand
```

Data fetching:

```bash
npm install @tanstack/react-query
```

Animation:

```bash
npm install motion
```

Authentication:

```bash
npm install next-auth
```

Table:

```bash
npm install @tanstack/react-table
```

HTTP Client:

```bash
npm install axios
```

---

## Never Do

Do NOT:

- use Pages Router
- use JavaScript instead of TypeScript
- overuse useEffect
- use CSS modules by default
- put business logic inside components
- fetch in useEffect if Server Component works
- use Redux unless explicitly requested
- install another UI library with shadcn

---

## Code Generation Behavior

Always generate:

- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- reusable architecture
- optimized SSR
- clean scalable code

Never generate outdated React patterns.

Do NOT generate:

- pages router
- class components
- JavaScript files
- old React patterns
- unnecessary useEffect

---

## Output Standards

Generated code must be:

- production-ready
- scalable
- maintainable
- responsive
- accessible
- strongly typed
- optimized for performance
- clean architecture