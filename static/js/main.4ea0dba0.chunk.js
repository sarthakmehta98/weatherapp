(window.webpackJsonpvideobackground=window.webpackJsonpvideobackground||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mist.878d4b50.mp4"},,,,,function(e,t,a){e.exports=a.p+"static/media/Lightning.4a1a807b.mp4"},function(e,t,a){e.exports=a.p+"static/media/clouds.b84f44dc.mp4"},function(e,t,a){e.exports=a.p+"static/media/rainy.8647f42c.mp4"},function(e,t,a){e.exports=a.p+"static/media/snowy.9797e406.mp4"},function(e,t,a){e.exports=a.p+"static/media/haze.74ee9c99.mp4"},function(e,t,a){e.exports=a.p+"static/media/clearsky.fe2ddaa2.mov"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),c=a(3),r=a(5),o=a(0),l=a.n(o),d=a(10),u=a.n(d),m=(a(23),a(8)),h=a.n(m),y=a(11),v=a(6),p=(a(25),a(12)),E=a.n(p),f=a(13),g=a.n(f),w=a(14),N=a.n(w),b=a(15),k=a.n(b),C=a(7),O=a.n(C),_=a(16),I=a.n(_),j=a(17),x=a.n(j),B=(a(26),l.a.Component,"94dbaa5cedc23401e9c6d96681166f49"),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).getWeather=function(){var e=Object(y.a)(h.a.mark((function e(t){var n,i,s,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state.city,i=a.state.country,e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(i,"&appid=").concat(B,"&units=metric"));case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,n&&i?a.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,FrontA:"on",error:"",iconsunshower:"undefined",cloud:"undefined",sun:"undefined",rays:"undefined",iconthunderstorm:"undefined",rain:"undefined",lightning:"undefined",bolt:"undefined",iconcloudy:"undefined",iconflurries:"undefined",snow:"undefined",flake:"undefined",iconsunny:"undefined",iconrainy:"undefined",VideoIsOn:"VideoIsOn"}):a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter the values."}),(r=a.state.description).includes("rain")&&(document.getElementById("video").src=N.a),r.includes("clouds")&&(document.getElementById("video").src=g.a),r.includes("thunderstorm")&&(document.getElementById("video").src=E.a),r.includes("snow")&&(document.getElementById("video").src=k.a),r.includes("mist")&&(document.getElementById("video").src=O.a),r.includes("fog")&&(document.getElementById("video").src=O.a),r.includes("smoke")&&(document.getElementById("video").src=O.a),r.includes("clear sky")&&(document.getElementById("video").src=x.a),r.includes("haze")&&(document.getElementById("video").src=I.a);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={FrontA:"off",VideoIsOn:"VideoIsOff",weather:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0,temperature:void 0,iconsunshower:"icon sun-shower",cloud:"cloud",sun:"sun",rays:"rays",iconthunderstorm:"icon thunder-strorm",rain:"rain",lightning:"lightning",bolt:"bolt",iconcloudy:"icon cloudy",iconflurries:"icon flurries",snow:"snow",flake:"flake",iconsunny:"icon sunny",iconrainy:"icon rainy"},a.handleCityChange=a.handleCityChange.bind(Object(v.a)(a)),a.handleCountryChange=a.handleCountryChange.bind(Object(v.a)(a)),a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"handleCityChange",value:function(e){this.setState({city:e.target.value})}},{key:"handleCountryChange",value:function(e){this.setState({country:e.target.value})}},{key:"render",value:function(){return window.onload=this.timeBack,l.a.createElement("body",{className:this.state.VideoIsOn},l.a.createElement("div",{className:"container"},l.a.createElement("video",{id:"video",autoPlay:"true",loop:"true",muted:"true"},l.a.createElement("source",{src:this.state.weather,type:"video/mp4"})),l.a.createElement("div",null),l.a.createElement("div",{class:"overlay"},l.a.createElement("form",null,l.a.createElement("h2",null,"REACT WEATHER APP"),l.a.createElement("div",{className:"aboveSubmit"},l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Indie+Flower&display=swap",rel:"stylesheet"}),l.a.createElement("span",null,"City"),l.a.createElement("input",{type:"text",value:this.state.city,onChange:this.handleCityChange}),l.a.createElement("span",null,"Country"),l.a.createElement("input",{type:"text",value:this.state.country,onChange:this.handleCountryChange})),l.a.createElement("button",{type:"submit",onClick:this.getWeather},"Submit")),l.a.createElement("div",null,this.state.city&&this.state.country&&l.a.createElement("p",{className:"weather__key"}," Location:",l.a.createElement("span",{className:"weather__value"}," ",this.state.city,", ",this.state.country)),this.state.temperature&&l.a.createElement("p",{className:"weather__key"}," Temperature:",l.a.createElement("span",{className:"weather__value"}," ",this.state.temperature," ")),this.state.humidity&&l.a.createElement("p",{className:"weather__key"}," Humidity:",l.a.createElement("span",{className:"weather__value"}," ",this.state.humidity," ")),this.state.description&&l.a.createElement("p",{className:"weather__key"}," Conditions:",l.a.createElement("span",{className:"weather__value"}," ",this.state.description," ")),this.state.error&&l.a.createElement("p",{className:"weather__error"},this.state.error))),l.a.createElement("div",{id:this.state.FrontA},l.a.createElement("div",{className:this.state.iconsunshower},l.a.createElement("div",{className:this.state.cloud}),l.a.createElement("div",{className:this.state.cloud},l.a.createElement("div",{className:this.state.rays})),l.a.createElement("div",{className:this.state.rain})),l.a.createElement("div",{className:this.state.iconthunderstorm},l.a.createElement("div",{className:this.state.cloud}),l.a.createElement("div",{className:this.state.lightning},l.a.createElement("div",{className:this.state.bolt}),l.a.createElement("div",{className:this.state.bolt}))),l.a.createElement("div",{className:this.state.iconcloudy},l.a.createElement("div",{className:this.state.cloud}),l.a.createElement("div",{className:this.state.cloud})),l.a.createElement("div",{className:this.state.iconflurries},l.a.createElement("div",{className:this.state.cloud}),l.a.createElement("div",{className:this.state.snow},l.a.createElement("div",{className:this.state.flake}),l.a.createElement("div",{className:this.state.flake}))),l.a.createElement("div",{className:this.state.iconsunny},l.a.createElement("div",{className:this.state.sun},l.a.createElement("div",{className:this.state.rays}))),l.a.createElement("div",{className:this.state.iconrainy},l.a.createElement("div",{className:this.state.cloud}),l.a.createElement("div",{className:this.state.rain})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A,null))}}]),t}(l.a.Component);u.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.4ea0dba0.chunk.js.map