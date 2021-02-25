import './scss/index.scss'


const test = async () => {
   return await Promise.resolve('Working18'); 
}

test().then((data)=> console.log(data));
