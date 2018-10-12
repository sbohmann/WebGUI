window.onload = () => new Punch()

class Punch {
    constructor() {
        this._fetchElements()
        this._setupState()
        this._setupListeners()
    }

    _setupState() {
        let storedState = window.localStorage.getItem('state')
        if (storedState != null) {
            let state = JSON.parse(storedState)
            this._running = this._orElse(state.running, false)
            this._pastTimes = this._orElse(state.pastTimes, [])
            this._currentStartTime = this._readDate(this._orElse(state.currentStartTime, ""))
        } else {
            this._running = false
            this._pastTimes = []
            this._currentStartTime = null
        }
        this._lastSaveTime = null
        this._showState()
        if (this._currentStartTime != null) {
            setTimeout(() => {
                this._currentTimeInterval = setInterval(() => this._showCurrentTime(), 1000)
            }, this.initialDelay())
            this._showCurrentTime()
        }
        this._pastTimes.forEach(timeEntry => {
            let listItem = this.createPastTimeListItem(timeEntry);
            this._pastTimesView.appendChild(listItem)
        })
    }
    
    _orElse(value, fallbackValue) {
        return value !== undefined ? value : fallbackValue
    }

    initialDelay() {
        return (1000 + this._currentStartTime.getUTCMilliseconds() - new Date().getUTCMilliseconds()) % 1000 
    }
    
    _readDate(text) {
        if (text === "") {
            return null
        } else {
            return new Date(text)
        }
    }

    _fetchElements() {
        this._punchButton = document.getElementById('punchButton')
        this._exportLink = document.getElementById('exportLink')
        this._currentTimeView = document.getElementById('currentTimeView')
        this._pastTimesView = document.getElementById('pastTimesView')
    }

    _setupListeners() {
        this._punchButton.onclick = () => {
            this._running ? this._stop() : this._start()
        }
        this._exportLink.onclick = () => {
            console.log('exporting')
            console.log(this._pastTimes)
            let csv = 'start;stop\n'
            this._pastTimes.forEach(time => {
                csv += time.start + ';' +
                    time.stop + '\n'
            })
            let blob = new Blob([csv], { type: 'text/csv' })
            let url = URL.createObjectURL(blob)
            this._exportLink.href = url
            // TODO revoke Object url? when?
        }
    }

    _start() {
        this._running = true
        this._currentStartTime = new Date()
        this._saveState()
        this._showRunningState()
        this._currentTimeInterval = setInterval(() => this._showCurrentTime(), 1000)
        this._showCurrentTime()
    }

    _stop() {
        let stopTime = new Date()
        this._running = false
        this._currentStartTime = null;
        clearInterval(this._currentTimeInterval)
        this._currentTimeInterval = null
        let timeEntry = {
            start: this._currentStartTime.toISOString(),
            stop: stopTime.toISOString()
        };
        this._pastTimes.push(timeEntry)
        this._saveState()
        this._showStoppedState()
        let listItem = this.createPastTimeListItem(timeEntry);
        this._pastTimesView.insertAdjacentElement('afterbegin', listItem)
    }

    createPastTimeListItem(timeEntry) {
        let listItem = document.createElement('li')
        listItem.textContent = timeEntry.start + ' - ' + timeEntry.stop
        return listItem;
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
        let now = new Date();
        this._currentTimeView.textContent = this._timeToString(now - this._currentStartTime)
        if (this._lastSaveTime == null || now - this._lastSaveTime > 10 * 1000) {
            this._saveState()
        }
    }

    _timeToString(milliseconds) {
        let seconds = Math.trunc((milliseconds + 100) / 1000)
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

    _saveState() {
        this._lastSaveTime = new Date()
        let state = JSON.stringify({
            pastTimes: this._pastTimes,
            running: this._running,
            currentStartTime: this._running ? this._currentStartTime.toISOString() : ""
        })
        window.localStorage.setItem('state', state)
        console.log(state)
    }
}
