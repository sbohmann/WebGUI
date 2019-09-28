const upButtonImage = 'up.png'
const activeUpButtonImage = 'up_active.png'
const downButtonImage = 'down.png'
const activeDownButtonImage = 'down_active.png'

export class UpvoteControl {
    constructor() {
        this.createUi()
        this.connectBehavior()
        this.updateUi()
    }

    createUi() {
        this.createMainElement()
        this.createUpButton()
        this.createValueLabel()
        this.createDownButton()
        this.setLayoutStyles()
    }

    createMainElement() {
        this.mainElement = document.createElement('div')
    }

    createUpButton() {
        this.upButton = document.createElement('a')
        this.upButtonImage = this.createImage('up.png')
        this.upButton.appendChild(this.upButtonImage)
        this.mainElement.appendChild(this.upButton)
    }

    createValueLabel() {
        this.valueLabel = document.createElement('div')
        this.valueLabel.classList.add('valueLabel')
        this.mainElement.appendChild(this.valueLabel)
    }

    createDownButton() {
        this.downButton = document.createElement('a')
        this.downButtonImage = this.createImage('down.png')
        this.downButton.appendChild(this.downButtonImage)
        this.mainElement.appendChild(this.downButton)
    }

    createImage(filename) {
        let result = document.createElement('img')
        result.src = filename
        return result
    }

    setLayoutStyles() {
        this.mainElement.style.width = '80px'
        for (let element of [this.upButtonImage, this.valueLabel, this.downButtonImage]) {
            element.style.width = '100%'
            element.style.margin = 'auto'
            element.style.padding = '0'
            element.style.textAlign = 'center'
        }
    }

    connectBehavior() {
        this.value = 0
        this.score = 0
        this.upButton.onclick = () => this.up()
        this.downButton.onclick = () => this.down()
    }

    up() {
        this.setVote(this.value < 1 ? 1 : 0)
    }

    down() {
        this.setVote(this.value > -1 ? -1 : 0)
    }

    setVote(newValue) {
        let oldValue = this.value
        this.value = newValue
        this.score += this.value - oldValue
        this.updateUi()
    }

    updateUi() {
        this.valueLabel.textContent = this.score.toString()
        if (this.value > 0) {
            this.valueLabel.classList.add('up')
            this.valueLabel.classList.remove('down')
            this.upButtonImage.src = activeUpButtonImage
            this.downButtonImage.src = downButtonImage
        } else if (this.value < 0) {
            this.valueLabel.classList.remove('up')
            this.valueLabel.classList.add('down')
            this.upButtonImage.src = upButtonImage
            this.downButtonImage.src = activeDownButtonImage
        } else {
            this.valueLabel.classList.remove('up')
            this.valueLabel.classList.remove('down')
            this.upButtonImage.src = upButtonImage
            this.downButtonImage.src = downButtonImage
        }
    }
}
