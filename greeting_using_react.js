import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// for greeting
let curDate = new Date()
curDate = curDate.getHours();
let greeting = "";
//css implementation
const cssStyle = {};
//css implementation ends here

if(curDate >= 1 && curDate < 12)
{
  greeting = "Good Morning";
  cssStyle.color = 'green';
}else if(curDate >= 12 && curDate <16)
{
  greeting = "Good Afternoon";
  cssStyle.color ='yellow';

}else if(curDate >= 16 && curDate <20)
{
  greeting = "Good evening";
  cssStyle.color = 'pink';
}
else
{
  greeting = "Good Night";
  cssStyle.color = 'red';
}
//greeting section ends here

ReactDOM.render(
  <React.Fragment>
  <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>   
  <h1>Testing first React small project.</h1>
  <p>Here are the list of five netflix movies</p>
  <ol>
    <li>Dark</li>
    <li>Extra curricular</li>
    <li>My Holo Love</li>
    <li>My first-2 love</li>
    <li>Mr. Robot</li>
  </ol>
  </React.Fragment>   


  ,document.getElementById("root")

);
