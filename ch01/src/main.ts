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
    const gl: WebGL2RenderingContext = mayBeContext

    function checkKey(event: KeyboardEvent) {
        function updateClearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf) {
            gl.clearColor(red, green, blue, alpha)
            gl.clear(gl.COLOR_BUFFER_BIT)
            gl.viewport(0, 0, 0, 0)
        }
        switch (event.key) {
            case '1':
                updateClearColor(0.2, 0.8, 0.2, 1.0)
                break
            case '2':
                updateClearColor(0.2, 0.2, 0.8, 1.0);
                break
            case '3':
                updateClearColor(Math.random(), Math.random(), Math.random(), 1.0)
                break
            case '4':
                const color = gl.getParameter(gl.COLOR_CLEAR_VALUE);
                alert(`clearColor =(
            ${color[0].toFixed(1)},
            ${color[1].toFixed(1)},
            ${color[2].toFixed(1)}
                `)
                window.focus()
                break
        }
    }
    window.onkeydown = checkKey;
}

main()