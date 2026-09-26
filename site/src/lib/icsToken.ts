export async function getIcsToken(secret: string): Promise<string> {
  const enc = new TextEncoder().encode(`${secret}:edt-ics`);
  const hash = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32);
}
