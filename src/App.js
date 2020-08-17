import React,{Component} from 'react';
import './App.css';
import Button from './components/button';



class App extends Component {

  constructor(props){
    super(props);
      this.state={
        quote:[],
        quoteIndex: null
      }
      this.indexGenertor=this.indexGenertor.bind(this);
      this.newQuote=this.newQuote.bind(this);
    
    }



  componentDidMount(){
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
    .then(data=> data.json())
    .then(quote=> this.setState({quote} , this.newQuote));
  }

  // () => {
  //   this.setState({quoteIndex: this.indexGenertor() })
  // }
  ButtonClick(){
   console.log('halloaa')
  }

  indexGenertor(){
    return (Math.floor(Math.random() *100)+1)
  }

 get selectedQuote() {
    // if(!this.state.quote.length){
    //   return ;
    // }
    return this.state.quote[this.state.quoteIndex];
  }


  newQuote(){
    this.setState({quoteIndex: this.indexGenertor()})
  }

render() {
  return (
  
    <div className="App" id="quote-box">

     

      <div id="text">
      {this.selectedQuote ? `"${this.selectedQuote.quote}"` : ''}</div>

      <div id="author">
      {this.selectedQuote ? `~${this.selectedQuote.author}"` : ''}</div>


      <Button  buttonname='Next Quote' clickhandle={this.newQuote} />

      <a id='tweet-quote' target='blank' href={`http://twitter.com/intent/tweet?text=${this.selectedQuote}`}>tweet</a>
   
    </div>
   
  )
}

}


export default App;
