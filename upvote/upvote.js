import {UpvoteControl} from './upvote-control.js'

window.onload = () => {
    console.log('Hi!')
    let control = new UpvoteControl()
    console.log(control.mainElement)
    document.body.appendChild(control.mainElement)
}
