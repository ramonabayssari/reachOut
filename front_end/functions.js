    const base_url="Http://localhost:8000/api/"

    const pages = {}

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

    pages.getAPI = async(api_url) => { 

        try{
      
            return await axios(api_url)
      
        }catch(error){
      
            console.log("Error from linking (GET)", error)
        }
      }
    
    pages.loadFor = (page) => { 
        eval("pages.load_" + page + "();")
      }
    
      
      const hands= document.getElementById("hands");
      let email_= document.getElementById("email");
      const fullname=document.getElementById("fullname");
      const psw=document.getElementById("psw");
      const about=document.getElementById("about");
      const occ=document.getElementById("occ");

      pages.load_signup = () =>{
        const api_url = base_url + "/auth/login"

        email_.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        email_.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
       
    
        fullname.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        fullname.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
        psw.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        psw.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
        about.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        about.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
        occ.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        occ.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })        
    }

    

 //-----------------------------------------------------------------------------------------------
    const emailL= document.getElementById("emailL");
    const pswL=document.getElementById("pswL");
    const handsL= document.getElementById("handsL");
    let subLogin = document.getElementById("login_sub")

    pages.load_login = () =>{

    emailL.addEventListener("mouseover", function(){
        handsL.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    emailL.addEventListener("mouseout", function(){
        handsL.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    pswL.addEventListener("mouseover", function(){
        handsL.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
    })
    pswL.addEventListener("mouseout", function(){
        handsL.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
    })

    subLogin.addEventListener("click", async function(){
        const signin_url= base_url+"auth/login"
        const auth = new FormData()
        const e= emailL.value
        const p= pswL.value
    
        auth.append("email",e)
        auth.append("password", p)
    
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
    }

    //----------------------------------------------------------------------------------------
    pages.load_Csignup = () =>{
        const hands= document.getElementById("hands");
        let email_= document.getElementById("email");
        const name=document.getElementById("cname");
        const psw=document.getElementById("psw");
        const about=document.getElementById("about");
        const loc=document.getElementById("loc");

        email_.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        email_.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
    
        name.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        name.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
        psw.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        psw.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
        about.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        about.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })
    
        loc.addEventListener("mouseover", function(){
            hands.innerHTML='<img src="assets/signup.gif" class="gif-size center-gif">';
        })
        loc.addEventListener("mouseout", function(){
            hands.innerHTML='<img src="assets/signup.png" class="gif-size center-gif">';
        })        
    }


    //-----------------------------------------------------------------------------------------
    pages.load_homepage= () =>{
        const categoryButton = document.querySelector('.category-button');
        const categoryBox = document.querySelector('.category-box');
        const profile=document.getElementById("profile")

        categoryButton.addEventListener('click', function() {
        if (categoryBox.style.display === "none") {
            categoryBox.style.display = "block";
        } else {
            categoryBox.style.display = "none";
        }
        });
        
        profile.addEventListener("click",function(){
            window.location.replace("volunteer_profilepage.html");
        })
    }

    //-------------------------------------------------------------------------------------------------
    pages.load_profilepage=()=>{
        const btn1= document.getElementById("btn1")
        const home=document.getElementById("home")

        function printPDF() {
          const divToRemove = document.getElementById("side-bar");
          divToRemove.style.display = "none";
          window.print();
          divToRemove.style.display = "block";
        }
        btn1.addEventListener("click", printPDF); 

        home.addEventListener("click", function(){
            window.location.replace("volunteer_homepage.html");
        })
    }
    //------------------------------------------------------------------------------------------------------

    pages.load_Chomepage= () =>{
        const profile=document.getElementById("profile")
        const b= document.getElementById("btn")

        profile.addEventListener("click",function(){
            window.location.replace("company_profilepage.html");
        })
        b.addEventListener("click",function(){
            window.location.replace("newevent.html");
        })
    }

    //-----------------------------------------------------------------------------------------------------

    pages.load_Cprofilepage=()=>{
        const home= document.getElementById("home")
       
        home.addEventListener("click", function(){
            window.location.replace("company_homepage.html");
        })


    }