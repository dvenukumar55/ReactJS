{/* header and footer

function footer(){
    return(
<footer>
        <p>&copy; all rights are reserved</p>
</footer>
    );
}
export default  footer
    
  
{/*card components

import pic from './assets/react.svg'

export default function Cart(){
return(
    <div className="crd">
        <img className="img" src={pic} alt="profilepic" />
    <h1 className='nm'>VENUKUMAR D</h1>
    <p className='para'>A FRONTEND DEVELOPER</p>
    </div>
);
}
  */}


{/*CSS styles external,module,inline

 function But(){
     return (<button className="butt">CLICK</button>);
 }
export default But
 */}


{/*props : read only properties that are
    shared bw components
    proptype,defaulttype

 function Stu(props){
    return(
        <div className="stud">
            <p>Name:{props.name}</p>
             <p>Age:{props.age}</p> 
        </div>
    );
 }
 export default Stu
  */}


  {/*conditioanl rendering

  function Greet(props){
    return(props.loggedin ? <h2>welcome{props.un}</h2>:
                        <h2>plz login to continue</h2>
    );
  }

export default Greet
 */}


 {/*
 function footer(){
    return(
<footer>
        <p>&copy; all rights are reserved</p>
</footer>
    );
}
export default  footer
*/}


{/* 
  click event= An intercation when a  user clicks on a specific Element
  we can respond to clicks by passing a callbacks to onclick Event handler


function Button(){
    let count=0;
  const handclick=(e)=>e.target.textContent="OOh!";
    const handleclick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    };
   // return(<button onClick={(e)=>handleclick("venuuu")}>click me😊</button>);
    return(<button onClick={(e)=>handclick(e)}>click me ❤️</button>);

}
export default Button
*/}


{/*usestate call 
import React,{useState} from "react";

function Usestatecall(){
    const [name,setname]=useState();
    
    const updname=()=>{
        setname("venukumar");
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updname}>set Name</button>
        </div>
    );
}
export default Usestatecall
*/}


 
   {/*UPDATE with objects

import React,{useState} from "react";

function Update(){
    const [car,setcar]=useState({year:2023,
                                 make:"benz",
                                 model:"booom" });
                                 
    function yrchange(){
         setcar(c=>({...c,year: event.target.value}));
    }   
    function makechange(){
           setcar(c=>({...c,make: event.target.value}));
    }   
    function modelchange(){
          setcar(c=>({...c,model: event.target.value}));
    }                       
    return(<div>
        <p> your fav car is:{car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={yrchange}></input><br /><br />
         <input type="text" value={car.make} onChange={makechange}></input><br /><br />
          <input type="text" value={car.model} onChange={modelchange}></input><br />
    </div>);
}
export default Update
 */}

 {/*UPDATE with arrays
 import React,{useState} from "react";

 function Array(){
    const [fruits,setfruits]=useState(["apple","banana","mango"]);

    function addfruit(){
        const newfruit=document.getElementById("fruitinput").value="";
        document.getElementById("foodinput").value="";

        setfruits(f=>[...f,newfruit]);
    }
    function remfruit(){

    }

    return(
        <div>
            <h3>list of fruits</h3>
                 <ul>
                    {fruits.map((fruits,index)=> <li key={index}>{fruits}</li>)}
                 </ul>
                 <input type="text" id="fruitinput" placeholder="enter fruit name"/>
                 <button onClick={addfruit}>Add Fruit</button>
        </div>
    );
 }
 export default Array
  */}

  {/*useEffect 
  import React,{useState,useEffect} from "react";

  function Useeffect(){
    const [width,setwidth]=useState(window.innerWidth);
    const [height,setheight]=useState(window.innerHeight);

   
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
    console.log("EVENT LISTENER ADDED");

    return ()=>{
        window.removeEventListener("resize",handleResize);
         console.log("EVENT LISTENER REMOVED");
    }

    },[]);

    function handleResize(){
      setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return(<>
           <p>window width:{width}px</p>
           <p>window height:{height}px</p>
           </>);
  }
  export default Useeffect
  */}

//useContext():react hook allows you to share values b/w
// multiple level of components without passing props
// through each level
 
  