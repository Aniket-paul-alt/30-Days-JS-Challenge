const axios = require('axios')

axios.get('https://api.github.com/users/Aniket-paul-alt')
.then((response)=> console.log(response.data))
.catch((err)=> console.error("Err :"+err))