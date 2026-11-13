import {SignJWT,jwtVerify} from "jose";
import {cookies} from "next/headers";
function getSecret(){const value=process.env.AUTH_SECRET;if(!value&&process.env.NODE_ENV==="production")throw new Error("AUTH_SECRET must be configured in production.");return new TextEncoder().encode(value||"development-only-change-this-secret");}
export async function createSession(user:{id:string;name:string;email:string}){const token=await new SignJWT(user).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(getSecret());(await cookies()).set("shubhiii_session",token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*24*7});}
export async function getSession(){const token=(await cookies()).get("shubhiii_session")?.value;if(!token)return null;try{const {payload}=await jwtVerify(token,getSecret());return payload as {id:string;name:string;email:string};}catch{return null;}}
export async function clearSession(){(await cookies()).delete("shubhiii_session");}
