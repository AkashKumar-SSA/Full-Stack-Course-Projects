fetch('')
//for get successful response
.then((res)=>{
    console.log('Pormis done',res.json().then((ress)=>{
        console.log(ress)
    }))
})