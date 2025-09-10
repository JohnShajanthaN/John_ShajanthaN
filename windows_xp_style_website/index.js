function commandprompt()
{
   
 var a=document.getElementById("console");  
           
 var b=document.getElementById("mincmd");
  
 var c=document.getElementById("cmdhead");  
           
 var e=document.getElementById("cmdbody0");
  
 var d=document.getElementById("cmdbody");
          
  
  var f=d.addEventListener("keyup",function(event)
  {

      
      if(event.keyCode===13)
      {
        event.preventDefault();
        

        var str=d.value;
        
        var l=str.length;
       
        var i=str.indexOf(" ");
          
        var lword=str.substring(0,i);
          
          
        var rword=str.substring((i+1),(l-1));
    
        
        if(lword==("title"))
        {
            c.innerText=rword;
            
        }
        
        else if(lword==("color"))
       
        {
        
        if(rword==("black"))
        {
           
           d.style.background=rword;
           e.style.background=rword;
            
           d.style.color="white";
           e.style.color="white";
            
        }
        
         else if(rword==("green"))
        {
           
           d.style.background=rword;
           e.style.background=rword;
            
           d.style.color="black";
           e.style.color="black";
            
        }
        
        else if(rword==("white"))
        {
           
           d.style.background=rword;
           e.style.background=rword;
            
           d.style.color="black";
           e.style.color="black";
            
        }
        
        else
        {
           d.style.background=rword;
           e.style.background=rword;
        }
    
    
        }
        
       else if(lword==("exit"))
       {
 
           a.style.display="none";
           d.value="";
           
       }
    
     
       else
       {
          alert("Invalid Input !!");
       }
       
        
      }
      
      else
      
     {
         
         
     }
      
   
   }   
 
  );
  
}


        function minimize()
        {
         var a=document.getElementById("controlpanel");  
         var b=document.getElementById("wxpuser");  
         
         a.style.display="none";
         b.style.display="block";
        }
        
        
        function maximize()
        {
            
         var a=document.getElementById("controlpanel");  
         var b=document.getElementById("wxpuser");  
         
         a.style.display="block";
         b.style.display="none";

        }
        

 
        function exit()
        {
            
        /*
          var b=document.getElementById("console");  
           
          var d=document.getElementById("mincmd");   
          var e=document.getElementById("cmdbody");
            
           var c=document.getElementById("cmdhead");             
    
           
           b.style.display="none";
           d.style.display="none";
           e.value="";
           c.value="John Shajanthan";
          */
          
        var a=document.getElementById("controlpanel");  
           
         a.style.display="none";
        }
        
        
        function searchopen()
        {
          var a = document.getElementsByClassName("gcse-search");
          
          if(a.style.display=="none")
          {
              a.style.display="block";
          }
          else
          {
              a.style.diwxosplay="none";
          }
          
          // var x = document.getElementsByClassName("gcse-search");
          // x.style.display="block";
        }
        
        
        function show_sidebar()
        {
        document.getElementById('icond').style.display="none";
        document.getElementById('navtop').style.display="block";
        }
        
        
        /*
        
        function showeg()
        {
        document.getElementById('elfsight-app-745b213d-726c-4520-955e-6d15ab8cbbc4').style.display="block";
        }
        
        function hideeg()
        {
        document.getElementById('elfsight-app-745b213d-726c-4520-955e-6d15ab8cbbc4').style.display="none";
        }
        
        
        function hideall()
        {
        
        var a=document.getElementById
           ("navtop");
           
        var z=document.getElementById("wxulsty");
        
        var b=document.getElementById("navlist1");
        
        var d=document.getElementById("navlist2");
        
        var e=document.getElementById("navlist3");
        
        var f=document.getElementById("navlist4");
                     
        var c=document.getElementById("icond");
             
           c.style.display="block";
           a.style.display="none";
           
           b.style.display="none";
           d.style.display="none";
           e.style.display="none";
           f.style.display="none";
           z.style.display="none";
          
        }
        
        */
        

        
        function hide_sidebar()
        {
        
        var a=document.getElementById("navtop");
           
        var b=document.getElementById("icond");
                     
        var c=document.getElementById("navlist1");
        
        var d=document.getElementById("navlist2");
         
        var e=document.getElementById("navlist3");
          
        var f=document.getElementById("navlist4");
           
           a.style.display="none";
           b.style.display="block";
           c.style.display="none";
           d.style.display="none";
           e.style.display="none";
           f.style.display="none";
        }
        

 

