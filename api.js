const url = "https://mashriq.herokuapp.com/dash/v1";  
export const login = (data, callback) => {   fetch(`${url}/login`, {    
     method: "POST",headers: { "Content-Type": "application/json" },     body: JSON.stringify(data), })     
.then((resp) => resp.json())     
.then((result) => callback(null, result))     
.catch((e) => callback(e, null)); };

export const addData = (data, callback) => {   fetch(`${url}/article`, {    
     method: "POST",headers: { "Content-Type": "application/json",
     "token": localStorage.getItem("blog_token")
 },
 body: JSON.stringify(data), })     
.then((resp) => resp.json())     
.then((result) => callback(null, result))     
.catch((e) => callback(e, null)); };


export const getArticles = (callback) => {   
     fetch(`${url}/articles`)
  .then(response => response.json())
  .then(result => callback(null, result))
  .catch(error => callback(error,null));
}



