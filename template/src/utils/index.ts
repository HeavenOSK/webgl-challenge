export const getCanvas = (elementId: string): HTMLCanvasElement => {
    const element = document.getElementById(elementId)
    if (!element) {
        console.log('not found canvas')
        throw Error('not found canvas')
    }
    const canvas: HTMLCanvasElement = element as HTMLCanvasElement
    return canvas
}

export const getContext = (canvas: HTMLCanvasElement): WebGL2RenderingContext => {
    const context = canvas.getContext('webgl2')
    if(!context){
        console.log('not found context')
        throw Error('not found context')
    }
    return context
}