import * as React from 'react'

interface Prop {
    onClick: () => void
}

const Button: React.FC<Prop> = (props) => {
    return (
        <button {...props}>Click me</button>
    )
}
export default Button