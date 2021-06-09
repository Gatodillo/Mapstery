!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){var n=a(1);$(document).ready((function(){"use strict";var e,t,i,o,r,l,s,c,p,m,d,u,g,b,h,v,y=$(window).width(),_={capital:"",largest_city:"",population:null,nickname:""},k={lat:"",lng:""},f=[],S=[],D={flag:"",population:null,demonym:"",capital:"",multiple_currencies:!1,currencies:[],multiple_languages:!1,languages:[]},M=!1;const C="<button type='button' class='btn btn-primary' data-dismiss='modal'>Explorar el mapa</button>",L="<a href='javascript:window.location.reload()'>Jugar de nuevo</a>";function I(a){var d,u;t=a,"worldCountries"===a?$.ajax({method:"GET",url:"https://restcountries.eu/rest/v2/all",data:{fields:"flag;name;alpha2Code;alpha3Code;capital;subregion;population;latlng;demonym;area;borders;languages;currencies"},success:function(t){(function(e){var t=Math.floor(Math.random()*e.length);o=e[t],l=o.alpha2Code,r=o.name,s=o.flag,c=o.area,"GF"===l?c=83534:"SJ"===l&&(c=61022);v=function(e,t){var a=0;switch(!0){case isNaN(e):a=8;break;case e>97e5:a=3;break;case e>75e5:a=4;break;case e>25e4:a=5;break;case e>4e4:a=6;break;case e>1e3:a=7;break;case e>10:a=8;break;case e>3:a=9;break;default:a=12}return a-=t>70?2:0}(c,o.latlng[0]),z(t),p=o.subregion?"Caribbean"===o.subregion?"the Caribbean":o.subregion:"the Antarctic";k="UM"===l?{lat:19.3,lng:166.633333}:{lat:o.latlng[0],lng:o.latlng[1]};m=o.borders.length,f=o.borders,0===m||f.forEach((function(t,a){e.forEach((function(e){t===e.alpha3Code&&(f.splice(a,1,e.alpha2Code),S.push(e.name))}))}));$(".modal").modal("show"),$(".modal").html("Haz clic sobre "+r+"<img class='targetFlag' src="+s+"></img><div id='proceed_button' class='modalInstructions'><button type='button' class='btn btn-primary' data-dismiss='modal'>Haz clic para jugar</button></div>"),$(".well").show(),$(".well").html("Haz clic sobre "+r+"<img class='targetFlagWell' src="+s+"></img><div id='reveal-country'>O haz clic para ubicar "+r+"</div>")})(e=t),w.setOptions({center:{lat:0,lng:0}})},error:function(e,t){console.error(t)}}):"usStates"===a?(e=n,w.setOptions({zoom:y>500?4:3,center:{lat:39.810556,lng:-98.556111}}),d=e,u=Math.floor(Math.random()*d.length),i=d[u],H(u),$(".modal").modal("show"),$(".modal").html("Haz clic sobre "+i.name+"<div id='proceed_button' class='modalInstructions'><button type='button' class='btn btn-primary' data-dismiss='modal'>Haz clic para jugar!</button></div>"),$(".well").show(),$(".well").html("Clic sobre "+i.name)):alert("uh oh! Mapstery can't do that yet")}var w;$("#countries_button").click((function(){I("worldCountries")})),$("#states_button").click((function(){I("usStates")})),$(".well").hide(),$(".modal").modal("show"),window.initMap=function(){w=new google.maps.Map(document.getElementById("map"),{center:{lat:42.29,lng:-85.585833},zoom:3,mapTypeId:google.maps.MapTypeId.SATELLITE,disableDefaultUI:!0,zoomControl:y>500,draggableCursor:"crosshair",scaleControl:!0}),google.maps.event.addListener(w,"click",(function(e){var n=a(2)(google.maps);function o(e,t,a){P=(x.length+1).toString();var i=new n({position:e,map:w,labelContent:P+"<br>"+a,labelAnchor:new google.maps.Point(10,50),labelClass:"labels",labelInBackground:!1,icon:s(t)});x.push(i)}function s(e){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",fillColor:e,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1.5}}var c={position:e.latLng,map:w},p=c.position.lat(),d=c.position.lng(),h=function(e,t,a,n){var i,o=.017453292519943295,r=Math.cos,l=.5-r((a-e)*o)/2+r(e*o)*r(a*o)*(1-r((n-t)*o))/2,s=12742*Math.asin(Math.sqrt(l)),c=.621371*s;"number"==typeof b&&(i=b>c);return b=c,{miles:K(c),kilometers:K(s),closerClick:i}}(k.lat,k.lng,p,d),v={lat:p,lng:d};(new google.maps.Geocoder).geocode({location:v},(function(a,n){if(n!==google.maps.GeocoderStatus.OK)$(".modal").modal("show"),$(".modal").html("Este es un territorio desconocido! <div id='proceed_button' class='modalInstructions'><button type='button' class='btn btn-primary' data-dismiss='modal'>Intenta de  nuevo</button></div>");else{const n={};if(a.forEach(e=>{e.types.includes("natural_feature")?n.natural_feature=e.address_components[0].long_name:e.types.includes("administrative_area_level_1")?(n.state={name:e.address_components[0].long_name,code:e.address_components[0].short_name.substring(0,2)},"usStates"===t&&(g=V(t,n.state.code))):e.types.includes("country")&&(n.country={name:e.address_components[0].long_name,code:e.address_components[0].short_name},"worldCountries"===t&&(u=V(t,n.country.code)))}),"worldCountries"===t&&n.country)if(!1===M)if(n.country.code===l)o(e.latLng,"green",n.country.code),E(r);else if($(".modal").modal("show"),$(".modal").html("Hiciste clic sobre "+n.country.name),o(e.latLng,"red",n.country.code),0===m)T(M,h,x.length,m);else{var s=f.indexOf(n.country.code);-1===s?T(M,h,x.length,m):T(M,h,x.length,m,s,n.country.name)}else $(".modal").modal("show"),$(".modal").html("Hiciste clic sobre "+n.country.name),T(M);else"usStates"===t&&n.state?!1===M?i.abbr===n.state.code&&"US"===n.country.code?(o(e.latLng,"green",n.state.code),E(n.state.name)):($(".modal").modal("show"),$(".modal").html("Hiciste clic sobre"+`${n.state.name?`${n.state.name}`:""}`+`${"US"!==n.country.code?`, ${n.country.name}`:""}`+"<div id='proceed_button' class='modalInstructions'><button type='button' class='btn btn-primary' data-dismiss='modal'>Intenta de nuevo</button></div>"),o(e.latLng,"red",n.state.code)):($(".modal").modal("show"),$(".modal").html("Hiciste clic sobre "+`${n.state.name?`${n.state.name},`:""} ${n.country.name}`),T(M)):n.natural_feature&&($(".modal").modal("show"),$(".modal").html(`Hiciste clic sobre ${n.natural_feature.startsWith("Lake")?"":"el"} ${n.natural_feature}`+"<div id='proceed_button' class='modalInstructions'>"+`<button type='button' class='btn btn-primary' data-dismiss='modal'>${M?"Continuar":"Intentar de nuevo"}</button>`+"</div>"))}}))}))};var P,x=[];function K(e){for(var t=(e=Math.round(e)).toString().split("").reverse(),a=3;a<t.length;a+=4)t.splice(a,0,",");return t.reverse().join("")}function T(e,a,n,i,o,l){if(!1===e)if(h=!0===a.closerClick?"Te estas acercando!":!1===a.closerClick?"Te estas alejando.":"",$(".modal").append("<p class='modalInstructions'>"+h+" Estuviste a "+a.miles+" millas ("+a.kilometers+" kilometros) de "+r+"<div id='proceed_button' class='modalInstructions'><button type='button' class='btn btn-primary' data-dismiss='modal'>Intenta de nuevo</button></div>"),o>=0){var s=S.slice();s.splice(o,1),A(s),0===s.length?$(".modal").append("<p class='modalInstructions'>"+l+" es el único oaís que comparte una frontera con "+r+"!"):1===s.length?$(".modal").append("<p class='modalInstructions'>"+r+" comparte una frontera con "+l+" y "+d):$(".modal").append("<p class='modalInstructions'>"+r+" comparte una frontera con "+l+", también con "+d)}else n>5&&(0===i?$(".modal").append("<p class='modalInstructions'>Pista: "+r+" is an island nation in "+p+"</p>"):(A(S),$(".modal").append("<p class='modalInstructions'>Pista: "+r+" esta en "+p+" y comparte una frontera con "+d)));else"worldCountries"===t?(z(u),$(".modal").append(B())):"usStates"===t&&(-1!=g?(H(g),$(".modal").append(j())):$(".modal").append("<p class='modalInstructions'>"+C+"</p>"))}function A(e){if(0===e.length);else if(1===e.length)d=e[0];else if(2===e.length)d=e.join(" and ");else{if(!e[e.length-1].startsWith("and ")){var t=e.pop();e.push("and "+t)}d=e.join(", ")}}function O(e){const t=[];return e.forEach((function(e){e.name&&t.push(e.name)})),t.join(", ")}function N(e){const t=[];return e.forEach((function(e){e.name&&t.push(e.name+(e.symbol?" ("+e.symbol+")":""))})),t.join(", ")}function E(e){w.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!1,zoomControl:y>500,streetViewControl:!1,fullscreenControl:!1}),$(".modal").modal("show");var a="";a=1===x.length?"Excelente! Encontraste "+e+" en el primer intento!":"Encontraste "+e+" después de "+x.length+" intentos!",M=!0,"worldCountries"===t?($(".modal").html(a+B()),$(".well").html(L)):"usStates"===t&&($(".modal").html(a+j()),$(".well").html(L))}function z(t){const a=e[t];D={flag:a.flag,population:K(a.population),demonym:a.demonym,capital:a.capital,multiple_currencies:a.currencies.length>1,currencies:N(a.currencies),multiple_languages:a.languages.length>1,languages:O(a.languages)}}function B(){return"<p class='modalInstructions'><img class='bonusCountryFlag' src="+D.flag+"></img><br>Población: "+D.population+"<br>"+(D.capital?"Ciudad capital "+D.capital+"<br>":"")+(D.demonym?"Gentilicio: "+D.demonym+"<br>":"")+(D.multiple_currencies?"Monedas: ":"Moneda: ")+D.currencies+"<br>"+(D.multiple_languages?"Idiomas: ":"Idioma: ")+D.languages+"<br>"+C+"</p>"}function H(t){const a=e[t];_={largest_city:a.largest_city,capital:a.capital,population:K(a.population),nickname:a.nickname}}function j(){return"<div class='modalInstructions'>Población: "+_.population+"<br>"+(_.capital?"Capital: "+_.capital+"<br>":"")+"Ciudad más grande: "+_.largest_city+"<br>Alias: "+_.nickname+"<br>"+C+"</div>"}function V(t,a){return e.findIndex(e=>a===("worldCountries"===t?e.alpha2Code:e.abbr))}$(".well").click((function(){var e;"worldCountries"!==t||M||(e=v,w.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!1,zoomControl:y>500,streetViewControl:!1,fullscreenControl:!1,zoom:e,center:k}),M=!0,$(".well").html(L))}))}))},function(e,t){const a=[{name:"Alabama",abbr:"AL",area:"135767SKM",largest_city:"Birmingham",capital:"Montgomery",nickname:"Yellowhammer State",population:4888949},{name:"Alaska",abbr:"AK",area:"1723337SKM",largest_city:"Anchorage",capital:"Juneau",nickname:"Last Frontier",population:738068},{name:"Arizona",abbr:"AZ",area:"113594SKM",largest_city:"Phoenix",capital:"Phoenix",nickname:"Grand Canyon State",population:7123898},{name:"Arkansas",abbr:"AR",area:"52035SKM",largest_city:"Little Rock",capital:"Little Rock",nickname:"Natural State",population:3020327},{name:"California",abbr:"CA",area:"423967SKM",largest_city:"Los Angeles",capital:"Sacramento",nickname:"Golden State",population:39776830},{name:"Colorado",abbr:"CO",area:"103642SKM",largest_city:"Denver",capital:"Denver",nickname:"Centennial State",population:5684203},{name:"Connecticut",abbr:"CT",area:"14357SKM",largest_city:"Bridgeport",capital:"Hartford",nickname:"Constitution State",population:3588683},{name:"Delaware",abbr:"DE",area:"6446SKM",largest_city:"Wilmington",capital:"Dover",nickname:"First State",population:971180},{name:"Florida",abbr:"FL",area:"170312SKM",largest_city:"Jacksonville",capital:"Tallahassee",nickname:"Sunshine State",population:21312211},{name:"Georgia",abbr:"GA",area:"57513SKM",largest_city:"Atlanta",capital:"Atlanta",nickname:"Peach State",population:10545138},{name:"Hawaii",abbr:"HI",area:"6423SKM",largest_city:"Honolulu",capital:"Honolulu",nickname:"Aloha State",population:1426393},{name:"Idaho",abbr:"ID",area:"82643SKM",largest_city:"Boise",capital:"Boise",nickname:"Gem State",population:1753860},{name:"Illinois",abbr:"IL",area:"149995SKM",largest_city:"Chicago",capital:"Springfield",nickname:"Prairie State",population:12768320},{name:"Indiana",abbr:"IN",area:"35826SKM",largest_city:"Indianapolis",capital:"Indianapolis",nickname:"Hoosier State",population:6699629},{name:"Iowa",abbr:"IA",area:"55857SKM",largest_city:"Des Moines",capital:"Des Moines",nickname:"Hawkeye State",population:3160553},{name:"Kansas",abbr:"KS",area:"213100SKM",largest_city:"Wichita",capital:"Topeka",nickname:"Sunflower State",population:2918515},{name:"Kentucky",abbr:"KY",area:"104656SKM",largest_city:"Louisville",capital:"Frankfort",nickname:"Bluegrass State",population:4472265},{name:"Louisiana",abbr:"LA",area:"135659SKM",largest_city:"New Orleans",capital:"Baton Rouge",nickname:"Pelican State",population:4682509},{name:"Maine",abbr:"ME",area:"91633SKM",largest_city:"Portland",capital:"Augusta",nickname:"Pine Tree State",population:1341582},{name:"Maryland",abbr:"MD",area:"32131SKM",largest_city:"Baltimore",capital:"Annapolis",nickname:"Old Line State",population:6079602},{name:"Massachusetts",abbr:"MA",area:"7800SKM",largest_city:"Boston",capital:"Boston",nickname:"Bay State",population:6895917},{name:"Michigan",abbr:"MI",area:"250487SKM",largest_city:"Detroit",capital:"Lansing",nickname:"Great Lakes State",population:9991177},{name:"Oklahoma",abbr:"OK",area:"68595SKM",largest_city:"Oklahoma City",capital:"Oklahoma City",nickname:"Sooner State",population:3940521},{name:"Oregon",abbr:"OR",area:"254799SKM",largest_city:"Portland",capital:"Salem",nickname:"Beaver State",population:4199563},{name:"Pennsylvania",abbr:"PA",area:"119280SKM",largest_city:"Philadelphia",capital:"Harrisburg",nickname:"Keystone State",population:12823989},{name:"Rhode Island",abbr:"RI",area:"1034SKM",largest_city:"Providence",capital:"Providence",nickname:"Ocean State",population:1061712},{name:"South Carolina",abbr:"SC",area:"82933SKM",largest_city:"Charleston",capital:"Columbia",nickname:"Palmetto State",population:5088916},{name:"South Dakota",abbr:"SD",area:"199729SKM",largest_city:"Sioux Falls",capital:"Pierre",nickname:"Mount Rushmore State",population:877790},{name:"Tennessee",abbr:"TN",area:"41235SKM",largest_city:"Nashville",capital:"Nashville",nickname:"Volunteer State",population:6782564},{name:"Texas",abbr:"TX",area:"695662SKM",largest_city:"Houston",capital:"Austin",nickname:"Lone Star State",population:28704330},{name:"Utah",abbr:"UT",area:"82170SKM",largest_city:"Salt Lake City",capital:"Salt Lake City",nickname:"Beehive State",population:3159345},{name:"Minnesota",abbr:"MN",area:"225163SKM",largest_city:"Minneapolis",capital:"St. Paul",nickname:"North Star State",population:5628162},{name:"Mississippi",abbr:"MS",area:"46923SKM",largest_city:"Jackson",capital:"Jackson",nickname:"Magnolia State",population:2982785},{name:"Missouri",abbr:"MO",area:"180540SKM",largest_city:"Kansas City",capital:"Jefferson City",nickname:"Show-Me State",population:6135888},{name:"Montana",abbr:"MT",area:"380831SKM",largest_city:"Billings",capital:"Helena",nickname:"Treasure State",population:1062330},{name:"Nebraska",abbr:"NE",area:"200330SKM",largest_city:"Omaha",capital:"Lincoln",nickname:"Cornhusker State",population:1932549},{name:"Nevada",abbr:"NV",area:"286380SKM",largest_city:"Las Vegas",capital:"Carson City",nickname:"Silver State",population:3056824},{name:"New Hampshire",abbr:"NH",area:"24214SKM",largest_city:"Manchester",capital:"Concord",nickname:"Granite State",population:1350575},{name:"New Jersey",abbr:"NJ",area:"22591SKM",largest_city:"Newark",capital:"Trenton",nickname:"Garden State",population:9032872},{name:"New Mexico",abbr:"NM",area:"314917SKM",largest_city:"Albuquerque",capital:"Santa Fe",nickname:"Land of Enchantment",population:2090708},{name:"New York",abbr:"NY",area:"141297SKM",largest_city:"New York City",capital:"Albany",nickname:"Empire State",population:19862512},{name:"North Carolina",abbr:"NC",area:"139391SKM",largest_city:"Charlotte",capital:"Raleigh",nickname:"Old North State",population:10390149},{name:"North Dakota",abbr:"ND",area:"183108SKM",largest_city:"Fargo",capital:"Bismarck",nickname:"Peace Garden State",population:755238},{name:"Ohio",abbr:"OH",area:"40861SKM",largest_city:"Columbus",capital:"Columbus",nickname:"Buckeye State",population:11694664},{name:"Vermont",abbr:"VT",area:"24906SKM",largest_city:"Burlington",capital:"Montpelier",nickname:"Green Mountain State",population:623960},{name:"Virginia",abbr:"VA",area:"110787SKM",largest_city:"Virginia Beach",capital:"Richmond",nickname:"Old Dominion State",population:8525660},{name:"Washington",abbr:"WA",area:"184661SKM",largest_city:"Seattle",capital:"Olympia",nickname:"Evergreen State",population:7530552},{name:"West Virginia",abbr:"WV",area:"24038SKM",largest_city:"Charleston",capital:"Charleston",nickname:"Mountain State",population:1803077},{name:"Wisconsin",abbr:"WI",area:"169635SKM",largest_city:"Milwaukee",capital:"Madison",nickname:"Badger State",population:5818049},{name:"Wyoming",abbr:"WY",area:"97093SKM",largest_city:"Cheyenne",capital:"Cheyenne",nickname:"Equality State",population:573720},{name:"District of Columbia",abbr:"DC",area:"177SKM",largest_city:"Washington",capital:void 0,nickname:"Nation's Capital",population:703608}];e.exports=a},function(e,t){
/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(e,t){function a(){}a.prototype=t.prototype,e.superClass_=t.prototype,e.prototype=new a,e.prototype.constructor=e}e.exports=function(e){function t(e,a,n){this.marker_=e,this.handCursorURL_=e.handCursorURL,this.labelDiv_=document.createElement("div"),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.eventDiv_=document.createElement("div"),this.eventDiv_.style.cssText=this.labelDiv_.style.cssText,this.eventDiv_.addEventListener("selectstart",(function(){return!1})),this.eventDiv_.addEventListener("dragstart",(function(){return!1})),this.crossDiv_=t.getSharedCross(a)}function n(a){(a=a||{}).labelContent=a.labelContent||"",a.labelAnchor=a.labelAnchor||new e.Point(0,0),a.labelClass=a.labelClass||"markerLabels",a.labelStyle=a.labelStyle||{},a.labelInBackground=a.labelInBackground||!1,void 0===a.labelVisible&&(a.labelVisible=!0),void 0===a.raiseOnDrag&&(a.raiseOnDrag=!0),void 0===a.clickable&&(a.clickable=!0),void 0===a.draggable&&(a.draggable=!1),void 0===a.optimized&&(a.optimized=!1),a.crossImage=a.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",a.handCursor=a.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",a.optimized=!1,this.label=new t(this,a.crossImage,a.handCursor),e.Marker.apply(this,arguments)}return a(t,e.OverlayView),t.getSharedCross=function(e){var a;return void 0===t.getSharedCross.crossDiv&&((a=document.createElement("img")).style.cssText="position: absolute; z-index: 1000002; display: none;",a.style.marginLeft="-8px",a.style.marginTop="-9px",a.src=e,t.getSharedCross.crossDiv=a),t.getSharedCross.crossDiv},t.prototype.onAdd=function(){var a,n,i,o,r,l,s,c=this,p=!1,m=!1,d="url("+this.handCursorURL_+")",u=function(e){e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},g=function(){c.marker_.setAnimation(null)};this.getPanes().markerLayer.appendChild(this.labelDiv_),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_),void 0===t.getSharedCross.processed&&(this.getPanes().markerLayer.appendChild(this.crossDiv_),t.getSharedCross.processed=!0),this.listeners_=[e.event.addDomListener(this.eventDiv_,"mouseover",(function(t){(c.marker_.getDraggable()||c.marker_.getClickable())&&(this.style.cursor="pointer",e.event.trigger(c.marker_,"mouseover",t))})),e.event.addDomListener(this.eventDiv_,"mouseout",(function(t){!c.marker_.getDraggable()&&!c.marker_.getClickable()||m||(this.style.cursor=c.marker_.getCursor(),e.event.trigger(c.marker_,"mouseout",t))})),e.event.addDomListener(this.eventDiv_,"mousedown",(function(t){m=!1,c.marker_.getDraggable()&&(p=!0,this.style.cursor=d),(c.marker_.getDraggable()||c.marker_.getClickable())&&(e.event.trigger(c.marker_,"mousedown",t),u(t))})),e.event.addDomListener(document,"mouseup",(function(t){var n;if(p&&(p=!1,c.eventDiv_.style.cursor="pointer",e.event.trigger(c.marker_,"mouseup",t)),m){if(r){(n=c.getProjection().fromLatLngToDivPixel(c.marker_.getPosition())).y+=20,c.marker_.setPosition(c.getProjection().fromDivPixelToLatLng(n));try{c.marker_.setAnimation(e.Animation.BOUNCE),setTimeout(g,1406)}catch(e){}}c.crossDiv_.style.display="none",c.marker_.setZIndex(a),o=!0,m=!1,t.latLng=c.marker_.getPosition(),e.event.trigger(c.marker_,"dragend",t)}})),e.event.addListener(c.marker_.getMap(),"mousemove",(function(t){var o;p&&(m?(t.latLng=new e.LatLng(t.latLng.lat()-n,t.latLng.lng()-i),o=c.getProjection().fromLatLngToDivPixel(t.latLng),r&&(c.crossDiv_.style.left=o.x+"px",c.crossDiv_.style.top=o.y+"px",c.crossDiv_.style.display="",o.y-=20),c.marker_.setPosition(c.getProjection().fromDivPixelToLatLng(o)),r&&(c.eventDiv_.style.top=o.y+20+"px"),e.event.trigger(c.marker_,"drag",t)):(n=t.latLng.lat()-c.marker_.getPosition().lat(),i=t.latLng.lng()-c.marker_.getPosition().lng(),a=c.marker_.getZIndex(),l=c.marker_.getPosition(),s=c.marker_.getMap().getCenter(),r=c.marker_.get("raiseOnDrag"),m=!0,c.marker_.setZIndex(1e6),t.latLng=c.marker_.getPosition(),e.event.trigger(c.marker_,"dragstart",t)))})),e.event.addDomListener(document,"keydown",(function(t){m&&27===t.keyCode&&(r=!1,c.marker_.setPosition(l),c.marker_.getMap().setCenter(s),e.event.trigger(document,"mouseup",t))})),e.event.addDomListener(this.eventDiv_,"click",(function(t){(c.marker_.getDraggable()||c.marker_.getClickable())&&(o?o=!1:(e.event.trigger(c.marker_,"click",t),u(t)))})),e.event.addDomListener(this.eventDiv_,"dblclick",(function(t){(c.marker_.getDraggable()||c.marker_.getClickable())&&(e.event.trigger(c.marker_,"dblclick",t),u(t))})),e.event.addListener(this.marker_,"dragstart",(function(e){m||(r=this.get("raiseOnDrag"))})),e.event.addListener(this.marker_,"drag",(function(e){m||r&&(c.setPosition(20),c.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))})),e.event.addListener(this.marker_,"dragend",(function(e){m||r&&c.setPosition(0)})),e.event.addListener(this.marker_,"position_changed",(function(){c.setPosition()})),e.event.addListener(this.marker_,"zindex_changed",(function(){c.setZIndex()})),e.event.addListener(this.marker_,"visible_changed",(function(){c.setVisible()})),e.event.addListener(this.marker_,"labelvisible_changed",(function(){c.setVisible()})),e.event.addListener(this.marker_,"title_changed",(function(){c.setTitle()})),e.event.addListener(this.marker_,"labelcontent_changed",(function(){c.setContent()})),e.event.addListener(this.marker_,"labelanchor_changed",(function(){c.setAnchor()})),e.event.addListener(this.marker_,"labelclass_changed",(function(){c.setStyles()})),e.event.addListener(this.marker_,"labelstyle_changed",(function(){c.setStyles()}))]},t.prototype.onRemove=function(){var t;if(this.labelDiv_.parentNode&&(this.labelDiv_.parentNode.removeChild(this.labelDiv_),this.eventDiv_.parentNode.removeChild(this.eventDiv_)),this.listeners_)for(t=0;t<this.listeners_.length;t++)e.event.removeListener(this.listeners_[t])},t.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},t.prototype.setContent=function(){var e=this.marker_.get("labelContent");if(void 0===e.nodeType)this.labelDiv_.innerHTML=e,this.eventDiv_.innerHTML=this.labelDiv_.innerHTML;else{for(;this.labelDiv_.lastChild;)this.labelDiv_.removeChild(this.labelDiv_.lastChild);for(;this.eventDiv_.lastChild;)this.eventDiv_.removeChild(this.eventDiv_.lastChild);this.labelDiv_.appendChild(e),e=e.cloneNode(!0),this.eventDiv_.appendChild(e)}},t.prototype.setTitle=function(){this.eventDiv_.title=this.marker_.getTitle()||""},t.prototype.setStyles=function(){var e,t;for(e in this.labelDiv_.className=this.marker_.get("labelClass"),this.eventDiv_.className=this.labelDiv_.className,this.labelDiv_.style.cssText="",this.eventDiv_.style.cssText="",t=this.marker_.get("labelStyle"))t.hasOwnProperty(e)&&(this.labelDiv_.style[e]=t[e],this.eventDiv_.style[e]=t[e]);this.setMandatoryStyles()},t.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden",void 0!==this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.eventDiv_.style.position=this.labelDiv_.style.position,this.eventDiv_.style.overflow=this.labelDiv_.style.overflow,this.eventDiv_.style.opacity=.01,this.eventDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"',this.eventDiv_.style.filter="alpha(opacity=1)",this.setAnchor(),this.setPosition(),this.setVisible()},t.prototype.setAnchor=function(){var e=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-e.x+"px",this.labelDiv_.style.marginTop=-e.y+"px",this.eventDiv_.style.marginLeft=-e.x+"px",this.eventDiv_.style.marginTop=-e.y+"px"},t.prototype.setPosition=function(e){var t=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());void 0===e&&(e=0),this.labelDiv_.style.left=Math.round(t.x)+"px",this.labelDiv_.style.top=Math.round(t.y-e)+"px",this.eventDiv_.style.left=this.labelDiv_.style.left,this.eventDiv_.style.top=this.labelDiv_.style.top,this.setZIndex()},t.prototype.setZIndex=function(){var e=this.marker_.get("labelInBackground")?-1:1;void 0===this.marker_.getZIndex()?(this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+e,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex):(this.labelDiv_.style.zIndex=this.marker_.getZIndex()+e,this.eventDiv_.style.zIndex=this.labelDiv_.style.zIndex)},t.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none",this.eventDiv_.style.display=this.labelDiv_.style.display},a(n,e.Marker),n.prototype.setMap=function(t){e.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(t)},n}}]);