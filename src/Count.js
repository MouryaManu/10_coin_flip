import React, { Component } from 'react'
import { choice } from './Helpers';
import Template from './Template';

class Count extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", url:"https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png" },
            {side:"tails",url:"https://venkatarun.files.wordpress.com/2015/11/india-1-rupee-2013.jpg" }
        ]
    };
    constructor(props) {
        super(props);
        this.state={
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            isClicked: false
        };
        this.clickHandler= this.clickHandler.bind(this);
    }

    flipcoin() {

        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips+1,
                nHeads: st.nHeads+ (newCoin.side==="heads" ? 1:0),
                nTails: st.nTails+ (newCoin.side==="tails" ? 1:0)
            };
        //     let newState={
        //             ...st,
        //             currCoin: newCoin,
        //             nFlips: st.nFlips+1,
                
        //     }
        //     if(newCoin.side==="heads") {
        //           newState.nHeads+=1;
        //     } else {
        //         newState.nTails+=1;
        //     }
        //     return newState;
        // });
        });
    }

    clickHandler(e) {
         this.flipcoin();
    }

    render() {
        
        return (
            <div>
            <h1>Let's flip the coin!!</h1>
            
            
             {this.state.currCoin &&
             <Template info={this.state.currCoin} />
             }
              <button onClick={this.clickHandler} >Flip Me!!</button>

             <p>Out of {this.state.nFlips} flips, we have got {this.state.nHeads} heads and {this.state.nTails} tails!!. </p>
             
            </div>
        )
    }
}


export default Count;