import React from 'react'
import '../../src/style.css'
type fortext = {
    properties: {
        content?: string,
        padding: string,
        width: string,
        bgcolor?: string
    }
}
export default class Button extends React.Component<fortext>  {
    render(){
        return(
            <div className={`w-${this.props.properties.width} bg-gray-${this.props.properties.bgcolor}  my-4 text-slate-200 text-xl text-center rounded-xl py-${this.props.properties.padding}`}> {this.props.properties.content} </div>
        )
    }
}