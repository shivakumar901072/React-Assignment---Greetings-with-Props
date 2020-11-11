// write code for Welcome component here
import React from "react";

export default class welcome extends React.component {
    rener() {
        return (
            <div>
                <h1> Hey {this.props.name}!</h1>
                <h2>Welcome to Newton School. </h2>

            </div>
        )
    };
}
