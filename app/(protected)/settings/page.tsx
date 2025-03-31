import { auth } from "@/auth";
import { logout } from "@/actions/logout";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <h1>Settings</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form action={async () => {
        "use server";
        await logout();
      }}>
        <button type="submit">Sign out</button>
      </form>
    </>
  );
};

export default SettingsPage;
