const first_box = document.getElementById("first-box")
const second_box = document.getElementById("second-box")
const third_box = document.getElementById("third-box")
const fourth_box = document.getElementById("fourth-box")
const fifth_box = document.getElementById("fifth-box")

const tallyBoxes=(mycards)=>{
  let tally_box1=0
  let tally_box2=0
  let tally_box3=0
  let tally_box4=0
  let tally_box5=0
  for(let i=0;i<mycards.length;i++){
    for(let j=0;j<=5;j++){
      if(mycards[i]['box']==j){
        switch (mycards[i]['box']){
          case 1: 
            tally_box1+=1
            break
          case 2: 
            tally_box2+=1 
            break
          case 3: 
            tally_box3+=1
            break
          case 4: 
            tally_box4+=1 
            break
          case 5: 
            tally_box5+=1
            break
        }
      }
    }
  }

  first_box.innerHTML += `<span id="span-first-box"></span>`
  second_box.innerHTML += `<span id="span-second-box"></span>`
  third_box.innerHTML += `<span id="span-third-box"></span>`
  fourth_box.innerHTML += `<span id="span-fourth-box"></span>`
  fifth_box.innerHTML += `<span id="span-fifth-box"></span>`

  const span_first_box=document.getElementById("span-first-box")
  const span_second_box=document.getElementById("span-second-box")
  const span_third_box=document.getElementById("span-third-box")
  const span_fourth_box=document.getElementById("span-fourth-box")
  const span_fifth_box=document.getElementById("span-fifth-box")

  span_first_box.style.color="black"
  span_first_box.style.backgroundColor="yellow"
  span_first_box.innerHTML=`${tally_box1}`

  span_second_box.style.color="black"
  span_second_box.style.backgroundColor="yellow"
  span_second_box.innerHTML=`${tally_box2}`

  span_third_box.style.color="black"
  span_third_box.style.backgroundColor="yellow"
  span_third_box.innerHTML=`${tally_box3}`

  span_fourth_box.style.color="black"
  span_fourth_box.style.backgroundColor="yellow"
  span_fourth_box.innerHTML=`${tally_box4}`

  span_fifth_box.style.color="black"
  span_fifth_box.style.backgroundColor="yellow"
  span_fifth_box.innerHTML=`${tally_box5}`

  


  

}

  