function hide_sidebar1()
{
    
if(document.getElementById("navlist1").style.display=="none")
{
document.getElementById("navlist1").style.display="block";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}
else
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}

}

function hide_sidebar2()
{
    
if(document.getElementById("navlist2").style.display=="none")
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="block";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}
else
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}

}

function hide_sidebar3()
{
    
if(document.getElementById("navlist3").style.display=="none")
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="block";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}
else
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}

}

function hide_sidebar4()
{
    
if(document.getElementById("navlist4").style.display=="none")
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="block";
document.getElementById("navlist5").style.display="none";
}
else
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}

}


function hide_sidebar5()
{
    
if(document.getElementById("navlist5").style.display=="none")
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="block";
}
else
{
document.getElementById("navlist1").style.display="none";
document.getElementById("navlist2").style.display="none";
document.getElementById("navlist3").style.display="none";
document.getElementById("navlist4").style.display="none";
document.getElementById("navlist5").style.display="none";
}

}


function radiogarden()
{
   if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="http://radio.garden/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";


    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="http://radio.garden/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
}


function internetlivestats()
{
    if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.internetlivestats.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.internetlivestats.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }

}


function flightradar24()
{
    if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.flightradar24.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.flightradar24.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}



function photopea()
{
    
    if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.photopea.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.photopea.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}

function 10minutemail()
{
    
    if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://10minutemail.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://10minutemail.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}


function reelgood()
{
    
     if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://reelgood.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://reelgood.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function giphy()
{
    
     if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://giphy.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://giphy.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }

}

function cloudhq()
{
    
     if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.cloudhq.net/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.cloudhq.net/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }

}

function mailtrack()  
{
    
     if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://mailtrack.io/en/?redirect=0";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://mailtrack.io/en/?redirect=0";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function keep()
{
    
    if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://keep.google.com/u/0/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://keep.google.com/u/0/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function faxzero()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://faxzero.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://faxzero.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}

function oceansofgamess()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://oceansofgamess.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://oceansofgamess.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function zerodollarmovies()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="http://zerodollarmovies.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="http://zerodollarmovies.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}
    
function geekprank()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://geekprank.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://geekprank.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}
    
function yandex()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://yandex.com/images/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://yandex.com/images/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}
    
function tineye()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://tineye.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://tineye.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}
    
function labnol()   
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.labnol.org/reverse/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.labnol.org/reverse/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}

function prepostseo()  
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.prepostseo.com/reverse-image-search";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.prepostseo.com/reverse-image-search";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";a
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function haveibeenpwned()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://haveibeenpwned.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://haveibeenpwned.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function prepostseo()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.prepostseo.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.prepostseo.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function printfriendly()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.printfriendly.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.printfriendly.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}
    
function squarespace()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.squarespace.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.squarespace.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function wix()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.wix.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.wix.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function weebly()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.weebly.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.weebly.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function wordpress()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://wordpress.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://wordpress.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function godaddy()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://in.godaddy.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://in.godaddy.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}
    
function bluehost()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.bluehost.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.bluehost.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function hostinger()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.hostinger.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.hostinger.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function freepdfconvert()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.freepdfconvert.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.freepdfconvert.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function adobe() 
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.adobe.com/acrobat/online/compress-pdf.html";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.adobe.com/acrobat/online/compress-pdf.html";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function pdftoword()    
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.pdftoword.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.pdftoword.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

function smallpdf()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://smallpdf.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value=""https://smallpdf.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}

function ilovepdf()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.ilovepdf.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.ilovepdf.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}
    
function online2pdf()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://online2pdf.com/";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://online2pdf.com/";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
   
}

