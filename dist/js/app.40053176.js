(function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],d=0,h=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},1832:function(e,t,a){"use strict";a("6247")},"1f70":function(e,t,a){},"24ff":function(e,t,a){"use strict";a("94f6")},3007:function(e,t,a){},3421:function(e,t,a){},6247:function(e,t,a){},"85ec":function(e,t,a){},"87d2":function(e,t,a){"use strict";a("3007")},"94f6":function(e,t,a){},"9a5f":function(e,t,a){"use strict";a("3421")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.1b04fd78.svg"},a9b4:function(e,t,a){},c4d1:function(e,t,a){"use strict";a("1f70")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("TheHeader"),a("AppView")],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("router-view")],1)},c=[],o={name:"AppView"},l=o,u=a("2877"),d=a("6544"),h=a.n(d),p=a("f6c4"),v=Object(u["a"])(l,i,c,!1,null,null,null),f=v.exports;h()(v,{VMain:p["a"]});var m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{staticClass:"header",attrs:{app:"",elevation:"0",color:"white"}},[r("div",{staticClass:"border-bottom"},[r("v-container",[r("div",{staticClass:"header-top"},[r("v-img",{staticClass:"logo-img",attrs:{src:a("9b19"),contain:"",height:"70",width:"240"}}),r("TheSearchBar")],1)])],1),r("TheMenu")],1)},g=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-tabs",{staticClass:"tabs"},[a("v-tab",{staticClass:"tab-item",on:{click:e.switchToCharacters}},[e._v("All Characters")]),a("v-tab",{staticClass:"tab-item",on:{click:e.switchToFavourites}},[e._v("Favorites")])],1)],1)},b=[],C=r["a"].extend({name:"TheMenu",methods:{switchToCharacters:function(){this.$store.commit("switchPage","characters")},switchToFavourites:function(){this.$store.commit("switchPage","favorites")}}}),_=C,I=(a("87d2"),a("a523")),x=a("71a3"),w=a("fe57"),$=Object(u["a"])(_,y,b,!1,null,null,null),T=$.exports;h()($,{VContainer:I["a"],VTab:x["a"],VTabs:w["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{staticClass:"search-bar"},[a("div",{staticClass:"search-label"},[a("p",[e._v("Search by")])]),a("v-select",{staticClass:"search-select",attrs:{items:e.items,outlined:"","menu-props":{bottom:!0,offsetY:!0}},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchData.type,callback:function(t){e.$set(e.searchData,"type",t)},expression:"searchData.type"}}),a("v-text-field",{staticClass:"search-textfield",attrs:{outlined:"","append-icon":"mdi-magnify"},on:{"click:append":e.search,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchData.value,callback:function(t){e.$set(e.searchData,"value",t)},expression:"searchData.value"}})],1)},k=[],O=r["a"].extend({name:"TheSearchBar",components:{},data:function(){return{searchData:{type:"name",value:""},items:[{text:"Name",value:"name",selected:!0},{text:"Identifier",value:"id"},{text:"Episode",value:"ep"}]}},methods:{search:function(){""===this.searchData.value&&(this.searchData.type="name"),this.$store.commit("changeSearchData",this.searchData)}}}),S=O,j=(a("9a5f"),a("4bd4")),B=a("b974"),V=a("8654"),F=Object(u["a"])(S,D,k,!1,null,null,null),L=F.exports;h()(F,{VForm:j["a"],VSelect:B["a"],VTextField:V["a"]});var E=r["a"].extend({name:"TheHeader",components:{TheMenu:T,TheSearchBar:L}}),P=E,q=(a("e4ab"),a("40dc")),M=a("adda"),N=Object(u["a"])(P,m,g,!1,null,null,null),A=N.exports;h()(N,{VAppBar:q["a"],VContainer:I["a"],VImg:M["a"]});var R=r["a"].extend({name:"App",components:{AppView:f,TheHeader:A},data:function(){return{}}}),Q=R,H=(a("034f"),a("7496")),J=Object(u["a"])(Q,s,n,!1,null,null,null),G=J.exports;h()(J,{VApp:H["a"]});var Y=a("8c4f"),z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.$apollo.queries.characters.loading?e._e():a("CharactersList",{attrs:{characters:e.dataToDispaly}}),a("v-container",[!e.$apollo.queries.characters.loading&&e.paginationLength>1?a("v-pagination",{staticClass:"pagination",attrs:{length:e.paginationLength,"total-visible":7,"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},on:{input:function(t){return e.changePage(e.page)}},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1)],1)},K=[],U=a("8785"),W=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"responsive-list"},[a("div",{staticClass:"responsive-box"},["characters"===e.$store.state.switch&&null===e.characters[0].id?a("v-container",[a("p",{staticClass:"text-center"},[e._v("no results")])]):e._e(),"favorites"===e.$store.state.switch&&null===e.characters[0].id||e.controll?a("v-container",[a("p",{staticClass:"text-center"},[e._v("no favorites")])]):a("div",{staticClass:"table-header"},[a("v-container",[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"col-img"},[e._v(" Photo ")]),a("div",{staticClass:"col-text"},[e._v(" Character ID ")]),a("div",{staticClass:"col-text"},[e._v(" Name ")]),a("div",{staticClass:"col-text"},[e._v(" Gender ")]),a("div",{staticClass:"col-text"},[e._v(" Species ")]),a("div",{staticClass:"col-text"},[e._v(" Last Episode ")]),"characters"===e.$store.state.switch?a("div",{staticClass:"col-text"},[e._v(" Add To Favorites ")]):a("div",{staticClass:"col-text"},[e._v(" Remove From Favorites ")])])])],1),e._l(e.characters,(function(t){return a("CharactersListItem",{key:t.id,attrs:{item:t},on:{deleteItem:e.deleteThisItem}})}))],2)])}),X=[],Z=(a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"border-bottom"},[a("v-container",{staticClass:"item-row"},[a("div",{staticClass:"col-img"},[a("v-img",{attrs:{height:"68",width:"43",src:e.item.image}})],1),a("div",{staticClass:"col-text"},[e._v(" "+e._s(e.item.id)+" ")]),a("div",{staticClass:"col-text"},[e._v(" "+e._s(e.item.name)+" ")]),a("div",{staticClass:"col-text"},["Male"===e.item.gender?a("v-icon",[e._v(" mdi-gender-male ")]):e._e(),"Female"===e.item.gender?a("v-icon",[e._v(" mdi-gender-female ")]):e._e(),"Genderless"===e.item.gender?a("v-icon",[e._v(" mdi-close ")]):e._e(),"unknown"===e.item.gender?a("v-icon",[e._v(" mdi-minus ")]):e._e(),e._v(" "+e._s(e.item.gender)+" ")],1),a("div",{staticClass:"col-text"},[e._v(" "+e._s(e.item.species)+" ")]),a("div",{staticClass:"col-text"},[e._v(" "+e._s(e.item.episode.slice(-1)[0].episode)+" ")]),"characters"===e.$store.state.switch?a("div",{staticClass:"col-text"},[e.check(e.item.id)?a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"fav-btn",attrs:{color:"primary"}},"v-btn",s,!1),r),[a("v-icon",[e._v("mdi-star")])],1)]}}],null,!1,3766765135)},[a("span",[e._v("In your favorites")])]):e._e(),e.check(e.item.id)?e._e():a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"fav-btn",attrs:{outlined:"",color:"primary"},on:{click:function(t){return e.addToFavorites(e.item.id)}}},"v-btn",s,!1),r),[a("v-icon",[e._v("mdi-star")])],1)]}}],null,!1,3009613557)},[a("span",[e._v("Add to favorites")])])],1):a("div",{staticClass:"col-text"},[a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"fav-btn",attrs:{color:"primary"},on:{click:function(t){return e.removeFromFavorites(e.item.id)}}},"v-btn",s,!1),r),[a("v-icon",[e._v("mdi-star")])],1)]}}])},[a("span",[e._v("Remove from favorites")])])],1)])],1)}),ee=[],te=(a("caad"),a("2532"),r["a"].extend({name:"CharactersListItem",data:function(){return{favoritesCharactersIds:[]}},created:function(){this.favoritesCharactersIds=this.$store.state.favoritesCharactersIds},props:{item:Object},methods:{check:function(e){return this.favoritesCharactersIds.includes(e)},addToFavorites:function(e){this.favoritesCharactersIds.push(e),console.log(e),this.saveData()},removeFromFavorites:function(e){var t=this.favoritesCharactersIds.indexOf(e);t>-1&&this.favoritesCharactersIds.splice(t,1),this.$emit("deleteItem",e),this.saveData()},saveData:function(){this.$store.commit("changeFavoritesCharactersIds",this.favoritesCharactersIds),window.localStorage.setItem("FavoritesCharactersIds",JSON.stringify(this.favoritesCharactersIds))}}})),ae=te,re=(a("c4d1"),a("8336")),se=a("132d"),ne=a("3a2f"),ie=Object(u["a"])(ae,Z,ee,!1,null,null,null),ce=ie.exports;h()(ie,{VBtn:re["a"],VContainer:I["a"],VIcon:se["a"],VImg:M["a"],VTooltip:ne["a"]});var oe=r["a"].extend({name:"CharactersList",components:{CharactersListItem:ce},data:function(){return{controll:!1}},props:{characters:Array},methods:{deleteThisItem:function(e){if(console.log("start"),console.log(this.characters),console.log(this.characters.length),this.characters.length<2)this.controll=!0;else for(var t=0;t<this.characters.length;t++)if(this.characters[t].id==e){this.characters.splice(t,1);break}console.log("fin"),console.log(this.characters)}}}),le=oe,ue=(a("1832"),Object(u["a"])(le,W,X,!1,null,null,null)),de=ue.exports;h()(ue,{VContainer:I["a"]});var he,pe,ve,fe,me=a("9530"),ge=a.n(me),ye=r["a"].extend({name:"CharactersView",components:{CharactersList:de},data:function(){return{page:1,dataToDispaly:Array,characters:Object,filterName:"",filterId:Number,character:Object,episodes:Array,filterEpisode:String,paginationLength:Number,charactersByIds:[],charactersByIdsList:[]}},apollo:{characters:{query:ge()(he||(he=Object(U["a"])(["\n        query characters($page: Int!, $filterName: String!) {\n          characters(\n            page: $page\n\n            filter: { name: $filterName }\n          ) {\n            info {\n              pages\n              count\n            }\n            results {\n              id\n              name\n              image\n              gender\n              episode {\n                episode\n              }\n              species\n            }\n          }\n        }\n      "]))),variables:{page:1,filterName:""},result:function(e){var t=e.data;this.dataToDispaly=t.characters.results,this.paginationLength=t.characters.info.pages},errorPolicy:"all"},character:{query:ge()(pe||(pe=Object(U["a"])(["\n        query character($filterId: ID!) {\n          character(id: $filterId) {\n            id\n            name\n            image\n            gender\n            episode {\n              episode\n            }\n            species\n          }\n        }\n      "]))),variables:{filterId:1},errorPolicy:"all"},episodes:{query:ge()(ve||(ve=Object(U["a"])(["\n        query episodes($filterEpisode: String!) {\n          episodes(page: 1, filter: { episode: $filterEpisode }) {\n            results {\n              episode\n              characters {\n                id\n                name\n                image\n                gender\n                episode {\n                  episode\n                }\n                species\n              }\n            }\n          }\n        }\n      "]))),variables:{filterEpisode:"s01e01"},errorPolicy:"all"},charactersByIds:{query:ge()(fe||(fe=Object(U["a"])(["\n        query charactersByIds($ids: [ID!]!) {\n          charactersByIds(ids: $ids) {\n            id\n            name\n            image\n            gender\n            episode {\n              episode\n            }\n            species\n          }\n        }\n      "]))),variables:function(){return{ids:this.charactersByIdsList}},errorPolicy:"all",skip:function(){return this.skipQueryCharacters}}},created:function(){var e=this;this.charactersByIdsList=JSON.parse(window.localStorage.getItem("FavoritesCharactersIds")),console.log(this.charactersByIdsList),null!==this.charactersByIdsList&&(this.$store.commit("changeFavoritesCharactersIds",this.charactersByIdsList),this.$apollo.queries.charactersByIds.skip=!1,this.$apollo.queries.charactersByIds.refetch()),this.$store.subscribe((function(t,a){console.log(t),e.paginationLength=1,"changeFavoritesCharactersIds"===t.type&&(e.charactersByIdsList=e.$store.state.favoritesCharactersIds,e.$apollo.queries.charactersByIds.skip=!1),"switchPage"===t.type&&("characters"===t.payload&&e.$apollo.queries.characters.fetchMore({updateQuery:function(t,a){var r=a.fetchMoreResult;return r?(e.dataToDispaly=r.characters.results,e.paginationLength=r.characters.info.pages,r):t}}),"favorites"===t.payload&&null!==e.charactersByIds&&(e.dataToDispaly=e.charactersByIds),"favorites"===t.payload&&null===e.charactersByIds&&(e.dataToDispaly=[])),"changeSearchData"===t.type&&("ep"===t.payload.type&&(e.filterEpisode=t.payload.value,console.log("up"),e.$apollo.queries.episodes.fetchMore({variables:{filterEpisode:e.filterEpisode},updateQuery:function(t,a){var r=a.fetchMoreResult;return r?(e.dataToDispaly=t.episodes.results[0].characters,console.log(r),null!==r.episodes?r:void(null===r.episodes&&(e.dataToDispaly=e))):(e.dataToDispaly=t,t)}})),"id"===t.payload.type&&(e.filterId=t.payload.value,e.paginationLength=1,e.$apollo.queries.character.fetchMore({variables:{filterId:e.filterId},updateQuery:function(t,a){var r=a.fetchMoreResult;return r?(e.dataToDispaly=[r.character],console.log(r),null!==r.character?r:void(null===r.character&&(e.dataToDispaly=[]))):(e.dataToDispaly=[t.character],t)}})),"name"===t.payload.type&&(e.filterName=t.payload.value,e.$apollo.queries.characters.fetchMore({variables:{filterName:e.filterName},updateQuery:function(t,a){var r=a.fetchMoreResult;return r?(e.page=1,null!==r.characters?r:void(null===r.characters&&(e.dataToDispaly=[]))):t}})))}))},methods:{changePage:function(e){this.$apollo.queries.characters.fetchMore({variables:{page:this.page,filterName:this.filterName},updateQuery:function(e,t){var a=t.fetchMoreResult;return a||e}})}}}),be=ye,Ce=(a("24ff"),a("891e")),_e=Object(u["a"])(be,z,K,!1,null,null,null),Ie=_e.exports;h()(_e,{VContainer:I["a"],VPagination:Ce["a"]}),r["a"].use(Y["a"]);var xe=[{path:"/",name:"Home",component:Ie}],we=new Y["a"]({mode:"history",base:"/",routes:xe}),$e=we,Te=a("f309");r["a"].use(Te["a"]);var De=new Te["a"]({theme:{themes:{light:{primary:"#11B0C8"}}}}),ke=a("2c82"),Oe=a("522d"),Se=a("2f62");r["a"].use(Se["a"]);var je=new Se["a"].Store({state:{searchData:{type:"",value:""},favoritesCharactersIds:[],error:!1,switch:"characters"},getters:{getSearchData:function(e){return e.searchData},getFavoritesCharactersIds:function(e){return e.favoritesCharactersIds}},mutations:{changeSearchData:function(e,t){e.searchData=t},changeFavoritesCharactersIds:function(e,t){e.favoritesCharactersIds=t},error:function(e,t){e.error=t},switchPage:function(e,t){e.switch=t}},actions:{}});r["a"].config.productionTip=!1;var Be=new ke["a"]({uri:"https://rickandmortyapi.com/graphql",onError:function(e){console.log(e)}});r["a"].use(Oe["a"]);var Ve=new Oe["a"]({defaultClient:Be});new r["a"]({router:$e,store:je,vuetify:De,apolloProvider:Ve,render:function(e){return e(G)}}).$mount("#app")},e4ab:function(e,t,a){"use strict";a("a9b4")}});
//# sourceMappingURL=app.40053176.js.map