(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{398:function(e,t,a){"use strict";a.r(t);var s=a(45),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"如何彻底重启docker实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何彻底重启docker实例"}},[e._v("#")]),e._v(" 如何彻底重启Docker实例")]),e._v(" "),a("blockquote",[a("p",[e._v("https://docs.tibco.com/pub/mash-local/4.1.1/doc/html/docker/GUID-BD850566-5B79-4915-987E-430FC38DAAE4.html")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Stop the container(s) using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose down\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Delete all containers using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker rm -f $(docker ps -a -q)\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Delete all volumes using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker volume rm $(docker volume ls -q)\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Restart the containers using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose up -d\n")])])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);