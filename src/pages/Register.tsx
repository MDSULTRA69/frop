import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { register, isRegistering } = useAuth();
  const [, setLocation] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await register({ data: { username, email, password } });
      setLocation("/");
    } catch (err: any) {
      setErrorMsg(err.data?.error || "Failed to register");
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[var(--bg)] font-sans">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-[var(--bg2)] p-8 sm:p-10 rounded-xl border border-[var(--border-color)] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <h1 className="font-serif text-3xl font-bold text-center mb-2 text-[var(--text)] tracking-tight">Join the Crew</h1>
          <p className="text-center text-[var(--text-dim)] mb-8">Start your journey to become Pirate King.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[var(--text-dim)] font-bold tracking-wider uppercase text-xs">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-[var(--bg)] border-[var(--border-color)] text-[var(--text)] focus-visible:ring-[var(--gold)] h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[var(--text-dim)] font-bold tracking-wider uppercase text-xs">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[var(--bg)] border-[var(--border-color)] text-[var(--text)] focus-visible:ring-[var(--gold)] h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[var(--text-dim)] font-bold tracking-wider uppercase text-xs">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="bg-[var(--bg)] border-[var(--border-color)] text-[var(--text)] focus-visible:ring-[var(--gold)] h-12"
              />
            </div>
            {errorMsg && (
              <div className="text-[var(--destructive)] text-sm border border-[var(--destructive)]/30 bg-[var(--destructive)]/10 p-3 rounded">{errorMsg}</div>
            )}
            <button
              type="submit"
              disabled={isRegistering}
              className="w-full py-4 bg-[var(--gold)] text-[var(--bg)] font-bold rounded hover:bg-white transition-colors uppercase tracking-widest mt-2 disabled:opacity-50"
            >
              {isRegistering ? "Enlisting..." : "Register"}
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-dim)] relative z-10">
            Already have an account?{" "}
            <Link href="/login" className="text-[var(--gold)] font-bold hover:underline uppercase tracking-wider ml-1">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
