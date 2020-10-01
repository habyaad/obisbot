    //form action
    var show;
const form=document.querySelector('form');
    form.onsubmit=ev=>ev.preventDefault();

    //button action 
    const btn=document.querySelector('.send')

    //bot action 
   

      const botAction=function() {
          
          //get user 
         var  user=document.querySelector('.user');
            //check if not null
            empty = '' ;
             if ( user.value !== empty) {
                 
                 
                
                 //now make robot
                  const div=`  <div class="bot"> 
                    <p> ${user.value} </p>
                  </div> `
                     show=document.querySelector('.tab');
                  show.innerHTML += div
                  
                  //now bot thoughts 
                  var reg=document.querySelector('.user').value;
                  //test msg
                  re=/(hi|hello|hey|good|xup)/ig;
                    if(re.test(reg)) {
                     
                      setTimeout(()=>{
                        //now action
                        const botAns=["My name is obisBot, what's yours?"];
                       const dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1000)
                         
                    } else if (/(my|name|am|is)/ig.test(reg)){
                      setTimeout(function(){
                        const botAns=['wow nice  <br> I can help you with something guess what  ','lovely I can help you with something guess what '];
                      dis=botAns[Math.floor(Math.random()*botAns.length)];
                    
                      const reply= `
                      <div class="intro">
                        <p> ${dis}</p>
                      </div>
                      `
                      show.innerHTML+=reply;
                     
                      },1500)
                    } else if (/(what|that|alright|all|hears|listening)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['i wanna tell you about my creator','i will like to tell you about <b>Obiabo Immanuel'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    } else if (/(ok|continue|ready)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['Obiabo immanuel is a 17 years old web developer '];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    } 
                    //oda
                    else if (/(are|real)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['do you think i am a robot ?','am a guy you can rock around with do you think am a robot ?'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    else if (/(how|doing|weather|over)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['it is hot over here ','it is cold over here','it is raining over here dude'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }
                    //insult  

                    else if (/(hate)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['ooh, but i am too friendly so why will you hate me ?'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }
                    //fuck 
                    else if (/fuck/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['f*ck you too','what the fuck'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    else if (/(created|create)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['Obiabo immanuel','Obiabo created me'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    //dont
                    else if (/(guess|i do not)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['ooh, we can play around then ',' guessing is like a puzzle'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    //foto

                    else if (/(love)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['we both love each other ',' love is devine','you have a lover ?'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }



                    //lova 

                    else if (/(yes|yeah|ya)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['wow!, How does it feels like having a lover  ','i dont have  a lover cause am shy'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    //nice one
                    else if (/(nice|well)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['yeah every thing is nice and well'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }


                    else if (/(help)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['i can help you with anything you want but not every thing','am sorry i cant help at the moment cause am hungry'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    else if (/(bad|hungry|not)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['dont worry everything will be okay ','well not bad'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    //who 
                    else if (/(who|why)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=[' obiabo immanuel ','emmanuel'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    else if (/(meet)/ig.test(reg)) {

                      //answer
                      setTimeout(()=>{

                        const botAns=['nice meeting you too ','wow great everyday we meet each other'];
                        dis=botAns[Math.floor(Math.random()*botAns.length)];
                      
                        const reply= `
                        <div class="intro">
                          <p> ${dis}</p>
                        </div>
                        `
                        show.innerHTML+=reply;
                      },1500)

                    }

                    else {
                     setTimeout(()=>{
                      const botAns=['i dont understand you','ooh sorry i was charging my battery','am sorry i lost my sense few moments ago haha just kidding let chat'];
                      dis=botAns[Math.floor(Math.random()*botAns.length)];
                    
                      const reply= `
                      <div class="intro">
                        <p> ${dis}</p>
                      </div>
                      `
                      show.innerHTML+=reply;
                     },1500)
                    }
                   
              //nice 

                    

                //null the user
                  user.value = empty ;
                     
             } else {
                 console.log('null');
             }

      }
      btn.addEventListener('click', botAction)  
    
    //bot action 
