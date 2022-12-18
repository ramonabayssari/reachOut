let email= document.getElementById("emailL")
let pass= document.getElementById("pswL")
let subLogin = document.getElementById("login_sub")
console.log(subLogin)

const base_url="Http://localhost:8000/api/"

const pages= []

pages.postAPI = async(api_url, auth, api_token = null) => {  
    try {
        return await axios.post(
            api_url, 
            auth,
            {
                headers:{
                    'Authorization': `Bearer ${api_token}`
                }
            }
        )
    } catch (error) {
        console.log("Error from linking (POST)", error)
    }
    
}

subLogin.addEventListener("click", async function(){
    const signin_url= base_url+"auth/login"
    const auth = new FormData()
    auth.append("email",email)
    auth.append("pass", pass)
    const response= await pages.postAPI(signin_url, auth)
})


