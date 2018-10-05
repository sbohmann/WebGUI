class ImageDataFromImage {
    constructor(image) {
        this.image = image
        this.createImageData()
    }
    
    get imagedata() {
        return imageData
    }

    createImageData() {
        let canvas = new Canvas()
        canvas.width = image.width
        canvas.height = image.height
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0)
        this.imageData = context.getImageData()
    }
}
