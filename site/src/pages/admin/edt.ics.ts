import type { APIRoute } from "astro";
import { getStore } from "@netlify/blobs";
import { OAUTH_GITHUB_CLIENT_SECRET } from "astro:env/server";
import { getIcsToken } from "../../lib/icsToken";

export const prerender = false;

function icsEscape(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export const GET: APIRoute = async ({ url }) => {
  const providedToken = url.searchParams.get("token");
  const expectedToken = await getIcsToken(OAUTH_GITHUB_CLIENT_SECRET);

  if (providedToken !== expectedToken) {
    return new Response("Accès refusé", { status: 403 });
  }

  const store = getStore({ name: "edt", consistency: "strong" });
  const entries: any[] = (await store.get("entries", { type: "json" })) ?? [];

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SARL Ouerghi//EDT//FR",
    "CALSCALE:GREGORIAN",
    "X-WR-CALNAME:SARL Ouerghi - Emploi du temps",
    "REFRESH-INTERVAL;VALUE=DURATION:PT1H",
  ];

  for (const entry of entries) {
    const dateCompact = String(entry.date).replace(/-/g, "");
    lines.push(
      "BEGIN:VEVENT",
      `UID:${entry.id}@sarl-ouerghi`,
      `DTSTART;VALUE=DATE:${dateCompact}`,
      `DTEND;VALUE=DATE:${dateCompact}`,
      `SUMMARY:${icsEscape(entry.titre)}`,
      entry.notes ? `DESCRIPTION:${icsEscape(entry.notes)}` : "",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");

  return new Response(lines.filter(Boolean).join("\r\n"), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
