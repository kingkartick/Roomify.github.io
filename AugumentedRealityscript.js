
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnJvHGINzFRY4Tbv3KPUL5G7-RPasbK9Q",
  authDomain: "roomy2-8afff.firebaseapp.com",
  databaseURL: "https://roomy2-8afff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "roomy2-8afff",
  storageBucket: "roomy2-8afff.appspot.com",
  messagingSenderId: "519049376654",
  appId: "1:519049376654:web:c50a78b952cbd22f66aadf",
  measurementId: "G-F1XQKD5GMX"
};

// Initialize Firebase
function signIn(){
  const app = initializeApp(firebaseConfig);
const userImage = document.getElementById("userlogo");
const userName = document.getElementById("username");
 


const provider = new GoogleAuthProvider();
const auth = getAuth();

signInWithPopup(auth, provider)
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
 const credential = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
  // The signed-in user info.
   const user = result.user;
   console.log(user.displayName);
   console.log(user.photoURL);
   const userphoto = user.photoURL;
   const username = user.displayName;
   const email = user.email;
   userImage.src=userphoto;
   userName.innerText=username;
   localStorage.setItem("userImage",userphoto);
   localStorage.setItem("userName",username);
   localStorage.setItem("email",email);




   }).catch((error) => {
    // Handle Errors here.
       const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
      const email = error.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
 
      });

}


 const bigBody = document.getElementById("bigBody");
 const loader = document.getElementById("loadin");
 const bagBody = document.getElementById("bagBody");
 
 window.onload= function loding(){
   setTimeout(function() 
        {bigBody.style.overflow="visible";
         bigBody.classList.add("layer");
   bigBody.classList.add("spacer"); 
   
   loader.style.opacity="0";
   loader.style.pointerEvents="none";
   loader.style.height="0px";
  
   bagBody.style.visibility="visible";
   signIn.call();
   
  
 }, 4000);   
   
 }


        var twoD = false;  
        const modelViewer = document.querySelector("model-viewer");
        const orederBTN = document.getElementById("orderBtn");
        const addCartBTN = document.getElementById("addCart");
          
        let clk = document.getElementById("toggel");
         clk.addEventListener("click",function loader(){ 
  
        if (twoD == false){
          twoD = true;
          modelViewer.dismissPoster();
          clk.style.backgroundImage ="url(./assets/2d.png)";
          orederBTN.style.top=null;
          orederBTN.style.bottom="120px";
          orederBTN.style.height="75px"
          orederBTN.style.width="275px"
          orederBTN.style.left="70px"
          addCartBTN.style.top=null;
          addCartBTN.style.left="10px";
          addCartBTN.style.bottom="128px";
          addCartBTN.style.height="68px"
          addCartBTN.style.width="68px"
        
          return;
         }
        if(twoD){
          twoD = false;
          modelViewer.showPoster()
          clk.style.backgroundImage ="url(./assets/3d-model.png)";
          orederBTN.style.top="75px";
          orederBTN.style.bottom=null;
          orederBTN.style.height="55px"
          orederBTN.style.width="200px"
          orederBTN.style.left="47px" 
                  
          addCartBTN.style.top="70px";
         
          addCartBTN.style.left="236px";
          addCartBTN.style.bottom=null;
          return;
        }
 
       });
 
       localStorage.setItem("CurrentItem",'IDK');
         window.switchSrc = (element, name) => {
           const base = "assets/" + name;
           modelViewer.src = base + '.glb';
           modelViewer["ios-src"] = base + "usdz";
           const  post2 = base+ '002'+ '.webp';
           const cycle = document.getElementById('viewer');
           cycle.setAttribute('poster',post2);
           const slides = document.querySelectorAll(".slide");
           slides.forEach((element) => {element.classList.remove("selected"); });
           element.classList.add("selected");
           localStorage.setItem("CurrentItem",post2);
         
         };
        
         document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
           // Keep slider interactions from affecting the XR scene.
           ev.preventDefault(); 
         });
         localStorage.setItem("chosenDesigns","[]");   
         const cart = document.getElementById("addCart");
         cart.addEventListener("click",function cartguy(){
          
          
          console.log(localStorage.getItem("CurrentItem"));
          const paper = localStorage.getItem("CurrentItem").toString() ;
          
          var oldData = JSON.parse(localStorage.getItem('chosenDesigns'));
          oldData.push(paper);
          localStorage.setItem("chosenDesigns",JSON.stringify(oldData));
  
          }) 