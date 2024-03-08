import { type NextRequest } from 'next/server';
import { cookies } from 'next/headers';


function setCookieAccessToken(name: string) {
  const cookieStore = cookies();
  let accessToken = null;

  cookieStore.getAll().forEach(({ name, value }) => {
    if (name.endsWith('.accessToken')) {
      cookieStore.set('accessToken', value);
      accessToken = value;
    }
  });

  return accessToken;
}

function getCookieAccessToken(name: string) {
  const cookieStore = cookies();
  let cookie = cookieStore.get(name);

  if (!cookie) return setCookieAccessToken(name);
  return cookie;
}

async function GET(request: NextRequest) {
  const accessToken = getCookieAccessToken('accessToken');

  const searchParams = request.nextUrl.searchParams;
  const statusFilter = searchParams.get('status');
  let filter = statusFilter !== null
    ? `status=${statusFilter}`
    : '';

  const metadata = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  };
  const resp = await fetch(`https://api.peopleforbikes.xyz/cities/submissions?${filter}`, metadata);

  if (!resp.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = resp.json();
  return Response.json({ data });
}

async function PATCH(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  const payload = await request.json();
  const body = JSON.stringify(payload);

  const metadata = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body
  };
  const resp = await fetch(`https://api.peopleforbikes.xyz/cities/submissions/${body.id}`, metadata);

  if (!resp.ok) {
    throw new Error(`Failed to update data: ${body}`);
  }

  const data = resp.json();
  return Response.json({ data });
}

async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');

  const payload = await request.json();
  const body = JSON.stringify(payload);

  const metadata = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body
  };
  const resp = await fetch('https://api.peopleforbikes.xyz/cities/submissions', metadata);

  if (!resp.ok) {
    throw new Error(`Failed to update data: ${body}`);
  }

  const data = resp.json();
  return Response.json({ data });
}


export { GET, PATCH, POST };
