
        "http": async function(url="google.com",params={},method="GET"){
                  let send = url
                  params != {} ? send = send + '?' : send = send
                  for (k in params){
                      send = send + k+"="+params[k]
                  }
                  let result =  await fetch(send,{method: method})
                  return result.json()
              }   


