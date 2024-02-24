import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const statusFilter = searchParams.get("status");
  let filter = "?";
  if (statusFilter != null) {
    filter += `status=${statusFilter}`
  }
  const resp = await fetch("https://api.peopleforbikes.xyz/cities/submissions" + filter);

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await resp.json()
  return Response.json({ data })
}


export async function PATCH(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const cognito_access = searchParams.get('cognito_access');
  const body = await request.json();
  const body_str = JSON.stringify(body)
  const metadata = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cognito_access}`,
    },
    body:body_str
  };
  const resp = await fetch(`https://api.peopleforbikes.xyz/cities/submissions/${body.id}`, metadata);

  if (!resp.ok) {
    throw new Error("Failed to update data: " + body_str);
  }

  const data = await resp.json()
  return Response.json({ data })
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const body_str = JSON.stringify(body)
  const metadata = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body:body_str
  };
  const resp = await fetch("https://api.peopleforbikes.xyz/cities/submissions", metadata);

  if (!resp.ok) {
    throw new Error("Failed to update data: " + body_str);
  }

  const data = await resp.json()
  return Response.json({ data })
}
