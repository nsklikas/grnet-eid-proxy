(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(75)),o={id:"saml_service_providers",title:"SAML Service Providers"},c={unversionedId:"saml_service_providers",id:"saml_service_providers",isDocsHomePage:!1,title:"SAML Service Providers",description:"SAML2 Service Providers",source:"@site/docs/saml_service_providers.md",slug:"/saml_service_providers",permalink:"/grnet-eid-proxy/docs/saml_service_providers",version:"current",sidebar:"someSidebar",previous:{title:"OpenID Connect Clients",permalink:"/grnet-eid-proxy/docs/openid"},next:{title:"References",permalink:"/grnet-eid-proxy/docs/references"}},d=[{value:"SAML2 Service Providers",id:"saml2-service-providers",children:[]},{value:"Metadata registration",id:"metadata-registration",children:[]},{value:"IdP Metadata",id:"idp-metadata",children:[]},{value:"SP Metadata",id:"sp-metadata",children:[]}],s={rightToc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"saml2-service-providers"},"SAML2 Service Providers"),Object(i.b)("p",null,"A web-based application can enable authentication via the GRNET eID Proxy by connecting as a SAML Service Provider (SP).\nUsers of the application will be redirected to the GRNET eID Proxy in order to authenticate, and the Proxy can authenticate them using any of the supported backend authentication mechanisms, including the eIDAS-Node Infrastructure.\nOnce the user is authenticated, the GRNET eID Proxy will return a SAML assertion to the application containing information about the authenticated user."),Object(i.b)("h2",{id:"metadata-registration"},"Metadata registration"),Object(i.b)("p",null,"SAML authentication relies on the use of metadata.\nBoth parties (the web-based application as a SP and the GRNET eID Proxy as an IdP) need to exchange metadata in order to know and trust each other.\nThe metadata include information such as the location of the service endpoints that need to be invoked, as well as the certificates that will be used to sign SAML messages.\nThe format of the exchanged metadata should be based on the XML-based SAML 2.0 specification.\nUsually, it is not required to manually create such an XML document, as this is automatically generated by all major SAML 2.0 SP software solutions (e.g., Shibboleth, SimpleSAMLphp, and mod_auth_mellon).\nIt is important that the metadata can be retrieved over HTTPS using a browser-friendly SSL certificate, i.e. issued by a trusted certificate authority."),Object(i.b)("h2",{id:"idp-metadata"},"IdP Metadata"),Object(i.b)("p",null,"The IdP metadata of the GRNET eID Proxy are available on a dedicated URL for each environment listed in Table 3."),Object(i.b)("p",null,"Table 3. GRNET eID Proxy IdP metadata endpoints"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test environment"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"https://eid-proxy-demo.aai-dev.grnet.gr/Saml2IDP/proxy.xml"))))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Preproduction environment"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"https://eid-proxy.aai-dev.grnet.gr/Saml2IDP/proxy.xml"))))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Production environment"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"https://eid-proxy.aai.grnet.gr/Saml2IDP/proxy.xml"))))),Object(i.b)("h2",{id:"sp-metadata"},"SP Metadata"),Object(i.b)("p",null,"Metadata provided by the SP should contain a descriptive name of the service that the SP represents in at least English.\nIt is recommended to also provide the name in other languages which are commonly used in the geographic scope of the deployment.\nThe name should be placed in the ",Object(i.b)("inlineCode",{parentName:"p"},"<md:ServiceName>")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"<md:AttributeConsumingService>")," container.\nIt is recommended that the ",Object(i.b)("inlineCode",{parentName:"p"},"<md:IDPSSODescriptor>")," element included in the SP metadata contains both an AuthnRequestsSigned and an WantAssertionsSigned attribute set to true.\nThe SP metadata should also contain contact information for support and for a technical contact.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"<md:EntityDescriptor>")," element should contain both a ",Object(i.b)("inlineCode",{parentName:"p"},"<md:ContactPerson>"),' element with a contactType of "support" and a ',Object(i.b)("inlineCode",{parentName:"p"},"<md:ContactPerson>"),' element with a contactType of "technical".\nThe ',Object(i.b)("inlineCode",{parentName:"p"},"<md:ContactPerson>")," elements should contain at least one ",Object(i.b)("inlineCode",{parentName:"p"},"<md:EmailAddress>"),".\nThe support address may be used for generic support questions about the service, while the technical contact may be contacted regarding technical interoperability problems.\nThe technical contact must be responsible for the technical operation of the service represented by the SP."))}b.isMDXComponent=!0}}]);