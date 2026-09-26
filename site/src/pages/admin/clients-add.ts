import type { APIRoute } from "astro";
import { getStore } from "@netlify/blobs";
import { isAdminAuthenticated } from "../../lib/adminAuth";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect, session }) => {
  if (!(await isAdminAuthenticated(session))) {
    return new Response("Accès refusé", { status: 403 });
  }

  const form = await request.formData();
  const nom = String(form.get("nom") ?? "");
  const telephone = String(form.get("telephone") ?? "");
  const email = String(form.get("email") ?? "");
  const adresse = String(form.get("adresse") ?? "");
  const notes = String(form.get("notes") ?? "");

  const store = getStore({ name: "clients", consistency: "strong" });
  const entries: any[] = (await store.get("entries", { type: "json" })) ?? [];
  entries.push({ id: crypto.randomUUID(), nom, telephone, email, adresse, notes });
  await store.setJSON("entries", entries);

  return redirect("/admin/clients");
};
