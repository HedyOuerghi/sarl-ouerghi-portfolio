import type { APIRoute } from "astro";
import { OAUTH_GITHUB_CLIENT_ID } from "astro:env/server";

export const prerender = false;

export const GET: APIRoute = ({ redirect, url }) => {
  const next = url.searchParams.get("next");
  const params = new URLSearchParams({
    client_id: OAUTH_GITHUB_CLIENT_ID,
    scope: "repo,user",
    ...(next ? { state: next } : {}),
  });

  return redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};
