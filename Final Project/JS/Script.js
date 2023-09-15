// define 

var inp = document.getElementById('index');
var notec = document.getElementById('notes')
var todo = document.getElementById('todo');
var check = document.getElementById('choose');
var final = check.value.trim();
var btn = document.getElementById('enter');

// (add) button event
btn.addEventListener("click",()=>{
   if(check.checked){
    // add to do 
        var remove = document.createElement('button');
        var cont = document.createElement('div');
        var done = document.createElement('input');
        var note = document.createElement('textarea');

        remove.innerHTML="&#128465;";
        remove.setAttribute('class','removet');
        
        cont.setAttribute('class','conds');
        cont.style.display="flex";
        
        done.setAttribute('type','checkbox');
        done.setAttribute('class','check');
        
        note.setAttribute('class','dos');
        note.innerHTML=inp.value;

        cont.append(done);
        cont.appendChild(note);
        cont.append(remove);
        inp.value="";
        // check to do event
        done.addEventListener('click',()=>{
            if(done.checked){
                note.style.textDecoration="line-through";
            }else{ note.style.textDecoration="none";}
           
        })

        todo.appendChild(cont);
        remove.addEventListener('click',()=>{
            cont.remove();
        })
        
    }else{
    // add note
        var div = document.createElement('div');
        var note = document.createElement('textarea');
        var remove = document.createElement('button');

        div.setAttribute('class','divs');
        
        remove.innerHTML="&#128465;";
        remove.setAttribute('class','removen');
        
        note.setAttribute('class','nos');
        note.innerHTML=inp.value;
        
        div.appendChild(note);
        div.append(remove);
        notec.append(div);
        inp.value="";
        remove.addEventListener('click',()=>{
            div.remove();
        })
    };
})

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
