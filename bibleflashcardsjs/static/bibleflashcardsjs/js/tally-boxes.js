const firstBox = document.getElementById("first-box")
const secondBox = document.getElementById("second-box")
const thirdBox = document.getElementById("third-box")
const fourthBox = document.getElementById("fourth-box")
const fifthBox = document.getElementById("fifth-box")

const tallyBoxes=(mycards)=>{
  let tallyBox1=0
  let tallyBox2=0
  let tallyBox3=0
  let tallyBox4=0
  let tallyBox5=0
  for(let i=0;i<mycards.length;i++){
    for(let j=0;j<=5;j++){
      if(mycards[i]['box']==j){
        switch (mycards[i]['box']){
          case 1: 
            tallyBox1+=1
            break
          case 2: 
            tallyBox2+=1 
            break
          case 3: 
            tallyBox3+=1
            break
          case 4: 
            tallyBox4+=1 
            break
          case 5: 
            tallyBox5+=1
            break
        }
      }
    }
  }

  firstBox.innerHTML += `<span id="span-first-box"></span>`
  secondBox.innerHTML += `<span id="span-second-box"></span>`
  thirdBox.innerHTML += `<span id="span-third-box"></span>`
  fourthBox.innerHTML += `<span id="span-fourth-box"></span>`
  fifthBox.innerHTML += `<span id="span-fifth-box"></span>`

  const spanFirstBox=document.getElementById("span-first-box")
  const spanSecondBox=document.getElementById("span-second-box")
  const spanThirdBox=document.getElementById("span-third-box")
  const spanFourthBox=document.getElementById("span-fourth-box")
  const spanFifthBox=document.getElementById("span-fifth-box")

  spanFirstBox.style.color="black"
  spanFirstBox.style.backgroundColor="yellow"
  spanFirstBox.innerHTML=` ${tallyBox1})`

  spanSecondBox.style.color="black"
  spanSecondBox.style.backgroundColor="yellow"
  spanSecondBox.innerHTML=` ${tallyBox2})`

  spanThirdBox.style.color="black"
  spanThirdBox.style.backgroundColor="yellow"
  spanThirdBox.innerHTML=` ${tallyBox3})`

  spanFourthBox.style.color="black"
  spanFourthBox.style.backgroundColor="yellow"
  spanFourthBox.innerHTML=` ${tallyBox4})`

  spanFifthBox.style.color="black"
  spanFifthBox.style.backgroundColor="yellow"
  spanFifthBox.innerHTML=` ${tallyBox5})`
 }