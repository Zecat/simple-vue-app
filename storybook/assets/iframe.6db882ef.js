var Y=Object.defineProperty,Q=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var L=(e,o,r)=>o in e?Y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,i=(e,o)=>{for(var r in o||(o={}))B.call(o,r)&&L(e,r,o[r]);if(u)for(var r of u(o))j.call(o,r)&&L(e,r,o[r]);return e},f=(e,o)=>Q(e,Z(o));var M=(e,o)=>{var r={};for(var n in e)B.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&u)for(var n of u(e))o.indexOf(n)<0&&j.call(e,n)&&(r[n]=e[n]);return r};import{c as t,A as ee,M as te,r as oe,a as T,o as p,b as g,t as H,n as re,d as ne,e as C,f as c,g as b,h as v,i as E,j as se,p as ae,k as le,l as k,m as ie,q as O,s as pe,u as ce,v as de,w as me,x as ue,y as ge,z as ye,B as he,C as fe,D as be,E as ve,F as ke,G as _e,H as xe,I as we,J as Se}from"./vendor.a314ff1a.js";const Le=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};Le();const Be={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var je=Object.freeze(Object.defineProperty({__proto__:null,parameters:Be},Symbol.toStringTag,{value:"Module"})),Me="/simple-vue-app/storybook/assets/code-brackets.9ef6443e.svg",Te="/simple-vue-app/storybook/assets/colors.ac9401f3.svg",Oe="/simple-vue-app/storybook/assets/comments.f15a6837.svg",He="/simple-vue-app/storybook/assets/direction.94a9917f.svg",Ce="/simple-vue-app/storybook/assets/flow.275142c6.svg",Ee="/simple-vue-app/storybook/assets/plugin.57148314.svg",Pe="/simple-vue-app/storybook/assets/repo.fb4ece47.svg",ze="/simple-vue-app/storybook/assets/stackalt.2ad81543.svg";const Ne={},$e="wrapper";function P(r){var n=r,{components:e}=n,o=M(n,["components"]);return t($e,f(i(i({},Ne),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:"Example/Introduction",mdxType:"Meta"}),t("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:Ee,alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:ze,alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:Te,alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:Ce,alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:Pe,alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:He,alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:Me,alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:Oe,alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"src/stories/Introduction.stories.mdx")))}P.isMDXComponent=!0;const z=()=>{throw new Error("Docs-only story")};z.parameters={docsOnly:!0};const d={title:"Example/Introduction",includeStories:["__page"]},Ie={};d.parameters=d.parameters||{};d.parameters.docs=f(i({},d.parameters.docs||{}),{page:()=>t(ee,{mdxStoryNameToKey:Ie,mdxComponentAnnotations:d},t(P,null))});var Ae=Object.freeze(Object.defineProperty({__proto__:null,__page:z,default:d},Symbol.toStringTag,{value:"Module"}));var y=(e,o)=>{const r=e.__vccOpts||e;for(const[n,s]of o)r[n]=s;return r};const N={name:"MyButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:o}){return e=oe(e),{classes:T(()=>({"storybook-button":!0,"storybook-button-primary":e.primary,"storybook-button-secondary":!e.primary,[`storybook-button-${e.size||"medium"}`]:!0})),style:T(()=>({backgroundColor:e.backgroundColor})),onClick(){o("click")}}}};function Ve(e,o,r,n,s,a){return p(),g("button",{type:"button",class:re(n.classes),style:ne(n.style),onClick:o[0]||(o[0]=(...l)=>n.onClick&&n.onClick(...l))},H(r.label),7)}var _=y(N,[["render",Ve]]);N.__docgenInfo={displayName:"MyButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};var We={parameters:{storySource:{source:`import MyButton from './Button.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args }
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Example/Button",component:_,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}};const h=e=>({components:{MyButton:_},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),$=h.bind({});$.args={primary:!0,label:"Button"};const I=h.bind({});I.args={label:"Button"};const A=h.bind({});A.args={size:"large",label:"Button"};const V=h.bind({});V.args={size:"small",label:"Button"};const De=["Primary","Secondary","Large","Small"];var Fe=Object.freeze(Object.defineProperty({__proto__:null,default:We,Primary:$,Secondary:I,Large:A,Small:V,__namedExportsOrder:De},Symbol.toStringTag,{value:"Module"}));const W={name:"MyHeader",components:{MyButton:_},props:{user:{type:Object}},emits:["login","logout","createAccount"]},qe={class:"wrapper"},Ue=E('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1);function Re(e,o,r,n,s,a){const l=C("my-button");return p(),g("header",null,[c("div",qe,[Ue,c("div",null,[r.user?(p(),b(l,{key:0,size:"small",label:"Log out",onClick:o[0]||(o[0]=m=>e.$emit("logout"))})):v("",!0),r.user?v("",!0):(p(),b(l,{key:1,size:"small",label:"Log in",onClick:o[1]||(o[1]=m=>e.$emit("login"))})),r.user?v("",!0):(p(),b(l,{key:2,primary:"",size:"small",label:"Sign up",onClick:o[2]||(o[2]=m=>e.$emit("createAccount"))}))])])])}var x=y(W,[["render",Re]]);W.__docgenInfo={displayName:"MyHeader",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};var Xe={parameters:{storySource:{source:`import MyHeader from './Header.vue'

export default {
  title: 'Example/Header',
  component: MyHeader,
}

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyHeader },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args }
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: null,
}
`,locationsMap:{"logged-in":{startLoc:{col:17,line:8},endLoc:{col:2,line:18},startBody:{col:17,line:8},endBody:{col:2,line:18}},"logged-out":{startLoc:{col:17,line:8},endLoc:{col:2,line:18},startBody:{col:17,line:8},endBody:{col:2,line:18}}}}},title:"Example/Header",component:x};const D=e=>({components:{MyHeader:x},setup(){return i({},e)},template:'<my-header :user="user" />'}),w=D.bind({});w.args={user:{}};const S=D.bind({});S.args={user:null};const Ge=["LoggedIn","LoggedOut"];var Je=Object.freeze(Object.defineProperty({__proto__:null,default:Xe,LoggedIn:w,LoggedOut:S,__namedExportsOrder:Ge},Symbol.toStringTag,{value:"Module"}));const Ke=e=>(ae("data-v-24d959e8"),e=e(),le(),e),Ye={class:"greetings"},Qe={class:"green"},Ze=Ke(()=>c("h3",null,[k(" You\u2019ve successfully created a project with "),c("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite"),k(" + "),c("a",{target:"_blank",href:"https://vuejs.org/"},"Vue 3"),k(". What's next? ")],-1)),F=se({props:{msg:null},setup(e){return(o,r)=>(p(),g("div",Ye,[c("h1",Qe,H(e.msg),1),Ze]))}});var q=y(F,[["__scopeId","data-v-24d959e8"]]);F.__docgenInfo={exportName:"default",displayName:"HelloWorld",description:"",tags:{},props:[{name:"msg",required:!0,type:{name:"string"}}]};var et={parameters:{storySource:{source:`import HelloWorld from '../components/HelloWorld.vue'

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  argTypes: {},
}

