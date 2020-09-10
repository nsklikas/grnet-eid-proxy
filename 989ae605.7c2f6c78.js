(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var o=n(2),i=n(6),r=(n(0),n(75)),a={id:"services",title:"Services"},s={unversionedId:"services",id:"services",isDocsHomePage:!1,title:"Services",description:"This section provides information about connecting services to the GRNET eID Proxy in order to enable authentication through the eIDAS-Node infrastructure.",source:"@site/docs/services.md",slug:"/services",permalink:"/grnet-eid-proxy/docs/services",version:"current",sidebar:"someSidebar",previous:{title:"High-level architecture",permalink:"/grnet-eid-proxy/docs/high_level_architecture"},next:{title:"OpenID Connect Clients",permalink:"/grnet-eid-proxy/docs/openid"}},c=[{value:"General Information",id:"general-information",children:[]}],l={rightToc:c};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section provides information about connecting services to the GRNET eID Proxy in order to enable authentication through the eIDAS-Node infrastructure."),Object(r.b)("h2",{id:"general-information"},"General Information"),Object(r.b)("p",null,"As already stated, the GRNET eID Proxy supports both OpenID Connect and SAML 2.0. Regardless of the protocol, SPs generally need to provide the following information in order to connect their service to the Proxy:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Name of the service"),Object(r.b)("li",{parentName:"ol"},"Short description"),Object(r.b)("li",{parentName:"ol"},"Privacy statement URL including list of required user attributes"),Object(r.b)("li",{parentName:"ol"},"Technical contact address(es)"),Object(r.b)("li",{parentName:"ol"},"Security contact address(es)"),Object(r.b)("li",{parentName:"ol"},"Logo URL (if available)"),Object(r.b)("li",{parentName:"ol"},"Protocol-specific endpoints")),Object(r.b)("p",null,"The integration follows a two-step process:"),Object(r.b)("h4",{id:"step-1"},"Step 1."),Object(r.b)("p",null,"The SP is registered with the ",Object(r.b)("strong",{parentName:"p"},"preproduction")," instance of the GRNET eID Proxy to allow testing eIDAS authentication using test natural/legal person account credentials. Note that while the preproduction instance has identical functionality to the production instance, no information is shared between the two systems."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It should be noted that the SP can also be registered with the test instance of the GRNET eID Proxy when testing new features that are not available in (pre)production yet. As with the preproduction instance, the test instance allows for testing eIDAS authentication using test natural/legal person account credentials.")),Object(r.b)("h4",{id:"step-2"},"Step 2."),Object(r.b)("p",null,"The SP is registered with the ",Object(r.b)("strong",{parentName:"p"},"production")," instance of the GRNET eID Proxy. The production instance of the proxy is connected with the production instance of the Greek eIDAS Node which, in turn, is connected to a number of production eIDAS Nodes of other Member States. This allows European natural persons/legal entities to access the SP. This requires that the SP has been thoroughly tested during Step 1."),Object(r.b)("p",null,"Technical information about the SP integration in the case of OpenID Connect and SAML can be found in the protocol-specific sections that follow."))}h.isMDXComponent=!0}}]);