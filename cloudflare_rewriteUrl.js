addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  // Mapping configuration: Add as many objects as needed.
  const rewriteMappings = [
    {
      source: { hostname: "sub.mydomain.com", pathname: "/mypage" },
      destination: { hostname: "mydomain.com", pathname: "/mypage2" }
    },
    // Example of an additional mapping:
    // {
    //   source: { hostname: "old.example.com", pathname: "/oldpage" },
    //   destination: { hostname: "new.example.com", pathname: "/newpage" }
    // }
  ];
  
  async function handleRequest(request) {
    const url = new URL(request.url)
  
    // Iterate over all mappings to check for a match.
    for (const mapping of rewriteMappings) {
      if (url.hostname === mapping.source.hostname && url.pathname === mapping.source.pathname) {
        // Rewrite to destination while preserving query parameters.
        url.hostname = mapping.destination.hostname;
        url.pathname = mapping.destination.pathname;
  
        // Create a new request preserving the method, headers, and other settings.
        const newRequest = new Request(url.toString(), request);
        return fetch(newRequest);
      }
    }
  
    // For any URL that does not match a rewrite rule, proceed as normal.
    return fetch(request);
  }
  