window.onload = () => new Punch()

class Punch {
    constructor() {
        this._fetchElements()
        this._setupState()
        this._setupListeners()
    }

    _setupState() {
        // TODO initialize from data
        this._running = false
        this._pastTimes = []
        this._showState()
    }

    _fetchElements() {
        this._punchButton = document.getElementById('punchButton')
        this._exportButton = document.getElementById('exportButton')
        this._currentTimeView = document.getElementById('currentTime')
        this._pastTimesView = document.getElementById('pastTimes')
    }

    _setupListeners() {
        this._punchButton.onclick = () => {
            this._running ? this._stop() : this._start()
        }
        this._exportButton.onclick = () => {
            console.log('exporting')
            console.log(this._pastTimes)
        }
    }

    _start() {
        this._running = true
        this._currentStartTime = new Date()
        this._showRunningState()
        this._currentTimeInterval = setInterval(() => this._showCurrentTime(), 1000)
        this._showCurrentTime()
    }

    _stop() {
        let stopTime = new Date()
        this._running = false
        clearInterval(this._currentTimeInterval)
        this._currentTimeInterval = null
        this._showStoppedState()
        let timeEntry = {
            start: this._currentStartTime.toISOString(),
            stop: stopTime.toISOString()
        };
        this._pastTimes.push(timeEntry)
        let listItem = document.createElement('li')
        listItem.textContent = timeEntry.start + ' - ' + timeEntry.stop
        this._pastTimesView.insertAdjacentElement('afterbegin', listItem)
    }

    _showState() {
        this._running ? this._showRunningState() : this._showStoppedState()
    }

    _showRunningState() {
        this._punchButton.classList.add('active')
        this._punchButton.textContent = 'Stop'
        this._currentTimeView.classList.add('active')
    }

    _showStoppedState() {
        this._punchButton.classList.remove('active')
        this._punchButton.textContent = 'Start'
        this._currentTimeView.classList.remove('active')
        this._currentTimeView.textContent = '00:00:00'
    }

    _showCurrentTime() {
        this._currentTimeView.textContent = this._timeToString(new Date() - this._currentStartTime)
    }

    _timeToString(milliseconds) {
        let seconds = Math.round(milliseconds / 1000)
        let minutes = Math.trunc(seconds / 60)
        seconds %= 60
        let hours = Math.trunc(minutes / 60)
        minutes %= 60
        return this._formatTime(hours, minutes, seconds)
    }

    _formatTime(hours, minutes, seconds) {
        return this._twoDigits(hours) + ':' + this._twoDigits(minutes) + ':' + this._twoDigits(seconds)
    }

    _twoDigits(value) {
        if (value < 10) {
            return '0' + value
        } else {
            return value
        }
    }
}
