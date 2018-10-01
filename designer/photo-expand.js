window.onload = setup

function setup() {
    const statusParagraph = document.getElementById("statusView")
    const uploadInput = document.getElementById("imageUpload")

    statusParagraph.textContent =
        window.File && window.FileReader && window.FileList && window.Blob
            ? 'File APIs supported by browser'
            : 'File APIs not fully supported by browser'

    function fileSelected(event) {
        const files = event.target.files

        // files is a FileList of File objects. List some properties.
        const output = []
        let firstFile = null
        for (file of files) {
            output.push(file.name + ' { type: ' + (file.type || 'n/a') +
                ', size: ' + file.size + ' bytes' +
                ', last modified: ' + (file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a') +
                ' }')
            if (firstFile == null) {
                firstFile = file
            }
        }
        console.log(output.join('\n'))

        if (firstFile != null) {
            const reader = new FileReader()
            reader.onload = data => {
                console.log(data)
            }
            reader.readAsArrayBuffer(file)
        }
    }

    uploadInput.addEventListener('change', fileSelected, false)
}
