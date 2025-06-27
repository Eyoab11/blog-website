# Eyoab Amare Blog Website

A modern, full-featured personal blog and magazine website built with **React**, **Vite**, **Tailwind CSS**, and **Supabase**.  
Includes dynamic blog posts, categories, newsletter subscriptions, contact form, and automated email notifications for subscribers.

---

## ✨ Features

- **Dynamic Blog**: All posts, categories, and tags are managed in Supabase and displayed dynamically.
- **Newsletter**: Users can subscribe to receive updates; emails are sent via Resend and Supabase Edge Functions.
- **Contact Form**: Messages are saved to Supabase and can trigger email notifications.
- **Categories & Filtering**: Browse and filter posts by tags, with a beautiful, responsive UI.
- **Modern UI**: Inspired by the GutenVerse theme, with custom branding for Eyoab Amare.
- **Supabase Edge Functions**: Automatically notify all newsletter subscribers when a new blog is posted.
- **Responsive & Accessible**: Works great on all devices.

---

## 🗂️ Project Structure

```
src/
  assets/           # Images and static assets
  components/       # Reusable UI components (navbar, footer, newsletter, etc.)
  pages/            # Main pages (Home, Categories, Blog, Contact)
  index.css         # Tailwind and global styles
  main.jsx          # App entry point
supabaseClient.js   # Supabase client setup (reads from .env)
```

---

## 🚀 Getting Started

### 1. **Clone the repo**
```sh
git clone https://github.com/yourusername/blog-website.git
cd blog-website
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Set up environment variables**

Create a `.env` file in your project root:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```

> **Important:** _Never commit your credentials (API keys, service role keys, etc.) to version control or share them publicly. Add `.env` to your `.gitignore` file to keep your secrets safe._

> For Edge Functions, create a separate `.env` in your `supabase/functions` directory (see below).

### 4. **Start the development server**
```sh
npm run dev
```

---

## 🛠️ Supabase & Edge Functions

- All blog, newsletter, and contact data is stored in Supabase.
- Newsletter subscribers are emailed automatically when a new blog is posted, using a Supabase Edge Function and [Resend](https://resend.com/).

### **Edge Function Setup**
1. Install the [Supabase CLI](https://supabase.com/docs/guides/cli).
2. Initialize and create your function:
   ```sh
   supabase functions init
   supabase functions new notify-subscribers
   ```
3. Add your Resend and Supabase credentials to `supabase/functions/.env`:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   RESEND_API_KEY=your_resend_api_key
   FROM_EMAIL=your_verified_resend_email@example.com
   ```
4. Deploy your function:
   ```sh
   supabase functions deploy notify-subscribers
   ```

---

## 📦 Main Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Resend](https://resend.com/) (for transactional emails)
- [EmailJS](https://www.emailjs.com/) (for contact form notifications)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [React Router](https://reactrouter.com/)

---

## 📝 Customization

- **Branding**: All branding is for Eyoab Amare, but you can easily update the logo, colors, and theme in `src/assets` and `index.css`.
- **Blog Content**: All content is managed in Supabase—no code changes needed to add or edit posts.
- **Newsletter**: Subscribers are managed in the `newsletters` table in Supabase.

---

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

**Enjoy your modern, scalable, and automated blog platform!**
