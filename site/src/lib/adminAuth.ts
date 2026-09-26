export const ALLOWED_GITHUB_USERS = ["HedyOuerghi"];

export async function isAdminAuthenticated(session: any): Promise<boolean> {
  const user = await session?.get?.("adminUser");
  return typeof user === "string" && ALLOWED_GITHUB_USERS.includes(user);
}
