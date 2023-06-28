import functionB from './functionB'

const functionA = ({x,y}) => {
    return (
        <div>
            <h1>Componente A</h1>
            <functionB x = {x} y = {y} />
        </div>
    )
}

export default functionA