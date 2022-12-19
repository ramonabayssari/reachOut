
let email= document.getElementById("emailL")
let pass= document.getElementById("pswL")
let subLogin = document.getElementById("login_sub")

const base_url="Http://localhost:8000/api/"

const pages= {}

pages.postAPI = async(api_url, data, api_token = null) => {  
    try {
        return await axios.post(
            api_url, 
            data,
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
    const e= email.value
    const p= pass.value

    auth.append("email",e)
    auth.append("password", p)
    console.log("after auth")

    const response= await pages.postAPI(signin_url, auth)
    alert(response)
    console.log(response)

    if(response){
        alert('if')
        console.log(response)
        
      }
      else{
        console.log("inco")
        alert('else')
      }

})


