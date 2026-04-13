# OnomeLabs Academy 🚀

A premium, production-grade Learning Management System (LMS) for software engineers built with **Next.js 15**, **Supabase**, and a modern UI system inspired by elite engineering academies like ALX and edX.

---

## 📌 Overview

OnomeLabs Academy is a full-stack educational platform designed to simulate real-world software engineering training environments.

It enables:

* Structured engineering courses
* Modular learning paths
* GitHub-based project submissions
* Automated grading simulation engine
* Student progress tracking
* Role-based dashboards (Student / Admin / Instructor)

Built with scalability, maintainability, and production-readiness in mind.

---

## 🧱 Tech Stack

### Frontend

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Shadcn/UI
* Framer Motion
* React Markdown

### Backend

* Supabase (Auth + Database + RLS)
* PostgreSQL
* Server Actions (Next.js)

### UI/UX System

* Inter Font
* Slate-based design system
* Emerald accent branding (#10B981)

---

## 🏗 Architecture

```
app/
 ├── (marketing)/        # Landing pages
 ├── dashboard/          # Student dashboard
 ├── login/              # Auth pages

components/
 ├── layout/             # Navbar, Sidebar, Footer
 ├── academy/            # LMS-specific components
 ├── ui/                 # Shadcn primitives

lib/
 ├── supabase/           # Client + Server setup

types/
 ├── academy.ts          # LMS domain types
```

---

## 🔐 Authentication

Authentication is handled via Supabase:

* Email Magic Link login
* GitHub OAuth login
* Secure session handling via cookies

### Protected Routes

* `/dashboard/*` is fully protected via middleware

---

## 🗄 Database Schema

### Core Tables

#### profiles

* id (UUID)
* full_name
* avatar_url
* role (student | admin | instructor)

#### courses

* id
* title
* slug
* description

#### modules

* id
* course_id
* title
* position

#### tasks

* id
* module_id
* title
* instructions_md

#### enrollments

* id
* user_id
* course_id
* progress

#### submissions

* id
* user_id
* task_id
* github_url
* status (pending | processing | graded | failed)
* grade

---

## ⚙️ Features

### 🎓 Learning System

* Course → Module → Task hierarchy
* Structured learning paths
* Markdown-based lessons

### 📊 Dashboard

* Progress tracking
* Course completion analytics
* Learning roadmap visualization

### 📤 Submission Engine

* GitHub repository submission
* Processing state simulation
* Auto grading pipeline (mocked / extendable)

### 🔄 ALX-style Checker

* Pending → Processing → Graded workflow
* Server Action powered backend logic
* Real-time UI status updates

---

## 🧪 Setup Instructions

### 1. Clone Repository

```bash
git clone <repo-url>
cd onomelabs-academy
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

### 4. Run Development Server

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

## 🧱 Supabase Setup

1. Create Supabase project
2. Enable Authentication providers:

   * Email
   * GitHub OAuth
3. Run SQL schema in Supabase SQL Editor
4. Enable Row Level Security (RLS)

---

## 🔐 Middleware Protection

Dashboard routes are protected using Next.js middleware:

* Blocks unauthenticated access
* Redirects to `/login`

---

## 📦 Core Modules

### 1. Landing Page

* Hero section
* Course catalog
* Conversion-focused design

### 2. Dashboard

* Sidebar navigation
* Progress overview
* Learning path visualization

### 3. Course Player (Planned Extension)

* Video + Markdown split view
* Interactive task panel

### 4. Submission System

* GitHub URL submission
* Status tracking
* Grading simulation engine

---

## 🚀 Deployment

### Vercel Deployment

1. Push to GitHub
2. Import repo into Vercel
3. Add environment variables
4. Deploy

---

## 🧠 Future Enhancements

* Real GitHub Actions auto-grading
* AI-powered code review system
* Instructor dashboard CMS
* Payment integration (Stripe)
* Live cohort system
* Real-time collaboration rooms

---

## 🏁 Philosophy

> “We don’t teach coding. We train engineers like production systems.”

OnomeLabs Academy is built on discipline, structure, and real-world engineering rigor.

---

## 📄 License

MIT (or proprietary depending on deployment strategy)

---

## 👨‍💻 Maintainer

Jeffery Onome Emuodafevware (Founder Of OnomeLabs) 
