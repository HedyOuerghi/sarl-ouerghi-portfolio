import type { APIRoute } from "astro";
import { getStore } from "@netlify/blobs";
import { isAdminAuthenticated } from "../../lib/adminAuth";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect, session }) => {
  if (!(await isAdminAuthenticated(session))) {
    return new Response("Accès refusé", { status: 403 });
  }

  const form = await request.formData();
  const client = String(form.get("client") ?? "");
  const montant = String(form.get("montant") ?? "0");
  const date = String(form.get("date") ?? "");
  const statut = String(form.get("statut") ?? "impayee");
  const notes = String(form.get("notes") ?? "");

  const store = getStore({ name: "factures", consistency: "strong" });
  const entries: any[] = (await store.get("entries", { type: "json" })) ?? [];
  entries.push({ id: crypto.randomUUID(), client, montant, date, statut, notes });
  await store.setJSON("entries", entries);

  return redirect("/admin/factures");
};
