    // Could be GET or POST/PUT/PATCH/DELETE
    result  = fetch('https://dummyjson.com/test')
    .then(res => res.json())
    .then(console.log);
    
    console.log(result)
    
    /* { status: 'ok', method: 'GET' } */

    /* providing access token in bearer */
fetch('https://dummyjson.com/auth/RESOURCE', {
    method: 'GET', /* or POST/PUT/PATCH/DELETE */
    headers: {
      'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', 
      'Content-Type': 'application/json'
    }, 
  })
  .then(res => res.json())
  .then(console.log);