import type { APIRoute } from "astro";
import { getStore } from "@netlify/blobs";
import { isAdminAuthenticated } from "../../lib/adminAuth";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect, session }) => {
  if (!(await isAdminAuthenticated(session))) {
    return new Response("Accès refusé", { status: 403 });
  }

  const form = await request.formData();
  const id = String(form.get("id") ?? "");

  const store = getStore({ name: "factures", consistency: "strong" });
  const entries: any[] = (await store.get("entries", { type: "json" })) ?? [];
  const updated = entries.map((entry) =>
    entry.id === id ? { ...entry, statut: entry.statut === "payee" ? "impayee" : "payee" } : entry
  );
  await store.setJSON("entries", updated);

  return redirect("/admin/factures");
};
