import vertexShaderSource from './shader/VertexShader.glsl'
import fragmentShaderSource from './shader/FragmentShader.glsl'

console.log('hello')
console.log(vertexShaderSource)
console.log(fragmentShaderSource)

const main = () => {
    const mayBeCanvas = document.getElementById('canvas')
    if (mayBeCanvas === null) {
        console.warn('not found canvas element')
        return
    }
    const canvas: HTMLCanvasElement = mayBeCanvas as HTMLCanvasElement
    const mayBeContext = canvas.getContext('webgl2')
    if (mayBeContext === null) {
        console.warn('could not get context')
        return
    }
    const context: WebGL2RenderingContext = mayBeContext
}

main()