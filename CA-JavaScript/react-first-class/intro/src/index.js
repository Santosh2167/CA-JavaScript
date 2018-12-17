import React from "react";
import ReactDOM from "react-dom";

const Welcome = () =>{
    return <h1>Welcome To Sandras Profile Page</h1>;
};

const BioMenus = () => {
    return(
        <ul>
            <li><a href="AboutMe">About Me</a></li>
            <li><a href="#">Favourite Foods</a></li>
            <li><a href="#">Contact Details</a></li>
        </ul>

    );


};

const AboutMe = () => {
   return(
       <section id="#AboutMe">
            <h1>About Me</h1>
            <img src="./Sandra.jpg" alt="Sandra Photo Not loading why"/>

            <ol>
                <li><strong>Pop</strong> culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist. </li><br/>
                <li><strong>Friendly</strong> web maven. Bacon lover. General internet specialist. Incurable travel scholar.</li><br/>
                <li><strong>Subtly</strong> charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.</li><br/>
                <li><strong>Unable</strong> to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist</li><br/>

            </ol>

        </section>

        
   ) 
};

const FavouriteFood = () => {
    return <h1>Favourite Food</h1>
};

const Pizza = () => {
    return (
        <section id="pizza">
            <p><strong>Pizza</strong></p>
            <img src="./pizza.jpeg" alt="i ate pizza so there is no pizza here"/>
            <p>Best time to eat: All the time</p>
            <p>Best place: Queen Margharitas</p>
        </section>
    );
};

const Quesadillas= () => {
    return (
        <section id="ques">
            <h1>Quesadillas</h1>
            <img src="./ques.jpeg" alt = "i ate quas so it is nothere" />
            <p>Best time to eat: Afternoon Siesta</p>
            <p>Best place: Mejico</p>
       
        </section>
    );
};

const IceCream= () =>{
    return (
        <section id="IceCream">
            <img src="./pancake.jpg" alt="i dont like pan cake so ask shakti"/>
            <p>Best time to eat: Breaky</p>
            <p>Best place: Pancakes on the Rocks</p>
        </section>
    );
};







const App = ()=> {
    return(
        <div>
            <Welcome/>
            <BioMenus/>
            <AboutMe/>
            <FavouriteFood/>
            <Pizza/>
            <Quesadillas/>
        </div>
    ); 
};
ReactDOM.render(
    <App />,
    document.getElementById("root")
)