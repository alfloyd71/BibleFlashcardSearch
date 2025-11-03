const firstBox = document.getElementById("first-box")
const secondBox = document.getElementById("second-box")
const thirdBox = document.getElementById("third-box")
const fourthBox = document.getElementById("fourth-box")
const fifthBox = document.getElementById("fifth-box")

function tallyBoxes(mycards){
  for(let i=0;i<mycards.length;i++){
    for(let j=0;j<=4;j++){
      if(mycards[i]['box']===j+1){
       if(flashCardGlobalsInstance) flashCardGlobalsInstance.tallyBoxArry[j]+=1 
       else if(editVersesGlobalsInstance) editVersesGlobalsInstance.tallyBoxArry[j]+=1
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
  if(flashCardGlobalsInstance) spanFirstBox.innerHTML=` ${flashCardGlobalsInstance?.tallyBoxArry[0]})`
  else if(editVersesGlobalsInstance) spanFirstBox.innerHTML=` ${editVersesGlobalsInstance?.tallyBoxArry[0]})`

  spanSecondBox.style.color="black"
  spanSecondBox.style.backgroundColor="yellow"
  if(flashCardGlobalsInstance) spanSecondBox.innerHTML=` ${flashCardGlobalsInstance?.tallyBoxArry[1]})`
  else if(editVersesGlobalsInstance) spanSecondBox.innerHTML=` ${editVersesGlobalsInstance?.tallyBoxArry[1]})`

  spanThirdBox.style.color="black"
  spanThirdBox.style.backgroundColor="yellow"
  if(flashCardGlobalsInstance) spanThirdBox.innerHTML=` ${flashCardGlobalsInstance?.tallyBoxArry[2]})`
  else if(editVersesGlobalsInstance) spanThirdBox.innerHTML=` ${editVersesGlobalsInstance?.tallyBoxArry[2]})`

  spanFourthBox.style.color="black"
  spanFourthBox.style.backgroundColor="yellow"
  if(flashCardGlobalsInstance) spanFourthBox.innerHTML=` ${flashCardGlobalsInstance?.tallyBoxArry[3]})`
  else if(editVersesGlobalsInstance) spanFourthBox.innerHTML=` ${editVersesGlobalsInstance?.tallyBoxArry[3]})`

  spanFifthBox.style.color="black"
  spanFifthBox.style.backgroundColor="yellow"
  if(flashCardGlobalsInstance) spanFifthBox.innerHTML=` ${flashCardGlobalsInstance?.tallyBoxArry[4]})`
  else if(editVersesGlobalsInstance) spanFifthBox.innerHTML=` ${editVersesGlobalsInstance?.tallyBoxArry[4]})`
 }