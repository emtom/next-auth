import { LoginButton } from "@/components/auth/login-button";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-700">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white drop-shadow-md">
          A simple auth app test
        </p>

        <div>
          <LoginButton>
            Sign in
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
