import type { APIRoute } from "astro";
import { OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET } from "astro:env/server";
import { ALLOWED_GITHUB_USERS } from "../../lib/adminAuth";

export const prerender = false;

export const GET: APIRoute = async ({ url, redirect, session }) => {
  try {
    const data = {
      code: url.searchParams.get("code"),
      client_id: OAUTH_GITHUB_CLIENT_ID,
      client_secret: OAUTH_GITHUB_CLIENT_SECRET,
    };

    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(`GitHub OAuth error! status: ${response.status} body: ${errorText}`, {
        status: 500,
      });
    }

    const body = await response.json();

    if (body.error) {
      return new Response(`GitHub OAuth error: ${body.error_description || body.error}`, {
        status: 500,
      });
    }

    if (!body.access_token) {
      return new Response("No access token received from GitHub", { status: 500 });
    }

    const next = url.searchParams.get("state");
    if (next) {
      const userResponse = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${body.access_token}`,
          Accept: "application/vnd.github+json",
        },
      });
      const userBody = await userResponse.json();
      const username = userBody.login;

      if (!userResponse.ok || !ALLOWED_GITHUB_USERS.includes(username)) {
        return new Response(`Accès refusé pour ${username ?? "utilisateur inconnu"}.`, {
          status: 403,
        });
      }

      session.set("adminUser", username);
      return redirect(next);
    }

    const content = {
      token: body.access_token,
      provider: "github",
    };

    const script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:success:${JSON.stringify(content)}',
            message.origin
          );

          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);

        window.opener.postMessage("authorizing:${content.provider}", "*");
      </script>
    `;

    return new Response(script, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    return new Response(`CALLBACK CRASH: ${err instanceof Error ? err.stack : String(err)}`, {
      status: 500,
    });
  }
};
