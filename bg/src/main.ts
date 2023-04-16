import './style.css'
import hex from "./data/hex"

console.log("hello color generator");

// selecting Element from the DOM

const colorBox =<HTMLDivElement>document.querySelector(".color--box")
const colorSelectors =<HTMLDivElement> document.querySelector(".color__selector")

console.log(colorBox);


const colorpickers =  colorSelectors.querySelectorAll("div")



function getRandomHexValue(): string | number{
    return hex[Math.floor(Math.random()*hex.length)]
}

function pickColor():string {
    let  colorLenght = 8
   let colorToDisplay =""
    while (colorLenght !== 0) {
        colorToDisplay += getRandomHexValue()
        colorLenght--
    }
    colorBox.dataset!.color = `#${colorToDisplay}`
    
    
    return colorToDisplay
    
}

colorBox.style.setProperty("background-color", `#${pickColor()}`)




colorpickers.forEach(picker => {
    picker.innerText = `#${pickColor()}`
    picker.addEventListener("click", () => {
        if (picker.innerText === colorBox.dataset!.color) {
            const isTrue = document.createElement("img")
            isTrue.src = "./src/assets/icons/checked.png"
            isTrue.width =20
            picker.append(isTrue)
        }       
        
        if (picker.innerText !== colorBox.dataset.color) {
            const isTrue = document.createElement("img")
            isTrue.src = "./src/assets/icons/cross.png"
            isTrue.width =20
            picker.append(isTrue)
            console.log("this is not true color");
            
        }
    })

})



export {}