const Template = (args: string) => ({
  components: { HelloWorld },
  setup() {
    return { args }
  },
  template: '<hello-world />',
})

export const Primary = Template.bind({})
`,locationsMap:{primary:{startLoc:{col:17,line:9},endLoc:{col:2,line:15},startBody:{col:17,line:9},endBody:{col:2,line:15}}}}},title:"Example/HelloWorld",component:q,argTypes:{}};const tt=e=>({components:{HelloWorld:q},setup(){return{args:e}},template:"<hello-world />"}),ot=tt.bind({}),rt=["Primary"];var nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,Primary:ot,__namedExportsOrder:rt},Symbol.toStringTag,{value:"Module"}));const U={name:"MyPage",components:{MyHeader:x},props:{user:{type:Object}},emits:["login","logout","createAccount"]},st=E('<section><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path id="a" d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>',1);function at(e,o,r,n,s,a){const l=C("my-header");return p(),g("article",null,[ie(l,{user:r.user,onLogin:o[0]||(o[0]=m=>e.$emit("login")),onLogout:o[1]||(o[1]=m=>e.$emit("logout")),onCreateAccount:o[2]||(o[2]=m=>e.$emit("createAccount"))},null,8,["user"]),st])}var R=y(U,[["render",at]]);U.__docgenInfo={displayName:"MyPage",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"login"},{name:"logout"},{name:"createAccount"}]};var lt={parameters:{storySource:{source:`import MyPage from './Page.vue'
import * as HeaderStories from './Header.stories'

export default {
  title: 'Example/Page',
  component: MyPage,
}

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyPage },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user }
  },
  // Then, those values can be accessed directly in the template
  template: '<my-page :user="user" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
`,locationsMap:{"logged-in":{startLoc:{col:17,line:9},endLoc:{col:2,line:19},startBody:{col:17,line:9},endBody:{col:2,line:19}},"logged-out":{startLoc:{col:17,line:9},endLoc:{col:2,line:19},startBody:{col:17,line:9},endBody:{col:2,line:19}}}}},title:"Example/Page",component:R};const X=e=>({components:{MyPage:R},setup(){return{user:e.user}},template:'<my-page :user="user" />'}),G=X.bind({});G.args=i({},w.args);const J=X.bind({});J.args=i({},S.args);const it=["LoggedIn","LoggedOut"];var pt=Object.freeze(Object.defineProperty({__proto__:null,default:lt,LoggedIn:G,LoggedOut:J,__namedExportsOrder:it},Symbol.toStringTag,{value:"Module"}));function K(e){return{"/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Introduction.stories.mdx":Ae,"/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Button.stories.js":Fe,"/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Header.stories.js":Je,"/home/runner/work/simple-vue-app/simple-vue-app/src/stories/HelloWorld.stories.ts":nt,"/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Page.stories.js":pt}[e]}Object.assign(K,{keys:()=>["/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Introduction.stories.mdx","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Button.stories.js","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Header.stories.js","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/HelloWorld.stories.ts","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Page.stories.js"],resolve:e=>({"/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Button.stories.js":"./src/stories/Button.stories.js","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Header.stories.js":"./src/stories/Header.stories.js","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/HelloWorld.stories.ts":"./src/stories/HelloWorld.stories.ts","/home/runner/work/simple-vue-app/simple-vue-app/src/stories/Page.stories.js":"./src/stories/Page.stories.js"})[e]});function ct(e){e(K,{hot:!1},!1)}const dt=[ge,ye,he,fe,be,ve,ke,_e,xe,we,je].filter(Boolean);dt.forEach(e=>{Object.keys(e).forEach(o=>{const r=e[o];switch(o){case"args":case"argTypes":return ue.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(n=>me(n,!1));case"loaders":return r.forEach(n=>de(n,!1));case"parameters":return O(i({},r),!1);case"argTypesEnhancers":return r.forEach(n=>ce(n));case"argsEnhancers":return r.forEach(n=>pe(n));case"globals":case"globalTypes":{const n={};return n[o]=r,O(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});ct(Se);
//# sourceMappingURL=iframe.6db882ef.js.map
