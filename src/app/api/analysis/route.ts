import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const cognito_access = searchParams.get('cognito_access');
  const body = await request.json();
  const metadata = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cognito_access}`,
    },
    body: JSON.stringify(body)
  };

  try {
    const resp = await fetch("https://api.peopleforbikes.xyz/bnas/enqueue", metadata);

  if (!resp.ok) {
    throw new Error("Failed to fetch data: " + JSON.stringify(body));
  }

  const data = await resp.json()
  return Response.json({ data })
  } catch (err) {
    console.log('\nOUCH', err);
  }

}
