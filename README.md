ComX Trading Platform
A full-stack Next.js trading platform with Supabase authentication, real-time market data, and a multi-step registration process.

🚀 Features
User Authentication
Multi-step registration (Individual & Corporate)
Secure login with Supabase authentication
Persistent authentication state
Dashboard & Trading
Real-time order book
Trade logging system
Live market ticker
UI & UX
Tailwind CSS for styling
Mobile-responsive design
Fully matches provided UI images
📂 Folder Structure
r
Copy
Edit
📦 comx-trading-platform
 ┣ 📂 app
 ┃ ┣ 📂 (root) 
 ┃ ┃ ┣ 📜 layout.tsx
 ┃ ┃ ┣ 📜 page.tsx  # Dashboard Page
 ┃ ┣ 📂 auth 
 ┃ ┃ ┣ 📜 sign-in.tsx  # Login Page
 ┃ ┃ ┣ 📜 sign-up.tsx  # Multi-Step Registration
 ┃ ┃ ┣ 📜 forgot-password.tsx
 ┃ ┣ 📂 welcomePage  # Welcome Page (Redirect if not authenticated)
 ┃ ┣ 📂 dashboard  
 ┃ ┃ ┣ 📜 page.tsx  
 ┃ ┣ 📂 middleware.ts  # Authentication Middleware
 ┃ ┣ 📂 components  
 ┃ ┃ ┣ 📜 OrderBook.tsx  
 ┃ ┃ ┣ 📜 LiveMarket.tsx  
 ┃ ┃ ┣ 📜 TradeLog.tsx  
 ┃ ┃ ┣ 📜 End.tsx  
 ┃ ┃ ┣ 📜 MiniSidebar.tsx  
 ┣ 📂 public  
 ┃ ┣ 📂 images  # Logos, Icons  
 ┣ 📂 styles  
 ┃ ┣ 📜 globals.css  
 ┣ 📜 .env.local  # Environment Variables  
 ┣ 📜 README.md  
 ┗ 📜 package.json  
🛠️ Technologies Used
Frontend: Next.js (App Router), TypeScript, Tailwind CSS
Backend: Supabase (Auth, Database, Storage)
State Management: React Hooks
Authentication: Supabase Auth Helpers
📝 Installation & Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/your-repo/comx-trading-platform.git
cd comx-trading-platform
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Set up environment variables
Create a .env.local file and add:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
4️⃣ Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

🔐 Authentication Flow
Registration

Users complete a multi-step registration process.
Corporate & individual registration paths.
Verification code sent via email/phone.
Sign-In

Users authenticate using email & password.
Redirects to /dashboard upon success.
Session Handling

Middleware enforces authentication.
If not logged in, user is redirected to /welcomePage.
🛠️ Key Implementations
🔹 Middleware (Authentication Guard)
ts
Copy
Edit
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { session } } = await supabase.auth.getSession();

  if (!session && !req.nextUrl.pathname.startsWith("/welcomePage")) {
    return NextResponse.redirect(new URL("/welcomePage", req.url));
  }

  return res;
}

// Apply to protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/orders/:path*"],
};
🔹 Multi-Step Registration Example
tsx
Copy
Edit
const Step2 = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div>
      <h2>Set Password</h2>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    </div>
  );
};
🔹 Sign-In with Supabase
tsx
Copy
Edit
const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    setError("Credentials not found");
  } else {
    await supabase.auth.refreshSession();
    router.push("/");
  }
};
🎯 Next Steps
Implement real-time market data using WebSockets
Optimize performance with server-side rendering (SSR)
Enhance security with role-based access control
📜 License
This project is licensed under the MIT License.