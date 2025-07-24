// promises
const data = [
  { name: 'anil', age: 10 },
  { name: 'abdul', age: 20 },
  { name: 'gani', age: 30 },
  { name: 'anil', age: 15 }
]

function getData () {
    return new Promise((resolve,reject) => { 
        if(data && data.length > 0) { 
            resolve(data)
        }else { 
            reject('no data found')
        }
    })
}

getData().then((response) => { 
    console.log(response)
}).catch((error) => {
    console.log(error)
})