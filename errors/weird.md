[Error: 140735290741504:error:140770FC:SSL routines:SSL23_GET_SERVER_HELLO:unknown protocol:../deps/openssl/openssl/ssl/s23_clnt.c:787:]

{ hostname: 'www.google.com',
  port: 80,
  method: 'GET',
  path: '/',
  headers: {} }

[Error: Hostname/IP doesn't match certificate's altnames]

{ hostname: 'github.com',
  port: 443,
  method: 'GET',
  path: '/',
  headers: 
   { Host: '52.52.54.55', // Randomly chosen
     Accept: 'text/html',
     'User-Agent': 'Mozillla' } }


Retest https://google.com without header and lookout for timeouts
