import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // const { searchParams } = new URL(request.url);
const searchParams = request.nextUrl.searchParams
  const cognito_access = searchParams.get('cognito_access');
  const resp = await fetch("https://api.peopleforbikes.xyz/bnas/results", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cognito_access}`
    }
  });

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await resp.json()
  return Response.json({ data })
}
