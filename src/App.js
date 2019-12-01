import React from 'react';
import './App.css';
import Lightning from './Lightning.mp4'
import cloudy from './clouds.mp4'
import rain from './rainy.mp4'
import snowy from './snowy.mp4'
import mist from './mist.mp4'
import haze from './haze.mp4'
import clearsky from './clearsky.mov'
import FrontAnimations from './Component/FrontAnimations'

const API_KEY = "94dbaa5cedc23401e9c6d96681166f49";

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      FrontA: "off",
      VideoIsOn: "VideoIsOff",
      
      weather: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      temperature: undefined,
      iconsunshower: "icon sun-shower",
      cloud: "cloud",
      sun: "sun",
      rays: "rays",
      iconthunderstorm: "icon thunder-strorm",
      rain: "rain",
      lightning: "lightning",
      bolt: "bolt",
      iconcloudy: "icon cloudy",
      iconflurries: "icon flurries",
      snow: "snow",
      flake: "flake",
      iconsunny: "icon sunny",
      iconrainy: "icon rainy",


    }
    
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    //this.timeBack = this.timeBack.bind(this);
  }

  // timeBack() 
  // {
  //   const currentHours = new Date().getHours();

  //   //const currentHours = 5
    
  //   console.log(currentHours);
  //   if(currentHours >= 6 && currentHours<20)
  //   {
  //     document.getElementById("imageBackground").src = morning
  //   }

  //   if(currentHours >= 20 || currentHours<6)
  //   {
  //     document.getElementById("imageBackground").src = night
  //     console.log("it is night");
  //   }
    
  // }


  getWeather = async (e) => {

    e.preventDefault(); 
    const city = this.state.city;
    const country = this.state.country;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    //console.log(data);

    
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        FrontA: "on",
        error: "",
        iconsunshower: "undefined",
      cloud: "undefined",
      sun: "undefined",
      rays: "undefined",
      iconthunderstorm: "undefined",
      rain: "undefined",
      lightning: "undefined",
      bolt: "undefined",
      iconcloudy: "undefined",
      iconflurries: "undefined",
      snow: "undefined",
      flake: "undefined",
      iconsunny: "undefined",
      iconrainy: "undefined",
      VideoIsOn: "VideoIsOn",

      });
      
    } 
    
    else {

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values.",
      });
    }

    var str = this.state.description;

    if(str.includes("rain"))
    {
      document.getElementById("video").src = rain;
    }

    if(str.includes("clouds"))
    {
      document.getElementById("video").src = cloudy;
    }
   
    if(str.includes("thunderstorm"))
    {
      document.getElementById("video").src = Lightning;
    }


    if(str.includes("snow"))
    {
      document.getElementById("video").src = snowy;
    }


    if(str.includes("mist"))
    {
      document.getElementById("video").src = mist;
    }

    if(str.includes("fog"))
    {
      document.getElementById("video").src = mist;
    }

    if(str.includes("smoke"))
    {
      document.getElementById("video").src = mist;
    }
    
   
    if(str.includes("clear sky"))
    {
      document.getElementById("video").src = clearsky;
    }


    if(str.includes("haze"))
    {
      document.getElementById("video").src = haze;
    }
    

    

 
  }
  
  
  handleCityChange(event)
  {
    this.setState({city: event.target.value})

  }

  handleCountryChange(event)
  {
    this.setState({country: event.target.value})
  }
  
  // updateBckground(event)
  // {
  //   const currentHours = new Date().getHours();
  //   console.log(currentHours);
    
  //   if(currentHours>=17 && currentHours<=5)
  //   {
  //     document.getElementById("ImageBackground").src = morning;
  //     var x  = document.getElementById("ImageBackground").src;
  //     console.log(x);
  //   }
  // }
  render()
  {
    window.onload = this.timeBack;
  
    return (

      <body className={this.state.VideoIsOn}>



      <div className="container">  

      
      
      <video id="video" autoPlay="true" loop="true" muted="true">
  
          <source src={this.state.weather} type="video/mp4" />
  
      </video>
      <div>



        
      </div>
       
    
  
      <div class="overlay">

          <form >
          <h2>REACT WEATHER APP</h2>
              <div className="aboveSubmit">
                <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
              <span>City</span>
              <input type="text" value={this.state.city} onChange={this.handleCityChange} ></input>
              <span>Country</span>
              <input type="text" value={this.state.country} onChange={this.handleCountryChange}></input>
              </div>
              <button type="submit" onClick={this.getWeather}>Submit</button>
              
          </form>


          <div>
{	
  this.state.city && this.state.country && <p className="weather__key"> Location: 
    <span className="weather__value"> { this.state.city }, { this.state.country }</span>
  </p> 
}
{ 	
  this.state.temperature && <p className="weather__key"> Temperature: 
    <span className="weather__value"> { this.state.temperature }	</span>
  </p> 
}
{ 	
  this.state.humidity && <p className="weather__key"> Humidity: 
    <span className="weather__value"> { this.state.humidity } </span>
  </p> 
}
{ 	
  this.state.description && <p className="weather__key"> Conditions: 
    <span className="weather__value"> { this.state.description } </span>
</p> 
}
{ 
  this.state.error && <p className="weather__error">{ this.state.error }</p>  
}

          </div>
  
      </div>
  


      <div id={this.state.FrontA}> 
                        <div className={this.state.iconsunshower}>
                        <div className={this.state.cloud}></div>
                        <div className={this.state.cloud}>
                            <div className={this.state.rays}></div>
                        </div>
                        <div className={this.state.rain}></div>
                        </div>
                        
                        <div className={this.state.iconthunderstorm}>
                        <div className={this.state.cloud}></div>
                        <div className={this.state.lightning}>
                            <div className={this.state.bolt}></div>
                            <div className={this.state.bolt}></div>
                        </div>
                        </div>
                        
                        <div className={this.state.iconcloudy}>
                        <div className={this.state.cloud}></div>
                        <div className={this.state.cloud}></div>
                        </div>
                        
                        <div className={this.state.iconflurries}>
                        <div className={this.state.cloud}></div>
                        <div className={this.state.snow}>
                            <div className={this.state.flake}></div>
                            <div className={this.state.flake}></div>
                        </div>
                        </div>
                        
                        <div className={this.state.iconsunny}>
                        <div className={this.state.sun}>
                            <div className={this.state.rays}></div>
                        </div>
                        </div>
                        
                        <div className={this.state.iconrainy}>
                        <div className={this.state.cloud}></div>
                        <div className={this.state.rain}></div>
                        </div>
    </div>

      </div>


      </body>
    )
  }
}

export default App;
