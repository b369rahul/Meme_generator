import React from "react"

class Main extends React.Component{
    constructor(){
        super();
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"https://i.imgflip.com/1bij.jpg",
            allMemes:[]
        }
    }

    componentWillMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(res=>res.data.memes)
            .then(res=>{
                this.setState((prev)=>{
                    prev.allMemes=res
                    return prev
                })
            })
    }

    handleChange= (event)=>{ 
        const {name,value}=event.target
        this.setState((prev)=>{
           prev[name]=value
            return prev;
        })
    }
    buttonClick = (event)=>{
        event.preventDefault()
        const a = Math.floor(Math.random()*this.state.allMemes.length)
        this.setState((prev)=>{
            prev.randomImg=prev.allMemes[a].url
            return prev
        })
    }
    render(){
        return(
            <div>
            <form className="form">
                <div className="input">
                <label>
                <span>Upper TEXT : &nbsp; </span>
                <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}></input>
                </label>
                <label>
                <span>Bottom Text : </span>
                <input type="text" name="bottomText"  placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}></input>
                </label>
                </div>
                <button onClick={this.buttonClick}>Generate Meme</button>
            </form>
            <div className="meme">
                <img src={this.state.randomImg} alt="Your meme"></img>
                <h1 className="uppertext">{this.state.topText}</h1>
                <h1 className="lowertext">{this.state.bottomText}</h1>
            </div>
            </div>
        )
    }

}
export default Main