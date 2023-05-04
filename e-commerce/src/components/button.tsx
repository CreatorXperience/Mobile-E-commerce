import React from 'react'
import '../../src/style.css'
type fortext = {
    size: {
        content?: string,
        padding: string,
        width: string,
        bgcolor?: string
    }
}
export default class Button extends React.Component<fortext>  {
    render(){
        return(
            <div className={`w-${this.props.size.width} bg-gray-${this.props.size.bgcolor}  my-4 text-slate-200 text-xl text-center rounded-xl py-${this.props.size.padding}`}> {this.props.size.content} </div>
        )
    }
}