function pdf2go()
{
    
      if( document.getElementsByClassName('gsc-input')[2].value=="" )
   {
       
    document.getElementsByClassName('gsc-input')[2].value="https://www.pdf2go.com/compress-pdf";
    
    document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
    
   }
   else
   {
       document.getElementsByClassName('gsc-input')[2].value="";
       document.getElementsByClassName('gsc-input')[2].value="https://www.pdf2go.com/compress-pdf";
       
       document.getElementById("navlist1").style.display="none";
    document.getElementById("navlist2").style.display="none";
    document.getElementById("navlist3").style.display="none";
    document.getElementById("navlist4").style.display="none";
    document.getElementById("navlist5").style.display="none";
    document.getElementById("navtop").style.display="none";
    document.getElementById("icond").style.display="block";
   }
    
}

*/

        function cmdopen()
        {
          var a=document.getElementById("navtop");  
                     
         // var b=document.getElementById
           ("console");  
           
          var p=document.getElementById("icond");
             
         // var e=document.getElementById("cmdbody");
            
         // var f=document.getElementById("cmdbody0");
                           

         //  e.style.background="black";
         //  f.style.background="black";
         //  e.style.color="green";
         //  f.style.color="green";
             
             
           p.style.display="block";
         //  b.style.display="block";
           a.style.display="none";
           
        }
        
  
        function showddm()
        {
            
           var a=document.getElementById("navtop");   
           
           var b=document.getElementById("icond");
        
           a.style.display="block";
           b.style.display="none";
           
          }
          
          
        function start()
        {
            
           var b=document.getElementById("mainscreen");   
           
           var d=document.getElementById("login");
 
          var f=document.getElementById("startmenu");  
  
 b.style.display="none";
 d.style.display="none";
 f.style.display="none";
 document.body.style.background="black";
            
        }
        
        
        function guestlogin()
        {
            
             var a=document.getElementById("mainscreen");   
 
             var b=document.getElementById("startmenu");
        
             var d=document.getElementById("login");   
           
             var e=document.getElementById("ulsty");
  
             var f=document.getElementById("xulsty");
             
             var g=document.getElementById("icond");
             
             var h=document.getElementsByClassName("gcse-search");
             
             var j=document.getElementById("navbar");
             
             var k=document.getElementById("desktopicons");
             
    
            a.style.display="block"; 
            b.style.display="none";     
            e.style.display="block"; 
            f.style.display="none"; 
            g.style.display="block"; 
            h.style.display="block"; 
            j.style.display="block"; 
            k.style.display="block"; 
            d.style.display="none"; 
        }
        
        
        function adminlogin()
        {
            
           /*
        
          var b=document.getElementById("adminpass");   
           
          var c=document.getElementsByClassName("switchlabel");
 
          var d=document.getElementById("switchuser");
          
          var a=document.getElementById("switchpass");  
      
            b.style.display="block"; 
            a.style.display="none";     
            d.style.display="none"; 
            c.style.display="block"; 
            
            */
            
 
             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var x=document.getElementById("w7login");
              
             var y=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             
             
             var n=document.getElementById("adminpass");
             
             var o=document.getElementById("switchlabel");
             
             var p=document.getElementById("switchuser");
             
             var q=document.getElementById("switchpass");
             
             
             var n1=document.getElementById("adminpasswx");
             
             var o1=document.getElementById("switchlabelwx");
             
             var p1=document.getElementById("switchuserwx");
             
             var q1=document.getElementById("switchpasswx");
             
             
             var n2=document.getElementById("adminpassw7");
             
             var o2=document.getElementById("switchlabelw7");
             
             var p2=document.getElementById("switchuserw7");
             
             var q2=document.getElementById("switchpassw7");
             
             /*
             n.style.display="block";
             o.style.display="block";
             p.style.display="none";
             q.style.display="none";
             */
             
                 n.style.display="block";
                 q.style.display="none";
                 p.style.display="none";
                 o.style.display="block";
                 
                 n1.style.display="block";
                 q1.style.display="none";
                 p1.style.display="none";
                 o1.style.display="block";
                 
                 n2.style.display="block";
                 q2.style.display="none";
                 p2.style.display="none";
                 o2.style.display="block";
                 
        
        /*
        if( n.style.display==="block" )
        {
        */
        n.addEventListener("keyup",function(event) 
        {
 
         if (event.keyCode===13) 
         {
             
              if(n.value==="Admin@John.lk")
        {
            
           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="block"; 
           k.style.display="none"; 
           w.style.display="block";
           x.style.display="none"; 
           y.style.display="none"; 
           
        }
        
        else
        {
            n.type="text";
            n.value="Incorrect Password !!";
            
            n.addEventListener("click",function() 
            {
                 n.type="password";
                 n.value="";
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        
        
         n1.addEventListener("keyup",function(event) 
        {
 
         if (event.keyCode===13) 
         {
             
              if(n1.value==="Admin@John.lk")
        {
            
           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="none"; 
           k.style.display="block"; 
           w.style.display="block";
           x.style.display="none"; 
           y.style.display="none"; 
           
        }
        
        else
        {
            n1.type="text";
            n1.value="Incorrect Password !!";
            
            n1.addEventListener("click",function() 
            {
                 n1.type="password";
                 n1.value="";
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        
        
         n2.addEventListener("keyup",function(event) 
        {
 
         if (event.keyCode===13) 
         {
             
              if(n2.value==="Admin@John.lk")
        {
            
           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="block"; 
           k.style.display="none"; 
           w.style.display="block";
           x.style.display="none"; 
           y.style.display="none"; 
           
        }
        
        else
        {
            n3.type="text";
            n3.value="Incorrect Password !!";
            
            n3.addEventListener("click",function() 
            {
                 n3.type="password";
                 n3.value="";
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        }
       
        
        function switchlogin()
        {
        
        /*
        
          var b=document.getElementById("adminpass");   
           
          var c=document.getElementById("switchlabel");
 
          var d=document.getElementById("switchuser");
          
          var a=document.getElementById("switchpass");  
          
  
            b.style.display="none";     
            d.style.display="block"; 
            a.style.display="block";     
            c.style.display="none";  
            
        */
            
             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var x=document.getElementById("w7login");
              
             var y=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             
             
             var n=document.getElementById("adminpass");
             
             var o=document.getElementById("switchlabel");
             
             var p=document.getElementById("switchuser");
             
             var q=document.getElementById("switchpass");
             
             
             var n1=document.getElementById("adminpasswx");
             
             var o1=document.getElementById("switchlabelwx");
             
             var p1=document.getElementById("switchuserwx");
             
             var q1=document.getElementById("switchpasswx");
             
             
             var n2=document.getElementById("adminpassw7");
             
             var o2=document.getElementById("switchlabelw7");
             
             var p2=document.getElementById("switchuserw7");
             
             var q2=document.getElementById("switchpassw7");
             
             /*
             n.style.display="block";
             o.style.display="block";
             p.style.display="none";
             q.style.display="none";
             */
             
                 n.style.display="none";
                 q.style.display="block";
                 p.style.display="block";
                 o.style.display="none";
                 
                 n1.style.display="none";
                 q1.style.display="block";
                 p1.style.display="block";
                 o1.style.display="none";
                 
                 n2.style.display="none";
                 q2.style.display="block";
                 p2.style.display="block";
                 o2.style.display="none";
                 
    
                 
    
        /*
        if( n.style.display==="block" )
        {
        */
        
        /*
        
        n.addEventListener("keyup",function(event) 
        {
 
         if (event.keyCode===13) 
         {
             
              if(n.value==="Admin@John.lk")
        {
            
           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="block"; 
           k.style.display="none"; 
           w.style.display="block";
           x.style.display="none"; 
           y.style.display="none"; 
           
        }
        
        else
        {
            n.type="text";
            n.value="Incorrect Password !!";
            
            n.addEventListener("click",function() 
            {
                 n.type="password";
                 n.value="";
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        
        
         n1.addEventListener("keyup",function(event) 
        {
 
         if (event.keyCode===13) 
         {
             
              if(n1.value==="Admin@John.lk")
        {
            
           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="none"; 
           k.style.display="block"; 
           w.style.display="block";
           x.style.display="none"; 
           y.style.display="none"; 
           
        }
        
        else
        {
            n1.type="text";
            n1.value="Incorrect Password !!";
            
            n1.addEventListener("click",function() 
            {
                 n1.type="password";
                 n1.value="";
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        
        
         n2.addEventListener("keyup",function(event) 
        {
 
         if (event.keyCode===13) 
         {
             
              if(n2.value==="Admin@John.lk")
        {
            
           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="block"; 
           k.style.display="none"; 
           w.style.display="block";
           x.style.display="none"; 
           y.style.display="none"; 
           
        }
        
        else
        {
            n3.type="text";
            n3.value="Incorrect Password !!";
            
            n3.addEventListener("click",function() 
            {
                 n3.type="password";
                 n3.value="";
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        
        */
        
        }
        
        
        function next()
        {
          // var a=document.getElementById("btn");
           
          var b=document.getElementById("mainscreen");   
           
          var d=document.getElementById("login");
 
          var f=document.getElementById("startmenu");
          

        d.style.display="block";     
        b.style.display="none";  
        f.style.display="none"; 
        }
        
        
        function wxpnext()
        {
       
            var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var n=document.getElementById("w7login");
             
             var o=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
          
        a.style.display="block";     
        c.style.display="none";  
        f.style.display="none"; 
        g.style.display="none"; 
        h.style.display="none"; 
        i.style.display="none"; 
        k.style.display="none"; 
        l.style.display="none"; 
        m.style.display="block"; 
        n.style.display="none"; 
        o.style.display="none"; 
        w.style.display="none"; 
        
        }
        
        function w7next()
        {
       
          var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var n=document.getElementById("w7login");
             
             var o=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
          
        a.style.display="block";     
        c.style.display="none";  
        f.style.display="none"; 
        g.style.display="none"; 
        h.style.display="none"; 
        i.style.display="none"; 
        k.style.display="none"; 
        l.style.display="none"; 
        m.style.display="block"; 
        n.style.display="none"; 
        o.style.display="none"; 
        w.style.display="none"; 
        
        }
        
        function wxnext()
        {
            var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var n=document.getElementById("w7login");
             
             var o=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
          
        a.style.display="block";     
        c.style.display="none";  
        f.style.display="none"; 
        g.style.display="none"; 
        h.style.display="none"; 
        i.style.display="none"; 
        k.style.display="none"; 
        l.style.display="none"; 
        m.style.display="none"; 
        n.style.display="none"; 
        o.style.display="block"; 
        w.style.display="none"; 
        
        }
        
        
        
        function windowsxpload()
        {
         
             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var n=document.getElementById("w7login");
             
             var o=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             
             
           a.style.display="block";  
           
           document.body.style.backgroundImage="url('Windowsxpb.jpg')";
           document.body.style.setAttribute=("height","100%");
           document.body.style.setAttribute=("background-position","center");
          // document.body.style.setAttribute=("background-repeat","no-repeat");
           document.body.style.setAttribute=("background-size","cover");
           
           
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="block"; 
           k.style.display="none"; 
           w.style.display="block";
           
           m.style.display="none"; 
           n.style.display="none"; 
           o.style.display="none"; 
           
        }
        
        /*
        function windows7load()
        {
             var a=document.getElementById("mainscreen");   
           
             var b=document.getElementById("wxplogin");
             
             var m=document.getElementById("w7login");
             
             var n=document.getElementById("wxlogin");
 
             var c=document.getElementById("startmenu");
        
             var e=document.getElementById("adminpass");  
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var j=document.getElementsByClassName("gcse-search");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
  
           a.style.display="block";  
           b.style.display="none"; 
           m.style.display="none"; 
           n.style.display="block"; 
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="block"; 
           i.style.display="block";
           j.style.display="block"; 
           k.style.display="block"; 
           l.style.display="none"; 
        }
        */
        
        
        function windowsxload()
        {
              var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var n=document.getElementById("w7login");
             
             var o=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             
             
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="block";
           l.style.display="none"; 
           k.style.display="block"; 
           w.style.display="block";
           
           m.style.display="none"; 
           n.style.display="none"; 
           o.style.display="none"; 
        }
        
        function wxpadminlogin()
        {
             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
        
             var e=document.getElementById("adminpass");  
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var j=document.getElementsByClassName("gcse-search");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("wxplogin");
             
             var n=document.getElementById("wxpadminpass");
             
             var o=document.getElementsByClassName("wxpswitchlabel");
             
             var p=document.getElementById("wxpswitchuser");
             
             var q=document.getElementById("wxpswitchpass");
             
             /*
             n.style.display="block";
             o.style.display="block";
             p.style.display="none";
             q.style.display="none";
             */
             
             if( n.style.display==="none" )
             {
                 p.style.display="none";
                 q.style.display="none";
                 o.style.display="block";
                 n.style.display="block";
             }
             
             else if( n.style.display==="block" )
             {
                 n.style.display="none";
                 o.style.display="block";
                 p.style.display="none";
                 q.style.display="none";
             }
             
             else
             {
                 
             }
             

             n.addEventListener("keyup", function(event) 
        {
 
         if (event.keyCode === 13) 
         {
             
              if(n.value==="Admin@John.lk")
        {
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="block"; 
           h.style.display="none"; 
           i.style.display="block";
           j.style.display="block"; 
           k.style.display="none"; 
           l.style.display="block"; 
           m.style.display="none"; 
        }
        
        else
        {
            n.type="text";
            n.value="Incorrect Password !!";
            
            n.addEventListener("click",function() 
            {
                 e.type="password";
                 e.value="";
                
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
                
            
        }
        
        
        function wxpswitchlogin()
        {

             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var j=document.getElementsByClassName("gcse-search");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("wxplogin");
             
             var n=document.getElementById("wxpadminpass");
             
             var o=document.getElementsByClassName("wxpswitchlabel");
             
             var p=document.getElementById("wxpswitchuser");
             
             var q=document.getElementById("wxpswitchpass");
             
             /*
             n.style.display="block";
             o.style.display="block";
             p.style.display="none";
             q.style.display="none";
             */
             
             if( o.style.display==="none")
             {
                 p.style.display="none";
                 q.style.display="none";
                 o.style.display="block";
                 n.style.display="none";
             }
             
             else if( o.style.display==="block" )
             {
                 n.style.display="none";
                 o.style.display="none";
                 p.style.display="block";
                 q.style.display="block";
             }
             
             else
             {
                 
             }
             
             /*
             
             n.addEventListener("keyup", function(event) 
        {
 
         if (event.keyCode === 13) 
         {
             
              if(n.value==="Admin@John.lk")
        {
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="block";  
           g.style.display="block"; 
           h.style.display="none"; 
           i.style.display="block";
           j.style.display="block"; 
           k.style.display="none"; 
           l.style.display="block"; 
           m.style.display="none"; 
        }
        
        else
        {
            n.type="text";
            n.value="Incorrect Password !!";
            
            n.addEventListener("click",function() 
            {
                 e.type="password";
                 e.value="";
                
            }
            );
        }
        
         }
         
         else
         
         {
             
             
         }
         
        }
        
        );
        
        */
                
            
        }
        
        
        
        
        function w7adminlogin()
        {
            
            
        }
        
        
        function wxadminlogin()
        {
            
            
        }
        
        
        
        
         function show()
        {
            
        var a=document.getElementById("ulsty");
        
        if(a.style.display==="none")
        {
           a.style.display="block";
        }
        
        else
        {
           a.style.display="none";
        }
 
        }
        
        
    function showwx()
    {
        var a=document.getElementById("xulsty");
        
         if(a.style.display=="none")
         {
             a.style.display="block";
         }
         else
         {
             a.style.display="none";
         }
        
    }
        
        
         function visible()
        {
            
            var z=document.getElementById("pass");
var a=document.getElementById("show");
            
            
            if(z.type==="password")
            {
                z.type="text";
                a.value="hide";
            }
        else
        {
            z.type="password";
            a.value="show";
        }
        
        }
        
        
      function login()
       {
        
            var b=document.getElementById("mainscreen");   
           
           var d=document.getElementById("login");
 
          var f=document.getElementById("startmenu");

         var z=document.getElementById("pass"); 
         
        
          
        if(z.value==="Admin@John.lk")
        {
           b.style.display="block";  
           f.style.display="none"; 
           a.style.display="none";
        }
        
        else if(z.value==="")
        {
           a.style.display="inline";
           a.textContent="Type Your Password !!!";
        } 
           
        else
        {
          a.style.display="inline";
          a.textContent="Incorrect Password !!!";
        }
        
        }
        
        function poweroff()
        {
              var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var x=document.getElementById("w7login");
              
             var y=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             

           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="none";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="none";
           l.style.display="none"; 
           k.style.display="none"; 
           w.style.display="none";
           x.style.display="none"; 
           y.style.display="none"; 
            
            var b=document.getElementById("shutdownbox");
            
             b.style.display="block";
             
            var j=document.getElementById("shuttext");
             
             j.innerHTML="Bye-John-Turning-Off";
      
             setTimeout(start,5000);
        /*
        
       var c=document.getElementById("pass");
                
var d=document.getElementById("show");
                     
var f=document.getElementById("signin"); 
               
        
      var m=document.getElementById("mainscreen");   
           
      var 
l=document.getElementById("login");
 
      var 
s=document.getElementById("startmenu");
       var a=document.getElementById("ulsty");

       var n=document.getElementById("navtop");
       
       var b=document.getElementById("iconname1");
       
     var g=document.getElementById("console");



        g.style.display="none";
        c.style.display="none";
        d.style.display="none";
        f.style.display="none";
        m.style.display="none";
        l.style.display="block";
        s.style.display="none";
        a.style.display="none";
        n.style.display="none";
        b.style.display="block";
        b.innerHTML="Bye-John-Turning-Off";
      
        setTimeout(start,5000);
        
        */
    
        
        }
            
            
        function logoff()
        {
            
             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var x=document.getElementById("w7login");
              
             var y=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             

           m.style.display="block"; 
           a.style.display="block";  
           c.style.display="none"; 
           f.style.display="none";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="none";
           l.style.display="none"; 
           k.style.display="none"; 
           w.style.display="none";
           x.style.display="none"; 
           y.style.display="none"; 

      /*
      
       var p=document.getElementById("icond");

      var n=document.getElementById("navtop");   
      var m=document.getElementById("mainscreen");  
      
      var o=document.getElementById("navtop");   
           
      var 
l=document.getElementById("login");
 
      var 
s=document.getElementById("startmenu");
      var z=document.getElementById("pass");   
      
      var a=document.getElementById("ulsty");
      
       var g=document.getElementById("console");

      
        g.style.display="none";
        m.style.display="none";
        l.style.display="block";
        s.style.display="none";
        z.value="";
        a.style.display="none";
        n.style.display="none";
        o.style.display="none";
        p.style.display="block";
        */
        
        }
        
        
        function restart()
        {
            
             var a=document.getElementById("mainscreen");   
 
             var c=document.getElementById("startmenu");
             
             var f=document.getElementById("desktopicons"); 
 
             var g=document.getElementById("ulsty");
  
             var h=document.getElementById("xulsty");
             
             var i=document.getElementById("icond");
             
             var k=document.getElementById("navbar");
             
             var l=document.getElementById("navbarxp");
             
             var m=document.getElementById("login");
             
             var x=document.getElementById("w7login");
              
             var y=document.getElementById("wxlogin");
             
             var w=document.getElementById("___gcse_0");
             

           m.style.display="none"; 
           a.style.display="block";  
           c.style.display="block"; 
           f.style.display="none";  
           g.style.display="none"; 
           h.style.display="none"; 
           i.style.display="none";
           l.style.display="none"; 
           k.style.display="none"; 
           w.style.display="none";
           x.style.display="none"; 
           y.style.display="none"; 
            
        /*
       
       var p=document.getElementById("icond");

      var n=document.getElementById("navtop");   
      var m=document.getElementById("mainscreen");   
           
      var 
l=document.getElementById("login");
 
      var 
s=document.getElementById("startmenu");

var z=document.getElementById("pass");
         
  var a=document.getElementById("ulsty");  
  
 var o=document.getElementById("navtop");   
           
     var g=document.getElementById("console");
       
  
        g.style.display="none";
        o.style.display="none"; 
        n.style.display="none";
        a.style.display="none";
        m.style.display="none";
        l.style.display="none";
        s.style.display="block";
        p.style.display="block";
        
        z.value="";
        
        */
        
        }
        
