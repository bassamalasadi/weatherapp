(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{39:function(e,t,a){e.exports=a(65)},45:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(20),l=a.n(r),i=(a(44),a(45),a(10)),o=a(21),s=a(4),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],u=Object(o.a)({},localStorage);return Object(n.useEffect)((function(){Object.keys(u).map((function(e){try{fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=cbf3e6bbd09a990359dddac086ea6fb0")).then((function(e){return e.json()})).then((function(e){l((function(t){return[].concat(Object(i.a)(t),[{id:e.coord.lat,name:e.name,temp:e.main.temp,icon:e.weather[0].id,main:e.weather[0].main,description:e.weather[0].description,lon:e.coord.lon,lat:e.coord.lat}])}))}))}catch(t){console.log("not working")}}))}),[]),c.a.createElement(m.Provider,{value:[r,l]},e.children)},d=(a(46),Object(n.createContext)()),p=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)({}),o=Object(s.a)(i,2),m=o[0],u=o[1],p=Object(n.useState)({}),b=Object(s.a)(p,2),E=b[0],f=b[1],v=Object(n.useState)(""),h=Object(s.a)(v,2),y=h[0],j=h[1],g=Object(n.useState)(""),O=Object(s.a)(g,2),N=O[0],w=O[1],x=Object(n.useState)(""),k=Object(s.a)(x,2),C=k[0],S=k[1];return c.a.createElement(d.Provider,{value:{value:[r,l],value2:[m,u],value3:[E,f],value4:[y,j],value5:[N,w],value6:[C,S]}},e.children)},b=a(11),E=a.n(b),f=a(17),v=a(22),h=function(e){var t="",a=e.icon;switch(!0){case a>=200&&a<=232:t="11d";break;case a>=300&&a<=321:t="09d";break;case a>=500&&a<=531:t="10d";break;case a>=600&&a<=622:t="13d";break;case a>=701&&a<=781:t="50d";break;case 800===a:t="01d";break;case a>=801&&a<=804:t="03d";break;default:t="03d"}return c.a.createElement("div",null,c.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t,"@2x.png"),alt:"",className:"icon"}))},y=a(30),j=(a(48),a(31)),g=a.n(j),O=a(32),N=a.n(O),w=a(67),x=a(14),k=c.a.memo((function(e){var t=Object(n.useContext)(d).value5,a=Object(s.a)(t,2),r=(a[0],a[1]),l=Object(n.useContext)(m),o=Object(s.a)(l,2),u=o[0],p=o[1],b=Object(n.useState)(!1),j=Object(s.a)(b,2),O=(j[0],j[1]),k=function(){var e=Object(f.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=u.map((function(t){return c.a.createElement("div",{key:t.id},c.a.createElement(g.a,{wait:100},c.a.createElement(y.a,{className:"",onClick:k,trigger:c.a.createElement("div",{className:"scrollbar element"},c.a.createElement("div",null,t.name," ",Math.round(t.temp-273.15),"\xb0C ",c.a.createElement(h,{icon:t.icon})," ",c.a.createElement("button",{type:"button",className:"btn btn-warning star",value:t.name,onClick:function(){return function(e){var t=Object(i.a)(u),a=t[e].name;t.splice(e,1),p(t),localStorage.removeItem("".concat(a))}(u.indexOf(t))}},c.a.createElement(v.a,null)," Remove"))),position:"left center"},c.a.createElement(w.a.Header,null,c.a.createElement("nobr",null,c.a.createElement("h4",null,t.name)," ",c.a.createElement("div",null,c.a.createElement(x.b,{to:"/city/".concat(t.name)},c.a.createElement("button",{className:"btn btn-success",onClick:function(){return function(e){O(!0),r(e)}(t.name)}}," View"))))),"undefined"!=typeof t.description?c.a.createElement(w.a.Body,null,c.a.createElement("div",{id:t.iconId,key:t.name},c.a.createElement("div",{key:t.iconId,value:t.iconId,style:{backgroundImage:"url(".concat(e.flag,")")}},c.a.createElement("div",null,c.a.createElement(w.a.Title,null," Description ")),c.a.createElement(w.a.Text,null,t.main,c.a.createElement("br",null),c.a.createElement("br",null),"Coordinates Latitude: ",t.lat,c.a.createElement("br",null),"Longitude: ",t.lon,c.a.createElement("br",null))))):"")))}));return c.a.createElement("div",null,c.a.createElement("div",{className:" favourite"},c.a.createElement("div",null," Favourites! "),c.a.createElement("div",{className:"scroll"},c.a.createElement(N.a,{style:{width:200,height:600}},C))))})),C=a(34),S=a.n(C),_=a(35),I=a(36),P=a(7),T=function(e){var t=e.message,a=Object(P.b)({opacity:1,from:{opacity:0}});if(null===t)return null;return c.a.createElement(P.a.div,{style:a},c.a.createElement("div",{className:t.type},t.name?c.a.createElement("div",{className:"Notifi"},c.a.createElement("div",{className:"NotifiHeader"}," \xa0  Notification"),c.a.createElement("div",{className:"message"},t.content,c.a.createElement("nobr",{className:"cityName"},t.name),t.content2,c.a.createElement("nobr",{className:"wiki"},"undefined"!=typeof t.content3?c.a.createElement("a",{href:"https://en.wikipedia.org/wiki/List_of_towns_and_cities_with_100,000_or_more_inhabitants/cityname:_A",target:"_blank",rel:"noopener noreferrer"}," Wikipedia"):""),t.content3)):""))},F=a(6),M="cbf3e6bbd09a990359dddac086ea6fb0",A="https://api.openweathermap.org/data/2.5/weather",D="https://api.openweathermap.org/data/2.5/forecast",H=function(e){var t=Object(F.e)().cityname,a=Object(n.useContext)(d),r=a.value,l=a.value2,i=a.value3,o=a.value4,m=a.value5,u=Object(s.a)(r,2),p=(u[0],u[1]),b=Object(s.a)(l,2),v=(b[0],b[1]),h=Object(s.a)(i,2),y=(h[0],h[1]),j=Object(s.a)(o,2),g=j[0],O=j[1],N=Object(s.a)(m,1)[0],w=Object(n.useState)(""),k=Object(s.a)(w,2),C=k[0],H=k[1],W=Object(P.b)({opacity:1,from:{opacity:0}}),q=t,J=function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t){e.next=16;break}return a="",e.prev=2,e.next=5,fetch("".concat(A,"?q=").concat(t,"&appid=").concat(M)).then((function(e){return e.json()})).then((function(e){p(e),a=e.sys.country}));case 5:return e.next=7,fetch("".concat(D,"?q=").concat(t,"&appid=").concat(M)).then((function(e){return e.json()})).then((function(e){v(e)}));case 7:return e.next=9,fetch("https://restcountries.eu/rest/v2/alpha/".concat(a)).then((function(e){return e.json()})).then(function(){var e=Object(f.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:O(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),H({content:'The city name " ',name:t,content2:' " does not match any city name. If you are not confident you can check ',content3:" list for all cities",type:"Error"}),setTimeout((function(){H(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.split(",")[0],J(a),console.log(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if("undefined"!=typeof(q=e.city)){var t=q.split(",")[0];J(t)}}),[N]),c.a.createElement("div",{className:""},c.a.createElement(S.a,{value:g,onChange:O,onClick:L,onSelect:L,shouldFetchSuggestions:g.length>=2,highlightFirstSuggestion:!0},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps;return c.a.createElement("div",{className:"HeadSearech"},c.a.createElement("input",Object.assign({},t({placeholder:"Search Places..."}),{className:"input-search"})),c.a.createElement(_.a,{icon:I.a,color:"white"}),c.a.createElement(P.a.div,{style:W},c.a.createElement("div",{className:"search-list"},a.map((function(e){return c.a.createElement("div",{key:e.description,className:"search-items"},c.a.createElement("div",n(e),c.a.createElement("ul",{className:""},c.a.createElement("li",{className:"suggeste"},c.a.createElement("div",{className:"suggesteCh"},c.a.createElement("div",{className:"searchIcon"}),c.a.createElement("i",{className:"material-icons"},"location_on"),c.a.createElement("div",{className:"searchItem"},c.a.createElement(x.b,{to:"/city/".concat(e.description.split(",")[0])},c.a.createElement("span",{className:"searchRes"},e.description))))))))})))))})),c.a.createElement(T,{message:C}))};var W=function(){var e=Object(n.useContext)(d).value5,t=Object(s.a)(e,1)[0],a=Object(P.b)({opacity:1,from:{opacity:0}});return c.a.createElement(P.a.div,{style:a},c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement("div",null,c.a.createElement(H,{city:t})),c.a.createElement(k,null))))},q=function(e){var t=Object(P.b)({opacity:1,from:{opacity:0}}),a=e.weather,n=e.flag;return c.a.createElement("div",{className:""},c.a.createElement(P.a.div,{style:t},c.a.createElement("div",{className:"info-box"},c.a.createElement("div",{className:"weather-container"},c.a.createElement("div",{className:"leftSideContainer"},c.a.createElement("img",{src:n.flag,alt:"flag",className:"countray-flag"})," ",c.a.createElement("br",null),c.a.createElement("div",{className:"degree"},"undefined"!=typeof e?c.a.createElement(h,{icon:a.icon}):"",Math.round(a.main.temp-273.15),"\xb0C")),c.a.createElement("div",{className:"flag-box"},c.a.createElement("div",{className:"weather-extra-countryName"},n.nativeName," - ",n.name),c.a.createElement("div",{className:"weather-city-name"},a.name,", ",a.sys.country),c.a.createElement("div",{className:"weather-description"}," ",a.weather[0].description)),c.a.createElement("div",{className:"flag-box"},c.a.createElement("div",{className:""},c.a.createElement("h5",{className:"weather-extra"},"Capital : ",n.capital),c.a.createElement("h5",{className:"weather-extra"},"Region : ",n.region),c.a.createElement("h5",{className:"weather-extra"},"Humidity : ",a.main.humidity,"%"),c.a.createElement("h5",{className:"weather-extra"},"Wind : ",a.wind.speed," m/s"),c.a.createElement("h5",{className:"weather-extra"},"Pressure : ",a.main.pressure," hPa")))))))},J=c.a.memo((function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=[];if("undefined"!=typeof e.data.list)for(var n=0;n<39;n+=8){var r=e.data.list[n].dt_txt.substring(0,10),l=t[new Date(r).getDay()];a.push(c.a.createElement("div",{className:"forecast-box",key:n},c.a.createElement("div",null,c.a.createElement("h4",null,l),c.a.createElement("div",{className:""},Math.round(e.data.list[n].main.temp-273.15),"\xb0C"," "),c.a.createElement(h,{icon:e.data.list[n].weather[0].id}),c.a.createElement("h6",null,e.data.list[n].dt_txt.substring(0,10)))))}return c.a.createElement("div",null,a)})),L=a(38),R=a(37),B=function(e){var t=Object(n.useContext)(m),a=Object(s.a)(t,2),r=(a[0],a[1]),l=e.props,u=Object(o.a)({},localStorage),d=[];Object.keys(u).map((function(e){return d.push(e),0}));return c.a.createElement("div",null,d.includes(l.name)?null:c.a.createElement("button",{value:e.name,type:"button",className:"btn btn-warning buton",onClick:function(e){e.preventDefault(),d.includes(l.name)||(r((function(e){return[].concat(Object(i.a)(e),[{id:l.coord.lat,name:l.name,temp:l.main.temp,icon:l.weather[0].id}])})),localStorage.setItem("".concat(l.name),JSON.stringify(l.name)))}},c.a.createElement(v.a,null)," Add ",l.name," to Favourites")," "," "," ",c.a.createElement(R.CopyToClipboard,{text:window.location.href},c.a.createElement("button",{type:"button",className:"btn btn-warning button buton"},c.a.createElement(L.a,{className:""})," Copy ",l.name," Weather")))};var V=function(){var e=Object(F.e)(),t=Object(n.useContext)(d),a=t.value,r=t.value2,l=t.value3,i=t.value5,o=t.value6,m=Object(s.a)(a,1)[0],u=Object(s.a)(r,1)[0],p=Object(s.a)(l,1)[0],b=Object(s.a)(i,2),E=b[0],f=b[1],v=Object(s.a)(o,1)[0],h=Object(P.b)({opacity:1,from:{opacity:0}});return Object(n.useEffect)((function(){f(e.cityname)}),[e]),c.a.createElement(P.a.div,{style:h},c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement("div",null,c.a.createElement(H,{city:E})),c.a.createElement("div",{className:"mainCard"},"undefined"!=typeof m.main?c.a.createElement("div",{className:""},c.a.createElement("div",{className:"cards"},c.a.createElement(B,{props:m}),c.a.createElement("br",null)),c.a.createElement("div",{className:"cards"},c.a.createElement(q,{weather:m,flag:p,date:v}),c.a.createElement("br",null)),c.a.createElement(J,{data:u})):""),c.a.createElement(k,null))))};var z=function(){return c.a.createElement(u,null,c.a.createElement(p,null,c.a.createElement(x.a,{basename:"/weatherapp"},c.a.createElement("div",null,c.a.createElement(F.a,{exact:!0,path:"/",component:W}),c.a.createElement(F.a,{exact:!0,path:"/city/:cityname",component:V})))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fb13fdbe.chunk.js.map