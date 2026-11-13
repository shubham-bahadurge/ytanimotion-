import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const secret = new TextEncoder().encode(process.env.AUTH_SECRET || "development-only-change-this-secret");
export async function createSession(user: { id: string; name: string; email: string }) {
  const token = await new SignJWT(user).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(secret);
  (await cookies()).set("shubhiii_session", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7 });
}
export async function getSession() {
  const token = (await cookies()).get("shubhiii_session")?.value;
  if (!token) return null;
  try { const { payload } = await jwtVerify(token, secret); return payload as { id: string; name: string; email: string }; }
  catch { return null; }
}
export async function clearSession() { (await cookies()).delete("shubhiii_session"); }