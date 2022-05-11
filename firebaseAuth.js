const cart = document.getElementById("tuty1");
             
              const cartElement = document.getElementById("cartItems");
              const cartlist = localStorage.getItem("chosenDesigns");
              const cartArray = JSON.parse(cartlist);
              console.log(cartArray);
              console.log(cartArray.length);
              var i = 0;
              const tut = document.getElementById("Tutorial");
              for(const ele of cartArray){
                var img =document.createElement("IMG");
              
                img.classList.add("ImG");
                img.setAttribute("src",ele);
                tut.style.display="none";
                cart.append(img);  
              }
              import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
              import { getDatabase ,ref,onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
                  
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
                      
                         const mail = localStorage.getItem("email");
                         const email = mail.replace(".com","com");
                         console.log(email);
                         const app = initializeApp(firebaseConfig);
                         const db = getDatabase(app);
                         const reference = ref(db,"users/");
                          onValue(reference,(snapshot) => {
                          var data = snapshot.child(email).val();
                         
                          console.log(typeof data);
                          console.log(data);
                          var Keys = Object.keys(data);
                          console.log(Keys.length);
                          console.log(Keys);
                          var i = 0 ;
                          const orderlist = document.getElementById("fireData");
                          const bigbody = document.getElementById("bigBody");
                         for(const key of Keys){
                           console.log(key);
                          
                             if(key.includes("wall")){
                                var currentWall = key;
                                
                               var walldata = data[key];
                               const diver = document.createElement("div");
                               diver.classList.add("boxer");
                               const order = document.createElement("ol");
                               order.append(currentWall);
                               for(var ele in walldata){
                                 if(ele.includes("Texture") && walldata[ele] !== "notSelected"){
                                  
                                    var img =document.createElement("IMG");
                                    img.setAttribute("class",i+"texture");
                                    img.style.height="95px";
                                    img.style.width="85px";
                                    img.style.padding="10px";
                                   
                                    
                                    img.setAttribute("src",walldata[ele]);
                                  
                                    order.append(img);
                                    
                                 
                                 }
                                 
                                  var atr = (ele+"="+walldata[ele]);
                                  const listing = document.createElement("li");
                                  listing.append(atr);
                                  order.append(listing); 
                                  diver.append(order)
                                  
                               }   
                                 orderlist.append(diver);
                                 bigbody.style.height="1500px";

                             }
                             
                         } 
                           
                                      
                         })
