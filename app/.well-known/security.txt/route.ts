export function GET() {
  return new Response([
    "Contact: https://thoughtfultransport.net/security",
    "Expires: 2027-09-10T23:59:59.000Z",
    "Preferred-Languages: en",
    "Canonical: https://thoughtfultransport.net/.well-known/security.txt",
  ].join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
