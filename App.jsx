import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            <button onClick = {this.clickHandle}>{this.state.name}</button>
         </div>
      );
   }

   constructor(props){
      super(props);
      this.state={name:"vanhung"};
      this.clickHandle=this.clickHandle.bind(this);
   }

   clickHandle(){
      alert("thong tin cong nghe");
      debugger;

      this.setState({name:"vanhungbk"});
   }
}

export default App;