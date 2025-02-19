import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <h1>Settings</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
};

export default SettingsPage;
