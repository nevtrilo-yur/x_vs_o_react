import React from 'react';

import './Game.css';



class Game extends React.Component {

  

  constructor(props){
    super(props)

    

    this.state = {
     
      count: 0,
      arr : [],
      win: '',
      new_game: 'New game'
      
    }
  }

  newGame = () => {
    this.setState({arr:[]})
    this.setState({count:0})
    this.setState({win : ''})

    
    let item = document.querySelectorAll('.item')
    for(let el of item){
      el.style.background = 'white'
    }

    
  }

  clickHandler = (e) =>{

    
    
    let numberSq = +e.target.getAttribute("name")
    let arr1 = this.state.arr;

   
      
        if(this.state.count % 2 ===0){
          if(!arr1[numberSq]){
            arr1[numberSq] = 'x';
            this.setState({arr:arr1})
          }
          
        } 
        else {
          if(!arr1[numberSq]){
            arr1[numberSq] = 'o'
            this.setState({arr:arr1})
          }
          
        }
        
        this.setState({ count: this.state.count + 1})

        
        this.win()

        
       
}
    
   
      win = () => {
        
       
        let arr = this.state.arr

        console.log(arr.length)
        
        if ( arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== undefined){
          if( arr[0] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[0] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.one').style.background = 'orange'
          document.querySelector('.two').style.background = 'orange'
          document.querySelector('.three').style.background = 'orange'
          
          
        }


    
        else   if ( arr[3] === arr[4] && arr[3] === arr[5]  && arr[3] !== undefined){
          if( arr[3] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[3] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.four').style.background = 'orange'
          document.querySelector('.five').style.background = 'orange'
          document.querySelector('.six').style.background = 'orange'
        }



        else   if ( arr[6] === arr[7] && arr[6] === arr[8] && arr[6] !== undefined){
          if( arr[6] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[6] === 'o'){
            this.setState({win : 'Winner is o'})
          }
        document.querySelector('.seven').style.background = 'orange'
        document.querySelector('.eight').style.background = 'orange'
        document.querySelector('.nine').style.background = 'orange'
        }


        else   if ( arr[0] === arr[3] && arr[0] === arr[6]  && arr[0] !== undefined ){
          if( arr[0] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[0] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.one').style.background = 'orange'
          document.querySelector('.four').style.background = 'orange'
          document.querySelector('.seven').style.background = 'orange'
        }




        else  if ( arr[1] === arr[4] && arr[1] === arr[7]  && arr[1] !== undefined ){
          if( arr[1] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[1] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.two').style.background = 'orange'
          document.querySelector('.five').style.background = 'orange'
          document.querySelector('.eight').style.background = 'orange'
        }






        else  if ( arr[2] === arr[5] && arr[2] === arr[8]  && arr[2] !== undefined){
          if( arr[2] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[2] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.three').style.background = 'orange'
          document.querySelector('.six').style.background = 'orange'
          document.querySelector('.nine').style.background = 'orange'
        }







        else   if ( arr[0] === arr[4] && arr[0] === arr[8]  && arr[0] !== undefined){
          if( arr[0] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[0] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.one').style.background = 'orange'
          document.querySelector('.five').style.background = 'orange'
          document.querySelector('.nine').style.background = 'orange'
        }






        else  if ( arr[2] === arr[4] && arr[2] === arr[6]  && arr[2] !== undefined){
          if( arr[2] === 'x'){
            this.setState({win : 'Winner is x'})
          }
          if( arr[2] === 'o'){
            this.setState({win : 'Winner is o'})
          }
          document.querySelector('.three').style.background = 'orange'
          document.querySelector('.five').style.background = 'orange'
          document.querySelector('.seven').style.background = 'orange'
        
        }

        else if ( arr.length === 9 && (arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined && arr[3] !== undefined && arr[4] !== undefined && arr[5] !== undefined  && arr[6] !== undefined && arr[7] !== undefined && arr[8] !== undefined)) {
          this.setState({win : 'Draw'})
          
          let item = document.querySelectorAll('.item')
          for(let el of item){
            el.style.background = 'blue'
          }

         }
      

        

        
}


    render(){

        return (
          <>
          <div className="out"><h2>{this.state.win}</h2></div>
            <div className='frame'>
              <div className="frame-imems">
                <div className="item one" onClick={this.clickHandler} name = "0">{this.state.arr[0]}</div>
                <div className="item two" onClick={this.clickHandler} name = "1">{this.state.arr[1]}</div>
                <div className="item three" onClick={this.clickHandler} name = "2">{this.state.arr[2]}</div>
              </div>
              <div className="frame-imems">
                <div className="item four" onClick={this.clickHandler} name = "3">{this.state.arr[3]}</div>
                <div className="item five" onClick={this.clickHandler} name = "4">{this.state.arr[4]}</div>
                <div className="item six" onClick={this.clickHandler} name = "5">{this.state.arr[5]}</div>
              </div>
              <div className="frame-imems">
                <div className="item seven" onClick={this.clickHandler} name = "6">{this.state.arr[6]}</div>
                <div className="item eight" onClick={this.clickHandler} name = "7">{this.state.arr[7]}</div>
                <div className="item nine" onClick={this.clickHandler} name = "8">{this.state.arr[8]}</div>
              </div>
            </div>
            <button onClick={this.newGame}>{this.state.new_game}</button>

            </>
          );
    }    
 
}

export default Game;
