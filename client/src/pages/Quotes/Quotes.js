import React from "react";
import axios from "axios";
require ("./Quotes.css");


class Quotes extends React.Component {
    state = {
        quote: ""
    };
    callApi = () => {
        axios.get("https://quotes.rest/qod.json?category=love")
        .then((response) => {
            let results = response.data.contents.quotes[0].quote;
            let author = response.data.contents.quotes[0].author;
            this.setState({ quote: results, author })
        })
    }
    handleOnClick = event => {
       this.callApi();
    }

    render () {
        return (
            <div >

            <div class="row" id="content">
            <div class="col-md-1" id="quoteSides"></div>
     
           <div class="col-md-10">
           <div class="row">
           
            <div id="welcomeDiv">                
                <div>
                {<h2>{ `"` + this.state.quote + `"` }</h2>}
                {<h3>{ this.state.author }</h3>}
                
                </div>
                </div>

                <button onClick={this.handleOnClick} className="buttonQuote">Inspire Me</button>

            </div>
            </div>
            <div class="col-md-1" id="quoteSides"></div>
            </div>

            </div>
                
            
        )
    }
}

export default Quotes;