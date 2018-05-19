
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en-us">
<head id="Head1"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"fb7f69aa38","applicationID":"51883821","transactionName":"ZFNUMEVQCxdRWxFbX10ZdzdnHgMFU1EJW0RaU0VLVlUTBV5bAEFVUkRVDBlQFhRI","queueTime":0,"applicationTime":44,"ttGuid":"F14EC1AC8765223B","agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,t){s[t]=o(d+t,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(l+"tracer",[f.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],n),e}finally{c.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||"feature",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c("mark",["onload",a()+h.offset],null,"api");var n=d.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e("handle"),f=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" /><meta property="og:title" content="camping and tour reservation information - CALIFORNIA STATE PARKS" /><meta property="og:type" content="website" /><meta property="og:image" content="http://dev1.usedirect.com/Californiav2Saturn/themes/California/logo.png" /><meta property="og:url" content="http://dev1.usedirect.com/Californiav2Saturn" /><meta property="og:site_name" content="CALIFORNIA STATE PARKS" /><meta property="og:description" content="California , camping and tour reservation information" /><meta property="article:tag" content="CALIFORNIA STATE PARKS" /><meta property="article:tag" content="Build A Trip" /><link id="calcss" rel="stylesheet" href="https://cali-content.usedirect.com/themes/California/Styles/jquery-ui.min.css" />

    
    <!-- Bootstrap -->
    
        <link href="https://cali-content.usedirect.com/styles/bootstrap.css" rel="stylesheet" />

        
        <!-- Bootstrap Datepicker -->
        <link href="https://cali-content.usedirect.com/styles/bootstrap-datetimepicker.css" rel="stylesheet" />
        <link href="https://cali-content.usedirect.com/styles/bootstrap-datetimepicker-standalone.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cali-content.usedirect.com/styles/bootstrap-select.css" />
        <link rel="stylesheet" href="https://cali-content.usedirect.com/styles/jquery.mCustomScrollbar.css" />
        
        <!-- Lato Font -->
        <link href='//fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500,700" rel="stylesheet" type="text/css">



        <!-- CSS Animations -->
        <link href="https://cali-content.usedirect.com/styles/animate.css" type="text/css" rel="stylesheet" />
        <script src="https://cali-content.usedirect.com/scripts/jquery.min.js"></script>
        


        

        


        <link href="https://cali-content.usedirect.com/multiselect/jquery.multiselect.css" rel="stylesheet" />
        <link href="https://cali-content.usedirect.com/multiselect/style.css" rel="stylesheet" />
        <link href="https://cali-content.usedirect.com/multiselect/prettify.css" rel="stylesheet" />
        
        
        <script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />

        

        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.21exp&key=AIzaSyBpAmDdpk-2-HQo0m7gNUaaV98zFF4ynwI&libraries=places"></script>
        


    
    <style>
        .mapboxgl-ctrl-compass {
            display: none !important;
        }


        .mapboxgl-popup-content div.pop_lef_img_box {
            width: 35%;
            float: left;
            margin: 7px 13px;
        }

            .mapboxgl-popup-content div.pop_lef_img_box img {
                width: 130px;
                height: 130px;
                max-width: 100%;
            }

        .mapboxgl-popup-content div.pop_rig_img_box {
            width: 56%;
            float: left;
        }

        .messageBox {
            margin: 1em auto;
            width: 90%;
            font-size: 90%;
            max-width: 575px;
        }

        .modal-header {
            border-bottom: 1px solid #e5e5e5;
            min-height: 16.43px;
            padding: 7px 11px;
        }

            .modal-header h1 {
                font-size: 36px;
                font-weight: 500;
            }

        .btn-default {
            /*background-color: #ffffff !important;
            border-color: #cccccc !important;
            color: #333333 !important;*/
        }

        .close:focus, .close:hover {
            color: #000000;
            cursor: pointer;
            opacity: 0.5;
            text-decoration: none;
        }

        button.close {
            background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
            border: 0 none;
            cursor: pointer;
            padding: 0;
            color: #ffffff;
            opacity: 0.7;
        }


        .dropdown-menu > li {
            height: 30px !important;
            margin-top: 5px !important;
        }

            .dropdown-menu > li > a:hover {
                background-color: #efefef !important;
            }

        #limenu {
            border-right: 1px solid rgb(209, 210, 208) !important;
        }

        .all_page_hei_auto {
            height: auto !important;
        }

        .popup_under_data .mapboxgl-canvas {
            width: 100% !important;
            height: 533px !important;
        }

        .RefreshImage {
            border: 1px solid black;
            border-radius: 5px;
            padding: 3px;
            background-color: #CCC;
        }

        .updatecaptcha {
        }

        @media (min-width: 1200px) {
            .container {
                width: 1000px;
            }
        }
    </style>
    <style>
        .mapboxgl-ctrl-geocoder ul > li > a {
            width: auto;
            background-image: none;
            height: auto;
            float: none;
            text-indent: 0;
            margin-left: 0px;
        }

        .mapboxgl-ctrl-geocoder {
            margin-left: 0px;
        }
    </style>
    <style>
        .mapboxgl-ctrl-geocoder {
            max-width: 100% !important;
            min-width: 100% !important;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

            .mapboxgl-ctrl-geocoder input[type="text"] {
                height: auto !important;
                padding: 5px !important;
            }

            .mapboxgl-ctrl-geocoder .geocoder-icon-search {
                top: 5px !important;
                display: none !important;
            }

            .mapboxgl-ctrl-geocoder .geocoder-pin-right * {
                right: 5px !important;
                top: 5px !important;
            }

        .mapboxgl-popup-close-button {
            right: 7px !important;
            top: 14px !important;
            font-size: 31px;
        }



        .modal-open .page-container .navbar-fixed-top {
            overflow-y: visible !important;
        }
    </style>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-103693194-1', 'auto');
        ga('send', 'pageview');

    </script>
    
    
    
    <link href="https://cali-content.usedirect.com/themes/California/tip-darkgray.css" rel="stylesheet" />
    <link href="https://cali-content.usedirect.com/styles/tooltipster.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../source/jquery.fancybox.css?v=2.1.5" media="screen" />
    


    <script src="../scripts/newdesign.js"></script>

    
    
    <script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />

    

    
    



    <script src="https://cali-content.usedirect.com/scripts/leaflet.js"></script>
    <style>
        .labels {
            color: black;
            /*background-color: rgba(78, 136, 4, 0.76);*/
            font-family: "Lucida Grande", "Arial", sans-serif;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            width: auto;
            /*border: 1px solid black;*/
            white-space: nowrap;
        }

        .labelsPark {
            color: black;
            /*background-color: rgba(78, 136, 4, 0.76);*/
            font-family: "Lucida Grande", "Arial", sans-serif;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            width: auto;
            /*border: 1px solid black;*/
            white-space: nowrap;
        }
    </style>

<link href="https://cali-content.usedirect.com/themes/California/theme2.css" rel="stylesheet" type="text/css" media="all" /><title>

</title></head>
<body>
    
    <!-- Reeason to load markers because on place level park marker load lastly. -->
    <img src="https://cali-content.usedirect.com/themes/California/GoogleMapIcons/Park/AvailableWithCriteria.png" style="display: none;" alt="AvailableWithCriteria" />
    <img src="https://cali-content.usedirect.com/themes/California/GoogleMapIcons/Park/AvailableFilterWithCriteria.png" style="display: none;" alt="AvailableFilterWithCriteria" />
    <img src="https://cali-content.usedirect.com/themes/California/GoogleMapIcons/Park/AvailableNotCriteria.png" style="display: none;" alt="AvailableNotCriteria" />
    <img src="https://cali-content.usedirect.com/themes/California/GoogleMapIcons/Park/NotAvaiableNotCriteria.png" style="display: none;" alt="NotAvaiableNotCriteria" />
    <img src="https://cali-content.usedirect.com/themes/California/GoogleMapIcons/Park/NotAvailableWithCriteria.png" style="display: none;" alt="NotAvailableWithCriteria" />
    

    

    <form method="post" action="./AdvanceSearch.aspx" id="form1">
<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTE3OTAyMzMzNw8WAh4JVW5pdFR5cGVzMpQsAAEAAAD/////AQAAAAAAAAAEAQAAANUCU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdGAxW1tTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5LZXlWYWx1ZVBhaXJgMltbU3lzdGVtLkludDMyLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldLFtTeXN0ZW0uU3RyaW5nLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldXSwgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XV0DAAAABl9pdGVtcwVfc2l6ZQhfdmVyc2lvbgMAAOUBU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuS2V5VmFsdWVQYWlyYDJbW1N5c3RlbS5JbnQzMiwgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XSxbU3lzdGVtLlN0cmluZywgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XV1bXQgICQIAAABpAAAAaQAAAAcCAAAAAAEAAACAAAAAA+MBU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuS2V5VmFsdWVQYWlyYDJbW1N5c3RlbS5JbnQzMiwgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XSxbU3lzdGVtLlN0cmluZywgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XV0E/f///+MBU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuS2V5VmFsdWVQYWlyYDJbW1N5c3RlbS5JbnQzMiwgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XSxbU3lzdGVtLlN0cmluZywgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XV0CAAAAA2tleQV2YWx1ZQABCHsRAAAGBAAAABJCZWFjaCBEb3JtICgzIHBwbCkB+/////3///98EQAABgYAAAASQmVhY2ggRG9ybSAoNCBwcGwpAfn////9////7BAAAAYIAAAADUJvYXQgQ2FtcHNpdGUB9/////3////rEAAABgoAAAAQQm9hdCBJbiBDYW1wc2l0ZQH1/////f///+oQAAAGDAAAABpCb2F0IEluIFByaW1pdGl2ZSBDYW1wc2l0ZQHz/////f///2wRAAAGDgAAAA9DYW1waW5nIFBhY2thZ2UB8f////3///9zEQAABhAAAAAQQ2FtcHNpdGUgKHNtYWxsKQHv/////f///20RAAAGEgAAAAxEZWx1eGUgQ2FiaW4B7f////3///96EQAABhQAAAAMRG9ybSAoMiBwcGwpAev////9////7RAAAAYWAAAAH0RvdWJsZSBIb29rIFVwIChFL1cvUykgQ2FtcHNpdGUB6f////3///9uEQAABhgAAAASR3JvdXAgKFJWKSBDYW1waW5nAef////9////RxEAAAYaAAAAFEhvdGVsIFJvb20gKEJhbGNvbnkpAeX////9////SREAAAYcAAAAEkhvdGVsIFJvb20gKEJhc2ljKQHj/////f///0gRAAAGHgAAABVIb3RlbCBSb29tIChTdGFuZGFyZCkB4f////3////pEAAABiAAAAAZT2ZmIFJvYWQgVmVoaWNsZSBDYW1wc2l0ZQHf/////f///28RAAAGIgAAAA5PbmUgUm9vbSBDYWJpbgHd/////f///0oRAAAGJAAAACJQcmVtaXVtIEJvYXQgSW4gUHJpbWl0aXZlIENhbXBzaXRlAdv////9////VxEAAAYmAAAAGFByZW1pdW0gQ2FiaW4gKDMgUGVvcGxlKQHZ/////f///0sRAAAGKAAAABBQcmVtaXVtIENhbXBzaXRlAdf////9////chEAAAYqAAAAGFByZW1pdW0gQ2FtcHNpdGUgKHNtYWxsKQHV/////f///zURAAAGLAAAAA9QcmVtaXVtIENvdHRhZ2UB0/////3///9fEQAABi4AAAAXUHJlbWl1bSBDb3R0YWdlICgzIHBwbCkB0f////3///9gEQAABjAAAAAXUHJlbWl1bSBDb3R0YWdlICg0IHBwbCkBz/////3///95EQAABjIAAAAXUHJlbWl1bSBDb3R0YWdlICg1IHBwbCkBzf////3///9hEQAABjQAAAAXUHJlbWl1bSBDb3R0YWdlICg2IHBwbCkBy/////3///9iEQAABjYAAAAXUHJlbWl1bSBDb3R0YWdlICg3IHBwbCkByf////3///9jEQAABjgAAAAXUHJlbWl1bSBDb3R0YWdlICg4IHBwbCkBx/////3///94EQAABjoAAAAXUHJlbWl1bSBDb3R0YWdlICg5IHBwbCkBxf////3///93EQAABjwAAAAYUHJlbWl1bSBDb3R0YWdlcyAoNiBwcGwpAcP////9////fREAAAY+AAAAFFByZW1pdW0gRG9ybSAoNCBwcGwpAcH////9////fhEAAAZAAAAAFFByZW1pdW0gRG9ybSAoNiBwcGwpAb/////9////fxEAAAZCAAAAFFByZW1pdW0gRG9ybSAoOCBwcGwpAb3////9////WBEAAAZEAAAAJ1ByZW1pdW0gRG91YmxlIEhvb2sgVXAgKEUvVy9TKSBDYW1wc2l0ZQG7/////f///2QRAAAGRgAAAB5QcmVtaXVtIEdyb3VwIEJvYXQtSW4gQ2FtcHNpdGUBuf////3///9UEQAABkgAAAAWUHJlbWl1bSBHcm91cCBDYW1wc2l0ZQG3/////f///2URAAAGSgAAABtQcmVtaXVtIEdyb3VwIFRlbnQgQ2FtcHNpdGUBtf////3///9aEQAABkwAAAAdUHJlbWl1bSBIb29rIFVwIChFICkgQ2FtcHNpdGUBs/////3///9bEQAABk4AAAAeUHJlbWl1bSBIb29rIFVwIChFL1cpIENhbXBzaXRlAbH////9////XBEAAAZQAAAAIFByZW1pdW0gSG9vayBVcCAoRS9XL1MpIENhbXBzaXRlAa/////9////XREAAAZSAAAAGFByZW1pdW0gSG9vayBVcCBDYW1wc2l0ZQGt/////f///14EAAAGVAAAABpQcmVtaXVtIFByaW1pdGl2ZSBDYW1wc2l0ZQGr/////f///1IRAAAGVgAAABVQcmVtaXVtIFRlbnQgQ2FtcHNpdGUBqf////3///91EQAABlgAAAAdUHJlbWl1bSBUZW50IENhbXBzaXRlIChzbWFsbCkBp/////3///90EQAABloAAAAVVGVudCBDYW1wc2l0ZSAoc21hbGwpAaX////9////cBEAAAZcAAAADlR3byBSb29tIENhYmluAaP////9////JhEAAAZeAAAACUJvYXQgU2xpcAGh/////f///0YEAAAGYAAAAAhZdXJ0ICg0KQGf/////f///y0EAAAGYgAAAAhZdXJ0ICg2KQGd/////f///ycRAAAGZAAAABFDYWJpbiAoMTAgUGVvcGxlKQGb/////f///ygRAAAGZgAAABBDYWJpbiAoMiBQZW9wbGUpAZn////9////KREAAAZoAAAAEENhYmluICgzIFBlb3BsZSkBl/////3///8yAAAABmoAAAAHQm9hdC1JbgGV/////f///yoRAAAGbAAAABBDYWJpbiAoNCBQZW9wbGUpAZP////9////KxEAAAZuAAAAEENhYmluICg1IFBlb3BsZSkBkf////3///8sEQAABnAAAAAQQ2FiaW4gKDYgUGVvcGxlKQGP/////f///y0RAAAGcgAAABBDYWJpbiAoOCBQZW9wbGUpAY3////9////NwAAAAZ0AAAAFkdyb3VwIEJvYXQtSW4gQ2FtcHNpdGUBi/////3///8wEQAABnYAAAAPQ290dGFnZSAoNCBwcGwpAYn////9////OAAAAAZ4AAAAEkdyb3VwIERhaWx5dXNlIChBKQGH/////f///0EEAAAGegAAABJHcm91cCBEYWlseXVzZSAoQikBhf////3///9DBAAABnwAAAASR3JvdXAgRGFpbHl1c2UgKEMpAYP////9////MhEAAAZ+AAAAD0NvdHRhZ2UgKDYgcHBsKQGB/////f///yQAAAAGgAAAABNUZW50IE9ubHkgLSBXYWxrLUluAX/////9////NBEAAAaCAAAAD0NvdHRhZ2UgKDggcHBsKQF9/////f///zcRAAAGhAAAAChFcXVlc3RyYWluIEdyb3VwIFRlbnQgUHJpbWl0aXZlIENhbXBzaXRlAXv////9////OBEAAAaGAAAAI0VxdWVzdHJpYW4gR3JvdXAgUHJpbWl0aXZlIENhbXBzaXRlAXn////9////OREAAAaIAAAAHkVxdWVzdHJpYW4gR3JvdXAgVGVudCBDYW1wc2l0ZQF3/////f///zoRAAAGigAAACdFcXVlc3RyaWFuIEhpa2UvQmlrZSBQcmltaXRpdmUgQ2FtcHNpdGUBdf////3////NEAAABowAAAAQQmlrZSBJbiBDYW1wc2l0ZQFz/////f///zsRAAAGjgAAABZGbG9hdGluZyBDYW1wIENhbXBzaXRlAXH////9////zhAAAAaQAAAAGkJpa2UgSW4gUHJpbWl0aXZlIENhbXBzaXRlAW/////9////PBEAAAaSAAAAFkdyb3VwIEhpa2UgSW4gQ2FtcHNpdGUBbf////3////PEAAABpQAAAAIQ2FtcHNpdGUBa/////3///89EQAABpYAAAAgR3JvdXAgSGlrZSBJbiBQcmltaXRpdmUgQ2FtcHNpdGUBaf////3////QEAAABpgAAAAQRGF5IFVzZSBQYXZpbGlvbgFn/////f///z4RAAAGmgAAAB1Hcm91cCBUZW50IFByaW1pdGl2ZSBDYW1wc2l0ZQFl/////f///9EQAAAGnAAAABBFbnJvdXRlIENhbXBzaXRlAWP////9////0hAAAAaeAAAAE0VxdWVzdHJpYW4gQ2FtcHNpdGUBYf////3////TEAAABqAAAAAZRXF1ZXN0cmlhbiBHcm91cCBDYW1wc2l0ZQFf/////f///0ERAAAGogAAABBIb29rIFVwIENhbXBzaXRlAV3////9////1BAAAAakAAAAHUVxdWVzdHJpYW4gUHJpbWl0aXZlIENhbXBzaXRlAVv////9////QhEAAAamAAAADlJlbnRhbCAoRS9XL1MpAVn////9////1RAAAAaoAAAAGEVxdWVzdHJpYW4gVGVudCBDYW1wc2l0ZQFX/////f///0MRAAAGqgAAABVUZW50IEhpa2UgSW4gQ2FtcHNpdGUBVf////3////WEAAABqwAAAAYR3JvdXAgUHJpbWl0aXZlIENhbXBzaXRlAVP////9////RBEAAAauAAAAH1RlbnQgSGlrZSBJbiBQcmltaXRpdmUgQ2FtcHNpdGUBUf////3////XEAAABrAAAAANR3JvdXAgQ2FtcGluZwFP/////f///0URAAAGsgAAACFUZW50IEhpa2UvQmlrZSBQcmltaXRpdmUgQ2FtcHNpdGUBTf////3////YEAAABrQAAAAOR3JvdXAgQ2FtcHNpdGUBS/////3///9GEQAABrYAAAAXVGVudCBQcmltaXRpdmUgQ2FtcHNpdGUBSf////3////ZEAAABrgAAAANR3JvdXAgRGF5IFVzZQFH/////f///9oQAAAGugAAACBHcm91cCBIb29rIFVwIChFICkgVGVudCBDYW1wc2l0ZQFF/////f///9sQAAAGvAAAABhHcm91cCBQcmltaXRpdmUgQ2FtcHNpdGUBQ/////3////cEAAABr4AAAATR3JvdXAgVGVudCBDYW1wc2l0ZQFB/////f///90QAAAGwAAAABBIaWtlIGluIENhbXBzaXRlAT/////9////3hAAAAbCAAAAGkhpa2UgSW4gUHJpbWl0aXZlIENhbXBzaXRlAT3////9////3xAAAAbEAAAAGEhpa2UgSW4vQmlrZSBJbiBDYW1wc2l0ZQE7/////f///+AQAAAGxgAAABJIaWtlL0Jpa2UgQ2FtcHNpdGUBOf////3////hEAAABsgAAAAVSG9vayBVcCAoRSApIENhbXBzaXRlATf////9////4hAAAAbKAAAAFkhvb2sgVXAgKEUvVykgQ2FtcHNpdGUBNf////3////jEAAABswAAAAYSG9vayBVcCAoRS9XL0cpIENhbXBzaXRlATP////9////5BAAAAbOAAAAGEhvb2sgVXAgKEUvVy9TKSBDYW1wc2l0ZQEx/////f///+YQAAAG0AAAABFIb3RlbCBSb29tIChIYWxsKQEv/////f///+cQAAAG0gAAABJQcmltaXRpdmUgQ2FtcHNpdGUBLf////3////oEAAABtQAAAANVGVudCBDYW1wc2l0ZQEr/////f///wAAAAAKASr////9////AAAAAAoBKf////3///8AAAAACgEo/////f///wAAAAAKASf////9////AAAAAAoBJv////3///8AAAAACgEl/////f///wAAAAAKAST////9////AAAAAAoBI/////3///8AAAAACgEi/////f///wAAAAAKASH////9////AAAAAAoBIP////3///8AAAAACgEf/////f///wAAAAAKAR7////9////AAAAAAoBHf////3///8AAAAACgEc/////f///wAAAAAKARv////9////AAAAAAoBGv////3///8AAAAACgEZ/////f///wAAAAAKARj////9////AAAAAAoBF/////3///8AAAAACgEW/////f///wAAAAAKARX////9////AAAAAAoLFgJmDw8WAh4WRnV0dXJlQm9va2luZ1N0YXJ0RGF0ZQYAwFmh5L3VCGQWCGYPZBYCAgoPFgIeBGhyZWYFTWh0dHBzOi8vY2FsaS1jb250ZW50LnVzZWRpcmVjdC5jb20vdGhlbWVzL0NhbGlmb3JuaWEvU3R5bGVzL2pxdWVyeS11aS5taW4uY3NzZAICDw8WBB4URnV0dXJlQm9va2luZ0VuZERhdGUGAADy8rFN1ggeC01heGltdW1TdGF5Ah5kZAIDD2QWDAIHDxYCHgdWaXNpYmxlaGQCCA8PFgQeEkFycml2YWxEYXRlRGlzcGxheQYAwFmh5L3VCB4LQXJyaXZhbERhdGUGAMBZoeS91QhkFggCBQ8QDxYCHgtfIURhdGFCb3VuZGdkZGRkAgcPDxYCHgRUZXh0BQk1LzIwLzIwMThkZAIID2QWAgIDDxAPFgIfCGdkEBUeATEBMgEzATQBNQE2ATcBOAE5AjEwAjExAjEyAjEzAjE0AjE1AjE2AjE3AjE4AjE5AjIwAjIxAjIyAjIzAjI0AjI1AjI2AjI3AjI4AjI5AjMwFR4BMQEyATMBNAE1ATYBNwE4ATkCMTACMTECMTICMTMCMTQCMTUCMTYCMTcCMTgCMTkCMjACMjECMjICMjMCMjQCMjUCMjYCMjcCMjgCMjkCMzAUKwMeZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnFgFmZAIJDw8WCh8HBgDAWaHkvdUIHwMGAADy8rFN1ggfAQYAwFmh5L3VCB4LTWluaW11bVN0YXkCAR8EAh5kFgRmDxUBpAEvQ2FsaWZvcm5pYVdlYkhvbWUvRmFjaWxpdGllcy9BZHZhbmNlTWFwSW1hZ2VHZW5lcmF0b3IuYXNweD9tYXBfbGV2ZWw9RW50ZXJwcmlzZSZtYXBfaWQ9MCZhcnJpdmFsX2RhdGU9NS8yMC8yMDE4Jm5pZ2h0cz0wJnJuZD0xMDMzNTczMzExJnVuaXRfdHlwZT0wJnVuaXRfY2F0ZWdvcnk9MGQCAQ9kFgRmDxUDATABMAxub0xlZ2VuZC5wbmdkAgEPFQIBMAR0cnVlZAIJD2QWAgIBD2QWBgIODxBkEBUJElNlbGVjdCBSZW50YWwgVHlwZQdCb2F0aW5nB0NhbXBpbmcIRGFpbHlVc2USRXF1ZXN0cmFpbiBDYW1waW5nDUdyb3VwIENhbXBpbmcPSG9vayBVcCBDYW1waW5nB0xvZGdpbmcOUmVtb3RlIENhbXBpbmcVCQAEMTAxMAExATcEMTAxNgEyBDEwMTUEMTAwOAQxMDE0FCsDCWdnZ2dnZ2dnZxYBZmQCEA8QDxYIHg1EYXRhVGV4dEZpZWxkBQZWYWx1ZTEeDkRhdGFWYWx1ZUZpZWxkBQRLZXkxHwhnHgdFbmFibGVkZ2QQFQcWU2VsZWN0IENhbXBpbmcgRXF1aXAuIAxSVi9Nb3RvcmhvbWUEVGVudAlUZW50IE9ubHkHVHJhaWxlcgxUcmFpbGVyIE9ubHkNVHJ1Y2svU1VWL1ZhbhUHATACNzUCODMCNzYCNzQCODcCNzkUKwMHZ2dnZ2dnZ2RkAhEPEA8WAh8NZ2QQFQgOVHJhaWxlciBMZW5ndGgEPiAxNQQ+IDIwBD4gMzAEPiA0MAQ+IDUwBD4gNjAEPiA3MBUIDlRyYWlsZXIgTGVuZ3RoBD4gMTUEPiAyMAQ+IDMwBD4gNDAEPiA1MAQ+IDYwBD4gNzAUKwMIZ2dnZ2dnZ2dkZAIKD2QWAmYPFgIfCQWDCDxsaT4NCiAgICA8YSBocmVmPSJodHRwczovL3d3dy5yZXNlcnZlY2FsaWZvcm5pYS5jb20vQ2FsaWZvcm5pYVdlYkhvbWUvRmFjaWxpdGllcy9BZHZhbmNlU2VhcmNoLmFzcHgiIGNsYXNzPSJoX3JpZ2h0X21lbnVfdG9nZ2VsIj5DQU1QSU5HIEFORCBMT0RHSU5HPC9hPjxzcGFuPnw8L3NwYW4+DQo8L2xpPg0KPGxpPg0KICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc2VydmVjYWxpZm9ybmlhLmNvbS9DYWxpZm9ybmlhV2ViSG9tZS9BY3Rpdml0aWVzL1Byb2dyYW1zQW5kVG91cnMuYXNweCIgY2xhc3M9ImhfcmlnaHRfbWVudV90b2dnZWwiPkFDVElWSVRJRVM8L2E+PHNwYW4+fDwvc3Bhbj4NCjwvbGk+DQo8bGk+DQogICAgPGEgaHJlZj0iaHR0cHM6Ly93d3cucmVzZXJ2ZWNhbGlmb3JuaWEuY29tL0NhbGlmb3JuaWFXZWJIb21lL0FjdGl2aXRpZXMvSGVhcnN0Q2FzdGxlVG91cnMuYXNweCIgY2xhc3M9ImhfcmlnaHRfbWVudV90b2dnZWwiPkhFQVJTVCBDQVNUTEU8L2E+PHNwYW4+fDwvc3Bhbj4NCjwvbGk+DQo8IS0tIHBhc3NlcyBmb3IgcGFydGljdWxhciBpbnN0YW5jZSBpZiB5b3UgbmVlZCB0byBjaGFuZ2UgIG5hbWUgdGhlbiBvbmx5IGNoYW5nZSBuYW1lIGFuZCBMYXN0IGFkZCA8c3Bhbj58PC9zcGFuPg0KPGxpIGlkPSJsaVBhc3N3aXRoVXNlciIgPg0KICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc2VydmVjYWxpZm9ybmlhLmNvbS9DYWxpZm9ybmlhV2ViSG9tZS9NZW1iZXJzaGlwcy9BZHZhbmNlQ3VzdG9tZXJNZW1iZXJzaGlwcy5hc3B4IiBjbGFzcz0iaF9yaWdodF9tZW51X3RvZ2dlbCI+UEFTU0VTPC9hPiA8c3Bhbj58PC9zcGFuPg0KPC9saT4NCiA8bGkgaWQ9ImxpUGFzc3dpdGhvdXRVc2VyIiA+DQoJPGEgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApOyIgb25jbGljaz0iT3BlbkxvZ2luQm94KHRydWUsdHJ1ZSxiYXNldXJsbWFpbisnL01lbWJlcnNoaXBzL0FkdmFuY2VDdXN0b21lck1lbWJlcnNoaXBzLmFzcHgnLCcnKSI+UEFTU0VTIA0KPC9hPjxzcGFuPnw8L3NwYW4+PC9saT4tLT5kAgsPFgIfBWgWAmYPFgIfCQWDCDxsaT4NCiAgICA8YSBocmVmPSJodHRwczovL3d3dy5yZXNlcnZlY2FsaWZvcm5pYS5jb20vQ2FsaWZvcm5pYVdlYkhvbWUvRmFjaWxpdGllcy9BZHZhbmNlU2VhcmNoLmFzcHgiIGNsYXNzPSJoX3JpZ2h0X21lbnVfdG9nZ2VsIj5DQU1QSU5HIEFORCBMT0RHSU5HPC9hPjxzcGFuPnw8L3NwYW4+DQo8L2xpPg0KPGxpPg0KICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc2VydmVjYWxpZm9ybmlhLmNvbS9DYWxpZm9ybmlhV2ViSG9tZS9BY3Rpdml0aWVzL1Byb2dyYW1zQW5kVG91cnMuYXNweCIgY2xhc3M9ImhfcmlnaHRfbWVudV90b2dnZWwiPkFDVElWSVRJRVM8L2E+PHNwYW4+fDwvc3Bhbj4NCjwvbGk+DQo8bGk+DQogICAgPGEgaHJlZj0iaHR0cHM6Ly93d3cucmVzZXJ2ZWNhbGlmb3JuaWEuY29tL0NhbGlmb3JuaWFXZWJIb21lL0FjdGl2aXRpZXMvSGVhcnN0Q2FzdGxlVG91cnMuYXNweCIgY2xhc3M9ImhfcmlnaHRfbWVudV90b2dnZWwiPkhFQVJTVCBDQVNUTEU8L2E+PHNwYW4+fDwvc3Bhbj4NCjwvbGk+DQo8IS0tIHBhc3NlcyBmb3IgcGFydGljdWxhciBpbnN0YW5jZSBpZiB5b3UgbmVlZCB0byBjaGFuZ2UgIG5hbWUgdGhlbiBvbmx5IGNoYW5nZSBuYW1lIGFuZCBMYXN0IGFkZCA8c3Bhbj58PC9zcGFuPg0KPGxpIGlkPSJsaVBhc3N3aXRoVXNlciIgPg0KICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc2VydmVjYWxpZm9ybmlhLmNvbS9DYWxpZm9ybmlhV2ViSG9tZS9NZW1iZXJzaGlwcy9BZHZhbmNlQ3VzdG9tZXJNZW1iZXJzaGlwcy5hc3B4IiBjbGFzcz0iaF9yaWdodF9tZW51X3RvZ2dlbCI+UEFTU0VTPC9hPiA8c3Bhbj58PC9zcGFuPg0KPC9saT4NCiA8bGkgaWQ9ImxpUGFzc3dpdGhvdXRVc2VyIiA+DQoJPGEgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApOyIgb25jbGljaz0iT3BlbkxvZ2luQm94KHRydWUsdHJ1ZSxiYXNldXJsbWFpbisnL01lbWJlcnNoaXBzL0FkdmFuY2VDdXN0b21lck1lbWJlcnNoaXBzLmFzcHgnLCcnKSI+UEFTU0VTIA0KPC9hPjxzcGFuPnw8L3NwYW4+PC9saT4tLT5kAg8PZBYQAjEPDxYIHwMGAADy8rFN1ggfAQYAwFmh5L3VCB8HBgDAWaHkvdUIHwQCHmRkAjIPEA8WBh8LBQROYW1lHwwFAklkHwhnZBAVdA9BbmdlbCBJc2xhbmQgU1AWQW56YS1Cb3JyZWdvIERlc2VydCBTUApBdWJ1cm4gU1JBEEF1c3RpbiBDcmVlayBTUkEKQmVuYm93IFNSQQtCZW5pY2lhIFNSQRtCaWR3ZWxsLVNhY3JhbWVudG8gUml2ZXIgU1AiQmlnIEJhc2luIFJlZHdvb2RzICBTUCBUZW50IENhYmlucxVCaWcgQmFzaW4gUmVkd29vZHMgU1AOQm9sc2EgQ2hpY2EgU0IUQm90aGUtTmFwYSBWYWxsZXkgU1ASQnJhbm5hbiBJc2xhbmQgU1JBCUJ1dGFubyBTUBZDYWxhdmVyYXMgQmlnIFRyZWVzIFNQDUNhcm5lZ2llIFNWUkEOQ2FycGludGVyaWEgU0IPQ2FzdGxlIENyYWdzIFNQE0Nhc3dlbGwgTWVtb3JpYWwgU1ANQ2hpbmEgQ2FtcCBTUA5DaGlubyBIaWxscyBTUA1DbGVhciBMYWtlIFNQFENsZWFyIExha2UgU1AgQ2FiaW5zF0NvbG9uZWwgQWxsZW5zd29ydGggU0hQIENvbHVtYmlhIFNIUCBIb3RlbHMgYW5kIENvdHRhZ2VzG0NvbHVzYS1TYWNyYW1lbnRvIFJpdmVyIFNSQRJDb3Ntb3BvbGl0YW4gSG90ZWweQ3J5c3RhbCBDb3ZlIFNQIEJlYWNoIENvdHRhZ2VzH0NyeXN0YWwgQ292ZSBTUCBNb3JvIENhbXBncm91bmQmQ3J5c3RhbCBDb3ZlIFNQIFByaW1pdGl2ZSBUZW50IENhbXBpbmcSQ3V5YW1hY2EgUmFuY2hvIFNQDUQuTC4gQmxpc3MgU1AwRGVsIE5vcnRlIENvYXN0IFJlZHdvb2QgU1AgTWlsbCBDcmVlayBDYW1wZ3JvdW5kCURvaGVueSBTQhJEb25uZXIgTWVtb3JpYWwgU1ANRWwgQ2FwaXRhbiBTQg5FbWVyYWxkIEJheSBTUAxFbW1hIFdvb2QgU0IPRm9sc29tIExha2UgU1JBDkZvcnQgVGVqb24gU0hQD0ZyZW1vbnQgUGVhayBTUApHYXZpb3RhIFNQFkdlb3JnZSBKLiBIYXRmaWVsZCBTUkEZR3JpenpseSBDcmVlayBSZWR3b29kcyBTUBVHcm92ZXIgSG90IFNwcmluZ3MgU1AQSGFsZiBNb29uIEJheSBTQhRIZWFyc3QgU2FuIFNpbWVvbiBTUA5IZW5keSBXb29kcyBTUBhIZW5yeSBDb3dlbGwgUmVkd29vZHMgU1AOSGVucnkgVyBDb2UgU1AUSG9sbGlzdGVyIEhpbGxzIFNWUkEUSHVtYm9sZHQgUmVkd29vZHMgU1ASSHVuZ3J5IFZhbGxleSBTVlJBGEluZGlhbiBHcmluZGluZyBSb2NrIFNIUBpKZWRlZGlhaCBTbWl0aCBSZWR3b29kcyBTUBdKdWxpYSBQZmVpZmZlciBCdXJucyBTUBFMYWtlIE9yb3ZpbGxlIFNSQQ9MYWtlIFBlcnJpcyBTUkEPTGVvIENhcnJpbGxvIFNQC0xpbWVraWxuIFNQF0xpdHRsZSBCYXNpbiBTdGF0ZSBQYXJrD01hY2tlcnJpY2hlciBTUBRNYWxha29mZiBEaWdnaW5zIFNIUA9NYWxpYnUgQ3JlZWsgU1ANTWFuY2hlc3RlciBTUApNYW5yZXNhIFNCI01jYXJ0aHVyLUJ1cm5leSBGYWxscyBNZW0gU1AgQ2FiaW5zIU1jYXJ0aHVyLUJ1cm5leSBGYWxscyBNZW1vcmlhbCBTUA1NY2Nvbm5lbGwgU1JBCk1jZ3JhdGggU0ISTWlsbGVydG9uIExha2UgU1JBEU1vbnRhbmEgRGUgT3JvIFNQDE1vcnJvIEJheSBTUA9Nb3JybyBTdHJhbmQgU0IPTW91bnQgRGlhYmxvIFNQEk1vdW50IFRhbWFscGFpcyBTUBJNdC4gU2FuIEphY2ludG8gU1APTmV3IEJyaWdodG9uIFNCEU9jZWFubyBEdW5lcyBTVlJBE1BhbG9tYXIgTW91bnRhaW4gU1ARUGF0cmlja3MgUG9pbnQgU1ATUGZlaWZmZXIgQmlnIFN1ciBTUAtQaWNhY2hvIFNSQQhQaXNtbyBTQhBQbHVtYXMtRXVyZWthIFNQDVBvaW50IE11Z3UgU1ATUG9ydG9sYSBSZWR3b29kcyBTUDBQcmFpcmllIENyZWVrIFJlZHdvb2RzIFNQIEVsayBQcmFpcmllIENhbXBncm91bmQxUHJhaXJpZSBDcmVlayBSZWR3b29kcyBTUCBHb2xkIEJsdWZmcyBCZWFjaCBDYW1wZwpSZWZ1Z2lvIFNCE1JpY2hhcmRzb24gR3JvdmUgU1AQUnVzc2lhbiBHdWxjaCBTUBNTYWRkbGViYWNrIEJ1dHRlIFNQDVNhbHQgUG9pbnQgU1AOU2FsdG9uIFNlYSBTUkETU2FtdWVsIFAuIFRheWxvciBTUBpTYW11ZWwgUC4gVGF5bG9yIFNQIENhYmlucw9TYW4gQ2xlbWVudGUgU0IrU2FuIENsZW1lbnRlIFNCIChIb2xpZGF5cyBWaW50YWdlIFRyYWlsZXJzKQxTYW4gRWxpam8gU0IWU2FuIEx1aXMgUmVzZXJ2b2lyIFNSQQ1TYW4gT25vZnJlIFNCC1NlYWNsaWZmIFNCEFNpbHZlciBTdHJhbmQgU0ITU2lsdmVyd29vZCBMYWtlIFNSQRdTb25vbWEgQ29hc3QgU3RhdGUgUGFyaxFTb3V0aCBDYXJsc2JhZCBTQhNTdGFuZGlzaC1IaWNrZXkgU1JBE1N1Z2FyIFBpbmUgUG9pbnQgU1ASU3VnYXJsb2FmIFJpZGdlIFNQCVN1bnNldCBTQglUYWhvZSBTUkEQVHVybG9jayBMYWtlIFNSQQxWYW4gRGFtbWUgU1AZV2VzdHBvcnQtVW5pb24gTGFuZGluZyBTQg9XaWxkZXIgUmFuY2ggU1ASV29vZHNvbiBCcmlkZ2UgU1JBFXQDNjE0ATIDNjE2BDEwODUDNjE3BDEwOTAEMTA5MwM2MTgBMwM2MTkDNjIwAzYyMQM2MjIBNQQxMTA3ATYDNjI0AzYyNQM2MjYDNjI3AzYyOAM2MjkDNjMwAzYzMQM2MzIDNjMzAzYzNAM2MzUDNjM2ATcDNjM3AzYzOAM2MzkDNjQwATgDNjQxAzY0MgM2NDMDNjQ0AzY0NQM2NDYDNjQ4AzY1MAM2NTEDNjUyAzcxMwM2NTQDNjU1AzY1NgQxMTM2AzY1NwQxMTM4AzY1OQM2NjADNjYxAzY2MgM2NjMDNjY1AzY2NgM2NjcDNjY4AzY2OQM2NzADNjcxAzY3MgM2NzUDNjc0AzY3NgM2NzcDNjc4AzY3OQM2ODADNjgxAzY4MwM2ODIDNjg0AzY4NQM2ODYDNjg3AzY4OAM2OTAEMTE4MQM2OTEDNjkyAzY5NAM2OTUDNjk2AzY5NwM2OTkDNzAwAzcwMQM3MDIDNzAzAzcwNAM3MDUDNzA2AzcwNwM3MDgDNzA5AzcxMQM3MTIDNzE0AzcxNQM3MTYDNzE4AzcyMAM3MjEDNzI0AzcyNQM3MjYDNzI4AzczMAM3MzEEMTIzNQQxMjM2AzczMhQrA3RnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZxYBZmQCNQ8QZBAVHgcxIE5pZ2h0CDIgTmlnaHRzCDMgTmlnaHRzCDQgTmlnaHRzCDUgTmlnaHRzCDYgTmlnaHRzCDcgTmlnaHRzCDggTmlnaHRzCDkgTmlnaHRzCTEwIE5pZ2h0cwkxMSBOaWdodHMJMTIgTmlnaHRzCTEzIE5pZ2h0cwkxNCBOaWdodHMJMTUgTmlnaHRzCTE2IE5pZ2h0cwkxNyBOaWdodHMJMTggTmlnaHRzCTE5IE5pZ2h0cwkyMCBOaWdodHMJMjEgTmlnaHRzCTIyIE5pZ2h0cwkyMyBOaWdodHMJMjQgTmlnaHRzCTI1IE5pZ2h0cwkyNiBOaWdodHMJMjcgTmlnaHRzCTI4IE5pZ2h0cwkyOSBOaWdodHMJMzAgTmlnaHRzFR4BMQEyATMBNAE1ATYBNwE4ATkCMTACMTECMTICMTMCMTQCMTUCMTYCMTcCMTgCMTkCMjACMjECMjICMjMCMjQCMjUCMjYCMjcCMjgCMjkCMzAUKwMeZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZGQCNg8PFgQfBgYAwFmh5L3VCB8HBgDAWaHkvdUIZBYKZg8QDxYGHwhnHwwFBGtleXMfCwUGdmFsdWVzZBAVBBNDYW1waW5nIGFuZCBMb2RnaW5nE0hlYXJzdCBDYXN0bGUgVG91cnMWT3RoZXIgVG91cnMvQWN0aXZpdGllcxhCb2F0IExhdW5jaCBSZXNlcnZhdGlvbnMVBAExATQBMwE1FCsDBGdnZ2dkZAIBDw8WAh8JBQk1LzIwLzIwMThkZAICDxAPFgIfCGdkEBUeBzEgTmlnaHQIMiBOaWdodHMIMyBOaWdodHMINCBOaWdodHMINSBOaWdodHMINiBOaWdodHMINyBOaWdodHMIOCBOaWdodHMIOSBOaWdodHMJMTAgTmlnaHRzCTExIE5pZ2h0cwkxMiBOaWdodHMJMTMgTmlnaHRzCTE0IE5pZ2h0cwkxNSBOaWdodHMJMTYgTmlnaHRzCTE3IE5pZ2h0cwkxOCBOaWdodHMJMTkgTmlnaHRzCTIwIE5pZ2h0cwkyMSBOaWdodHMJMjIgTmlnaHRzCTIzIE5pZ2h0cwkyNCBOaWdodHMJMjUgTmlnaHRzCTI2IE5pZ2h0cwkyNyBOaWdodHMJMjggTmlnaHRzCTI5IE5pZ2h0cwkzMCBOaWdodHMVHgExATIBMwE0ATUBNgE3ATgBOQIxMAIxMQIxMgIxMwIxNAIxNQIxNgIxNwIxOAIxOQIyMAIyMQIyMgIyMwIyNAIyNQIyNgIyNwIyOAIyOQIzMBQrAx5nZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAWZkAgMPEA8WAh8IZ2RkZGQCBA8PFgofBwYAwFmh5L3VCB8DBgAA8vKxTdYIHwoCAR8EAh4fAQYAwFmh5L3VCGQWBGYPFQGkAS9DYWxpZm9ybmlhV2ViSG9tZS9GYWNpbGl0aWVzL0FkdmFuY2VNYXBJbWFnZUdlbmVyYXRvci5hc3B4P21hcF9sZXZlbD1FbnRlcnByaXNlJm1hcF9pZD0wJmFycml2YWxfZGF0ZT01LzIwLzIwMTgmbmlnaHRzPTAmcm5kPTEzODQ5NDUyMDImdW5pdF90eXBlPTAmdW5pdF9jYXRlZ29yeT0wZAIBD2QWBGYPFQMBMAEwDG5vTGVnZW5kLnBuZ2QCAQ8VAgEwBHRydWVkAjcPZBYCAgEPZBYCAgEPZBYCZg9kFggCBQ8QZGQWAGQCBw8PFgIfCQUJNS8xOS8yMDE4ZGQCCA9kFgICAw8QZGQWAGQCCQ8PFgQfAwYAAPLysU3WCB8BBgDAWaHkvdUIZGQCOQ9kFgICAQ8PFgYfAwYAAPLysU3WCB8BBgDAWaHkvdUIHwQCHmRkAjoPZBYGAgwPEGQQFQkSU2VsZWN0IFJlbnRhbCBUeXBlB0JvYXRpbmcHQ2FtcGluZwhEYWlseVVzZRJFcXVlc3RyYWluIENhbXBpbmcNR3JvdXAgQ2FtcGluZw9Ib29rIFVwIENhbXBpbmcHTG9kZ2luZw5SZW1vdGUgQ2FtcGluZxUJAAQxMDEwATEBNwQxMDE2ATIEMTAxNQQxMDA4BDEwMTQUKwMJZ2dnZ2dnZ2dnFgFmZAIODxAPFggfCwUGVmFsdWUxHwwFBEtleTEfCGcfDWdkEBUHFlNlbGVjdCBDYW1waW5nIEVxdWlwLiAMUlYvTW90b3Job21lBFRlbnQJVGVudCBPbmx5B1RyYWlsZXIMVHJhaWxlciBPbmx5DVRydWNrL1NVVi9WYW4VBwEwAjc1AjgzAjc2Ajc0Ajg3Ajc5FCsDB2dnZ2dnZ2dkZAIPDxAPFgIfDWdkEBUIDlRyYWlsZXIgTGVuZ3RoBD4gMTUEPiAyMAQ+IDMwBD4gNDAEPiA1MAQ+IDYwBD4gNzAVCA5UcmFpbGVyIExlbmd0aAQ+IDE1BD4gMjAEPiAzMAQ+IDQwBD4gNTAEPiA2MAQ+IDcwFCsDCGdnZ2dnZ2dnZGQCPQ9kFgICAQ9kFgICAQ8PFgIfBWhkZAIEDxYCHglpbm5lcmh0bWwF5Q48Zm9vdGVyPg0KPGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCjxkaXYgY2xhc3M9InJvdyI+DQo8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiIHN0eWxlPSJ0ZXh0LWFsaWduOiBjZW50ZXI7Ij48aW1nIGNsYXNzPSJmb3QtYXJvdyIgdGl0bGU9ImRvd24gYXJyb3ciIHNyYz0iaHR0cHM6Ly93d3cucmVzZXJ2ZWNhbGlmb3JuaWEuY29tL0NhbGlmb3JuaWFXZWJIb21lL3RoZW1lcy9DYWxpZm9ybmlhL2Zvb3Rlci1hcnJvdy5qcGciIGFsdD0iYWVycm93IiAvPg0KPGRpdiBjbGFzcz0iYm90LWxpbmtzIHBhZ2VsaW5rcyI+PGEgaHJlZj0iRGVmYXVsdC5hc3B4Ij5IT01FIDwvYT4gfCA8YSBocmVmPSJGYWNpbGl0aWVzL0FkdmFuY2VTZWFyY2guYXNweCI+Q0FNUElORyBBTkQgTE9ER0lORyA8L2E+IHwgPGEgaHJlZj0iQWN0aXZpdGllcy9Qcm9ncmFtc0FuZFRvdXJzLmFzcHgiPkFDVElWSVRJRVMgPC9hPiB8IDxhIGhyZWY9IkFjdGl2aXRpZXMvSGVhcnN0Q2FzdGxlVG91cnMuYXNweCI+SEVBUlNUIENBU1RMRTwvYT4gfCA8IS0tICAgICAgPGEgaHJlZj0iR2lmdGNhcmRzL0dpZnRjYXJkc2FsZS5hc3B4Ij5HSUZUIENBUkRTPC9hPg0KICAgICAgICAgICAgICAgICAgICANCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgLS0+ICA8IS0tICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9IkN1c3RvbWVycy9OZXdDdXN0b21lci5hc3B4Ij5DUkVBVEUgQUNDT1VOVA0KICAgICAgICAgICAgICAgICAgICA8L2E+IC0tPjwvZGl2Pg0KPGRpdiBjbGFzcz0iYm90LWxpbmtzIGNvbC1tZC0xMiI+PCEtLSA8YSBvbmNsaWNrPSJqYXZhc2NyaXB0OnZhciBydWxlcz13aW5kb3cub3BlbignJywgJ3J1bGVzJywnd2lkdGg9NjAwLCBoZWlnaHQ9NDAwLCBzY3JvbGxiYXJzPTEsIHJlc2l6YWJsZT0xJyk7IHJldHVybiBmYWxzZTsiIHRhcmdldD0iX2JsYW5rIiAgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApOyI+LS0+IDxhIGhyZWY9Imh0dHA6Ly93d3cucGFya3MuY2EuZ292Lz9wYWdlX2lkPTIxMzAwIiB0YXJnZXQ9Il9ibGFuayI+IDxzdHJvbmc+UEFSSyBSVUxFUyA8L3N0cm9uZz4gPC9hPiB8IDxhIGhyZWY9Imh0dHBzOi8vd3d3LnJlc2VydmVjYWxpZm9ybmlhLmNvbS9DYWxpZm9ybmlhV2ViSG9tZS9Db250YWN0VXMuYXNweCI+IDxzdHJvbmc+Q09OVEFDVCBVUyA8L3N0cm9uZz4gPC9hPiB8IDxhIGhyZWY9Imh0dHA6Ly93d3cucGFya3MuY2EuZ292L1ByaXZhY3kiIHRhcmdldD0iX2JsYW5rIj4gPHN0cm9uZz5QUklWQUNZIFBPTElDWSA8L3N0cm9uZz4gPC9hPjwvZGl2Pg0KPGJyIC8+DQo8ZGl2IGNsYXNzPSJyb3ciPjxzcGFuIGlkPSJMYWJlbDEiIHN0eWxlPSJjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMTJweDsiPkNvbnRhY3QgVXM6IDEtODAwLTQ0NC03Mjc1IDg6MDBhbSAtIDY6MDBwbSBQYWNpZmljIFRpbWUgKFBUKSA8L3NwYW4+IDwhLS0gIDxzcGFuIHN0eWxlPSJjb2xvcjogV2hpdGU7IGZvbnQtc2l6ZTogMTJweDsiIGlkPSJMYWJlbDEiPk5lZWQgSGVscD8gQ2FsbCB1cyA4IEEuTS4gdG8gNiBQLk0uIERhaWx5IDgwMC00NDQtNzI3NSAoQ2xvc2VkIENocmlzdG1hcyBEYXksIE5ldyBZZWFycyBEYXksIGFuZCBUaGFua3NnaXZpbmcpPC9zcGFuPiAgLS0+PC9kaXY+DQo8ZGl2IGNsYXNzPSJyb3cxIj4NCjxkaXYgY2xhc3M9ImNvbC1tZC0xMiBjb2wtc20tMTIgY29weXJpZ2h0cyI+Q29weXJpZ2h0ICZjb3B5OyAyMDE3Jm5ic3A7IFN0YXRlIG9mIENhbGlmb3JuaWE8L2Rpdj4NCjwvZGl2Pg0KPC9kaXY+DQo8ZGl2IGNsYXNzPSJpbmNsdWRlRm9vdGVyIj4mbmJzcDs8L2Rpdj4NCjwvZGl2Pg0KPC9kaXY+DQo8L2Zvb3Rlcj5kGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYCBTVjdGwwMSRtYWluQ29udGVudCRMZWZ0TWVudUFkdmFuY2VGaWx0ZXIkY2hrQWNjZXNzaWJsZQU0Y3RsMDEkbWFpbkNvbnRlbnQkTGVmdE1lbnVBZHZhbmNlRmlsdGVyJGNoa0lzUHJlbWl1bc3+3jFGq3LYImI3dfejzpB7FmeT7vMaZYJsJTDdYX8p" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['form1'];
if (!theForm) {
    theForm = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/CaliforniaWebHome/WebResource.axd?d=zpfEKmQEAfYMuWZy3QIolfsekIQ2JI9qz0xZdezMtsRLHV4FEMZqivZgCp6yWaACjH0syEUb7Hcx2PtDbF-GmT8jglnPdu_9wOjdtGULDwQ1&amp;t=636283830552661246" type="text/javascript"></script>


<script src="/CaliforniaWebHome/ScriptResource.axd?d=kuyPHiUPZV-DancGsp9Y7PBpf4dCHgZaRox1_BlT6wt17i_2_3xJPOdQ028v-4UqlJ1_VbHi-IvSi33CeV0NoIOzJOqGxdAe2DVrcnebgPy4qhHSDLq4LRaRXeN5Xo3BXRaLasQTr_V5F33sXhpfP7P5ysft9dRsQpX0UE36qXU1&amp;t=ffffffffcce8aaf2" type="text/javascript"></script>
<script src="/CaliforniaWebHome/ScriptResource.axd?d=g_nNOa_TLuaTciNqr26iBzsEb7STuIn9Uu2xWsYOo2IKZtuI29Wc5ZEM89OOURtN9Sgtlh_KqsvT4jeNtIo1XxDul1Ek9lK3ZzRmqgJflRw7kDAY2fbg1N6_JFgmLMgaTMvDDx5g0eUxx11As8gGEc5xsuixVlZl1RQV5D57hSb_gMTC80Gh49SE7DGj6eUy0&amp;t=ffffffffcce8aaf2" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery-ui.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/niftyCorners/nifty.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/main.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery.sortable.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/bootstrap.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/bootstrap-submenu.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/ios-orientationchange-fix.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery.rwdImageMaps.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery.tooltipster.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jtemplates.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/custom_scroll.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery.poshytip.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/map_legend.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/Advancegrid.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/moment.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/bootstrap-select.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/newdesign.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/multiselect/jquery.multiselect.min.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/multiselect/prettify.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/jsLogin.js" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/source/jquery.fancybox.pack.js?v=2.1.5" type="text/javascript"></script>
<script src="https://cali-content.usedirect.com/scripts/MapboxForCalifornia.js?v=100" type="text/javascript"></script>
<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="6660105B" />
</div>
        <input type="hidden" name="ctl01$Hidscreenresolutionmain" id="Hidscreenresolutionmain" />
        <input type="hidden" name="ctl01$hdnCulture" id="hdnCulture" />
        <label id="lblbtnChangeCustomer" for="btnChangeCustomer" style="display: none;">
            <span style="display: none">test</span>
        </label>
        <input type="submit" name="ctl01$btnChangeCustomer" value="test" id="btnChangeCustomer" style="display: none" />

        <div class="modal fade" id="messageBoxLightbox2" role="dialog" aria-labelledby="myModalLabel" aria-describedby="divmodalbody">
            <div class="modal-dialog">
                <div class="modal-content" tabindex="-1">
                    <div id="mainmessage" class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" title="Credentials close button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h1 class="modal-title" id="myModalLabel"></h1>
                    </div>
                    <div onclick="javascript:void(0);" class="modal-body" id="divmodalbody" tabindex="0">
                    </div>

                    <div class="modal-footer">
                        
                        <a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" title="open any information and error button">Close</a>

                    </div>
                </div>
            </div>
        </div>

        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl01$ScriptManager1', 'form1', ['tctl01$mainContent$mapGooglePlaces$UpdatePanelXXXYYY','mainContent_mapGooglePlaces_UpdatePanelXXXYYY'], [], [], 90, 'ctl01');
//]]>
</script>



        <div class="page-wrapper">
            
            <div id="myModal" style="display: none;" class="modal fade" role="dialog" aria-labelledby="hCredentials" aria-describedby="divLoginCredentials">
                <div class="modal-dialog w450_new_login">

                    <!-- Modal content-->
                    <div class="modal-content" tabindex="-1">
                        <div class="modal-header login_popup_new">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h2 class="modal-title new_log_tit" id="hCredentials">Credentials</h2>
                        </div>
                        <div class="modal-body bg_gary_data">
                            <div class="w85_per_log" style="width: 100%;">
                                <div class="pop_log_tit">Existing Customer</div>
                                <div id="divLoginCredentials">     <p> 
	Please log in to make, view, cancel or modify your reservations. 
</p>
</div>
                            </div>

                            <div class="clearfix"></div>
                            <div class="login_page_box">
                                <div>
                                    <span>Email Address</span>
                                    <label for="txtUserName" id="lblEmailAddress" title="Email Address is required"></label>
                                    <input id="txtUserName" type="text" placeholder="Email Address" />
                                </div>
                            </div>
                            <div class="login_page_box" id="divOldPassword">
                                <div>
                                    <span>Password (case sensitive) </span>
                                    <label for="txtPassword" title="Password is required  (password is case sensitive)"></label>
                                    <input type="password" placeholder="Password (case sensitive) " id="txtPassword" />
                                </div>
                            </div>
                            <div id="divExprPassword" style="display: none;">
                                <div class="login_page_box">
                                    <div>
                                        <label for="txtNewPassword">New Password</label>
                                        <input type="password" placeholder="Password (case sensitive) " id="txtNewPassword" />
                                    </div>
                                </div>
                                <div class="login_page_box">
                                    <div>
                                        <label for="txtConfirmPassword">Confirm New Password</label>
                                        <input type="password" placeholder="Password (case sensitive) " id="txtConfirmPassword" />
                                    </div>
                                </div>
                            </div>


                            


                            <div style="margin-bottom: 10px;" class="row">
                                <div class="col-md-6">
                                    <div class="pop_forgot"><a href="https://www.reservecalifornia.com/CaliforniaWebHome/Customers/Recover.aspx">Forgot Password?</a></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="login_sub_new_btn">
                                        <a href="javascript:void(0);" onclick="CheckLogin();" id="divOnlyLogin" style="width: 100%">Sign In</a>
                                        <a href="javascript:void(0);" onclick="CheckLogin_Passwprdexp();" id="divSaveLogin" style="display: none; width: 100%;">Save and Log In</a>
                                    </div>
                                </div>

                            </div>
                            <div class="clearfix"></div>
                            <div class="brd_all_newpop"></div>
                            <div id="divNewcustomer">
                                <div>
                                    <div class="pop_log_tit" id="divnewcustomer" style="font-size: 16px;">NEW CUSTOMER</div>
                                    <div>You need to have an account to make reservations or make any other purchases online. <a style="font-weight: 600; text-decoration: underline !important;" href="https://www.reservecalifornia.com/CaliforniaWebHome/Customers/NewCustomer.aspx">Create Account</a></div>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div id="libook" style="display: none">
                <a href="return false" onclick="javascript:void(0);" class="h_right_menu_toggel" title="Park Booking" alt="Booking">Booking</a>
                <div class="header-right-menu-modal dropdown-menu animated fadeInUp search-box1">
                    <div class="header-search">
                        




<div class="col-md-12 form-group">
    <label for="autocomplete1">City or Park</label>

    

    <input class="form-control search-box glyphicon glyphicon-search" id="autocomplete1" placeholder="Enter City or Park Name" type="text" />
    <label for="txtAutocomplete" style="display: none;">Enter City or Park Name</label>
    <input class="form-control search-box glyphicon glyphicon-search" id="txtAutocomplete" placeholder="Enter City or Park Names" type="text" style="display: none;" />
    <input name="ctl01$AdvanceMainSearch$hdnAutoPlaceId" type="hidden" id="hdnAutoPlaceId" />
    <input name="ctl01$AdvanceMainSearch$hdnLat" type="hidden" id="hdnLat" />
    <input name="ctl01$AdvanceMainSearch$hdnLag" type="hidden" id="hdnLag" />
    <input type="hidden" id="hdnStatevalue" />
    <input name="ctl01$AdvanceMainSearch$hdnautocomplete" type="hidden" id="hdnautocomplete" />
    <input name="ctl01$AdvanceMainSearch$hdncustomautocomplete" type="hidden" id="hdncustomautocomplete" />
    <input type="hidden" id="hdnAutocompleteCheckLevel" />
</div>
<div class="col-md-6 form-group selectContainer">
    <label for="ddlactivity">Place Category</label>

    <select name="ctl01$AdvanceMainSearch$ddlactivity" id="ddlactivity" class="form-control selectpicker" onchange="hidenight();">

</select>
</div>
<div class="col-md-4">
    <span style="font-family: Lato; color: #4c5046; display: inline-block; margin-bottom: 5px; font-weight: bold; max-width: 100%;">Arrival Date</span>
    <div class='input-group date' id='datetimepicker1'>
        <input type="hidden" name="ctl01$AdvanceMainSearch$hdnArrivalDate" id="hdnArrivalDate" />
        <label for="AdvanceMainSearch_txtArrivalDate" style="display: none;">Arrival Date</label>
        <input name="ctl01$AdvanceMainSearch$txtArrivalDate" type="text" value="5/20/2018" readonly="readonly" id="AdvanceMainSearch_txtArrivalDate" class="form-control dateforgrid" />
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
        </span>
    </div>

</div>
<div class="col-md-2">
    <div id="AdvanceMainSearch_nightdiv">

        <input type="hidden" name="ctl01$AdvanceMainSearch$hdnNights" id="hdnNights" />
        <label for="ddlNights">Nights</label>
        <select name="ctl01$AdvanceMainSearch$ddlNights" id="ddlNights" title="Nights" class="form-control selectpicker" onchange="getNights();">
	<option selected="selected" value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	<option value="19">19</option>
	<option value="20">20</option>
	<option value="21">21</option>
	<option value="22">22</option>
	<option value="23">23</option>
	<option value="24">24</option>
	<option value="25">25</option>
	<option value="26">26</option>
	<option value="27">27</option>
	<option value="28">28</option>
	<option value="29">29</option>
	<option value="30">30</option>

</select>
    </div>
</div>
<div class="clearfix"></div>
<div class="col-md-6 col-sm-6 col-xs-6" id="divFilters">
    <i class="fa fa-angle-double-right"></i>&nbsp;<a id="AfilterOpetion" onclick="return false;" href="#" class="hide_filter_text_nav">Show Filters</a>
</div>
<div class="col-md-6 col-sm-6 col-xs-6" id="btnsearchdiv">

    <a class="btn btn-primary pull-right search_btn_menu_new" id="btn_search" data-toggle="tooltip" title="Click here to Search Data">Search</a>


    
</div>
<div class="clearfix"></div>








<script src="https://www.reservecalifornia.com/CaliforniaWebHome/scripts/Advancegrid.js"></script>
<style>
    .header-right-menu-modal .btn-default:hover {
        background-color: #f4f4f4 !important;
        border: 1px solid #80827c !important;
        color: #000000 !important;
    }

    .header-right-menu-modal .btn-default:focus {
        background-color: #f4f4f4 !important;
        border: 1px solid #80827c !important;
        color: #000000 !important;
        outline: none !important;
    }
</style>
<script>
    $("#AfilterOpetion").click(function () {

        if ($("#AfilterOpetion").html() == "Hide Filters") {
            $("#AfilterOpetion").html("Show Filters");
            $("#divAdvanceSearchpart").hide();
            if ($("#hiddenPlaceLevel").val() == "Facility") {
                $("#AdvanceClearAll").show();
            }
        }
        else {
            $("#AfilterOpetion").html("Hide Filters");
            $("#divAdvanceSearchpart").show();
            if ($("#hiddenPlaceLevel").val() == "Facility") {

                $("#divParkFinderset").hide();
                $("#divLeftParkFinderset").hide();
                $("#divToggle_serch_white").hide();
                $("#AdvanceClearAll").show();

                //$(".park_finder_text_nav").hide();
            }
        }
    });
    $(document).ready(function () {

        $('#hdnNights').val($('#ddlNights').val());
        $('#ddlTopNights').val($('#ddlNights').val());
        


        //$('#AdvanceMainSearch_nightdiv').hide();

        SetDateinHiddenfield();

        

        if ('Big Basin Redwoods State Park' != '') {

            $("#autocomplete1").val('Big Basin Redwoods State Park');
        }

        $("#txtGoogleautocomplete").keypress(function (e) {
            if (e.keyCode == 13 || e.which == 13) {
                e.preventDefault();
            }
        });

        fnGetPlaceName($("#autocomplete1"));
        var pageURL = $(location).attr("href");
        var PageName = getBaseName(pageURL);
         
        if (PageName.toLowerCase() == "advancesearch" || PageName.toLowerCase() == "advancesearchm") {
           
            fnGetPlaceName($("#autocomplete2"));
        }

        if (window.location.href.toLowerCase().indexOf('advancetourandactivities') != -1) {
            $("#ddlactivity option[value='tour']").attr("selected", "selected");

            $('#ddlactivity').next().find("span")[0].innerHTML = 'Tour';
            $('#ddlactivity').next().find("button").attr("title", "Tour");
            $('#ddlactivity').next().find("div").find("li.selected").removeClass("selected");
            var lis = $('#ddlactivity').next().find("div").find("li");
            for (var i = 0; i < lis.length; i++) {
                if ($(lis[i]).find("span").html() == 'Tour') {
                    $(lis[i]).addClass("selected");
                }
            }
        }
        else if (window.location.href.toLowerCase().indexOf('advancecustomermemberships') != -1) {
            $("#ddlactivity option[value='permit']").attr("selected", "selected");

            $('#ddlactivity').next().find("span")[0].innerHTML = 'Permit';
            $('#ddlactivity').next().find("button").attr("title", "Permit");
            $('#ddlactivity').next().find("div").find("li.selected").removeClass("selected");
            var lis = $('#ddlactivity').next().find("div").find("li");
            for (var i = 0; i < lis.length; i++) {
                if ($(lis[i]).find("span").html() == 'Permit') {
                    $(lis[i]).addClass("selected");
                }
            }
        } else {

            

            
            //for (var i = 0; i < lis.length; i++) {
            //    if ($(lis[i]).find("span").html() == 'Camping') {
            //        $(lis[i]).addClass("selected");
            //    }
            //}

            $("#ddlactivity option[value='8']").attr("selected", "selected");
            
            $('#ddlactivity').next().find("span")[0].innerHTML = 'All';
            $('#ddlactivity').next().find("button").attr("title", "All");
            $('#ddlactivity').next().find("div").find("li.selected").removeClass("selected");
            var lis = $('#ddlactivity').next().find("div").find("li");
            for (var i = 0; i < lis.length; i++) {
                if ($(lis[i]).find("span").html() == 'All') {
                    $(lis[i]).addClass("selected");
                }
            }
            
        }

        var latname = GetParameterValues('lat');
        var longname = GetParameterValues('long');
        if (latname != undefined && longname != undefined) {
            $('#hdnLat').val(latname);
            $('#hdnLag').val(longname);
        }
        else {
            if ('37.17159' != '0') {
                $('#hdnLat').val('37.17159');
                $('#hdnLag').val('-122.22203');
            }
        }
        //hidenight();
        var AutosetParkName = $('#autocomplete2').val();
        $('#autocomplete2').on('blur', function () {
            if ($("#hdncustomautocomplete").val() != "")
                AutosetParkName = $("#hdncustomautocomplete").val();

            $("#autocomplete2").val(AutosetParkName);
            // 
            //if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

            //if ($(this).val() == $(this).data('defaultText')) $(this).val('');
        });
         
        $('#autocomplete2').on('focus', function () {

            if ($("#hdncustomautocomplete").val() != "")
                AutosetParkName = $("#hdncustomautocomplete").val();
            else
                AutosetParkName = $("#autocomplete2").val();
            $("#autocomplete2").val('');
            // on blur, if there is no value, set the defaultText
            // if ($(this).val() == '') $(this).val($(this).data('defaultText'));
        });

    });

    function getNights() {

        $('#hdnNights').val($('#ddlNights').val());
        $('#ddlTopNights').val($('#hdnNights').val());
        $('#Grid_ddlNights').val($('#hdnNights').val());
        var sender = document.getElementById('ddlNights');
        setSessionValuesOnClick();
        selNights_change(sender);

    }
    function getPopupNights(sender) {

        $('#hdnNights').val($('#ddlPopupNights').val());
        $("#ddlNights").next().find("span")[0].innerHTML = $('#hdnNights').val();
        $('#ddlTopNights').val($('#hdnNights').val());
        $("#Grid_ddlNights").val($('#hdnNights').val());
        // $("#ddlTopNights").next().find("span")[0].innerHTML = $('#hdnNights').val();
        setSessionValuesOnClick();
        selNights_change(sender);
    }
    function getTopPopupNights(sender) {

        $('#hdnNights').val($('#ddlTopNights').val());
        $('#Grid_ddlNights').val($('#hdnNights').val());
        $("#ddlNights").next().find("span")[0].innerHTML = $('#hdnNights').val();
        $("#btnTop_search").removeClass("filter_text_nav_inable");
        setSessionValuesOnClick();
        selNights_change(sender);
    }

    function getUnitgridPopupNights(sender) {
         
        $('#hdnNights').val($('#Grid_ddlNights').val());
        $("#ddlNights").next().find("span")[0].innerHTML = $('#hdnNights').val();
        $('#ddlTopNights').val($('#hdnNights').val());

        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SessionClears",
            data: JSON.stringify({ 'arrivaldate': $('#hdnArrivalDate').val() }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                // 
                isFilterClick = false;
                $("#hdnddlLenght").val(0);
                $("#hdnSelectCampingEquip").val("0");
                $("#hdnSelectRentalType").val(0);
                $("#hdnSelectoptions").val("0");
                $("#hidddlUnitType").val("");
                ClearAdvanceControl();
                Left_ClearAdvanceControl();
                $(".third_fil_main_box").hide();
                $("select#ddlLeft_Categories")[0].selectedIndex = 0;
                $("select#ddlCategories")[0].selectedIndex = 0;
                $("#afilterFacilityview").removeClass();
                $("#afilterFacilityview").addClass("list-view_left toggle_filter_new afilter");
                HideAllAdvanceOptionPerticular();
                Left_HideAllAdvanceOptionPerticular();
            }
        })).done(function () {
            //alert('');
            setSessionValues();
            //setDateinDatepickerControl();
            //$(".dateforgrids").hide();
        });
        selNights_change(sender);
    }





    function setDatePicker_home(futureBookingStartDate, futureBookingEndDate) {
        
       
        var date1 = new Date(futureBookingStartDate);
        date1.setHours(0, 0, 0, 0);
        var date2 = new Date(futureBookingEndDate);
        date2.setHours(0, 0, 0, 0);
        TripStartDate = date1;
        TripEndDate = date2;
        Dateformat = 'mm/dd/yy';


        $(".dateforgrid").datepicker({
            beforeShow: function () {
                setTimeout(function () {
                    $('.ui-datepicker').css('z-index', 10000);
                }, 0);
            },
            minDate: date1,
            dateFormat: 'mm/dd/yy',
            maxDate: date2,
            onSelect: function (selected, evnt) {

                updategrid(selected);
            }

        });
        
        $(".dateforgrids").datepicker({
            beforeShow: function () {
                setTimeout(function () {
                    $('.ui-datepicker').css('z-index', 10000);
                }, 0);
            },
            minDate: '5/20/2018 12:00:00 AM',
            maxDate: '11/19/2018 12:00:00 AM',
            dateFormat: 'mm/dd/yy',
            onSelect: function (selected, evnt) {

                updategrid(selected);
                $.when($.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SessionClears",
                    data: JSON.stringify({ 'arrivaldate': $('#hdnArrivalDate').val() }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var scrolldiv = $(".mCSB_draggerContainer");
                        if (scrolldiv.length > 0) {
                            for (i = 0; i < scrolldiv.length; i++) {
                                if (scrolldiv.length - 1 == i) {
                                    var DivElemt = scrolldiv[i];
                                    var content
                                    scrollTop = DivElemt.firstElementChild.offsetTop;

                                    scroollID = parseInt(DivElemt.firstElementChild.id.split('_')[1]);


                                }
                            }
                        }
                        
                        contentDivID = "#mCSB_" + scroollID + "_container";
                        dragcontentTop = $(contentDivID).css("top");
                        draggID = parseInt(scroollID) + parseInt(1);
                        drragableId = "#mCSB_" + draggID + "_dragger_vertical";
                        nextcontentDivID = "#mCSB_" + parseInt(draggID) + "_container";
                        isFilterClick = false;
                        $("#hdnddlLenght").val(0);
                        $("#hdnSelectCampingEquip").val("0");
                        $("#hdnSelectRentalType").val(0);
                        $("#hdnSelectoptions").val("0");
                        $("#hidddlUnitType").val("");
                        ClearAdvanceControl();
                        Left_ClearAdvanceControl();
                        $(".third_fil_main_box").hide();
                        $("select#ddlLeft_Categories")[0].selectedIndex = 0;
                        $("select#ddlCategories")[0].selectedIndex = 0;
                        $("#afilterFacilityview").removeClass();
                        $("#afilterFacilityview").addClass("list-view_left toggle_filter_new afilter");
                        HideAllAdvanceOptionPerticular();
                        Left_HideAllAdvanceOptionPerticular();
                    }
                })).done(function () {
                    //alert('');
                    setSessionValues();
                    //setDateinDatepickerControl();
                    //$(".dateforgrids").hide();
                });
            },
            onClose: function () {
                if (drragableId != undefined) {

                    setTimeout(function () { $("#divUnitGridlist .mCSB_container").css("top", dragcontentTop) }, 3000);
                    setTimeout(function () { $("#divUnitGridlist .mCSB_dragger").css("top", scrollTop) }, 3000);
                }
            }

        });

    }
    function AllSessionExpireAlert(timeout) {
        var seconds = timeout / 1000;
        document.getElementsByName("secondsIdle").innerHTML = seconds;
        document.getElementsByName("seconds").innerHTML = seconds;
        setInterval(function () {
            seconds--;
        }, 1000);
        setTimeout(function () {
            //Show Popup before 20 seconds of timeout.
            $find("mpeTimeout").show();
        }, timeout - 20 * 1000);
        var pathname = window.location.pathname;

        if (pathname.toLowerCase().indexOf("default") == -1) {
            setTimeout(function () {
                window.location = "https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx";
            }, timeout);
        }
    }

    function updategrid(value) {
        // 
        $('.arrivaldate').val(value);
        $("#AdvanceMainSearch_txtArrivalDate").val(value);
        //debugger;
        $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val(value);
        $("#mainContent_DateRange").val(value);
        $('#hdnArrivalDate').val(value);
        SetDateinHiddenfield();

        

    }
    function ClearMainControl() {
        $('#autocomplete').val("");
        $("#AdvanceMainSearch_txtArrivalDate").val($.datepicker.formatDate("mm/dd/yy", new Date()));
        $("#hdnArrivalDate").val($.datepicker.formatDate("mm/dd/yy", new Date()));
        
        $('#ddlNights').val(0);

    }
    function SetDateinHiddenfield() {
        // 
        var dt = $("#AdvanceMainSearch_txtArrivalDate").val().split('/');
        
        $('#hdnArrivalDate').val(dt[0] + "/" + dt[1] + "/" + dt[2]);
        
    }

    function fnGetPlaceName(AutocompleteControl) {
        var urlname = '';
        if (IsMobileBrowser.toLowerCase() == "true") {
            urlname = baseurlmain + '/Facilities/AdvanceSearchm.aspx/GetCityPlacename';
        } else {
            urlname = baseurlmain + '/Facilities/AdvanceSearch.aspx/GetCityPlacename';
        }
        AutocompleteControl.autocomplete({

            source: function (request, response) {

                $("#hdnLat").val('');
                $("#hdnLag").val('');
                var param = { name: AutocompleteControl.val() };
                $.ajax({
                    url: urlname,
                    data: JSON.stringify(param),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataFilter: function (data) { return data; },
                    success: function (data) {

                        response($.map(data.d, function (item) {

                            return {
                                label: item.Name,//+ "," + item.EntityType,
                                value: item.Latitude + "," + item.Longitude,
                                logo: item.EntityType,
                                CityPark: item.CityParkId,
                                ParkSize: item.ParkSize,
                                Placeid: item.PlaceId
                            }
                        }));

                        if (data.d.length == 0) {
                            $("#hdnLat").val("");
                            $("#hdnLag").val("");
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert(textStatus);
                    }
                });
            },

            search: function (event, ui) {

                $("#hdnLat").val('');
                $("#hdnLag").val('');

            },
            select: function (e, ui) {
                debugger;
                ChnageDragandZoom = false;
                e.preventDefault();
                boolAutosearchvalues = true;
                $("#hdnsearchplaceid").val(ui.item.Placeid);
                $("#hdnparksize").val(ui.item.ParkSize);
                MapboxPlaceid = ui.item.Placeid;
                parkSize = ui.item.ParkSize;
                $("#hdndefaultLat").val(ui.item.value.split(',')[0]);
                $("#hdndefaultLag").val(ui.item.value.split(',')[1]);
                $("#hdnLat").val(ui.item.value.split(',')[0]);
                $("#hdnLag").val(ui.item.value.split(',')[1]);
                $("#hdnAutoPlaceId").val(ui.item.CityPark);
                $("#autocomplete1").val(ui.item.label);
                $("#autocomplete2").val(ui.item.label);
                $("#mainContent_hdnSearchtype").val(ui.item.logo);
                $("#hdnSearchType").val(ui.item.logo);
                //$("#autocomplete2").val()
                // $("#btn_search").click();

                
                Allevent();
                

            },

            response: function (event, ui) {

                if (ui.content[0] == undefined) {
                    $("#hdnLat").val('');
                    $("#hdnLag").val('');
                } else {

                    ChnageDragandZoom = false;
                    $("#hdnLat").val(ui.content[0].value.split(',')[0]);
                    $("#hdnLag").val(ui.content[0].value.split(',')[1]);
                    $("#hdncustomautocomplete").val(ui.content[0].label);

                    $("#autocomplete1").val($("#autocomplete2").val());
                }
            },
            focus: function (event, ui) {

                $("#hdnLat").val(ui.item.value.split(',')[0]);
                $("#hdnLag").val(ui.item.value.split(',')[1]);
                this.value = ui.item.label;
                $("#hdncustomautocomplete").val(this.value);
                event.preventDefault(); // Prevent the default focus behavior.
            },
            minLength: 2
        }).data("ui-autocomplete")._renderItem = function (ul, item) {

            return $('<li class="ui-menu-item-with-icon"></li>')
                .data("item.autocomplete", item)
                .append('<a><span class="' + item.logo + '-icon"></span>&nbsp;' + item.label + '</a>')
                .appendTo(ul);
        };

    }


    function fnTourActivity() {


        var placeid = GetParameterValues('placeid');
        if (window.location.href.toLowerCase().indexOf('advancesearch') == -1) {

            if ($('#hdnLat').val() == "") {
                $('#hdnLat').val('0');
                $('#hdnLag').val('0');
            }
        } else {
            if ($("#hdnLat").val() == "") {
                $("#messageBoxLightbox2 .modal-body").html("Place not Found");
                $("#messageBoxLightbox2 .modal-title").html("Error");
                $('#messageBoxLightbox2').modal();
                $(".ui-widget-content").css("display", "none");
                return false;
            }
        }

        var urlname = baseurlmain + '/Facilities/CascadingDropdown.asmx/GoCamping';
        var param = { currentdate: $('#hdnArrivalDate').val(), nights: $('#hdnNights').val(), hdnLat: $('#hdnLat').val(), hdnLag: $('#hdnLag').val(), landingaddress: $('#autocomplete2').val() };
        $.ajax({
            url: urlname,
            data: JSON.stringify(param),
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",

            success: function (data) {
                var result = data.d;

                if ($('#ddlFacilityCategory').val() == '1' || $('#ddlFacilityCategory').val() == '2' || $('#ddlFacilityCategory').val() == 'trail') {


                    if (window.location.href.toLowerCase().indexOf('advancesearch') == -1) {
                        window.location.href = baseurlmain + '/Facilities/AdvanceSearch.aspx';
                    }
                }
                if ($('#ddlFacilityCategory').val() == '6') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    var urlname = baseurlmain + '/Memberships/AdvanceCustomerMemberships.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    OpenLoginBox(iscustomernull, true, urlname, '');
                }
                if ($('#ddlFacilityCategory').val() == '3') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    //var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    var urlname = baseurlmain + '/Activities/ProgramsAndTours.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    window.location.href = urlname;
                }
                if ($('#ddlFacilityCategory').val() == 'anonuevotourtour') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    //var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    var urlname = baseurlmain + '/Activities/ProgramsAndTours.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    window.location.href = urlname;
                }
                if ($('#ddlFacilityCategory').val() == '4') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    //var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    var urlname = baseurlmain + '/Activities/HearstCastleTours.aspx';
                    window.location.href = urlname;
                }
                if ($('#ddlFacilityCategory').val() == 'hearstsansimeontour') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    //var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    var urlname = baseurlmain + '/Activities/ProgramsAndTours.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    window.location.href = urlname;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //alert(textStatus);
            }
        });


    }
    $('#btn_search').click(function () {

        var placeid = GetParameterValues('placeid');
        if (window.location.href.toLowerCase().indexOf('advancesearch') == -1) {

            if ($('#hdnLat').val() == "") {
                $('#hdnLat').val('0');
                $('#hdnLag').val('0');
            }
        } else {
            if ($("#hdnLat").val() == "") {
                $("#messageBoxLightbox2 .modal-body").html("Place not Found");
                $("#messageBoxLightbox2 .modal-title").html("Error");
                $('#messageBoxLightbox2').modal();
                $(".ui-widget-content").css("display", "none");
                return false;
            }
        }

        var urlname = baseurlmain + '/Facilities/CascadingDropdown.asmx/GoCamping';
        var param = { currentdate: $('#hdnArrivalDate').val(), nights: $('#hdnNights').val(), hdnLat: $('#hdnLat').val(), hdnLag: $('#hdnLag').val(), landingaddress: $('#autocomplete1').val() };
        $.ajax({
            url: urlname,
            data: JSON.stringify(param),
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",

            success: function (data) {

                var result = data.d;

                if ($('#ddlactivity').val() == 'camping' || $('#ddlactivity').val() == 'dayuse' || $('#ddlactivity').val() == 'trail') {


                    if (window.location.href.toLowerCase().indexOf('advancesearch') == -1) {
                        window.location.href = baseurlmain + '/Facilities/AdvanceSearch.aspx';
                    }
                }
                if ($('#ddlactivity').val() == 'permit') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    var urlname = baseurlmain + '/Memberships/AdvanceCustomerMemberships.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    OpenLoginBox(iscustomernull, true, urlname, '');
                }
                if ($('#ddlactivity').val() == 'tour') {
                    placeid = result;
                    placeid = $("#hdnAutoPlaceId").val();
                    var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    window.location.href = urlname;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //alert(textStatus);
            }
        });


    });
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }


</script>


                        <div id="divSecoundSearch">
                            
                        <input type="submit" name="ctl01$ctl13$btngetFacilities" value="test" id="ctl13_btngetFacilities" style="display: none" />
<input type="hidden" name="ctl01$ctl13$indexValue" id="ctl13_indexValue" />
<input type="hidden" name="ctl01$ctl13$hidddlCategories" id="hidddlCategories" />
<input type="hidden" name="ctl01$ctl13$hidddlUnitType" id="hidddlUnitType" />
<input type="hidden" name="ctl01$ctl13$hdnParkFinder" id="hdnParkFinder" />

<input type="hidden" name="ctl01$ctl13$hdnSelectRentalType" id="hdnSelectRentalType" value="0" />

<input id="hdnSelectoptions" type="hidden" />
<input type="hidden" name="ctl01$ctl13$hdnSelectCampingEquip" id="hdnSelectCampingEquip" value="0" />
<input id="hdnddlLenght" type="hidden" />
<input id="hdnCampingvalue" type="hidden" />
<input id="hdnCheckLevel" type="hidden" />
<input type="hidden" name="ctl01$ctl13$hdnLeftUnitTypeName" id="hdnLeftUnitTypeName" />
<input type="hidden" name="ctl01$ctl13$hdnSelectedCategoryName" id="ctl13_hdnSelectedCategoryName" />
<input type="hidden" name="ctl01$ctl13$hdnSelectedRegionId" id="ctl13_hdnSelectedRegionId" value="0" />
<input type="hidden" name="ctl01$ctl13$hdnSelectedUnittypeId" id="ctl13_hdnSelectedUnittypeId" />
<input name="ctl01$ctl13$hdnplaceid" type="hidden" id="ctl13_hdnplaceid" />
<input type="hidden" name="ctl01$ctl13$hdnMultiSelect" id="hdnMultiSelect" />
<div id="divAdvanceSearchpart" style="display: none;">
    <div class="brd_top_btm_new_nev" id="divParkFinderset">
        <div class="col-md-12">
            <div class="park_finder_text_nav">Park Finder</div>
            <a href="javascript:void(0);" class="new_cle_all" id="parkClear" onclick="ParkClear();" data-toggle="tooltip" title="Click here to Remove Filter">Clear All</a>
            <div class="spacer10"></div>
        </div>

        <div class="new_nav_under_btn col-md-12" id="openbox">
            <ul id="part-finder">
                
                <div id="Top_Highlights"></div>
            </ul>
        </div>
    </div>
    <div class="spacer10"></div>
    <div>
        <div class="col-md-12">
            <div class="park_finder_text_nav">Site Finder</div>
            <a href="javascript:void(0);" class="new_cle_all" id="AdvanceClearAll" onclick="AdvanceClear();" style="display: none;" data-toggle="tooltip" title="Click here to remove filter">Clear All</a>
            <div class="spacer5"></div>
        </div>
        <div>
          <input type="hidden" name="ctl01$ctl13$hdnIsPremium" id="hdnIsPremium" />
            <div class="col-md-6">
                <div class="main_nav_select">
                    <select name="ctl01$ctl13$ddlCategories" id="ddlCategories" title="Select a Catagory" onchange="ShowControlsFromEvent()">
	<option selected="selected" value="">Select Rental Type</option>
	<option value="1010">Boating</option>
	<option value="1">Camping</option>
	<option value="7">DailyUse</option>
	<option value="1016">Equestrain Camping</option>
	<option value="2">Group Camping</option>
	<option value="1015">Hook Up Camping</option>
	<option value="1008">Lodging</option>
	<option value="1014">Remote Camping</option>

</select>
                </div>
            </div>

            <div class="col-md-6" id="unitType" style="display: none;">
                <div class="main_nav_select">

                    <select name="ctl01$ctl13$ddlUnitType" id="ddlUnitType" title="Select Unit Type">

</select>

                </div>
            </div>

            <div class="col-md-6" id="campingunit" style="display: none;">
                <div class="main_nav_select">
                    <select name="ctl01$ctl13$ddlCampingUnit" id="ddlCampingUnit" title="Select Camping Unit" onchange="SelectCampingEquip()">
	<option selected="selected" value="0">Select Camping Equip. </option>
	<option value="75">RV/Motorhome</option>
	<option value="83">Tent</option>
	<option value="76">Tent Only</option>
	<option value="74">Trailer</option>
	<option value="87">Trailer Only</option>
	<option value="79">Truck/SUV/Van</option>

</select>
                </div>
            </div>

            <div class="col-md-6" id="padlength" style="display: none;">
                <div class="main_nav_select">
                    <select name="ctl01$ctl13$ddlLenght" id="ddlLenght" title="Select Maximum Trailer Length" onchange="Lenghts()">
	<option value="Trailer Length">Trailer Length</option>
	<option value="> 15">&gt; 15</option>
	<option value="> 20">&gt; 20</option>
	<option value="> 30">&gt; 30</option>
	<option value="> 40">&gt; 40</option>
	<option value="> 50">&gt; 50</option>
	<option value="> 60">&gt; 60</option>
	<option value="> 70">&gt; 70</option>

</select>
                </div>
            </div>

            <div class="col-md-12">
                <a id="btn_advancesearch" class="filter_text_nav" style="cursor: pointer;" data-toggle="tooltip" title="Click here to Filter data">Filters</a>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</div>





<script>
    var Selectoptions = "";
    $(document).ready(function () {

        $(".clickbox1").click(function (e) {
            e.preventDefault();
            $("#openbox").show();
            $(".clickbox1").toggleClass("menu-open1");
        });


        var dataparkfinder = $('#hdnParkFinder').val();
        if (dataparkfinder.length > 0) {
            var dataparkfinderinner = dataparkfinder.split(',');
            for (var i = 0; i < dataparkfinderinner.length; i++) {
                $('.white_bg_part').find('li#' + dataparkfinderinner[i]).addClass('active');

                parkFinderArray.push(dataparkfinderinner[i].replace(/_/g, ' '));
            }
        }

        setAdvanceperimeterValues();
        if ($('#hidddlUnitType').val() != "") {

            $("#hdnSelectoptions").val($('#hidddlUnitType').val());
        }

        BindCategories();
        if ($("#hiddenPlaceLevel").val() == "Facility") {

            Leftmenu = false;
            //BindUnitTypes();

        }
        //$(".ui-multiselect-none").click(function () {
        //    $('#hidddlUnitType').val('');
        //    alert("");
        //});

    });
    function ClearforParkfinder() {
        //$("#divAllControl").css("width", "200px");
        //boolAdvanceSearch = false;
        StartLoaders();
        for (var i = 0; i < parkFinderArray.length; i++) {
            if (parkFinderArray[i] == "Accessible") {
                $('#chkAccessible').attr("checked", false);
            }
        }

        $("#div_toggle_right_text").html("Selected 0 of 17");
        $('#part-finder li').removeClass('active');
        $('#part-finder li').removeClass('selected');
        $('#left_openbox li').removeClass('active');
        $('#left_openbox li').removeClass('selected');
        parkFinderArray = [];
        isFilterClick = false;
        //$('.third_fil_main_box').hide();

        //setTimeout(function () { GetMapData(0, true, true); }, 500);
        //$('.slide_one').toggle();

        ClearSessionValues();

        $('.third_fil_main_box').hide();

        setTimeout(function () { GetMapData(0, true, true); }, 500);
        $('.slide_one').hide();
        $('.slide_one').toggle();
        //$(".slide_one").css("width", "240px");
        //$(".slide_one").css("overflow", "hidden");
        fnDraggableOriginalsize();
        EndLoaders();
    }
    function ClearforRentalType() {
       
        $('#chkIsPremium').attr('checked', false);
        StartLoaders();
        //$("#divAllControl").css("width", "200px");
         
        Selectoptions = "";
        // boolAdvanceSearch = false;
        $("#hdnddlLenght").val(0);
        $("#hdnSelectCampingEquip").val("0");
        $("#hdnSelectRentalType").val(0);
        $("#hdnSelectoptions").val("0");
        $("#hidddlUnitType").val("");
        ClearAdvanceControl();
        Left_ClearAdvanceControl();
        ClearSessionValues();
        HideAllAdvanceOptionPerticular();
        Left_HideAllAdvanceOptionPerticular();

        isFilterClick = false;
        $('.third_fil_main_box').hide();
        $('.slide_one').hide();
        $('.slide_one').toggle();
        //$(".slide_one").css("width", "240px");
        //$(".slide_one").css("overflow", "hidden");
        $("#question2").removeClass("dis_block");
        setTimeout(function () { GetMapData(0, true, true); }, 500);
        
        fnDraggableOriginalsize();
        EndLoaders();
    }
    function ClearforRentalTypeFacility() {
        $('#chkIsPremium').attr('checked', false);
        //boolAdvanceSearch = false;
         
        Selectoptions = "";
        $("#ajay #afilterParkview").removeClass("list-view_left toggle_filter_new toggle_filter_new_third afilter");
        $("#ajay #afilterParkview").addClass("list-view_left toggle_filter_new");
        $('.third_fil_main_box').hide();
        parkFinderArray = [];
        $("#hdnddlLenght").val(0);
        $("#hdnSelectCampingEquip").val("0");
        $("#hdnSelectRentalType").val(0);
        $("#hdnSelectoptions").val("0");
        $("#hidddlUnitType").val("");
        $("#hdnSelectoptions").val("");
        $("#hidddlUnitType").val("");

        ClearAdvanceControl();
        Left_ClearAdvanceControl();
        ClearSessionValues();
        HideAllAdvanceOptionPerticular();
        Left_HideAllAdvanceOptionPerticular();
        $("#btn_advancesearch").click();
        //$('.slide_one').toggle();
        isFilterClick = false;
        //$('.slide_one').slideToggle('slow');
        $('.slide_one').hide();
        $('.slide_one').toggle();
        //$(".slide_one").css("width", "240px");
        //$(".slide_one").css("overflow", "hidden");
        fnDraggableOriginalsize();
    }
    function ParkClear() {
        $('.third_fil_main_box').hide();
        $('#part-finder li').removeClass('active');
        $('#part-finder li').removeClass('selected');

        $('#left_openbox li').removeClass('active');
        $('#left_openbox li').removeClass('selected');

        parkFinderArray = [];
        $("#hdnddlLenght").val(0);
        $("#hdnSelectCampingEquip").val("0");
        $("#hdnSelectRentalType").val(0);
        $("#hdnSelectoptions").val("0");
        $("#hidddlUnitType").val("");
        ClearSessionValues();
        HideAllAdvanceOptionPerticular();
        Left_HideAllAdvanceOptionPerticular();
        //setSessionValuesOnClick();
        isFilterClick = false;
        $('.slide_one').toggle();
        fnDraggableOriginalsize();
        $(".slide_one").css("width", "240px");
        $(".slide_one").css("overflow", "hidden");

        setTimeout(function () { GetMapData(0, true, true); }, 500);
    }
    function AdvanceClear() {
        $('.third_fil_main_box').hide();
        parkFinderArray = [];
        $("#hdnddlLenght").val(0);
        $("#hdnSelectCampingEquip").val("0");
        $("#hdnSelectRentalType").val(0);
        $("#hdnSelectoptions").val("0");
        $("#hidddlUnitType").val("");
        ClearSessionValues();
        HideAllAdvanceOptionPerticular();
        Left_HideAllAdvanceOptionPerticular();
        $("#btn_advancesearch").click();
        $('.slide_one').toggle();
        $(".slide_one").css("width", "240px");
        $(".slide_one").css("overflow", "hidden");
        fnDraggableOriginalsize();
    }

    function BindUnitTypes() {

        if ($('#chkIsPremium').is(':checked'))
        {
            $("#hdnIsPremium").val("true");
        }
        else
        {
            $("#hdnIsPremium").val("false");            
        }
        var categoryid = $("#ddlCategories").val();
      
        var hidddlUnitType = document.getElementById('hidddlUnitType').id;
        if (categoryid != "" && categoryid != null && categoryid != "0") {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "CascadingDropdown.asmx/GetUnitTypes",
                data: JSON.stringify({ 'knownCategoryValues': $("#ddlCategories").val(), 'category': '', 'contextKey': '', 'IsPremium': $("#hdnIsPremium").val()}),
                dataType: "json",
                async: false,
                success: function (data) {

                
                    var unitypes = data.d;
                    $("#ddlUnitType").html('');
                    $("#ddlLeft_UnitType").html('');

                    $.each(unitypes, function (key, unitype) {
                        $("#ddlUnitType , #ddlLeft_UnitType").append($("<option></option>").val(unitype.value).html(unitype.name));
                    });


                    var ddlUnitType = document.getElementById('ddlUnitType').id;
                    var ddl = document.getElementById('ddlCategories');
                    var ddltext = $("#ctl13_hdnSelectedCategoryName").val();
                    var ddlvalue = $("#hidddlCategories").val();

                    if ((document.getElementById('ctl13_indexValue').value == "Camping" || ddltext == "Camping" || ddlvalue == 1) && $("#" + ddlUnitType).length > 1) {
                        $("#ddlUnitType , #" + ddlUnitType).multiselect();
                        $("#ddlUnitType , #" + ddlUnitType).multiselect('refresh');
                        $(".ui-multiselect").removeClass("ui-state-disabled");
                        $(".ui-multiselect").addClass("select_box");
                    }
                    if (ddlUnitType.length > 1) {

                        $("#ddlUnitType , #ddlLeft_UnitType").multiselect();
                        $("#ddlUnitType , #ddlLeft_UnitType").multiselect('refresh');

                        //$("#ui-multiselect-ddlUnitType-option-0").click();
                        //$("#ui-multiselect-ContentPlaceHolder1_LeftMenuAdvanceFilter_ddlLeft_UnitType-option-0").click();

                        $(".ui-multiselect").removeClass("ui-state-disabled");
                        $(".ui-multiselect").addClass("select_box");

                        $(".select_box,.select_box span").click(function () {
                            $(".ui-multiselect-checkboxes").removeAttr("style");
                            $(".ui-multiselect-checkboxes").css("max-height", "175px");
                        });
                        Leftmenu = false;
                        // 
                        $("#ddlUnitType,#ddlLeft_UnitType").multiselect({

                            noneSelectedText: "Spot Type (optional)",
                            checkAllText: "Check all",
                            uncheckAllText: "Uncheck all",
                            click: function (event, ui) {

                                if (Leftmenu == true) {
                                    var list = ui.value;
                                     
                                    Selectoptions = "";
                                    $("input[type=checkbox]:checked").each(function () {
                                        Selectoptions += $(this).val() + ",";
                                    });
                                    // 
                                    $('#hidddlUnitType').val(Selectoptions);
                                }
                            },
                            checkAll: function (event, ui) {

                                Selectoptions = "";
                                $("input[type=checkbox]:checked").each(function () {
                                    Selectoptions += $(this).val() + ",";
                                });
                                $('#hidddlUnitType').val(Selectoptions);
                            },
                            uncheckAll: function (event, ui) {
                                $("#hdnSelectoptions").val('');
                                $('#hidddlUnitType').val('');
                                Selectoptions = '';
                                $('#hidddlUnitType').val('');
                            }

                        });

                        $(".ui-multiselect").removeAttr("disabled");
                        $("#ui-multiselect-ddlLeft_UnitType-option-0").click().removeAttr("checked");
                        $("#ui-multiselect-ddlUnitType-option-0").click().removeAttr("checked");


                        
                        var hidddlUnitTypearray = $('#' + hidddlUnitType).val().split(',');
                        if (hidddlUnitTypearray != "") {
                            for (var i = 0; i < hidddlUnitTypearray.length; i++) {
                                $("#ddlUnitType").multiselect("widget").find(":checkbox[value='" + hidddlUnitTypearray[i] + "']").each(function () {
                                    $(this).click();
                                });
                                $("#ddlLeft_UnitType").multiselect("widget").find(":checkbox[value='" + hidddlUnitTypearray[i] + "']").each(function () {
                                    $(this).click();
                                });

                            }
                            Selectoptions = $('#' + hidddlUnitType).val();
                        }
                    }
                },
                error: function (data) {
                    //alert("Error");
                }
            });
        }
    }

    function pageLoad() {


        
    }

    function bSearch_Click() {
        var ddlUnitType = document.getElementById('ddlUnitType').id;
        var hidddlUnitType = document.getElementById('hidddlUnitType').id;
        $("#" + ddlUnitType).multiselect();

        var selectedOptions = $("#" + ddlUnitType).multiselect("getChecked").map(function () {
            return this.value;
        }).get();
        selectedOptions = jQuery.grep(selectedOptions, function (value) {
            return value != "";
        });
        $('#' + hidddlUnitType).val$('#' + hidddlUnitType).val(selectedOptions);

    }


    function ShowControlsFromEvent() {
      
        Leftmenu = false;
        if ($("#ddlCategories").val() != $('#ddlLeft_Categories').val()) {
            $("#ddlLeft_Categories").val($('#ddlCategories').val());
        }

        $('#ddlCampingUnit').removeAttr("disabled");
        $('#ddlLenght').removeAttr("disabled");

        var hidddlUnitType = document.getElementById('hidddlUnitType').id;
        $('#' + hidddlUnitType).val(null);
        var hidddlCategories = document.getElementById('hidddlCategories').id;
        var ddl = document.getElementById('ddlCategories');
        var ddlvalue = ddl.options[ddl.selectedIndex].value;
        var ddltext = $("#ctl13_hdnSelectedCategoryName").val();
        document.getElementById('ctl13_indexValue').value = ddltext;
        $("#ctl13_hdnSelectedCategoryName").val(ddltext);
        $('#' + hidddlCategories).val(ddlvalue);
        var div1 = document.getElementById("campingunit");
        var div2 = document.getElementById("padlength");
        var div3 = document.getElementById("unitType");
        //var div4 = document.getElementById("additionalOptions");


        if (ddlvalue == 1 || ddlvalue != 25) {
            div1.style.display = "block";
            div2.style.display = "block";
            div3.style.display = "block";
        } else {
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
        }

        if (ddlvalue == 25) {
            div1.style.display = "block";
            div2.style.display = "block";
            div3.style.display = "block";

        } else {
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";

        }
        if (ddlvalue == "Select Rental Type" || ddlvalue == "") {
            div3.style.display = "none";
            div2.style.display = "none";
            div1.style.display = "none";

        } else {

            div3.style.display = "block";
            div2.style.display = "block";
            div1.style.display = "block";

        }
        if (ddlvalue != 25 || ddlvalue == "") {

            div2.style.display = "none";
            div1.style.display = "none";

        } else {

            div3.style.display = "block";
            div2.style.display = "block";
            div1.style.display = "block";
        }
        
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";

        
        $("#hdnSelectRentalType").val($('#ddlCategories').val());
        //  
        LeftMultiselection = false;
        Leftmenu = false;

        BindUnitTypes();
        //Leftmenu = true;


        $("#ui-multiselect-ddlUnitType-option-0").click().removeAttr("checked");
    }



    function PopulateCategoriesByPlace() {
        BindCategories();
    }

    function PopulateUnitTypesByPlace() {
       
        BindUnitTypes();
    }






    function SelectCampingEquip() {
        $("#hdnSelectCampingEquip").val($('#ddlCampingUnit').val());
         
        Selectoptions = "";
        $("input[type=checkbox]:checked").each(function () {
            Selectoptions += $(this).val() + ",";
        });

        $("#hdnSelectoptions").val(Selectoptions.toString().substring(0, Selectoptions.length - 1));

    }

    function Lenghts() {
        $("#hdnddlLenght.ClientID").val($('#ddlLenght').val());
    }

    function BindCategories() {

        

    }

    function hideAdvanceParameter() {
        
        $('#ddlCampingUnit').attr("disabled", false);
        $('#ddlLenght').attr("disabled", false);
        //}
    }
    function setAdvanceperimeterValues() {
        //// 
        //ddlLeft_UnitType
        //$("input[id=ddlLeft_UnitType]:checked").each(function () {
        //    if ($(this).val() != "on") {
        //        Selectoptions += $(this).val() + ",";
        //    }
        //});
         
        if ($('#ddlCategories').val() != "0" && $('#ddlCategories').val() != "") {

            //isFilterClick = true;
            //boolAdvanceSearch = true;
        }
        $("input[id=ddlLeft_UnitType]:checked").each(function () {
            if ($(this).val() != "on") {
                Selectoptions += $(this).val() + ",";
            }
        });
        if (Selectoptions != "") {
            Selectoptions = Selectoptions.replace('on,', '');
        }

        //Start Select options
        if (Selectoptions.toString().substring(0, Selectoptions.length - 1) == "") {
            $("#hdnSelectoptions").val(0);

        } else {
            $("#hdnSelectoptions").val(Selectoptions.toString().substring(0, Selectoptions.length - 1));
            $("#hidddlUnitType").val(Selectoptions.toString().substring(0, Selectoptions.length - 1));
            isFilterClick = true;
            boolAdvanceSearch = true;
        }

        //end Select options

        //Start Minimum Vehicle Length
        if ($('#ddlLenght').val() == "Trailer Length" || $('#ddlLenght').val() == "Maximum Trailer Length" || $('#ddlLenght').val() == null) {
            $("#hdnddlLenght").val(0);
        } else {
            $("#hdnddlLenght").val($('#ddlLenght').val().replace('>', ''));
        }
    }




</script>
<script>
    function setSessionValues() {
         
        setAdvanceperimeterValues();
        var unitTypeIdsArray = new Array();
        if ($("#hdnSelectoptions").val() != "0") {
            var ln = $("#hdnSelectoptions").val().split(',');
            for (var i = 0; i < ln.length; i++) {
                unitTypeIdsArray.push(ln[i]);
            }
        }

        if ($('#ddlCategories').val() == "") {
            $("#hdnSelectRentalType").val(0);
        }
        if ($("#chkAdaUnit_Unit").is(':checked')) {
            showADA = true;
        }
        else {
            showADA = false;
        }
        var PlaceIsPremiumValue = false;
        if ($("#chkIsPremium").is(':checked')) {
            PlaceIsPremiumValue = true;
        }
        else {
            PlaceIsPremiumValue = false;
        }
        //ap
         
        var availabilitySearchParams = {
            StartDate: $('#hdnArrivalDate').val(),
            Nights: $('#hdnNights').val(),
            CategoryId: $("#hdnSelectRentalType").val(),
            UnitTypeIds: unitTypeIdsArray,
            ShowOnlyAdaUnits: showADA,
            ShowOnlyTentSiteUnits: 'false',
            ShowOnlyRvSiteUnits: 'false',
            MinimumVehicleLength: $("#hdnddlLenght").val(),
            ShowSiteUnitsName: $("#hdnSelectCampingEquip").val(),
            ParkFinder: parkFinderArray,
            chooseActivity: $('#ddlFacilityCategory').val(),
            IsPremium: PlaceIsPremiumValue
        };
        $.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SetSessionvalue",
            data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
               
                boolAdvanceSearch = true;
                $("#facilityChanged").val("true");
                GetUnitGridDataHtmlString();

                $('.table_page_table tbody').css("height", "60px");
            }
        });
    }

    
    $('#ddlCategories').change(function () {
        $("#hdnSelectoptions").val('');
        $('#hidddlUnitType').val('');
        Leftmenu = true;
        if ($("ddlCategories").val() != $('#ddlLeft_Categories').val()) {
            $("#ddlLeft_Categories").val($('#ddlCategories').val());
        }

        if (($('#ddlCategories').val() == "")) {
            //ClearSessionValues();
            HideAllAdvanceOptionPerticular();
            Left_HideAllAdvanceOptionPerticular();
        }
        else if (($('#ddlCategories').val() == "25") || ($('#ddlCategories').val() == "1")) {
            ShowAdvanceOptionPerticular();
            Left_ShowAdvanceOptionPerticular();
        }
        else if (($('#ddlCategories').val() != "25") || ($('#ddlCategories').val() != "1")) {
            Left_HideAdvanceOpetionPeraticular();
            HideAdvanceOpetionPeraticular();
        }
    });

$('#ddlCampingUnit').change(function () {
        if ($("#ddlLeft_CampingUnit").val() != $('#ddlCampingUnit').val()) {
        $("#ddlLeft_CampingUnit").val($('#ddlCampingUnit').val());
        }
});

    $('#ddlLenght').change(function () {
        if ($("#ddlLeft_Lenght").val() != $('#ddlLenght').val()) {
            $("#ddlLeft_Lenght").val($('#ddlLenght').val());
        }
    });

    function ClearAdvanceControl() {
        $('#ddlCategories').val("");
        $('#ddlCampingUnit').val("0");
        $('#ddlLenght').val('Trailer Length');
        $('.ui-multiselect-none').click();
        $('#ddlCampingUnit').attr("disabled", "disabled");
        $('#ddlLenght').attr("disabled", "disabled");
    }


    function ClearSessionValues() {

        //ClearAdvanceControl();
        //Left_ClearAdvanceControl();

        var unitTypeIdsArray = new Array();
        if ($("#hdnSelectoptions").val() != "0") {
            var ln = $("#hdnSelectoptions").val().split(',');
            for (var i = 0; i < ln.length; i++) {
                unitTypeIdsArray.push(ln[i]);
            }
        }
        if ($("#hdnddlLenght").val() == "Trailer Length")
            $("#hdnddlLenght").val("0");
        var CategoryID = 0;
        //if ($("#hdnLeft_SelectRentalType").val() != "" && $("#ddlLeft_Categories").val() != "")
        if ($("#ddlLeft_Categories").val() != "")
            CategoryID = $("#ddlLeft_Categories").val();
        $("#hdnSelectCampingEquip").val("0");
        //var availabilitySearchParams = {
        //    StartDate: $('#hdnArrivalDate').val(),
        //    CategoryId: CategoryID,
        //    UnitTypeIds: unitTypeIdsArray,
        //    ShowOnlyAdaUnits: 'true',
        //    ShowOnlyTentSiteUnits: 'false',
        //    ShowOnlyRvSiteUnits: 'false',
        //    MinimumVehicleLength: $("#hdnddlLenght").val(),
        //    Nights: $('#hdnNights').val(),
        //    ShowSiteUnitsName: $("#hdnLeft_SelectCampingEquip").val(),
        //    ParkFinder: parkFinderArray
        //};

        //$.ajax({
        //    type: "POST",
        //    url: "AdvanceSearch.aspx/SetSessionvalue",
        //    data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    async: false,
        //    cache: false,
        //    success: function (data) {
        //        if ($("#hdnSelectRentalType").val() == 0 && $("#ddlLeft_Categories").val() == 0)
        //            boolAdvanceSearch = false;
        //        // alert("ClearSessionValues");
        //    },
        //    error: function (xhr, ajaxOptions, thrownError) {
        //         
        //        alert(xhr);
        //    }

        //});
        var placeIdArray = new Array();
        if ($("#hdnPlaceid").val() == "") {
            placeIdArray.push(0);

        } else {
            placeIdArray.push($("#hdnPlaceid").val());
        }

        var unitTypeIdsArray = new Array();
        if ($("#hdnSelectoptions").val() != "0" && $("#hdnSelectoptions").val() != "") {
            var ln = $("#hdnSelectoptions").val().split(',');
            for (var i = 0; i < ln.length; i++) {
                unitTypeIdsArray.push(ln[i]);
            }
        }
        var showADA = false;
        //if ($("#chkAdaUnit_Unit").is(':checked')) {
        //    showADA = true;
        //}
        //else {
        //    showADA = false;
        //}
        var PlaceIsPremiumValue = false;
        if ($("#chkIsPremium").is(':checked')) {
            PlaceIsPremiumValue = true;
        }
        else {
            PlaceIsPremiumValue = false;
        }
        var availabilitySearchParams_Session = {
            //RegionId: 0,
            //PlaceId: placeIdArray,
            //FacilityId: 0,
            StartDate: $('#hdnArrivalDate').val(),
            CategoryId: CategoryID,
            UnitTypeIds: unitTypeIdsArray,
            ShowOnlyAdaUnits: showADA,
            ShowOnlyTentSiteUnits: 'false',
            ShowOnlyRvSiteUnits: 'false',
            MinimumVehicleLength: $("#hdnddlLenght").val(),
            Nights: $('#hdnNights').val(),
            //PageIndex: 0,
            //PageSize: 20,
            //Page1: 20,
            //NoOfRecords: 100,
            ShowSiteUnitsName: $("#hdnSelectCampingEquip").val(),
            //Autocomplitename: $("#autocomplete1").val(),
            ParkFinder: parkFinderArray,
            //ParkCategory: $('#ddlactivity').val(),
            ChooseActivity: $('#ddlFacilityCategory').val(),
            IsPremium: PlaceIsPremiumValue
        };

        $.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SetSessionvalue",
            data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams_Session }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if ($("#hdnSelectRentalType").val() == 0 && $("#ddlLeft_Categories").val() == 0)
                    boolAdvanceSearch = false;
                //EndLoaders();
                //alert("setSessionValuesOnClick");
            },
            error: function (msg) {
             
                //alert(msg);
            }
            //})).done(function () {

        });
    }

    function ShowAdvanceOptionPerticular() {

        $("#campingunit").css("display", "block");
        $("#padlength").css("display", "block");
        $("#unitType").css("display", "block");
    }
    function HideAdvanceOpetionPeraticular() {

        $("#campingunit").css("display", "none");
        $("#padlength").css("display", "none");
        $("#unitType").css("display", "block");
    }
    function HideAllAdvanceOptionPerticular() {

        $("#campingunit").css("display", "none");
        $("#padlength").css("display", "none");
        $("#unitType").css("display", "none");
    }
    function setSessionValuesOnClick() {
         
        setAdvanceperimeterValues();
        var unitTypeIdsArray = new Array();
        if ($("#hdnSelectoptions").val() != "0") {
            var ln = $("#hdnSelectoptions").val().split(',');
            for (var i = 0; i < ln.length; i++) {
                unitTypeIdsArray.push(ln[i]);
            }
        }

        if ($('#ddlCategories').val() == "") {
            $("#hdnSelectRentalType").val(0);
        }
        // 
        //if ($("#hdnChkParkfinder").val() != "") {
        //    parkFinderArray.push("Accessible");
        //}
        //else {
        //    parkFinderArray.pop("Accessible");
        //}
        if ($("#chkAdaUnit_Unit").is(':checked')) {
            showADA = true;
        }
        else {
            showADA = false;
        }
        var PlaceIsPremiumValue = false;
        if ($("#chkIsPremium").is(':checked')) {
            PlaceIsPremiumValue = true;
        }
        else {
            PlaceIsPremiumValue = false;
        }
        var availabilitySearchParams = {
            StartDate: $('#hdnArrivalDate').val(),
            Nights: $('#hdnNights').val(),
            CategoryId: $("#hdnSelectRentalType").val(),
            UnitTypeIds: unitTypeIdsArray,
            ShowOnlyAdaUnits: showADA,
            ShowOnlyTentSiteUnits: 'false',
            ShowOnlyRvSiteUnits: 'false',
            MinimumVehicleLength: $("#hdnddlLenght").val(),
            ShowSiteUnitsName: $("#hdnSelectCampingEquip").val(),
            ParkFinder: parkFinderArray,
            chooseActivity: $('#ddlFacilityCategory').val(),
            IsPremium: PlaceIsPremiumValue
        };
        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SetSessionvalue",
            data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                if (($("#ddlLeft_Categories").val() != "" && $("#ddlLeft_Categories").val() != 0) || parkFinderArray.length > 0)
                    boolAdvanceSearch = true;
                //EndLoaders();
                //alert("setSessionValuesOnClick");
            },
            error: function (msg) {

                alert(msg);
            }
        })).done(function () {

        });
    }
    function ReBindCategory() {
   
    }

    function CheckSessionValues() {
        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/CheckSessionValues",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                
                // if Session value is blank redirect.  
                if (data.d == "cleardata") {
                    StartLoaders();

                    window.location.href = '../Facilities/AdvanceSearch.aspx';
                    return false;
                }
            },
            error: function (msg) {
                //alert("Error");
            }
        })).done(function () {

        });
    }
    function fnBacktoHomeControlDisplay() {
        if (($('#ddlCategories').val() == "")) {
            //ClearSessionValues();
            HideAllAdvanceOptionPerticular();
            Left_HideAllAdvanceOptionPerticular();
        }
        else if (($('#ddlCategories').val() == "25") || ($('#ddlCategories').val() == "1")) {
            ShowAdvanceOptionPerticular();
            Left_ShowAdvanceOptionPerticular();
        }
        else if (($('#ddlCategories').val() != "25") || ($('#ddlCategories').val() != "1")) {
            Left_HideAdvanceOpetionPeraticular();
            HideAdvanceOpetionPeraticular();
        }
}
</script>
</div>
                    </div>
                </div>
            </div>

            <div id="divNormalMenu" class="header-wrapper">
                <header id="header">
                    <div class="container">
                        <div class="logo pull-left">
                            <a href="https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx">

                                <img src="https://www.reservecalifornia.com/CaliforniaWebHome/themes/California/A_logo.png" alt="Invent Your Adventure" />
                            </a>
                        </div>
                        
                        <div class="all_data_right">
                            <div class="header-right">
                                <!-- ======================= NEW ======================= -->
                                <div class="main_menu_top">
                                    <div class="navbar navbar-default" role="navigation">
                                        <!-- ============ -->
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" title="click to open menu">
                                                <span class="sr-only">Toggle navigation</span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </button>
                                        </div>
                                        <!-- ============ -->
                                        <div class="collapse navbar-collapse">

                                            <ul class="nav navbar-nav" style="display: block;">

                                                <li style="display: none;">
                                                    <a href="javascript:void(0);" class="h_right_menu_toggel">Search</a>
                                                    <div id="divListSearchOnly" class="header-right-menu-modal dropdown-menu animated fadeInUp">

                                                        <div class="col-md-6 form-group">
                                                            <label for="autpser" style="display: none;">autpser</label>
                                                            <input type="text" class="form-control search-box glyphicon glyphicon-search" placeholder="Looking For" id="autpser" />
                                                            <input type="hidden" id="inpLookingFor" />

                                                        </div>
                                                        <div class="col-md-2 form-group">
                                                            <a href="#" onclick="return false;" class="btn btn-primary pull-left" id="btnGoogleGo">Go</a>
                                                        </div>
                                                        <div class="col-md-2 form-group">
                                                            <a href="#" class="btn btn-primary pull-left" id="btnClearGoogleData" onclick="javascript:clearAllGoogleData();">Clear</a>
                                                        </div>

                                                    </div>
                                                    <div class="clearfix"></div>
                                                </li>

                                                <li>
    <a href="https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx" class="h_right_menu_toggel">CAMPING AND LODGING</a><span>|</span>
</li>
<li>
    <a href="https://www.reservecalifornia.com/CaliforniaWebHome/Activities/ProgramsAndTours.aspx" class="h_right_menu_toggel">ACTIVITIES</a><span>|</span>
</li>
<li>
    <a href="https://www.reservecalifornia.com/CaliforniaWebHome/Activities/HearstCastleTours.aspx" class="h_right_menu_toggel">HEARST CASTLE</a><span>|</span>
</li>
<!-- passes for particular instance if you need to change  name then only change name and Last add <span>|</span>
<li id="liPasswithUser" >
    <a href="https://www.reservecalifornia.com/CaliforniaWebHome/Memberships/AdvanceCustomerMemberships.aspx" class="h_right_menu_toggel">PASSES</a> <span>|</span>
</li>
 <li id="liPasswithoutUser" >
	<a href="javascript:void(0);" onclick="OpenLoginBox(true,true,baseurlmain+'/Memberships/AdvanceCustomerMemberships.aspx','')">PASSES 
</a><span>|</span></li>-->

                                                
                                            </ul>


                                        </div>
                                        <!-- ============ -->
                                    </div>
                                </div>
                                <!-- ======================= OLd ======================= -->

                            </div>
                            
                            <div class="header-shopping-cart">

                                <!-- ==================== -->
                                

                                <a href="#" data-toggle="modal" class="btn btn-primary" id="aLogin"><span style="display: block;">LOGIN</span></a>
                                <a href="https://www.reservecalifornia.com/CaliforniaWebHome/Customers/NewCustomer.aspx" class="btn btn-primary" id="divCreateNewAccount"><span style="display: block;">CREATE ACCOUNT</span></a>

                                



                                <!-- ==================== -->

                                
                                
                                <a id="linkhypshopping2" class="cart_icon_top_blue" onclick="return OpenLoginBox(iscustomernull,true,baseurlmain+&#39;/Customers/ShoppingCart.aspx&#39;,&#39;&#39;);" title="Go to shopping cart page" href="javascript:__doPostBack(&#39;ctl01$linkhypshopping2&#39;,&#39;&#39;)">
                                    <span style="display: none;">Cart icon</span> <i class="fa fa-shopping-cart"></i>
                                    
                                </a>
                                
                            </div>
                            <div class="header-user-name">
                                
                                
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="clearfix"></div>


                </header>

            </div>

            

            <div>
                
            </div>

            <div class="cloudTip_bg" id="cloudTip_bg" style="display: none;">
                <div class="cloudTip" id="cloudTip">
                    <div id="cloudTipContent">
                        No Resource
                        
                    </div>
                </div>
            </div>

            <div id="main">

                <div>
                    <div class="container">



                        
                        
                    </div>
                    
    
    <input type="hidden" name="ctl01$mainContent$hdnUnitTotalDay" id="hdnUnitTotalDay" value="6" />
    <input type="hidden" name="ctl01$mainContent$hdnFilterSouth" id="hdnFilterSouth" />
    <input type="hidden" name="ctl01$mainContent$hdnFilterNorth" id="hdnFilterNorth" />
    <input type="hidden" name="ctl01$mainContent$hdnFilterEast" id="hdnFilterEast" />
    <input type="hidden" name="ctl01$mainContent$hdnFilterWest" id="hdnFilterWest" />
    <input type="hidden" name="ctl01$mainContent$hdnFilterCenterLat" id="hdnFilterCenterLat" />
    <input type="hidden" name="ctl01$mainContent$hdnFilterCenterLong" id="hdnFilterCenterLong" />
    
    <input type="hidden" name="ctl01$mainContent$hdnSearchType" id="hdnSearchType" />
     <input type="hidden" name="ctl01$mainContent$hdnsearchplaceid" id="hdnsearchplaceid" />
    

    <input type="submit" name="ctl01$mainContent$btngetFacilitiess" value="Hure" id="btngetFacilitiess" style="display: none;" />


    <input type="button" id="myss" value="Button" style="display: none;" />

    <input type="hidden" name="ctl01$mainContent$hdndefaultLag" id="hdndefaultLag" />
    <input type="hidden" name="ctl01$mainContent$hdndefaultLat" id="hdndefaultLat" />
    <input type="hidden" name="ctl01$mainContent$hdnCheckListDatalistmode" id="hdnCheckListDatalistmode" />
    <input type="hidden" name="ctl01$mainContent$hdnWebConfigRadiusCheck" id="hdnWebConfigRadiusCheck" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnWebConfigRadiusValue" id="hdnWebConfigRadiusValue" value="150" />



    <input type="hidden" name="ctl01$mainContent$Hidscreenresolution" id="mainContent_Hidscreenresolution" />
    <input type="hidden" name="ctl01$mainContent$hdnAllhideControl" id="mainContent_hdnAllhideControl" />
    <input type="hidden" name="ctl01$mainContent$hidddlUnitType" id="mainContent_hidddlUnitType" />
    <input type="hidden" name="ctl01$mainContent$hdnPlaceid" id="hdnPlaceid" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnPlaceFacilirySize" id="hdnPlaceFacilirySize" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnDDLPlaceId" id="mainContent_hdnDDLPlaceId" />
    <input type="hidden" name="ctl01$mainContent$hdnFacilityid" id="hdnFacilityid" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnFacilityType" id="hdnFacilityType" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnNodeclick" id="hdnNodeclick" value="0" />


    <input type="hidden" name="ctl01$mainContent$hiddenPlaceLevel" id="hiddenPlaceLevel" />
    <input type="hidden" name="ctl01$mainContent$hdnPlaceCategoryId" id="hdnPlaceCategoryId" />
    <input type="hidden" name="ctl01$mainContent$hdClient" id="hdClient" />
    <input type="hidden" name="ctl01$mainContent$hdnFav" id="hdnFav" />

    <input type="hidden" name="ctl01$mainContent$hdnCheckAfterpostback" id="mainContent_hdnCheckAfterpostback" />
    
    <input type="hidden" name="ctl01$mainContent$hiddenRPlaceLevel" id="hiddenRPlaceLevel" />
    <input type="hidden" name="ctl01$mainContent$hdnBPlaceID" id="mainContent_hdnBPlaceID" />
    <input type="hidden" name="ctl01$mainContent$hdnBFacilityID" id="mainContent_hdnBFacilityID" />

    <input type="hidden" name="ctl01$mainContent$hdnGoback" id="hdnGoback" />

    <input type="hidden" name="ctl01$mainContent$hdnSouth" id="hdnSouth" />
    <input type="hidden" name="ctl01$mainContent$hdnNorth" id="hdnNorth" />
    <input type="hidden" name="ctl01$mainContent$hdnEast" id="hdnEast" />
    <input type="hidden" name="ctl01$mainContent$hdnWest" id="hdnWest" />

    <input type="hidden" name="ctl01$mainContent$hdnCenterlat" id="hdnCenterlat" />
    <input type="hidden" name="ctl01$mainContent$hdnCenterlong" id="hdnCenterlong" />


    
    <input type="hidden" name="ctl01$mainContent$hdnCenterpointName" id="hdnCenterpointName" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnCenterpointlat" id="hdnCenterpointlat" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnCenterpointlng" id="hdnCenterpointlng" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnGooglePlaceRefId" id="hdnGooglePlaceRefId" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnGoogleFacilityName" id="hdnGoogleFacilityName" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnGoolgePlaceImage" id="hdnGoolgePlaceImage" value="0" />
    <input type="hidden" name="ctl01$mainContent$hdnCheckParkDataField" id="hdnCheckParkDataField" value="0" />
    
    <input type="hidden" name="ctl01$mainContent$hdnInventoryUpdateClick" id="hdnInventoryUpdateClick" value="0" />
    <!-- Loader Start -->
    <div class="bg_loader" id="divUnit_loder">
        <div class="loader_box" id="divUnitloader_box"></div>
    </div>
    <!-- Loader End -->

    <input type="hidden" name="ctl01$mainContent$facilityChanged" id="facilityChanged" />

    

    
    <div id="main">
        <div class="content">



            <div id="main-left-part" class="pull-left">
                <div class="park-finder-main" style="display: none;">
                    <div class="part-finder-title-bar">
                        <h4 class="pull-left" id="hTitle">Park Finder</h4>
                        <div class="col-md-6 col-sm-8 form-group pull-left mob_search_news" id="divGooglegofilter" style="display: none;">
                            <label style="display: none;" for="googleautocomplete">googleautocomplete</label>
                            <input type="text" class="form-control search-box pull-left" style="width: auto;" placeholder="Looking for a place" id="googleautocomplete" autocomplete="off" />
                            <a class="btn part-hidefilter-data pull-right" style="color: rgb(255, 255, 255); background-color: rgb(40, 96, 144); border-color: rgb(32, 77, 116); width: 38px;" id="btn_go">Go</a>
                        </div>

                        <div class="clearfix"></div>
                    </div>

                    
                </div>
                <!--10-08-2016 Draggabl Start -->
                
                <div id="ajay" style="display: none;">

                    
                    <div class="new_top_bg_blue brd_btn_top pos_rel sec_top_pad">
                        <!-- 13-9-2016 -->
                        <div class="brd_table_page_top" style="display: none;">
                            <div class="new_img_home"><a href="javascript:void(0);" onclick='fnBreadcrumbHome()' data-toggle="tooltip" title="Click here to go back home" data-placement="right"><span style="display: none;">Test</span></a></div>
                            <div class="new_ser_box">
                                <div class="inp1 ui-autocomplete-input" id="PlNames"></div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="breadcrume">
                            <ul>
                                <li><a href="javascript:void(0);" onclick='fnBreadcrumbHome();' data-toggle="tooltip" title="Click here to go back home" data-placement="right">Home</a><i class="fa fa-angle-double-right"></i></li>
                                <li><a href="javascript:void(0);" onclick='fnUnittoFacilityLevel();' id="PlName"></a><i class="fa fa-angle-double-right"></i></li>
                                <li id="liFacilityName"></li>
                            </ul>
                        </div>
                        <!-- 13-9-2016 -->
                    </div>

                    <div class="top_new_first_data_box gridTopnew">
                        <div class="back_home">

                            <a id="aHomeBlueiconh" href="javascript:void(0);" onclick="fnUnittoFacilityLevel();" class="blue_icon" style="" title="back to facility level"></a>
                        </div>
                        <div class="table_grid_page_serch_second">
                            <div class="iconmap_new"></div>
                            <!-- ================= -->
                            <div class="new_ser_box grid_combo_new" id="divFacilitylist" style="display: none;">
                                <label style="display: none;" for="mainContent_ddlPlace">ddlPlace</label>
                                <select name="ctl01$mainContent$ddlPlace" id="mainContent_ddlPlace" disabled="disabled" title="Select Place" class="aspNetDisabled btn btn-default" style="display: none">
	<option selected="selected" value="614">Angel Island SP</option>
	<option value="2">Anza-Borrego Desert SP</option>
	<option value="616">Auburn SRA</option>
	<option value="1085">Austin Creek SRA</option>
	<option value="617">Benbow SRA</option>
	<option value="1090">Benicia SRA</option>
	<option value="1093">Bidwell-Sacramento River SP</option>
	<option value="618">Big Basin Redwoods  SP Tent Cabins</option>
	<option value="3">Big Basin Redwoods SP</option>
	<option value="619">Bolsa Chica SB</option>
	<option value="620">Bothe-Napa Valley SP</option>
	<option value="621">Brannan Island SRA</option>
	<option value="622">Butano SP</option>
	<option value="5">Calaveras Big Trees SP</option>
	<option value="1107">Carnegie SVRA</option>
	<option value="6">Carpinteria SB</option>
	<option value="624">Castle Crags SP</option>
	<option value="625">Caswell Memorial SP</option>
	<option value="626">China Camp SP</option>
	<option value="627">Chino Hills SP</option>
	<option value="628">Clear Lake SP</option>
	<option value="629">Clear Lake SP Cabins</option>
	<option value="630">Colonel Allensworth SHP</option>
	<option value="631">Columbia SHP Hotels and Cottages</option>
	<option value="632">Colusa-Sacramento River SRA</option>
	<option value="633">Cosmopolitan Hotel</option>
	<option value="634">Crystal Cove SP Beach Cottages</option>
	<option value="635">Crystal Cove SP Moro Campground</option>
	<option value="636">Crystal Cove SP Primitive Tent Camping</option>
	<option value="7">Cuyamaca Rancho SP</option>
	<option value="637">D.L. Bliss SP</option>
	<option value="638">Del Norte Coast Redwood SP Mill Creek Campground</option>
	<option value="639">Doheny SB</option>
	<option value="640">Donner Memorial SP</option>
	<option value="8">El Capitan SB</option>
	<option value="641">Emerald Bay SP</option>
	<option value="642">Emma Wood SB</option>
	<option value="643">Folsom Lake SRA</option>
	<option value="644">Fort Tejon SHP</option>
	<option value="645">Fremont Peak SP</option>
	<option value="646">Gaviota SP</option>
	<option value="648">George J. Hatfield SRA</option>
	<option value="650">Grizzly Creek Redwoods SP</option>
	<option value="651">Grover Hot Springs SP</option>
	<option value="652">Half Moon Bay SB</option>
	<option value="713">Hearst San Simeon SP</option>
	<option value="654">Hendy Woods SP</option>
	<option value="655">Henry Cowell Redwoods SP</option>
	<option value="656">Henry W Coe SP</option>
	<option value="1136">Hollister Hills SVRA</option>
	<option value="657">Humboldt Redwoods SP</option>
	<option value="1138">Hungry Valley SVRA</option>
	<option value="659">Indian Grinding Rock SHP</option>
	<option value="660">Jedediah Smith Redwoods SP</option>
	<option value="661">Julia Pfeiffer Burns SP</option>
	<option value="662">Lake Oroville SRA</option>
	<option value="663">Lake Perris SRA</option>
	<option value="665">Leo Carrillo SP</option>
	<option value="666">Limekiln SP</option>
	<option value="667">Little Basin State Park</option>
	<option value="668">Mackerricher SP</option>
	<option value="669">Malakoff Diggins SHP</option>
	<option value="670">Malibu Creek SP</option>
	<option value="671">Manchester SP</option>
	<option value="672">Manresa SB</option>
	<option value="675">Mcarthur-Burney Falls Mem SP Cabins</option>
	<option value="674">Mcarthur-Burney Falls Memorial SP</option>
	<option value="676">Mcconnell SRA</option>
	<option value="677">Mcgrath SB</option>
	<option value="678">Millerton Lake SRA</option>
	<option value="679">Montana De Oro SP</option>
	<option value="680">Morro Bay SP</option>
	<option value="681">Morro Strand SB</option>
	<option value="683">Mount Diablo SP</option>
	<option value="682">Mount Tamalpais SP</option>
	<option value="684">Mt. San Jacinto SP</option>
	<option value="685">New Brighton SB</option>
	<option value="686">Oceano Dunes SVRA</option>
	<option value="687">Palomar Mountain SP</option>
	<option value="688">Patricks Point SP</option>
	<option value="690">Pfeiffer Big Sur SP</option>
	<option value="1181">Picacho SRA</option>
	<option value="691">Pismo SB</option>
	<option value="692">Plumas-Eureka SP</option>
	<option value="694">Point Mugu SP</option>
	<option value="695">Portola Redwoods SP</option>
	<option value="696">Prairie Creek Redwoods SP Elk Prairie Campground</option>
	<option value="697">Prairie Creek Redwoods SP Gold Bluffs Beach Campg</option>
	<option value="699">Refugio SB</option>
	<option value="700">Richardson Grove SP</option>
	<option value="701">Russian Gulch SP</option>
	<option value="702">Saddleback Butte SP</option>
	<option value="703">Salt Point SP</option>
	<option value="704">Salton Sea SRA</option>
	<option value="705">Samuel P. Taylor SP</option>
	<option value="706">Samuel P. Taylor SP Cabins</option>
	<option value="707">San Clemente SB</option>
	<option value="708">San Clemente SB (Holidays Vintage Trailers)</option>
	<option value="709">San Elijo SB</option>
	<option value="711">San Luis Reservoir SRA</option>
	<option value="712">San Onofre SB</option>
	<option value="714">Seacliff SB</option>
	<option value="715">Silver Strand SB</option>
	<option value="716">Silverwood Lake SRA</option>
	<option value="718">Sonoma Coast State Park</option>
	<option value="720">South Carlsbad SB</option>
	<option value="721">Standish-Hickey SRA</option>
	<option value="724">Sugar Pine Point SP</option>
	<option value="725">Sugarloaf Ridge SP</option>
	<option value="726">Sunset SB</option>
	<option value="728">Tahoe SRA</option>
	<option value="730">Turlock Lake SRA</option>
	<option value="731">Van Damme SP</option>
	<option value="1235">Westport-Union Landing SB</option>
	<option value="1236">Wilder Ranch SP</option>
	<option value="732">Woodson Bridge SRA</option>

</select>
                                <label style="display: none;" for="ddlFacility">ddlFacility</label>
                                <select name="ctl01$mainContent$ddlFacility" id="ddlFacility" title="Select Facility">

</select>
                                <div class="clearfix"></div>
                            </div>
                            <!-- ================= -->
                            <div class="clearfix"></div>
                        </div>
                        <div class=" serch_night_box table_grid_page_date_second">

                            <label style="display: inline;" for="mainContent_txtDateRange" title="Select arrival date. date format is MM/DD/YYYY"></label>
                            <input name="ctl01$mainContent$txtDateRange" type="text" id="mainContent_txtDateRange" class="dateforgrids date" />
                            <label for="Grid_ddlNights" style="display: inline" title="Select stay length"></label>
                            <select name="ctl01$mainContent$Grid_ddlNights" id="Grid_ddlNights" title="Nights" onchange="getUnitgridPopupNights(this);">
	<option selected="selected" value="1">1 Night</option>
	<option value="2">2 Nights</option>
	<option value="3">3 Nights</option>
	<option value="4">4 Nights</option>
	<option value="5">5 Nights</option>
	<option value="6">6 Nights</option>
	<option value="7">7 Nights</option>
	<option value="8">8 Nights</option>
	<option value="9">9 Nights</option>
	<option value="10">10 Nights</option>
	<option value="11">11 Nights</option>
	<option value="12">12 Nights</option>
	<option value="13">13 Nights</option>
	<option value="14">14 Nights</option>
	<option value="15">15 Nights</option>
	<option value="16">16 Nights</option>
	<option value="17">17 Nights</option>
	<option value="18">18 Nights</option>
	<option value="19">19 Nights</option>
	<option value="20">20 Nights</option>
	<option value="21">21 Nights</option>
	<option value="22">22 Nights</option>
	<option value="23">23 Nights</option>
	<option value="24">24 Nights</option>
	<option value="25">25 Nights</option>
	<option value="26">26 Nights</option>
	<option value="27">27 Nights</option>
	<option value="28">28 Nights</option>
	<option value="29">29 Nights</option>
	<option value="30">30 Nights</option>

</select><br />

                            <div class="clearfix"></div>
                        </div>
                        <div class="clearfix"></div>
                        
                        <div class="third_part_inp_new">
                            <input name='chkAdaUnit_Unit' type='checkbox' id='chkAdaUnit_Unit'>Show ADA Site Only
                        </div>
                        
                    </div>



                </div>


                <!--10-08-2016 Draggabl End -->
                
                
    <div class="top_new_first_data_box" id="div_top_new_first_data_box">

        <div class="back_home" id="div_back_home">
            <a id="aHomeGrayicon" href="javascript:void(0);" class="gray_icon" title="back to home button"></a>
            <a id="aHomeBlueicon" href="javascript:void(0);" onclick="BacktoHomePlaceLevel();" class="blue_icon" style="display: none;" title="back to home button"></a>
        </div>
        <div class="brd_all_new_serch">
            

            <div class="iconmap_new"></div>
            <!-- ================= -->
            <div class="new_ser_box">
                <label for="autocomplete2" title="Enter City or Parkname" style="display: inline;"></label>
                <input type="text" class="inp1" id="autocomplete2" placeholder="Enter City or Parkname">
                
                <div class="clearfix"></div>
            </div>
            <!-- ================= -->
            
            <!-- ================= -->
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>


        
    </div>
    
    <div class="top_new_part_brd_btm"></div>
    <div class="filter-bar pos_rel new_filter_bar_box">
        <div class="">
            <!-- ================= -->
            <div class="date_icn_new"><a href="javascript:void(0);" id="aTopDataIcon"><span style="display: none;">Test</span></a></div>
            <!-- ================= -->
            <div class="new_combo_add">

                <div style="display: none;">
                    <select name="ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory" id="ddlFacilityCategory" title="Nights" onchange="hidenight();">
	<option value="1">Camping and Lodging</option>
	<option value="4">Hearst Castle Tours</option>
	<option value="3">Other Tours/Activities</option>
	<option value="5">Boat Launch Reservations</option>

</select>
                </div>
            </div>

            <div class="search_new1">
                <label style="display: none;" for="txtTopArrivalDate">txtTopArrivalDate</label>
                <input name="ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate" type="text" value="5/20/2018" id="mainContent_TopMenuMainSearch_txtTopArrivalDate" title="Arrival date" class="topdateforgrid" />

            </div>
            <div class="night_new1">
                <label style="display: none;" for="ddlTopNights">ddlTopNights</label>
                <select name="ctl01$mainContent$TopMenuMainSearch$ddlTopNights" id="ddlTopNights" title="Nights" onchange="SearchbyDateNightInFacilityLevel();">
	<option selected="selected" value="1">1 Night</option>
	<option value="2">2 Nights</option>
	<option value="3">3 Nights</option>
	<option value="4">4 Nights</option>
	<option value="5">5 Nights</option>
	<option value="6">6 Nights</option>
	<option value="7">7 Nights</option>
	<option value="8">8 Nights</option>
	<option value="9">9 Nights</option>
	<option value="10">10 Nights</option>
	<option value="11">11 Nights</option>
	<option value="12">12 Nights</option>
	<option value="13">13 Nights</option>
	<option value="14">14 Nights</option>
	<option value="15">15 Nights</option>
	<option value="16">16 Nights</option>
	<option value="17">17 Nights</option>
	<option value="18">18 Nights</option>
	<option value="19">19 Nights</option>
	<option value="20">20 Nights</option>
	<option value="21">21 Nights</option>
	<option value="22">22 Nights</option>
	<option value="23">23 Nights</option>
	<option value="24">24 Nights</option>
	<option value="25">25 Nights</option>
	<option value="26">26 Nights</option>
	<option value="27">27 Nights</option>
	<option value="28">28 Nights</option>
	<option value="29">29 Nights</option>
	<option value="30">30 Nights</option>

</select>
            </div>
            <div class="night_new1 right_dis">
                <i class="fa fa-sort sorting_icn" aria-hidden="true"></i>
                <select name="ctl01$mainContent$TopMenuMainSearch$ddlSortBy" id="ddlSortBy" title="Sorting">
	<option value="0">Name</option>
	<option value="1">Availability</option>
	<option selected="selected" value="3">Distance</option>
	<option value="4">Favorite</option>

</select>
            </div>



            <!-- ================= -->
            <div class="alldata_right" style="display: none;">
                <div class="new_fil1_icn" id="list-view">
                    <a title="Click here for list view" data-toggle="tooltip" href="javascript:void(0);"><span style="display: none;">Test</span><i class=""></i></a>
                </div>
                <div class="new_fil1_icn new_fil1_icn_up" id="thumbnail-view" style="display: none;">
                    <a title="Click here for image view" data-toggle="tooltip" href="javascript:void(0);" style=""><span style="display: none;">Test</span><i class=""></i></a>
                </div>
                <!-- ================= -->
                <div id="search-list-arrows">
                    <div class="new_fil2_icn">
                        <a title="Click here to collapse" data-toggle="tooltip" style="display: none;" id="aUparrow" href="javascript:void(0);"><span style="display: none;">Test</span></a>
                    </div>
                    <div class="new_fil2_icn new_fil2_icn_up"><a title="Click here to expand" data-toggle="tooltip" id="aDownarrow" href="javascript:void(0);"><span style="display: none;">Test</span></a></div>
                </div>
                <div class="map-list-view-btn switchview">
                    <button onclick="return  false;" class="pull-left"><i class="fa fa-map-o"></i><span style="display: none;">Test</span></button>
                    <button onclick="return  false;" class="pull-left"><i style="display: none" class="glyphicon glyphicon-list-alt"></i><span style="display: none;">Test</span></button>
                </div>
                <div class="clearfix"></div>
            </div>

            <!-- ================= -->
            
            <!-- ================= -->
            
            <div class="btn_new_go"><a id="btnTop_search" data-toggle="tooltip" class="filter_text_nav" href="javascript:void(0);" style="cursor: pointer;">Update Results</a></div>
            <!-- ================= -->
            <div class="clearfix"></div>
            <!-- ================= -->
        </div>
        <!-- ================= -->
        <div class="clearfix"></div>
        <!-- ================= -->
    </div>

    
<style>
    #draggable, #mainContent_divUnitHeader {
        z-index: 9999;
        height: auto !important;
    }
</style>
<script>
    $(document).ready(function () {
        if (window.location.href.toLowerCase().indexOf('advancetourandactivities') != -1) {
            $("#ddlFacilityCategory option[value='tour']").attr("selected", "selected");

            $('#ddlFacilityCategory').next().find("span")[0].innerHTML = 'Tour';
            $('#ddlFacilityCategory').next().find("button").attr("title", "Tour");
            $('#ddlFacilityCategory').next().find("div").find("li.selected").removeClass("selected");
            var lis = $('#ddlFacilityCategory').next().find("div").find("li");
            for (var i = 0; i < lis.length; i++) {
                if ($(lis[i]).find("span").html() == 'Tour') {
                    $(lis[i]).addClass("selected");
                }
            }
        }
        else if (window.location.href.toLowerCase().indexOf('advancecustomermemberships') != -1) {
            $("#ddlFacilityCategory option[value='permit']").attr("selected", "selected");

            $('#ddlFacilityCategory').next().find("span")[0].innerHTML = 'Permit';
            $('#ddlFacilityCategory').next().find("button").attr("title", "Permit");
            $('#ddlFacilityCategory').next().find("div").find("li.selected").removeClass("selected");
            var lis = $('#ddlFacilityCategory').next().find("div").find("li");
            for (var i = 0; i < lis.length; i++) {
                if ($(lis[i]).find("span").html() == 'Permit') {
                    $(lis[i]).addClass("selected");
                }
            }
        } else {

            $('#ddlFacilityCategory').val('1');
        }

                
        var fc = '';

        if (fc == "" || fc == null)
            $('#ddlFacilityCategory').val("1");
        else
            $('#ddlFacilityCategory').val(fc);

        if ($('#ddlFacilityCategory').val() == '1') {
            $('.night_new1').show();
        } else {
            $('.night_new1').hide();
        }
                

    });
    function hidenight() {
        if ($('#ddlFacilityCategory').val() == '1') {
            $('.night_new1').show();
        } else {
            $('.night_new1').hide();
        }
    }
    function RevertDrage() {
        if (BoolDraggablevent == true) {

            //$('#draggable').css("position", "relative");

            //$('#draggable').css("left", "215px").css("top", "15px");
            //$('#draggable').css("position", "absolute");

            $("#draggable").animate({ right: "20px", top: "75px" });
            $("#div_right_pin_cross_icn").addClass("right_pin_cross_icn");
            $("#div_right_pin_cross_icn").removeClass("right_pin_icn");
            BoolDraggablevent = false;

            //$('#divAllControl').css("width", DrageOriginalvlaue + 'px');

            if (boolAdvanceSearch == true) {
                $("#divUnitGridlist").removeClass("two_new_table two_new_table_draggabl");
                $("#divUnitGridlist").addClass("two_new_table second_new_table");
            }
            else {
                $("#divUnitGridlist").removeClass("two_new_table two_new_table_draggabl");
                $("#divUnitGridlist").addClass("two_new_table");
            }
            if ($('.slide_one').is(":visible")) {
                $('.slide_one').slideToggle('slow');
                $("#afilterParkview").removeClass();
                $("#afilterParkview").addClass("list-view_left toggle_filter_new afilter");
                $("#ajay #afilterParkview").addClass("list-view_left toggle_filter_new afilter");
            }

            //setTimeout(resizeWindow(), 1000);
        }
    }
    $(function () {
        if (IsMobileBrowser.toLowerCase() == "false") {
            $("#draggable").draggable({

                revert: function (dropped) {
                    ////debugger;
                    var $draggable = $(this),
                        hasBeenDroppedBefore = $draggable.data('hasBeenDropped'),
                        wasJustDropped = dropped && dropped[0].id == "main-right-part";
                    if (wasJustDropped) {
                        // don't revert, it's in the droppable
                        return false;
                    } else {
                        if (hasBeenDroppedBefore) {
                            // don't rely on the built in revert, do it yourself
                            //$draggable.animate({ top: 0, left: 0 }, 'slow');
                            BoolDraggablevent = true;
                            RevertDrage();
                            return false;
                        } else {
                            // just let the build in work, although really, you could animate to 0,0 here as well
                            return true;
                        }
                    }
                }
            });
            $("#main-right-part").droppable({

                drop: function (event, ui) {
                    if ($(ui.draggable).attr("id") != "legend")
                        SetDataAfterDraggble();

                    $(ui.draggable).data('hasBeenDropped', true);
                }
            });
        }
        function SetDataAfterDraggble() {
            if (BoolDraggablevent == false) {

                BoolDraggablevent = true;
                DrageOriginalvlaue = $("#divAllControl").width();
                //var SearchPlaceheoght = MainHeight;
                //var totalheight = SearchPlaceheoght + $("#draggable").height();
                //$('#search-placedataholder').height(totalheight);
                var Dragtop = parseInt($('#draggable').css('top')) + $('#header').height() + $('.top_new_first_data_box').height() + $('.filter-bar').height() + $("#ajay").height();
                DrageControlvlaue = $("#divAllControl").width();

                //if (($("#hiddenPlaceLevel").val() == "Facility") && $("#ddlLeft_Categories").val() == 0)
                //    $("#divAllControl").css("width", "200px");
                //else if (boolAdvanceSearch == false && ($("#hiddenPlaceLevel").val() != "Facility"))
                //    $("#divAllControl").css("width", "200px");

                //$('#draggable').css('top', Dragtop + 'px');
                //$('#draggable').css("position", "absolute");
                $("#div_right_pin_cross_icn").removeClass("right_pin_cross_icn");
                $("#div_right_pin_cross_icn").addClass("right_pin_icn");
                //$('#draggable').css("height", "auto");
                ////======================== Facility Level ========================
                $('#mainContent_divUnitHeader').css("position", "absolute");
                $("#div_facility_draggabl").removeClass("grid_pin_icn right_pin_cross_icn");
                $("#div_facility_draggabl").addClass("grid_pin_icn right_pin_icn");

                $("#divUnitGridlist").removeClass("two_new_table");
                $("#divUnitGridlist").addClass("two_new_table two_new_table_draggabl");
                ////====================================================================                            
                setTimeout(resizeWindow(), 1000);
            }
        }

        $("#mainContent_divUnitHeader").draggable({
            stop: function () {


                $('#mainContent_divUnitHeader').css("position", "absolute");
                $("#div_facility_draggabl").removeClass("grid_pin_icn right_pin_cross_icn");
                $("#div_facility_draggabl").addClass("grid_pin_icn right_pin_icn");

                $("#divUnitGridlist").removeClass("two_new_table");
                $("#divUnitGridlist").addClass("two_new_table two_new_table_draggabl");
                //if (BoolDraggablevent == false) {
                //    var SearchPlaceheoght = MainHeight;
                //    var totalheight = SearchPlaceheoght + $("#draggable").height();
                //    $('#search-placedataholder').height(totalheight);
                //    $('#draggable').css("position", "absolute");
                //    $("#div_right_pin_cross_icn").removeClass("right_pin_cross_icn");
                //    $("#div_right_pin_cross_icn").addClass("right_pin_icn");
                //    BoolDraggablevent = true;
                //}
            }
        });
    });

    function TopsetDatePicker(futureBookingStartDate, futureBookingEndDate) {

        var date1 = new Date(futureBookingStartDate);
        date1.setHours(0, 0, 0, 0);
        var date2 = new Date(futureBookingEndDate);
        date2.setHours(0, 0, 0, 0);
        TripStartDate = date1;
        TripEndDate = date2;
        Dateformat = 'mm/dd/yy';
        $(".topdateforgrid").datepicker({
            beforeShow: function () {
                setTimeout(function () {
                    $('.ui-datepicker').css('z-index', 10000);
                }, 0);
            },
            minDate: date1,
            dateFormat: 'mm/dd/yy',
                    maxDate: date2,
                    onSelect: function (selected, evnt) {
                        //debugger;
                        $("#btnTop_search").removeClass("filter_text_nav_inable");
                        updategrid(selected);
                        debugger;
                        if (map.getZoom() > 11) {
                            if ($("#hdnsearchplaceid").val() != "")
                                MapboxPlaceid = $("#hdnsearchplaceid").val();
                            else
                                MapboxPlaceid = PlaceidforNightDateselection;

                            $("#btnTop_search").click();
                        }

                    }

                });



            }
            $("#aTopDataIcon").click(function () {
                $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").focus();
            });

            //$('#btnTop_search').click(function () {
            //     
            //    var placeid = GetParameterValues('placeid');
            //    if (window.location.href.toLowerCase().indexOf('advancesearch') == -1) {

            //        if ($('#hdnLat').val() == "") {
            //            $('#hdnLat').val('0');
            //            $('#hdnLag').val('0');
            //        }
            //    } else {
            //        if ($("#hdnLat").val() == "") {
            //            $("#messageBoxLightbox2 .modal-body").html("Place not Found");
            //            $("#messageBoxLightbox2 .modal-title").html("Error");
            //            $('#messageBoxLightbox2').modal();
            //            $(".ui-widget-content").css("display", "none");
            //            return false;
            //        }
            //    }
            //    var urlname = baseurlmain + '/Facilities/CascadingDropdown.asmx/GoCamping';
            //    var param = { currentdate: $('#hdnArrivalDate').val(), nights: $('#hdnNights').val(), hdnLat: $('#hdnLat').val(), hdnLag: $('#hdnLag').val(), landingaddress: $('#autocomplete1').val() };
            //    $.ajax({
            //        url: urlname,
            //        data: JSON.stringify(param),
            //        dataType: "json",
            //        type: "POST",
            //        contentType: "application/json; charset=utf-8",

            //        success: function (data) {

            //        },
            //        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //            //alert(textStatus);
            //        }
            //    });


            //});

            function fnbTopsearchEvent() {

                var placeid = GetParameterValues('placeid');
                if (window.location.href.toLowerCase().indexOf('advancesearch') == -1) {

                    if ($('#hdnLat').val() == "") {
                        $('#hdnLat').val('0');
                        $('#hdnLag').val('0');
                    }
                } else {
                    if ($("#hdnLat").val() == "") {
                        $("#messageBoxLightbox2 .modal-body").html("Place not Found");
                        $("#messageBoxLightbox2 .modal-title").html("Error");
                        $('#messageBoxLightbox2').modal();
                        $(".ui-widget-content").css("display", "none");
                        return false;
                    }
                }
                var urlname = baseurlmain + '/Facilities/CascadingDropdown.asmx/GoCamping';
                var param = { currentdate: $('#hdnArrivalDate').val(), nights: $('#hdnNights').val(), hdnLat: $('#hdnLat').val(), hdnLag: $('#hdnLag').val(), landingaddress: $('#autocomplete1').val() };
                $.ajax({
                    url: urlname,
                    data: JSON.stringify(param),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",

                    success: function (data) {

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        //alert(textStatus);
                    }
                });
            }
</script>

                



                <div id="mainContent_divPlaceDatas">
                    <div id="mainContent_divPlaceList">

                        <div class="search-result" id="search-placedataholder">

                            

<div id="divPlacedata">
</div>

<!-- ========================= -->
<script>
    function fnGetPlaceName_home(AutocompleteControl) {
        debugger;
        if (IsMobileBrowser.toLowerCase() == "true") {
            urlname = baseurlmain + '/Facilities/AdvanceSearch.aspx/GetCityPlacename';
        } else {
            urlname = baseurlmain + '/Facilities/AdvanceSearch.aspx/GetCityPlacename';
        }
        AutocompleteControl.autocomplete({
            source: function (request, response) {
                $("#hdndefaultLat").val('');
                $("#hdndefaultLag").val('');
                var param = { name: AutocompleteControl.val() };
                $.ajax({
                    url: urlname,
                    data: JSON.stringify(param),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataFilter: function (data) { return data; },
                    success: function (data) {
                        response($.map(data.d, function (item) {
                            return {

                                label: item.Name,//+ "," + item.EntityType,
                                value: item.Latitude + "," + item.Longitude,
                                logo: item.EntityType,
                                CityPark: item.CityParkId
                            }
                        }));

                        if (data.d.length == 0) {
                            $("#hdndefaultLat").val("");
                            $("#hdndefaultLag").val("");
                        }

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert(textStatus);
                    }
                });
            },

            search: function (event, ui) {

                $("#hdndefaultLat").val('');
                $("#hdndefaultLag").val('');
            },
            select: function (e, ui) {

                e.preventDefault();
                $("#hdndefaultLat").val(ui.item.value.split(',')[0]);
                $("#hdndefaultLag").val(ui.item.value.split(',')[1]);
                $("#hdnAutoPlaceId").val(ui.item.CityPark);
                $("#txtSearchparkautocomplete").val(ui.item.label);
                $("#hdnSearchPlaceName").val(ui.item.label);
            },
            response: function (event, ui) {

                if (ui.content[0] == undefined) {
                    $("#hdndefaultLat").val('');
                    $("#hdndefaultLag").val('');
                } else {
                    ChnageDragandZoom = false;

                    $("#hdndefaultLat").val(ui.content[0].value.split(',')[0]);
                    $("#hdndefaultLag").val(ui.content[0].value.split(',')[1]);
                    $("#hdncustomautocomplete").val(ui.content[0].label);
                    $("#hdnSearchPlaceName").val(ui.content[0].label);

                }
            },
            focus: function (event, ui) {
                event.preventDefault();
                $("#hdndefaultLat").val(ui.item.value.split(',')[0]);
                $("#hdndefaultLag").val(ui.item.value.split(',')[1]);
                $("#txtSearchparkautocomplete").val(ui.item.label);

                $("#hdncustomautocomplete").val(this.value);
            },
            minLength: 2
        }).data("ui-autocomplete")._renderItem = function (ul, item) {

            return $('<li class="ui-menu-item-with-icon"></li>')
                .data("item.autocomplete", item)
                .append('<a><span class="' + item.logo + '-icon"></span>&nbsp;' + item.label + '</a>')
                .appendTo(ul);
        };

    }
</script>
<script type="text/javascript">
    var LoadIfream = false;
    function formatDescription(jsonDate) {

        //alert(jsonDate);
        // var date = "";
        // date = jsonDate.replace("&lt;BR&gt;", "<br />");

        // return date;
    }

    function fancyboxopen(placeid, facilityId, CheckReservation, PlaceinfoUrl) {
        //debugger;
        //var KeyValue = 'true';
        var KeyValue = 'false';
        if (KeyValue == "true") {
            var urlopen = '../themes/' + themesortname + '/Template/Popuphtml.html';
        }
        else {
            window.open(PlaceinfoUrl);
            return;
        }

        var urlopen = '../themes/' + themesortname + '/Template/Popuphtml.html';
        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/BindPopupdata",
            data: JSON.stringify({ 'PlaceId': placeid }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                LoadIfream = false;

                var Placedata = data.d[0];

                $('#new_popup_pop').html("");
                $('#new_popup_pop').html("loading..");
                $('#new_popup_pop').setTemplateURL(urlopen, null, { filter_data: false });
                $('#new_popup_pop').processTemplate(Placedata);

                var pst = Placedata.PlaceSpotType.split(',');
                var namepst = "";

                for (var i = 0; i < pst.length; i++) {
                    namepst += pst[i] + " | ";
                }
                $("#ulPlaceSpotType").html(namepst);
                //$("#ulPlaceSpotType").html(data.d[0].PlaceSpotType.replace(',', ' | ').replace(' , ', ' | '));
                //================================ Start
                // 
                //var lm = $(".divJsonFacilitySpotsnames").html().trim().slice(0, -1);
                ////$(".divJsonFacilitySpotsnames").html("");
                //$(".divJsonFacilitySpotsnames").html(lm);
                placename = Placedata.DisplayName;
                var Latlong = "";
                var Latlongsplit = Latlong.split(",");
                //Mylat = Latlongsplit[0];
                //Mylong = Latlongsplit[1];
                Mylat = Placedata.Latitude;
                Mylong = Placedata.Longitude;

                vMapinitialize();
                keyWordsearch(placename);
                isparkpopup = true;
                PopupPlaceid = 0;
                PopupFacilityid = 0;

                $('#form1').on("keyup keypress", function (e) {
                    var code = e.keyCode || e.which;
                    if (code == 13) {
                        if (isparkpopup) {
                            $('#btnNearbySearch').click();
                            return false;
                        }
                        else {
                            e.preventDefault();
                            return false;
                        }
                    }
                });

                $('#btnNearbySearch').click(function (e) {

                    if ($('#txtNearbyText').val().trim() != nearBySearchText.trim() && $('#txtNearbyText').val().trim() != "") {

                        nearBySearchText = $('#txtNearbyText').val();
                        var nearbyrequest = {
                            location: new window.google.maps.LatLng(Mylat, Mylong),
                            radius: 100,
                            query: nearBySearchText
                        };
                        service.textSearch(nearbyrequest, nearByCallback(vmap, "vmap", Mylat, Mylong));

                    }
                });

                $(".video").click(function () {

                    jQuery.fancybox({
                        'padding': 0,
                        'autoScale': false,
                        'transitionIn': 'none',
                        'transitionOut': 'none',
                        'title': this.title,
                        'width': 640,
                        'height': 385,
                        'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                        'type': 'swf',
                        'swf': {
                            'wmode': 'transparent',
                            'allowfullscreen': 'true'
                        }
                    });
                    return false;
                });

                // ====== Script for Make a Reviews
                $(".pop_make_a_rev").click(function () {
                    $(".pop_make_rev_box_open").slideToggle("slow");
                });

                // ====== Script for Make a Reviews
                $("#aLoadMoreData").click(function () {
                    $("#aLoadHideData").show();
                    $("#aLoadMoreData").hide();
                    $("#DivReviews").show();

                    DisplayReviews(placeid);

                });
                $("#aLoadHideData").click(function () {
                    $("#aLoadHideData").hide();
                    $("#aLoadMoreData").show();
                    $("#DivReviews").hide();
                    $(".testDiv").remove();
                });
                $("#aPopupmoredata").click(function () {
                    $("#aPopupmoredata").hide();
                    $("#MoreData").show();
                });
                $("#aPopuplessdata").click(function () {
                    $("#MoreData").hide();
                    $("#aPopupmoredata").show();
                });



                if (map.getZoom() >= 12) {
                    $(".Book-Now").hide();
                }
                 
                PopupFacilityMap_mapbox(Mylat, Mylong, data.d[0].JsonFacilityInfos, data.d[0].IsavailableSpots);
                
                // ================================= End
                if (Makemytrip == false) {
                    $(".Save-to-trip").hide();
                }
                 
                $("#DivParkReviews").hide();
            

                $('#new_popup_pop').simplePopup();
            }
        }).done(function () {
             
            $("#div_disable_parkinfo_iframe").show();
            $("#div_enable_parkinfo_iframe").hide();
            
            // 
            //var s = $(".small_list_data_sub").html()
            //$(".small_list_data_sub").html((s.trim().slice(0, -1)));

            
            $("#divParkInfo").hide();
            
            Popupmap.resize();
            

        }));

    }
    function CLosePopupBox(placeid, facilityid, Parksize) {
         
        $(".cross_btn_circle").click();
        ContainFacilityClick_mapbox(placeid, Parksize);
        
    }
    function ParkinfoLoad(parkinfo) {

        if (!$("#divIfreamparkinfo").is(':visible')) {
            
            if (LoadIfream == false) {
                $("#parkinfoIfreame").attr("src", parkinfo);
                $("#parkinfoIfreame").attr("height", "400px");
                LoadIfream = true;
            }
             
            $("#divIfreamparkinfo").show();
            $("#iParkFinder").removeClass("fa-plus");
            $("#iParkFinder").addClass("fa-minus");


        }
        else {
            $("#iParkFinder").removeClass("fa-minus");
            $("#iParkFinder").addClass("fa-plus");
            $("#divIfreamparkinfo").hide();
        }
    }

    function OpenParkActivity(placeid) {

        var urlopendata = '../themes/' + themesortname + '/Template/ParkActivity.html';
        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/GetPlaceActivity",
            data: JSON.stringify({ 'PlaceId': placeid }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                debugger;
                //if (data.d.length > 0) {
                var Placedata = data.d;

                $('#new_popup_pop_activity').html("");
                $('#new_popup_pop_activity').html("loading..");
                $('#new_popup_pop_activity').setTemplateURL(urlopendata, null, { filter_data: false });
                $('#new_popup_pop_activity').processTemplate(Placedata);
                $('#new_popup_pop_activity').width(700);
                $('#new_popup_pop_activity').simplePopup();
                //} else {
                //    var urlopennotdata = '../themes/' + themesortname + '/Template/ParkActivityError.html';

                //    $('#new_popup_pop_activity').setTemplateURL(urlopennotdata, null, { filter_data: false });
                //    $('#new_popup_pop_activity').processTemplate();
                //    $('#new_popup_pop_activity').simplePopup();
                //    $('#new_popup_pop_activity').width(700);
                //    //$("#messageBoxLightbox2").css("z-index", 1300);
                //    //$("#messageBoxLightbox2 .modal-body").html("No Record Found");
                //    //$("#messageBoxLightbox2 .modal-title").html("Error");

                //    //$('#messageBoxLightbox2').modal();
                //}

            }
        }).done(function () {
            
            $(".actlogin").show();
            $(".actwith").hide();
            
        }));
    }
</script>



                        </div>

                    </div>
                </div>
                <div id="mainContent_divUnitHeader" style="display: none;">


                    





                    <div class="new_top_bg_blue bg_light_second_part" id="divAllUnitlevelname" style="display: none;">
                        <div class="date_text_top">Date</div>

                        <div class="grid_night_box" style="display: none;">
                            <div class="new_top_night">
                                <select name="ctl01$mainContent$Grid_ddlNights_" id="Grid_ddlNights_" title="Nights" class="form-control" onchange="getUnitgridPopupNights(this);">

</select>
                            </div>
                        </div>
                        <!-- ===================== -->
                        <div class="grid_go_box">
                            <div class="top_go_btn">
                                <a class="filter_text_nav" style="cursor: pointer; display: none;" id="GridSearch">Search</a>
                            </div>
                        </div>
                        <!-- ===================== -->
                        <div class="clearfix"></div>
                    </div>

                </div>
                <div id="mainContent_divUnitGrid" style="display: none;">
                    <!-- =============================== -->
                    <div id="divPlaceUnit">
                        
                        <div class="grid_small" id="divUnitGridSize">
                            <div class="pos_rel">
                                <div class="small_grid_arrow">
                                    <a href="javascript:void(0);" onclick="fnUnitgridChangeLargesize();" id="aUnitLarge"></a>
                                    <a href="javascript:void(0);" onclick="fnUnitgridChangeSmallsize();" id="aUnitSmall" style="display: none;"></a>
                                </div>
                            </div>
                            <div>
                                

<link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />


<script type="text/javascript">
    /*
    BASE EVENTS
    */
    $(document).ready(function() {
        if($(".unitdata").length > 250)
        {
            $("#aUnitLarge").hide();
        }
        // $('.unitgrid tbody').addClass("table-responsive tablegrid grid_scroll");

        //if ($(".unitgrid tbody").prop("scrollHeight") > $(".unitgrid tbody").height()) {
        //    $(".unitgrid").addClass("after_scroll");
         
        //} else {
        //    $(".unitgrid").removeClass("after_scroll");
        //    $(".col-md-6 .table_main_he table th.datesText").css("width", "0px");
        //}
       
        generateAvailabilityCellDefinitions();
   
        // ASSIGN SELECTION
        selectionStartIndex = -1;
                
            
        // ASSIGN TEXT FIELDS
        htmlUnitId = $("#txtUnitId"); 
        selectionCount = 0;
        
        // ASSIGN TEXT FIELDS
        htmlArrivalDate = $("#mainContent_AdvanceMainSearch_txtArrivalDate");
        htmlNightsDropDown = $("#mainContent_AdvanceMainSearch_ddlNights");

        $("#mainContent_txtDateRange").val($("#AdvanceMainSearch_txtArrivalDate").val());
        htmlOnlyShowAvailable = $("#mainContent_homeContent_chkOnlyShowAvailable");
       
        unitGrid_changeSelectionBounds(selectionStartIndex, selectionCount);
           
        //$(".group1").colorbox({
        //    rel: 'group1',
        //    maxWidth: "95%",
        //    maxHeight: "95%"
        //});
       
        $(".blue_brd_box_not").attr("title","This unit is not available for selection of an arrival date due to the booking restriction.");
    });


  

    /*
    PUBLIC METHODS
    */

    // void unitGrid_generateAmenityDefinitions()
    // Initializes the availability cells for the grid.
    function generateAvailabilityCellDefinitions()
    {
        
        // CREATE COLUMN DATES
         
    
        // CREATE ROW UNITS
    
    
        // CREATE CLIENT IDS
 
     
}


</script>
 <label for="txtUnitId" style="display:none;">txtUnitId</label>
<input type="text" id="txtUnitId" value="" style="display: none" />
<input name="ctl01$mainContent$ugReservationGrid$hdnnotavailableunitAdvanced" type="hidden" id="mainContent_ugReservationGrid_hdnnotavailableunitAdvanced" />
<div id="mainContent_ugReservationGrid_tableGridParent">

</div>
<div style="position: absolute; top: 185px; margin: 1px 12px;">
    
</div>
                                
                                <div class="legend_text" style="display: none;">
                                    <span>
                                        <a class="clickbox_new" href="javascript:void(0);" id="aToggle"><span>Legend</span></a>
                                    </span>
                                </div>
                                <div id="openbox_new" class="legend_box_open" style="display: none;">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="foot_blue_box"><span></span>Available for Reservation</div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="foot_yellow_box"><span></span>Does not meet search criteria</div>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="col-md-6">
                                            <div class="foot_green_box"><span></span>Available for walk-In</div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="foot_red_box"><span></span>Unavailable for reservation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$hidddlLeft_UnitType" id="hidddlLeft_UnitType" />
<input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectedCategoryName" id="mainContent_LeftMenuAdvanceFilter_hdnLeft_SelectedCategoryName" />
<input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$hidddlLeft_Categories" id="mainContent_LeftMenuAdvanceFilter_hidddlLeft_Categories" />
<input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$Left_indexValue" id="mainContent_LeftMenuAdvanceFilter_Left_indexValue" />
<input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectedUnittypeId" id="mainContent_LeftMenuAdvanceFilter_hdnLeft_SelectedUnittypeId" />
<input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectRentalType" id="hdnLeft_SelectRentalType" value="0" />
<input type="hidden" name="ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectCampingEquip" id="hdnLeft_SelectCampingEquip" value="0" />
<input name="ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_placeid" type="hidden" id="mainContent_LeftMenuAdvanceFilter_hdnLeft_placeid" />
<input id="hdnLeft_Selectoptions" type="hidden" />




    <div id="draggable" style="width: 456px; right: 20px; top: 79px; position: absolute;">
        <div id="divAllControl">
            
            <div class="filter_box_white white_opacity" id="divFilterDrag">
                <div class="right_pin_cross_icn" id="div_right_pin_cross_icn"><a href="javascript:void(0);" id="DragEvent" onclick="RevertDrage();"><span style="display: none;">Test</span></a></div>
                <div class="fil_text_new" style="font-weight: bold;">Filter</div>
                <div class="fil_text_new" style="font-weight: bold; display: none;" id="spanblinktext">&nbsp;applied</div>
                <div class="search-view-toggle pull-right data_new_toogle" rel="grid">
                    <a title="collapse expand to filter" data-toggle="tooltip" class="list-view_left toggle_filter_new afilter" href="javascript:void(0);" id="afilterParkview"><span style="display: none;">Test</span></a>
                </div>
                <div class="clearfix"></div>
            </div>
            
            <div class="slide_one" style="display: none;" id="divLeftMenu">
                <div class="slide_main_box toggle_main_box_new">
                    
                        <div class="toggle_tab_new">
                            <div class="panel-group" id="faqAccordion">
                                <div class="panel panel-default " id="divParkFinderaccordion">
                                    <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question1">
                                        <h4 class="panel-title">
                                            <a href="javascript:void(0);" class="ing">Park Finder</a><span id="divParkfinderlenght" class="select_data"></span><span class="cross_icon_facility" id="spanPlacecancel" onclick="ClearforParkfinder();"></span>
                                            <span><a href="javascript:void(0);" title="collapse expand to park finder"></a></span>
                                        </h4>
                                    </div>
                                    <div id="question1" class="panel-collapse collapse" style="height: 0px;">
                                        <div class="panel-body">
                                            <div id="divToggle_serch_white">
                                                <div class="row">
                                                    <!-- =================== -->
                                                    <div class="col-md-5 col-sm-5">
                                                        <div class="toggle_serch_white">
                                                            <label for="txtParkfinderSearch" style="display: none;">txtParkfinderSearch</label>
                                                            <input type="text" placeholder="Search by Tag" class="inp1" id="txtParkfinderSearch">

                                                            <input type="button" class="inp2" id="aRemoveParkfinder" value="aRemoveParkfinder">
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                    <!-- =================== -->
                                                    <div class="col-md-4 col-sm-4">
                                                        <div id="div_chk_Accessible">
                                                            <div class="chk_btn_data">
                                                                <input id="chkAccessible" type="checkbox" name="ctl01$mainContent$LeftMenuAdvanceFilter$chkAccessible" /><label for="chkAccessible">Accessible</label>
                                                                <img src="../images/Accessible.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- =================== -->
                                                    <div class="col-md-3 col-sm-3 pdl_0_toggle">
                                                        


                                                        <div class="toggle_right_text" id="div_toggle_right_text">0/17</div>
                                                        <div class="toggle_right_icon">
                                                            <a href="javascript:void(0);" class="icon1" id="aPrakFinderPrev" onclick="ParkFinderPrev();"><span style="display: none;">Test</span></a>
                                                            <a href="javascript:void(0);" class="icon2" id="aPrakFinderNext" onclick="ParkFinderNext();"><span style="display: none;">Test</span></a>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                    <!-- =================== -->
                                                </div>
                                            </div>
                                            <div id="divLeftParkFinderset">
                                                <div class="toggle_data_nav" id="left_openbox">
                                                    
                                                    <div id="Left_Highlights"></div>
                                                    <div class="clearfix"></div>
                                                    <div class="dotted_box" style="display: none;">
                                                        <span id="span_dotted_box_1" class="active" onclick="ParkFinderPrev();" style="cursor: pointer;"></span>
                                                        <span id="span_dotted_box_2" onclick="ParkFinderNext();" style="cursor: pointer;"></span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="panel panel-default " id="divRentaltypeaccordion">
                                    <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question2">
                                        <h4 class="panel-title">
                                            <a href="javascript:void(0);" class="ing">Rental Type</a><span id="divAdvanceparamtername" class="select_data"></span>
                                            <span class="cross_icon_facility" id="spanPlaceRentalcancel" onclick="ClearforRentalType();"></span>
                                            <span class="cross_icon_facility" id="spanFacilityRentalcancel" onclick="ClearforRentalTypeFacility();"></span>
                                            <span id="mainContent_LeftMenuAdvanceFilter_RentalSpan"><a href="javascript:void(0);" title="Rental type to park finder"></a></span>
                                        </h4>

                                    </div>
                                    <div id="question2" class="panel-collapse collapse" style="height: 0px;">
                                        <div class="panel-body">
                                            
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <div class="main_nav_select left_side_combo_new">
                                                        <select name="ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_Categories" id="ddlLeft_Categories" title="Select a Catagory" onchange="Left_ShowControlsFromEvent();">
	<option selected="selected" value="">Select Rental Type</option>
	<option value="1010">Boating</option>
	<option value="1">Camping</option>
	<option value="7">DailyUse</option>
	<option value="1016">Equestrain Camping</option>
	<option value="2">Group Camping</option>
	<option value="1015">Hook Up Camping</option>
	<option value="1008">Lodging</option>
	<option value="1014">Remote Camping</option>

</select>
                                                    </div>
                                                </div>
                                                <!-- =================== -->
                                                <div class="col-md-6">
                                                    <div class="main_nav_select left_side_combo_new" id="Left_unitType" style="display: none;">
                                                        <select name="ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_UnitType" id="ddlLeft_UnitType" title="Select Unit Type">

</select>
                                                    </div>
                                                </div>
                                                <!-- =================== -->
                                                <div class="col-md-6">
                                                    <div class="main_nav_select left_side_combo_new" id="Left_campingunit" style="display: none;">
                                                        <select name="ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_CampingUnit" id="ddlLeft_CampingUnit" title="Select Camping Unit" onchange="Left_SelectCampingEquip();">
	<option selected="selected" value="0">Select Camping Equip. </option>
	<option value="75">RV/Motorhome</option>
	<option value="83">Tent</option>
	<option value="76">Tent Only</option>
	<option value="74">Trailer</option>
	<option value="87">Trailer Only</option>
	<option value="79">Truck/SUV/Van</option>

</select>
                                                    </div>
                                                </div>
                                                <!-- =================== -->
                                                <div class="col-md-6">
                                                    <div class="main_nav_select left_side_combo_new" id="Left_padlength" style="display: none;">
                                                        <select name="ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_Lenght" id="ddlLeft_Lenght" title="Select Maximum Trailer Length" onchange="Lenghts()">
	<option value="Trailer Length">Trailer Length</option>
	<option value="> 15">&gt; 15</option>
	<option value="> 20">&gt; 20</option>
	<option value="> 30">&gt; 30</option>
	<option value="> 40">&gt; 40</option>
	<option value="> 50">&gt; 50</option>
	<option value="> 60">&gt; 60</option>
	<option value="> 70">&gt; 70</option>

</select>
                                                    </div>
                                                </div>
                                                <!-- =================== -->
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="clearfix"></div>
                        <!-- ============================= -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="all_pd_15">
                                    <a id="btnLeft_advancesearch" style="cursor: pointer;" class="filter_text_nav">Search</a>
                                    <a id="aFilterClear" href="javascript:void(0);" class="toggle_clear_btn" onclick="ClearAllSearchData();">Clear All</a>

                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

            <div id="filter" class="filter-bar pos_rel" style="display: none;">
                

                <div class="search-dropdown pull-left">
                </div>
                <div class="search-filter-btn pull-right" style="display: none;">
                    <a class="btn btn-primary filter-box-toggel"></a>
                </div>
                
                <!-- search list arrows -->

                <!-- search list arrows end -->
                <div class="clearfix"></div>
            </div>

        </div>
    </div>
    
<script>
    var boolChkAccessible = false;
    $(document).ready(function () {
        Loadhighlight();
        Left_BindCategories();
        Left_BindUnitTypes();

        Left_setAdvanceperimeterValues();
        if ($('#hidddlLeft_UnitType').val() != "") {

            $("#hdnLeft_Selectoptions").val($('#hidddlLeft_UnitType').val());
        }


        //var availableTags = ["Showers","Dump Station","Biking","Picnic Area","Visitors Center","Hiking Trails","Nature Trails","Restrooms","Comfort Station","Fire Rings","Ranger Station","Parking","Picnic Tables","Telephone","Amphitheater","Handicap Access","Fishing"];
        
        $('#chkAccessible').change(function () {

            //$("#hdnChkParkfinder").val("Accessible");
            if ($(this).is(':checked')) {
                parkFinderArray.push('Accessible');
                //$("#hdnChkParkfinder").val("Accessible");

            } else {

                if (parkFinderArray.length > 0) {
                    var removeItem = "Accessible";
                    parkFinderArray = $.grep(parkFinderArray, function (value) {
                        return value != removeItem;
                    });
                }
                if (parkFinderArray.length == 0 && boolChkAccessible == true) {

                    ClearforParkfinder();
                }
            }
        });

        $('#hdnIsPremium').val("");
        $('#chkIsPremium').change(function () {

            if ($(this).is(':checked')) {
                $('#hdnIsPremium').val("true");

                BindUnitTypes();
            }
            else {
                $('#hdnIsPremium').val("false");
                BindUnitTypes();

            }

        });

    });
    //function DisplaySearchParkFinder(name)
    //{
    //    $(".prkFinder li").hide();
    //    $(".toggle_right_icon").hide();
    //    $(".prkFinder #" + name).show();
    //}
    //$("#aRemoveParkfinder").click(function () {
    //    $("#txtParkfinderSearch").val("");
    //    $(".prkFinder").show();
    //    $(".prkFinder li").show();
    //});
    
    function ParkFinderNext() {

        if (CurrentUlTag < TotalUlTag) {
            $("#left_openbox #left_part-finder_" + CurrentUlTag).hide();
            $("#span_dotted_box_" + CurrentUlTag).removeClass("active");
            CurrentUlTag += 1;
            $("#left_openbox #left_part-finder_" + CurrentUlTag).show();
            $("#span_dotted_box_" + CurrentUlTag).addClass("active");
        }
    }
    function ParkFinderPrev() {
        if (StartUlTag < CurrentUlTag) {
            $("#left_openbox  #left_part-finder_" + CurrentUlTag).hide();
            $("#span_dotted_box_" + CurrentUlTag).removeClass("active");
            CurrentUlTag -= 1;
            $("#left_openbox #left_part-finder_" + CurrentUlTag).show();
            $("#span_dotted_box_" + CurrentUlTag).addClass("active");
        }
    }
    function ClearAllSearchData() {

        if ($("#hiddenPlaceLevel").val() == "Facility") {
            ClearforRentalTypeFacility();
            boolAdvanceSearch = false;

        }
        else {
            isFilterbtnClickOnly = false;
            boolAdvanceSearch = false;
            $("#div_toggle_right_text").html("Selected 0 of 17");
            $('#part-finder li').removeClass('active');
            $('#part-finder li').removeClass('selected');
            $('#left_openbox li').removeClass('active');
            $('#left_openbox li').removeClass('selected');
            parkFinderArray = [];

            Selectoptions = "";
            $("#hdnddlLenght").val("Trailer Length");
            $("#hdnSelectCampingEquip").val("0");
            $("#hdnSelectRentalType").val(0);
            $("#hdnSelectoptions").val("0");
            $("#hidddlUnitType").val("");
            ClearAdvanceControl();
            Left_ClearAdvanceControl();
            ClearSessionValues();
            HideAllAdvanceOptionPerticular();
            Left_HideAllAdvanceOptionPerticular();
            isFilterClick = false;
            $('.third_fil_main_box').hide();

            setTimeout(function () { GetMapData(0, true, true); }, 500);
            $('.slide_one').toggle();
            $("#spanblinktext").hide();
            $('#chkIsPremium').attr('checked', false);

        }
        //if (($("#hiddenPlaceLevel").val() == "Facility") && $("#ddlLeft_Categories").val() == 0) {
        //    if (BoolDraggablevent == true)
        //        $("#divAllControl").css("width", "200px");
        //    else
        //        $('#divAllControl').css("width", DrageOriginalvlaue + 'px');
        //}
        //else if (($("#ddlLeft_Categories").val() == 0 || parkFinderArray.length == 0) && ($("#hiddenPlaceLevel").val() != "Facility")) {
        //    if (BoolDraggablevent == true)
        //        $("#divAllControl").css("width", "200px");
        //    else
        //        $('#divAllControl').css("width", DrageOriginalvlaue + 'px');
        //}
        $("#afilterParkview").removeClass();
        $("#afilterParkview").addClass("list-view_left toggle_filter_new afilter");
        $("#ajay #afilterParkview").addClass("list-view_left toggle_filter_new afilter");

    }
    function Left_ParkClear() {
        $('#part-finder li').removeClass('active');
        $('#part-finder li').removeClass('selected');
        parkFinderArray = [];
        $("#hdnddlLenght").val(0);
        $("#hdnLeft_SelectCampingEquip").val("0");
        $("#hdnLeft_SelectRentalType").val(0);
        $("#hdnLeft_Selectoptions").val("0");
        $("#hidddlLeft_UnitType").val("");
        ClearSessionValues();
        Left_HideAllAdvanceOptionPerticular();
        //setSessionValuesOnClick();
        setTimeout(function () { GetMapData(0, true, true); }, 500);
        $("#divAllControl").css("width", DrageControlvlaue + "px");
    }

    function Left_AdvanceClear() {
        $("#divAllControl").css("width", DrageControlvlaue + "px");
        parkFinderArray = [];
        $("#hdnddlLenght").val(0);
        $("#hdnLeft_SelectCampingEquip").val("0");
        $("#hdnLeft_SelectRentalType").val(0);
        $("#hdnLeft_Selectoptions").val("0");
        $("#hidddlLeft_UnitType").val("");
        ClearSessionValues();
        Left_HideAllAdvanceOptionPerticular();
        $("#btn_advancesearch").click();
        //setSessionValuesOnClick();
        //setTimeout(function () { $("#btn_advancesearch").click(); }, 500);
    }
    var LeftMultiselection = false;
    function Left_BindUnitTypes() {



    }

    function OnUnitTypeChanged() {

        $("#mainContent_LeftMenuAdvanceFilter_hdnLeft_SelectedUnittypeId").val($("#ddlLeft_UnitType").val());
    }

    function pageLoad() {


        
    }

    function bSearch_Click() {
        var ddlLeft_UnitType = document.getElementById('ddlLeft_UnitType').id;
        var hidddlLeft_UnitType = document.getElementById('hidddlLeft_UnitType').id;
        $("#" + ddlLeft_UnitType).multiselect();

        var selectedOptions = $("#" + ddlLeft_UnitType).multiselect("getChecked").map(function () {
            return this.value;
        }).get();
        selectedOptions = jQuery.grep(selectedOptions, function (value) {
            return value != "";
        });
        $('#' + hidddlLeft_UnitType).val$('#' + hidddlLeft_UnitType).val(selectedOptions);

    }


    function Left_ShowControlsFromEvent() {

        Leftmenu = false;
        if ($("#ddlCategories").val() != $('#ddlLeft_Categories').val()) {
            $("#Left_BindUnitTypes").val($('#ddlLeft_Categories').val());
            $("#ddlCategories").val($('#ddlLeft_Categories').val());

        }
        $('#ddlLeft_CampingUnit').removeAttr("disabled");
        $('#ddlLeft_Lenght').removeAttr("disabled");

        var hidddlLeft_UnitType = document.getElementById('hidddlLeft_UnitType').id;
        $('#' + hidddlLeft_UnitType).val(null);
        var hidddlLeft_Categories = document.getElementById('mainContent_LeftMenuAdvanceFilter_hidddlLeft_Categories').id;
        var ddl = document.getElementById('ddlLeft_Categories');
        var ddlvalue = ddl.options[ddl.selectedIndex].value;
        var ddltext = $("#mainContent_LeftMenuAdvanceFilter_hdnLeft_SelectedCategoryName").val();
        document.getElementById('mainContent_LeftMenuAdvanceFilter_Left_indexValue').value = ddltext;
        $("#mainContent_LeftMenuAdvanceFilter_hdnLeft_SelectedCategoryName").val(ddltext);
        $('#' + hidddlLeft_Categories).val(ddlvalue);
        $('#hidddlCategories').val(ddlvalue);

        var div1 = document.getElementById("Left_campingunit");
        var div2 = document.getElementById("Left_padlength");
        var div3 = document.getElementById("Left_unitType");
        //var div4 = document.getElementById("additionalOptions");


        if (ddlvalue == 1 || ddlvalue != 25) {
            div1.style.display = "block";
            div2.style.display = "block";
            div3.style.display = "block";
        } else {
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
        }

        if (ddlvalue == 1) {
            div1.style.display = "block";
            div2.style.display = "block";
            div3.style.display = "block";

        } else {
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";

        }
        if (ddlvalue == "Select Rental Type" || ddlvalue == "") {
            div3.style.display = "none";
            div2.style.display = "none";
            div1.style.display = "none";

        } else {

            div3.style.display = "block";
            div2.style.display = "block";
            div1.style.display = "block";

        }
        if (ddlvalue != 1 || ddlvalue == "") {

            div2.style.display = "none";
            div1.style.display = "none";

        } else {

            div3.style.display = "block";
            div2.style.display = "block";
            div1.style.display = "block";
        }

        $("#hdnLeft_SelectRentalType").val($('#ddlLeft_Categories').val());

        LeftMultiselection = true;
        BindUnitTypes();
        $("#ui-multiselect-ddlLeft_UnitType-option-0").click().removeAttr("checked");
    }

    function Left_SelectCampingEquip() {
        $("#hdnLeft_SelectCampingEquip").val($('#ddlLeft_CampingUnit').val());
        $("#hdnSelectCampingEquip").val($('#ddlLeft_CampingUnit').val());

        var multiselect = "";
        $("input[type=checkbox]:checked").each(function () {
            multiselect += $(this).val() + ",";
        });

        $("#hdnLeft_Selectoptions").val(multiselect.toString().substring(0, multiselect.length - 1));

    }

    function Lenghts() {
        $("#hdnddlLenght.ClientID").val($('#ddlLeft_Lenght').val());
    }

    function Left_BindCategories() {

       

    }

    function Left_hideAdvanceParameter() {
        
        $('#ddlLeft_CampingUnit').attr("disabled", false);
        $('#ddlLeft_Lenght').attr("disabled", false);
        //}
    }
    function Left_setAdvanceperimeterValues() {

        var Selectoptions = "";
        $("input[type=checkbox]:checked").each(function () {
            Selectoptions += $(this).val() + ",";
        });

        //Start Select options
        if (Selectoptions.toString().substring(0, Selectoptions.length - 1) == "") {
            $("#hdnLeft_Selectoptions").val(0);
        } else {
            $("#hdnLeft_Selectoptions").val(Selectoptions.toString().substring(0, Selectoptions.length - 1));
            $("#hidddlLeft_UnitType").val(Selectoptions.toString().substring(0, Selectoptions.length - 1));
            //$("#hdnSelectoptions").val(Selectoptions.toString().substring(0, Selectoptions.length - 1));
        }
        //end Select options

        //Start Minimum Vehicle Length
        if ($('#ddlLeft_Lenght').val() == "Max Trailer Length" || $('#ddlLeft_Lenght').val() == null) {
            $("#hdnddlLenght").val(0);
        } else {
            $("#hdnddlLenght").val($('#ddlLeft_Lenght').val().replace('>', ''));
        }
    }

</script>
<script>
    function setSessionValues123() {

        Left_setAdvanceperimeterValues();
        var unitTypeIdsArray = new Array();
        if ($("#hdnLeft_Selectoptions").val() != "0") {
            var ln = $("#hdnLeft_Selectoptions").val().split(',');
            for (var i = 0; i < ln.length; i++) {
                unitTypeIdsArray.push(ln[i]);
            }
        }

        if ($('#ddlLeft_Categories').val() == "") {
            $("#hdnLeft_SelectRentalType").val(0);
        }
        var availabilitySearchParams = {
            StartDate: $('#hdnArrivalDate').val(),
            Nights: $('#hdnNights').val(),
            CategoryId: $("#hdnLeft_SelectRentalType").val(),
            UnitTypeIds: unitTypeIdsArray,
            ShowOnlyAdaUnits: 'true',
            ShowOnlyTentSiteUnits: 'false',
            ShowOnlyRvSiteUnits: 'false',
            MinimumVehicleLength: $("#hdnddlLenght").val(),
            ShowSiteUnitsName: $("#hdnLeft_SelectCampingEquip").val(),
            ParkFinder: parkFinderArray,
            chooseActivity: $('#ddlFacilityCategory').val()
        };

        $.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SetSessionvalue",
            data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $("#facilityChanged").val("true");
                GetUnitGridDataHtmlString();

                //EndLoaders();
                //alert("setSessionValues");
                $('.table_page_table tbody').css("height", "60px");
            }
        });
    }

    $('#ddlLeft_Categories').change(function () {

        $("#hdnSelectoptions").val('');
        $('#hidddlUnitType').val('');
        Selectoptions = '';
        Leftmenu = true;
        if ($("#ddlCategories").val() != $('#ddlLeft_Categories').val()) {
            $("#ddlCategories").val($('#ddlLeft_Categories').val());
        }

        if (($('#ddlLeft_Categories').val() == "")) {
            Left_HideAllAdvanceOptionPerticular();
            HideAllAdvanceOptionPerticular();
        }
        else if (($('#ddlLeft_Categories').val() == "25") || ($('#ddlLeft_Categories').val() == "1")) {
            ShowAdvanceOptionPerticular();
            Left_ShowAdvanceOptionPerticular();
        }
        else if (($('#ddlLeft_Categories').val() != "25") || ($('#ddlLeft_Categories').val() != "1")) {
            Left_HideAdvanceOpetionPeraticular();
            HideAdvanceOpetionPeraticular();
        }
        $("#hdnSelectRentalType").val($('#ddlLeft_Categories').val());

    });

    $('#ddlLeft_CampingUnit').change(function () {
        if ($("#ddlCampingUnit").val() != $('#ddlLeft_CampingUnit').val()) {
            $("#ddlCampingUnit").val($('#ddlLeft_CampingUnit').val());
        }
    });
    $('#ddlLeft_Lenght').change(function () {
        if ($("#ddlLenght").val() != $('#ddlLeft_Lenght').val()) {
            $("#ddlLenght").val($('#ddlLeft_Lenght').val());
        }
    });

    function Left_ClearAdvanceControl() {
        $('#ddlLeft_Categories').val("");
        $('#ddlLeft_CampingUnit').val("0");
        $('#ddlLeft_Lenght').val('Trailer Length');
        $('.ui-multiselect-none').click();
        $('#ddlLeft_CampingUnit').attr("disabled", "disabled");
        $('#ddlLeft_Lenght').attr("disabled", "disabled");
    }


    function left_ClearSessionValues() {
        Left_ClearAdvanceControl();
        var unitTypeIdsArray = new Array();

        //$("#hdnLeft_SelectCampingEquip").val("0");
        var availabilitySearchParams = {
            StartDate: $('#hdnArrivalDate').val(),
            Nights: $('#hdnNights').val(),
            CategoryId: $("#hdnLeft_SelectRentalType").val(),
            UnitTypeIds: unitTypeIdsArray,
            ShowOnlyAdaUnits: 'true',
            ShowOnlyTentSiteUnits: 'false',
            ShowOnlyRvSiteUnits: 'false',
            MinimumVehicleLength: $("#hdnddlLenght").val(),
            ShowSiteUnitsName: $("#hdnLeft_SelectCampingEquip").val(),
            ParkFinder: parkFinderArray,
            chooseActivity: $('#ddlFacilityCategory').val()
        };

        $.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SetSessionvalue",
            data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                // alert("ClearSessionValues");
            }
        });
    }

    function Left_ShowAdvanceOptionPerticular() {

        $("#Left_campingunit").css("display", "block");
        $("#Left_padlength").css("display", "block");
        $("#Left_unitType").css("display", "block");
    }
    function Left_HideAdvanceOpetionPeraticular() {

        $("#Left_campingunit").css("display", "none");
        $("#Left_padlength").css("display", "none");
        $("#Left_unitType").css("display", "block");
    }
    function Left_HideAllAdvanceOptionPerticular() {

        $("#Left_campingunit").css("display", "none");
        $("#Left_padlength").css("display", "none");
        $("#Left_unitType").css("display", "none");
    }
    function Left_setSessionValuesOnClick() {

        left_setAdvanceperimeterValues();
        var unitTypeIdsArray = new Array();
        if ($("#hdnLeft_Selectoptions").val() != "0") {
            var ln = $("#hdnLeft_Selectoptions").val().split(',');
            for (var i = 0; i < ln.length; i++) {
                unitTypeIdsArray.push(ln[i]);
            }
        }

        if ($('#ddlLeft_Categories').val() == "") {
            $("#hdnLeft_SelectRentalType").val(0);
        }
        var availabilitySearchParams = {
            StartDate: $('#hdnArrivalDate').val(),
            Nights: $('#hdnNights').val(),
            CategoryId: $("#hdnLeft_SelectRentalType").val(),
            UnitTypeIds: unitTypeIdsArray,
            ShowOnlyAdaUnits: 'true',
            ShowOnlyTentSiteUnits: 'false',
            ShowOnlyRvSiteUnits: 'false',
            MinimumVehicleLength: $("#hdnddlLenght").val(),
            ShowSiteUnitsName: $("#hdnLeft_SelectCampingEquip").val(),
            ParkFinder: parkFinderArray,
            chooseActivity: $('#ddlFacilityCategory').val()
        };

        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/SetSessionvalue",
            data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                //EndLoaders();
                //alert("setSessionValuesOnClick");
            },
            error: function (msg) {
                //alert(msg);
            }
        })).done(function () {

        });
    }
    function ReBindCategory() {
   
    }

    function CheckSessionValues() {
        $.when($.ajax({
            type: "POST",
            url: "AdvanceSearch.aspx/CheckSessionValues",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                // if Session value is blank redirect.  
                if (data.d == "cleardata") {
                    StartLoaders();

                    window.location.href = '../Facilities/AdvanceSearch.aspx';
                    return false;
                }
            },
            error: function (msg) {
                //alert("Error");
            }
        })).done(function () {

        });
    }
    function LeftMultiSelection() {

        // 
        var ddlUnitType = $('#ddlLeft_UnitType');
        var arr = $.unique($('#hidddlUnitType').val().split(','));
        //var data = arr.join(",");
        var data1 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].trim() != "" || arr[i].trim() != ",") {
                data1.push(arr[i]);
            }
        }
        $('.ui-multiselect-none').click();
        $('#hidddlUnitType').val(data1.join(","));
        var hidddlUnitTypearray = $('#hidddlUnitType').val().split(',');
        if (hidddlUnitTypearray != "") {
            for (var i = 0; i < hidddlUnitTypearray.length; i++) {
                if (hidddlUnitTypearray[i] != "") {
                    $("#ddlLeft_UnitType").multiselect("widget").find(":checkbox[value='" + hidddlUnitTypearray[i] + "']").each(function () {

                        $(this).click();
                    });
                }
            }
        }
        //Leftmenu = true;
    }
    function TopMultiSelection() {

        var ddlUnitType = $('#ddlLeft_UnitType');
        var arr = $.unique($('#hidddlUnitType').val().split(','));
        //var data = arr.join(",");
        var data1 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].trim() != "" || arr[i].trim() != ",") {
                data1.push(arr[i]);
            }
        }
        $('.ui-multiselect-none').click();
        // 
        $('#hidddlUnitType').val(data1.join(","));
        var hidddlUnitTypearray = $('#hidddlUnitType').val().split(',');
        if (hidddlUnitTypearray != "") {
            for (var i = 0; i < hidddlUnitTypearray.length; i++) {
                if (hidddlUnitTypearray[i] != "") {
                    $("#ddlUnitType").multiselect("widget").find(":checkbox[value='" + hidddlUnitTypearray[i] + "']").each(function () {

                        $(this).click();
                    });
                }
            }
        }
        //Leftmenu = true;
    }

    function Loadhighlight() {
        //$.ajax({
        //    type: "POST",
        //    url: "AdvanceSearch.aspx/LoadHighlightes",
        //    data: JSON.stringify({}),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    success: function (data) {
        //         
        //        //alert(data);
        //        // alert("ClearSessionValues");
        //    }
        //});
    }
</script>

            <div id="main-right-part" class="pull-right" style="position: relative;">
                <div id="mainContent_divgoogleplaces" class="googleData">


                    

<div id="GoogleMap_Div_Container">

    
    <a href="javascript:void(0);" style="position: absolute; top: 11px; left: 12px; z-index: 999; display: none;" id="amapbackbtn" onclick="BacktoHomePlaceLevel();">
        <img src="https://cali-content.usedirect.com/themes/California/map_arrow_back.jpg" alt="Back to Home" /></a>
    <a id='aSearchthisarea' class="btnMapSearchArea" style="display: none; position: absolute; top: 15px; z-index: 99; left: 75px; background-color: #fff; padding: 1px 20px; color: #666; cursor: pointer;" aria-hidden="true">Update Results</a>
    
    <div id='divMiles' style="position: absolute; top: 85px; z-index: 99; right: 35px; background-color: azure; cursor: pointer; font-size: 20px;" aria-hidden="true"></div>
    <div id='directions' style="display: none;"></div>

    
    <div id="GoogleMap_Div" >
    </div>
    <!-- ==========Map Image Legend =========== -->

    <div id="divMainGoogleMapLegend" style="display:none;">
        <div class="click_img_box" id="divMapLegend">
            <a href="javascript:void(0);">
                <img src="https://cali-content.usedirect.com/images/map_main_icn.jpg" alt="img" /></a>
        </div>

        <div class="open_img_box" id="divMapLegendDetails">
            <!-- ==================== -->
            <div class="hed_box">
                <div class="tab_data_tit">Legend</div>
                <div class="table_cross"><a href="javascript:void(0);"><i class="fa fa-times"></i></a></div>
                <div class="clearfix"></div>
            </div>
            <!-- ==================== -->
            <div class="Legend_table_box">
                <table>
                    <tr>
                        <th>&nbsp;</th>
                        <th>No Campgrounds within Park<br/>Meets at least One Filter Condition</th>
                        <th> No Campgrounds within Park<br/> Does not Meet any Filter Conditions</th>
                        <th>Has Available Campsites on Selected Date<br/> Meets at least One Filter Condition</th>
                        <th>No Available Campsites on Selected Date<br/> Meets at least One Filter Condition</th>
                        <th>Has Available Campsites on Selected Date<br/>  Does not Meet any Filter Conditions</th>
                        <th>No Available Campsites on Selected Date<br/> Does not Meet any Filter Conditions</th>
                    </tr>
                    <tr>
                        <td>Recreation Park</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Recreation Park/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Recreation Park/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Recreation Park/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Recreation Park/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Recreation Park/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Recreation Park/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td>State Park</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/State Park/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/State Park/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/State Park/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/State Park/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/State Park/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/State Park/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                   
                    <tr>
                        <td>State Beach</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Beach/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Beach/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Beach/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Beach/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Beach/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Beach/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>State Historic Park</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SHP/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SHP/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SHP/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SHP/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SHP/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SHP/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>State Vehicular Recreation Area</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SVA/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SVA/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SVA/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SVA/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SVA/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SVA/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>State Nature Reserve</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SNR/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SNR/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SNR/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SNR/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SNR/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/SNR/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
            <!-- ==================== -->
            <div class="" style="border-bottom:1px solid #666; margin:7px 0;width:100%;float;left;"></div>
            <!-- ==================== -->
            <div class="Legend_table_box">
                <table>
                   
                    <tr>
                        <td>Camping</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Camping/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Camping/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Camping/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Camping/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Camping/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Camping/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Group Camping</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Group Camping/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Group Camping/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Group Camping/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Group Camping/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Group Camping/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Group Camping/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Day Use</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/DayUse/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/DayUse/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/DayUse/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/DayUse/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/DayUse/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/DayUse/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cabins/Other Lodging</td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Loading/availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Loading/not_availalble.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Loading/availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Loading/availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Loading/not_availalble_with_criteria.png" alt="img" />
                            </div>
                        </td>
                        
                        <td>
                            <div>
                                <img src="https://cali-content.usedirect.com/images/Parklegend/Loading/not_availalble_not_criteria.png" alt="img" />
                            </div>
                        </td>
                    </tr>
                   

                </table>
            </div>
            <!-- ==================== -->
        </div>
    </div>



</div>

<div id="directions_canvas">
</div>
<div id="mainContent_mapGooglePlaces_UpdatePanelXXXYYY">
	
        <input type="hidden" name="ctl01$mainContent$mapGooglePlaces$hidEventName" id="mainContent_mapGooglePlaces_hidEventName" />
        <input type="hidden" name="ctl01$mainContent$mapGooglePlaces$hidEventValue" id="mainContent_mapGooglePlaces_hidEventValue" />
    
</div>

<script language="javascript" type="text/javascript">
    //RaiseEvent('MovePushpin','pushpin2');
    function RaiseEvent(pEventName, pEventValue) {
        document.getElementById('mainContent_mapGooglePlaces_hidEventName').value = pEventName;
        document.getElementById('mainContent_mapGooglePlaces_hidEventValue').value = pEventValue;
        if (document.getElementById('mainContent_mapGooglePlaces_UpdatePanelXXXYYY') != null) {
            __doPostBack('mainContent_mapGooglePlaces_UpdatePanelXXXYYY', '');
        }

    }

    $(document).ready(function () {
        $("#divMapLegend").click(function () {
            $("#divMapLegendDetails").slideDown("slow");
        });

        $(".table_cross").click(function () {
            $("#divMapLegendDetails").slideUp("slow");
        });
    });
</script>
<style>
   
</style>


                </div>

                <!-- ========= Map Part Start ========== -->
                <div id="divMapdata">
                    <div class="map_img">
                        
                        

                        <div id="mainContent_divfacilitymap" style="display: none;">


                            



<link href="../styles/main.css" rel="stylesheet" />
<link href="../styles/leaflet.css" rel="stylesheet" />

<style>   
    /* MAP REGION */

	img[usemap] {
		border: none;
		height: 100%;
		max-width: 100%;
		width: 100%;

	}

    .leaflet-bottom .leaflet-control {
    margin-bottom: 10px;
    display: none;
}

    #image-map {
  width: 100%;
  height: 515px;
  border: 1px solid #ccc;
 

}
 
    .map
    {
        margin: 0.5em 0;
        
        border: 1px solid black;    
        background-size:100% auto;
       
        
        background: white url('') no-repeat center;

        position: relative;
        z-index: 0;
    }
    .legend {
        right: 0px !important;
    z-index: 1000;
    }
    
    /* CHILD NODES */
    .childNode
    {
        position: absolute;
        
        height: 46px;
        width: 46px;
        
        background: url('~/images/California/PlaceChildrenHover.png') no-repeat center;
    }
</style>


<div id="draggablearea" style="border: solid 1px black; height: 100%;">
    <div id="mapviewdiv">

        <!-- MAP LEGEND -->

        

        <a id="areas" href="javascript:void(0);">
           
            <div class="" id="image-map">
            </div>
          

            <!-- IMAGE MAP HIGHLIGHT -->
            <img id="imgMapChildNodes" src="" alt="Image Map Child Nodes" style="height:100%;width:876px;" />
        </a>
    </div>
</div>


<script>


    $(document).ready(function () {
     
        $("#areas").css("cursor", "default");
        $("#image-map").attr("class", "");
        $("#image-map").attr("class", "leaflet-container leaflet-fade-anim");
        //$("#image-map").attr("class", "leaflet-fade-anim");
        $("area").hover(function (evt) {
            //to change cursor on map area.

            $("#areas").css("cursor", "pointer");
        }, function (evt) {
            //to change cursor on map area.
            $("#areas").css("cursor", "default");
        });
        //alert("mapview page loaded");
        $('img[usemap]').rwdImageMaps();
         
        $("img#imgMapChildNodes").remove();

        $("#areas").on("click tap", function (evt) {

            if (evt.target.tagName.toLowerCase() == "area") {
                //  alert("after ajax in map control");
                return true;
            }
        });

        $(".legend").draggable({ containment: "#draggablearea"});

    });


    // create the slippy map
    var map1 = L.map('image-map', {
        minZoom: 1,
        maxZoom: 4,
        center: [0, 0],
        zoom: 1,
        crs: L.CRS.Simple,
        draggable: true

    });
   
    $(".leaflet-overlay-pane img").attr("usemap", "#");
  

    // dimensions of the image
    if ('') {
        var w = 2200,
            h = 1500;
        if ($("#hiddenPlaceLevel").val() != "Facility") {
            //zoom map for place level
            
            var div_height = $(".leaflet-image-layer").height();
            //alert($(window).height());   // returns height of browser viewport
            //alert($(document).height()); // returns height of HTML document
            //alert($(window).width());   // returns width of browser viewport
            //alert($(document).width()); // returns width of HTML document
            //alert($("#mapviewdiv").height());

            //h = ($(window).height() - 310) * 4;
            //w = ($(window).width() - 665) * 4;

            var t1 = $('.brd_btm_head').height();
            var t2 = $('.date_night_search_box brd_btm_new').height();
            var t3 = $(window).height();
            var t4 = t3 - t1 - t2;
            
            h = (t4-100) * 4;
            w = ($(window).width() - 565) * 4;
            

            //h = ($(window).height() - 210) * 4;
            //w = ($(window).width() - 665) * 4;
           
           /* if (window.matchMedia('(min-width:600px)').matches) {
                w = 2300, h = 1200;
            }
            if (window.matchMedia('(min-width:768px)').matches) {
                w = 2910, h = 1780;
            }
            if (window.matchMedia('(min-width:800px)').matches) {
                w = 2990, h = 1700;
            }
            if (window.matchMedia('(min-width:900px)').matches) {
                w = 3390, h = 1780;
            }
            if (window.matchMedia('(min-width:980px)').matches) {
                w = 3780, h = 1800;
            }
            if (window.matchMedia('(min-width:1024px)').matches) {
                w = 1980, h = 1800;
            }
            if (window.matchMedia('(min-width:1280px)').matches) {
                w = 2470, h = 1900;
            }
            if (window.matchMedia('(min-width:1349px)').matches) {
                w = 2650, h = 1840;
            }
            if (window.matchMedia('(min-width:1600px)').matches) {
                w = 3600, h = 2440;
            }
            if (window.matchMedia('(min-width:1920px)').matches) {
                w = 3700, h = 2600;
            } */
        } else {

            var t1 = $('.brd_btm_head').height();
            var t2 = $('.date_night_search_box brd_btm_new').height();
            var t3 = $(window).height();
            var t4 = t3 - t1 - t2;

            //h = (t4 - 100) * 4;
            h = (t4 - 55) * 4;
            w = ($(window).width() - 565) * 4;
           
            //h = ($(window).height() - 240) * 4;
            //w = ($(window).width() - 665) * 4;

            //check for facility level
            /*if (window.matchMedia('(min-width:600px)').matches) {
                w = 2300, h = 1200;
            }
            if (window.matchMedia('(min-width:768px)').matches) {
                w = 2910, h = 1490;
            }
            if (window.matchMedia('(min-width:800px)').matches) {
                w = 2990, h = 1480;
            }
            if (window.matchMedia('(min-width:900px)').matches) {
                w = 3350, h = 1580;
            }
            if (window.matchMedia('(min-width:980px)').matches) {
                w = 3750, h = 1500;
            }
            if (window.matchMedia('(min-width:1024px)').matches) {
                w = 1580, h = 1550;
            }
            if (window.matchMedia('(min-width:1280px)').matches) {
                w = 2420, h = 1700;
            }
            if (window.matchMedia('(min-width:1349px)').matches) {
                w = 2710, h = 1540;
            }
            if (window.matchMedia('(min-width:1600px)').matches) {
                w = 3600, h = 2440;
            }
            if (window.matchMedia('(min-width:1920px)').matches) {
                w = 4900, h = 2500;
            } */
           
        }
        var str1 = window.name
       // alert('tt' + window.name + 'tt')
        if (str1.indexOf("fancybox-frame") != -1)
        {
            w = 2400, h = 1510;
        }
       var url = '';

        // calculate the edges of the image, in coordinate space
        var southWest = map1.unproject([0, h], map1.getMaxZoom() - 1);
        var northEast = map1.unproject([w, 0], map1.getMaxZoom() - 1);
        var bounds = new L.LatLngBounds(southWest, northEast);

        var overlay = L.imageOverlay(url, bounds);
        overlay.addTo(map1);
        $(".leaflet-overlay-pane img").attr("usemap", "#ImageMap");
        // tell leaflet that the map is exactly as big as the image
             map1.setMaxBounds(bounds);
        //map1.fitBounds(bounds);
             map1.on('zoomend', function () {
                 $('img[usemap]').rwdImageMaps();
             });
             map1.touchZoom.enable();
    }
    
</script>

                        </div>
                    </div>
                </div>
                <!-- ========= Map Part End ========== -->
            </div>
            <div class="clearfix"></div>

        </div>

        <script type="text/javascript">

            $(document).ready(function () {
                
                parkFinderArray = [];
                checkMobileView= 'False';
                isMapbox = 'True';

            
                if (checkMobileView.toLowerCase() == "false")
                    $('[data-toggle="tooltip"]').tooltip();

                $('#AdvanceMainSearch_nightdiv').show();
            
                //$('[data-toggle="tooltip"]').tooltipster();
                if ('37.17159' != '0') {
                    myLat = '37.17159';
                    myLang = '-122.22203';
                    $("#hdndefaultLag").val(myLang);
                    $("#hdndefaultLat").val(myLat);
                }

                $('#Hide-FilterBox').click();
                if ('Big Basin Redwoods State Park' != '') {

                    $("#autocomplete1").val('Big Basin Redwoods State Park');
                    $("#autocomplete2").val('Big Basin Redwoods State Park');
                }

                StartLoaders();
                setAdvanceperimeterValues();
                $("#mainContent_Hidscreenresolution").val($(window).width());
                $("#divFilterData").show();
                $('.tooltip1').tooltipster();
                $('.fancybox').fancybox();
                $("#divErrormsg").hide();

                $("#main img").addClass("img-responsive");

                $('#myTab a').click(function (e) {
                    e.preventDefault();
                    $(this).tab('show');
                });
                $('#myTab a[href="#iconkey"]').tab('show'); // Select tab by name
                $('#myTab a:first').tab('show');// Select first tab
                $('#myTab a:last').tab('show'); // Select last tab
                $('#myTab vli:eq(2) a').tab('show'); // Select third tab (0-indexed)
                $('img[usemap]').rwdImageMaps();
                //$("img[id$=imgMapChildNodes]").remove();
                $("#areas").on("click tap", function (evt) {
                    if (evt.target.tagName.toLowerCase() == "area") {
                        return true;
                    }
                });
                $("#div_date_icn_new").click(function () {
                    $(".dateforgrids").focus();
                    //$("#libook").addClass("open");
                    //$(".dateforgrid").focus();
                });

                $("#ddlFacility").change(function () {
               
                    CheckSessionValues();
                    $("#facilityChanged").val("true");

                    $("#hdnFacilityid").val($("#ddlFacility :selected").val());
                    $("#liFacilityName").html($("#ddlFacility :selected").html());

                    var placeIdInner = $("#hdnPlaceid").val();
                    var facilityIdInner = $("#hdnFacilityid").val();
                    SetNightByPlaceIdAndFacilityIdOnUnitGrid(placeIdInner, facilityIdInner);

                    GetUnitGridDataHtmlString();

                });
                //Parkfinder Search Textbox Page Reload Remove
                $("#txtParkfinderSearch").keypress(function (e) {
                    if (e.keyCode == 13 || e.which == 13) {
                        e.preventDefault();
                        //if($("#txtParkfinderSearch").val() == "")
                        //{
                        //    ParkfinderHTMLset(temlHighlighte);
                        //    ParkfinderSelectedvalue();
                        //}
                    
                    }
                });

                // Move to main js bcz we set using html template so code moce there
                //$("#left_openbox ul li").click(function (e) {
                //     
                //    $(this).toggleClass("active", function () {
                //        if ($(this).hasClass('active')) {

                //            //Push
                //            var Id = $(this).attr('id');
                //            $("#openbox #" + Id).addClass("selected");
                //            parkFinderArray.push($(this).find('span').html().split('<')[0].trim());
                //        } else {
                //            //Pop

                //            var Id = $(this).attr('id');
                //            $("#openbox #" + Id).removeClass("selected");
                //            $("#openbox #" + Id).removeClass("active");
                //            var removeItem = $(this).find('span').html().split('<')[0].trim();
                //            parkFinderArray = $.grep(parkFinderArray, function (value) {
                //                return value != removeItem;
                //            });

                //        }

                //        //setSessionValuesOnClick();
                //        // setTimeout(function () { GetMapData(0, true, true); }, 500);

                //    });
                //});

                //$("#openbox ul li").click(function (e) {

                //    $(this).toggleClass("active", function () {
                //        if ($(this).hasClass('selected') || $(this).hasClass('selected')) {
                //            //Push

                //            var Id = $(this).attr('id');
                //            $("#left_openbox #" + Id).addClass("active");
                //            parkFinderArray.push($(this).find('span').html().split('<')[0].trim());
                //        } else {
                //            //Pop

                //            var Id = $(this).attr('id');
                //            $("#left_openbox #" + Id).removeClass("active");
                //            $("#openbox #" + Id).removeClass("active");
                //            $("#openbox #" + Id).removeClass("selected");
                //            var removeItem = $(this).find('span').html();
                //            parkFinderArray = $.grep(parkFinderArray, function (value) {
                //                return value != removeItem;
                //            });

                //        }

                //        setSessionValuesOnClick();
                //        // setTimeout(function () { GetMapData(0, true, true); }, 500);

                //    });
                //});

                $(".datafilter-main").css("display", "block");
           


                $(".switchview").click(function () {
                    // 
                    if ($("#main-right-part").css("display") == "block") {
                        $(".fa-map-o").css("display", "inline-block");
                        $(".glyphicon-list-alt").css("display", "none");
                        //$("#search-placedataholder").css("display", "block");
                        $('#search-placedataholder').each(function () {
                            this.style.setProperty('display', 'block', 'important');
                        });

                        $("#search-placedataholder").css("height", "auto");
                        $("#search-list-arrows,.search-dropdown,.search-view-toggle").css("display", "block");
                        //$("#main-right-part").css("display", "none !important");
                        $('#main-right-part').each(function () {
                            this.style.setProperty('display', 'none', 'important');
                        });

                    } else {

                        $(".glyphicon-list-alt").css("display", "inline-block");
                        $(".fa-map-o").css("display", "none");

                        //$("#search-placedataholder").css("display", "none");
                        $('#search-placedataholder').each(function () {
                            this.style.setProperty('display', 'none', 'important');
                        });
                        $("#search-list-arrows,.search-dropdown,.search-view-toggle").css("display", "none");
                        $("#main-left-part").removeAttr("style");
                        $("#main-left-part").attr("style", "height:auto!important");
                        //$("#main-right-part").css("display", "block !important");
                        $('#main-right-part').each(function () {
                            this.style.setProperty('display', 'block', 'important');
                        });
                        

                    }

                });



            });



        </script>

        <script>
            //Added by:poonam patel
            //Desc: retain scroll position 
            var scrollTop="";
            var drragableId="";
            var dragcontentId="";
            var dragcontentTop="";
            var scroollID="";
            var draggID="";
            var nextcontentDivID="";
            var contentDivID="";
            //End
            function fnNextDays() {
                //Added by:poonam patel
                var  scrolldiv =  $(".mCSB_draggerContainer");
                if(scrolldiv.length >0)
                {
                    for(i=0; i<scrolldiv.length;i++)
                    {
                        if(scrolldiv.length-1 == i)
                        {
                            var DivElemt= scrolldiv[i];
                            var content
                            scrollTop=DivElemt.firstElementChild.offsetTop;
                           
                            scroollID= parseInt(DivElemt.firstElementChild.id.split('_')[1]) ;
                          
                                         
                        }
                    }
                }
                debugger;
                contentDivID="#mCSB_"+ scroollID + "_container";
                dragcontentTop=$(contentDivID).css("top");
                draggID= parseInt(scroollID) +  parseInt(1);
                drragableId= "#mCSB_" + draggID + "_dragger_vertical";
                nextcontentDivID="#mCSB_"+ parseInt(draggID)  + "_container";
                //End 
                hideCloudTip();
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/GetNextDateUnitGrid",
                    data: JSON.stringify({ 'unitsizebool': unitsizebool ,'unitclicsizechangevalue':unitclicsizechangevalue}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (data) {
                        SelectedcheckEvent = "Next";
                        setDatePicker_home('05/20/2018', '11/19/2018');
                        //  $("#mainContent_AdvanceMainSearch_txtArrivalDate").val(data.d.split('-')[0]);
                        $.ajax({
                            type: "POST",
                            url: "AdvanceSearch.aspx/ApplyArrivalDate",
                            data: JSON.stringify({ 'arrivaldate': data.d.split('-')[0].trim() }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: false,
                            success: function (data) {
                                 
                                $('#hdnArrivalDate').val(data.d);
                                $("#AdvanceMainSearch_txtArrivalDate").val(data.d);
                                $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val(data.d);
                                $("#mainContent_txtDateRange").val(data.d);
                            }
                        });


                        $("#facilityChanged").val("true");

                        $("#hdnFacilityid").val($("#ddlFacility :selected").val());
                        GetUnitGridDataHtmlString();

                        // Nights Display 
                        //alert("SelectionColumn :" + SelectionColumn);
                        //alert("SelectionRow :" + SelectionRow);
                        //alert("Nights :" + $('#hdnNights').val());

                        //if (SelectionColumn >= 1 && $('#hdnNights').val() >= 7) {
                        //    alert("1");
                        //     
                        //    var indexs = unitGrid_mapXYCoordToCellIndex(SelectionColumn, SelectionRow);
                        //    var counts = $('#hdnNights').val() - SelectionColumn;
                        //    unitGrid_changeSelectionBounds(indexs, $('#hdnNights').val() - counts);
                        //}
                        //else {
                        //    alert("2");
                        //}
                    },
                    error: function (xhr) {
                    }
                });
                //Added by:poonam patel
                if (drragableId != undefined) {

                    setTimeout(function(){$("#divUnitGridlist .mCSB_container").css("top", dragcontentTop)},3000);
                    setTimeout(function(){$("#divUnitGridlist .mCSB_dragger").css("top", scrollTop)},3000);
                    //debugger;
                    //setTimeout(function(){$(nextcontentDivID).css("top", dragcontentTop)},3000);
                    //setTimeout(function(){$(drragableId).css("top", scrollTop)},3000);
                }
                //End
            }
            function fnPrevDays() {
                //Added by:poonam patel
                var  scrolldiv =  $(".mCSB_draggerContainer");
                if(scrolldiv.length >0)
                {
                    for(i=0; i<scrolldiv.length;i++)
                    {
                        if(scrolldiv.length-1 == i)
                        {
                            var DivElemt= scrolldiv[i];
                            var content
                            scrollTop=DivElemt.firstElementChild.offsetTop;
                           
                            scroollID= parseInt(DivElemt.firstElementChild.id.split('_')[1]) ;
                          
                                         
                        }
                    }
                }
                contentDivID="#mCSB_"+ scroollID + "_container";
                dragcontentTop=$(contentDivID).css("top");
                draggID= parseInt(scroollID) +  parseInt(1);
                drragableId= "#mCSB_" + draggID + "_dragger_vertical";
                nextcontentDivID="#mCSB_"+ draggID + "_container";
                //End
                hideCloudTip();
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/GetPrevDateUnitGrid",
                    data: JSON.stringify({ 'unitsizebool': unitsizebool,'unitclicsizechangevalue':unitclicsizechangevalue }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (data) {

                        SelectedcheckEvent = "Prev";
                        setDatePicker_home('05/20/2018', '11/19/2018');
                        //  $("#mainContent_AdvanceMainSearch_txtArrivalDate").val(data.d.split('-')[0]);
                        $.ajax({
                            type: "POST",
                            url: "AdvanceSearch.aspx/ApplyArrivalDate",
                            data: JSON.stringify({ 'arrivaldate': data.d.split('-')[0].trim() }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: false,
                            success: function (data) {

                                $('#hdnArrivalDate').val(data.d);
                                $("#AdvanceMainSearch_txtArrivalDate").val(data.d);
                                $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val(data.d);
                                $("#mainContent_txtDateRange").val(data.d);
                            }
                        });

                        $("#facilityChanged").val("true");

                        $("#hdnFacilityid").val($("#ddlFacility :selected").val());
                        GetUnitGridDataHtmlString();


                    },
                    error: function (xhr) {
                    }
                });
                //Added by:poonam patel
                if (drragableId != undefined) {
                    setTimeout(function(){$("#divUnitGridlist .mCSB_container").css("top", dragcontentTop)},3000);
                    setTimeout(function(){$("#divUnitGridlist .mCSB_dragger").css("top", scrollTop)},3000);
                }
                //End
            }

            function fnCheckFunctionlevel() {
                PlaceHide();
                GooglePlaceHide();
                ScrollView();
                $("#divFilterData").hide();
                $("#divPlaceList").removeClass();
                $("#divPlaceUnit").removeClass();
                $("#divMapdata").removeClass();
                $("#divSorting").removeClass();

                //$("#divSorting").addClass("col-md-7 pdr0 table_spaecial table_fix_width");
                //$("#divPlaceList").addClass("col-md-7 pdr0 table_spaecial table_fix_width");
                //$("#divPlaceUnit").addClass("col-md-7 pdr0 table_spaecial table_fix_width");
                //$("#divMapdata").addClass("pdl0 map_special map_fix_width");
                $("#hdnCheckLevel").val(2);
                $("#divPlace").hide();
                $("#divBackPark").show();
                $("#divMainPark").hide();
                $("#divHomeEvent").show();
                $("#divHome").hide();
                $("#divFacilitylist").show();
                $("#divSpaceinFacility").addClass("spacer10");
                $("#divBackButton").show();

                //$("#divAdavanceparameter").hide();
                //$("#divAdavanceparameterButton").hide();
                $("#divParkwithSort").hide();
            }
            var cnt = 0;

            function GetPlaceDataNew(jsonPlaceInfoData) {
            
                var placeData = jsonPlaceInfoData;
                debugger;
                //Added by :Poonam Patel  :Desc: direct open Facilities page for park ,Date: 27/03/2018
                //if ($("#hdnSearchType").val() == "Park") {
                //    if(placeData == 0)
                //    {
                //    }
                //    else
                //    {
                //        $("#hdnPlaceid").val(placeData[0].PlaceId);
                //        $("#hdnparksize").val(placeData[0].Parksize);
                //    }
                //}
                //End
                var $Container = $('#divPlacedata');
                //$('#divPlacedata').html("");
                $('#divPlacedata').html("loading..");

                if ($("#hiddenPlaceLevel").val() == "") {
                    // 
                    $('#divPlacedata').setTemplateURL('../themes/California/Template/AdvancePlaceData.html', null, { filter_data: false });
                    $('#divPlacedata').processTemplate(placeData);

                    $(".contents,#contentfr").mCustomScrollbar({
                        advanced: {
                            updateOnContentResize: false,
                            updateOnBrowserResize: false
                        },
                        autoHideScrollbar: true,
                        theme: "light-thin"
                    });

                    $(".pop").popover({
                        trigger: "manual", html: true, animation: false,
                        content: function () {
                            return $(this).parents('.divPlacelistdata-shodow').next('.tContent').html();
                        }
                    })
                    .on("mouseenter", function () {

                        var _this = this;
                        $(this).popover("show");
                        $(".popover").mCustomScrollbar({ theme: "minimal-dark" });
                        $(".popover").on("mouseleave", function () {
                            $(_this).popover('hide');
                        });
                    }).on("mouseleave", function () {
                        var _this = this;
                        setTimeout(function () {
                            if (!$(".popover:hover").length) {
                                $(_this).popover("hide");
                            }
                        }, 300);
                    });

                    $("#divPlacelistdata").show();
                    $("#divPlacefacilitylistdata").hide();

                    //$Container.prepend(old);

                } else {

                    $('#divPlacedata').setTemplateURL('../themes/California/Template/AdvancePlaceData.html', null, { filter_data: false });
                    $('#divPlacedata').processTemplate(placeData);
                }
                
                
                $('[data-toggle="tooltip"]').tooltip();
                $('.tooltip1').tooltipster();
                $('[data-toggle="tooltip"]').tooltip();
                
            
                mapHover();
                $("#divFilterData").show();
                    

                //$('.placedata-title-main').click(function (e) {
                //    $(this).next('.divPlacelistdata-list-options').slideToggle();
                //});
                //$('.divPlacelistdata-list .placedata-title-main .placedata-title-left').click(function () {
                //    $('.divPlacelistdata-list-options').slideToggle();
                //});

                $('.divPlacelistdata-list .placedata-title-main .placedata-title-left').click(function () {
                    //alert($(this).parent().parent().parent().parent().attr('id'));
                    //alert($(this).parent().parent().parent().attr('class'));
                    //var id=$(this).parent().parent().parent().parent().attr('id');
                    //// 
                    $(this).parent().parent().parent('div.placedata-title-main').next('div.divPlacelistdata-list-options').slideToggle();
                });

                // $('.placedata-title').click(function () {
                //   $(this +'.divPlacelistdata-list-options').slideToggle();
                // });

                $('.collapse').on('shown.bs.collapse', function () {
                    $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
                }).on('hidden.bs.collapse', function () {
                    $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
                });
               
            
                if(map != undefined){
                    if (map.getZoom() > 11) {
                        $('#list-view').click();
                        $('.divPlacelistdata-list').children('.divPlacelistdata-list-options').slideDown();
                        $("#aUparrow").show();
                        $("#aDownarrow").hide();
                    }
                    else {
                        $("#aDownarrow").hide();
                        $('#thumbnail-view').click();

                    }
                }
            
                $(".placedata-img-hvr").hide();
            
                $('#Hide-FilterBox').click();
                FavImageChange();
                PlaceShow();
                GooglePlaceShow();

                $("#hdnCheckLevel").val(1);

                $("#divHomeEvent").hide();
                $("#divHome").show();
             
                $("#divSpaceinFacility").removeClass();
            
                if ($("#hiddenPlaceLevel").val() == "Facility") {
                    //if ($("#ddlLeft_Categories").val()!= 0) 
                    //    boolAdvanceSearch=true;

                
                    fnCheckFunctionlevel()
                    $("#divFilterData").hide();
                
                    // $("#divFilterDrag").hide();
                
                    $(".new_filter_bar_box").hide();
                    $(".top_new_part_brd_btm").hide();
                    $(".top_new_first_data_box").hide();


                    $("#divToggle_serch_white").hide();
                    $("#divLeftParkFinderset").hide();
                    $("#divLeftMenu").removeClass();
                    $("#divLeftMenu").addClass("slide_one slide_two");
                    $(".gridTopnew").show();
                    $("#ajay").show();
                    $(".btn_new_go #btnTop_search").hide();
               
              
                } else {
               
               
                    // $("#divFilterDrag").show();
                    $(".btn_new_go #btnTop_search").show();
                    $(".gridTopnew").show();
                    $(".new_filter_bar_box").show();
                    $(".top_new_part_brd_btm").show();
                    $(".top_new_first_data_box").show();
                    $("#ajay").hide();
                    //resizeWindow();
                }

                

                if ($("#mainContent_hdnAllhideControl").val() != "") {
                    AllControlHide();
                }
            

                //setTimeout(function () { PlaceDataHeightforAdvance(); }, 1500);
                if (Makemytrip == true) {
                    CheckTripinSession();
                }
                //if image not found 
                ////// 
                //$(".placedata-img").each(function (i) {
                //    var urlbase = baseurlmain;

                //    if (isCDNUsed.toLowerCase() == 'true') {
                //        urlbase = cdnurl;
                //    }
                //    $(this).find("img").attr('src', $(this).find("img").attr('data-src').replace('../', urlbase + '/'));
                //    $(this).find("img").error(function () {
                //        $(this).attr("src", urlbase + '/images/no_image.gif');
                //    });
                //});
                // 
                if (isFilterClick) {
                    if ($("#chkIsPremium").is(':checked')) {
                    }
                    else
                        ReplaceFilterIcons();
                }

                if ($(".switchview").is(":visible")) {
                    // 

                    if ($(".fa-map-o").is(":visible")) {


                        $('#search-placedataholder').each(function () {
                            this.style.setProperty('display', 'block', '!important');
                        });
                        $("#search-placedataholder").css("height", "auto");

                        $('#main-right-part').each(function () {
                            this.style.setProperty('display', 'none', 'important');
                        });
                        $("#search-list-arrows,.search-dropdown,.search-view-toggle").css("display", "block");
                    } else {
                        $("#search-placedataholder").css("display", "none !important");

                        $("#main-left-part").removeAttr("style");
                        $("#main-left-part").attr("style", "height:auto!important");
                        $("#search-list-arrows,.search-dropdown,.search-view-toggle").css("display", "none");
                        $("#main-right-part").css("display", "block !important");
                    }

                }

                  
                $(".hvr_data_btn").hide();
                $(".placedata-title-left .clsunfavourite").hide();
                    
                EndLoaders();
            
            
                fnDisplaySearchparameter();
                resizeWindow();
                $("#PlName").html($("#mainContent_ddlPlace :selected").html());
                Changesplacemessage='some of your filter selections may not be available in the new search area.';
            }

            //sort by 0:By default
            //sort by 1:By Availibility
            //sort by 2:By NonAvailibility
            function SortGridData(sortby) {
                debugger;
                StartLoaders();

                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SortGridData",
                    data: JSON.stringify({ 'sortby': sortby }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        debugger;
                        var dataAll = data.d;
                        var placeData = dataAll.ListJsonPlaceInfos;

                        // if Session value is blank redirect 
                        if (dataAll.ListJsonPlaceInfos.length == 0) {
                            window.location.href = '../Facilities/AdvanceSearch.aspx';
                            return false;
                        }
                        var $Container = $('#divPlacedata');
                        $('#divPlacedata').html("");
                        //  var old = $Container.html();
                        $('#divPlacedata').html("loading..");
                        $('#divPlacedata').setTemplateURL('../themes/California/Template/AdvancePlaceData.html', null, { filter_data: false });
                        $('#divPlacedata').processTemplate(placeData);

                        //$('.divPlacelistdata-list').click(function (e) {
                        //    $(this).children('.divPlacelistdata-list-options').slideToggle();
                        //});

                        $('.divPlacelistdata-list .placedata-title-main .placedata-title-left').click(function () {
                            $(this).parent('div.placedata-title-main').next('div.divPlacelistdata-list-options').slideToggle();
                        });
                     
                        $(".placedata-img-hvr").hide();
                    
                        $(".contents,#contentfr").mCustomScrollbar({
                            advanced: {
                                updateOnContentResize: true,
                                updateOnBrowserResize: true
                            },
                            autoHideScrollbar: true,
                            theme: "light-thin"
                        });
                        $("#divPlacelistdata").show();
                        $("#divPlacefacilitylistdata").hide();
                        //   $Container.prepend(old);
                        //$(".group1").colorbox({
                        //    rel: 'group1',
                        //    maxWidth: "95%",
                        //    maxHeight: "95%"
                        //});
                        $('.fancybox').fancybox();
                        //$(".inline").colorbox({ inline: true, width: "50%" });
                        mapHover();
                        $(".fulls").hide();

                        $("#legend").hide();
                        $(".sorts").show();
                   
                        $('.tooltip1').tooltipster();

                        EndLoaders();
                    
                        GooglePlacemaster();
                        if (checkMobileView.toLowerCase() == "false")
                            $('[data-toggle="tooltip"]').tooltip();
                        $('.tooltip1').tooltipster();
                    
                        if (map.getZoom() > 11) {
                            $('#list-view').click();

                            //$('.divPlacelistdata-list').children('.divPlacelistdata-list-options').slideDown();
                            $('.divPlacelistdata-list .placedata-title-main .placedata-title-left').click(function () {
                                $(this).parent('div.placedata-title-main').next('div.divPlacelistdata-list-options').slideToggle();
                            });

                            $("#aUparrow").show();
                            $("#aDownarrow").hide();
                        }
                        else {
                            $('#thumbnail-view').click();

                        }
                    },
                    error: function (msg) {
                        // alert(JSON.stringify(msg));

                        throw new Error(msg);
                    }
                }).done(function () {
                    FavImageChange();
                    if (Makemytrip == false) {
                        $(".new_plus_icn").hide();
                        
                        $("#aBulidaTrip").hide();
                    }
                    
                    
                    $(".hvr_data_btn").hide();
                    $(".placedata-title-left .clsunfavourite").hide();
                    
                    if (isFilterClick) {

                        ReplaceFilterIcons();
                    }
                    $('#zoombar').off("click");
                    $('#zoombar').click(function (e) {
                        var tops = e.pageY;
                        if (tops <= 375 && tops >= 350) {
                            map.setZoom(7);
                        }
                        else if (tops <= 351 && tops >= 300) {
                            map.setZoom(9);
                        }
                        else if (tops <= 301 && tops >= 265) {
                            map.setZoom(11);
                        }
                        else if (tops <= 264 && tops >= 215) {
                            map.setZoom(12);
                        }
                        else if (tops <= 214 && tops >= 175) {
                            map.setZoom(13);
                        }
                        else if (tops <= 174 && tops >= 150) {
                            map.setZoom(14);
                        }

                    });
                })
            }

            function SetNightByPlaceIdAndFacilityIdOnUnitGrid(placeId, facilityId) {
            
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SetNightByPlaceIdAndFacilityIdOnUnitGrid",
                    data: JSON.stringify({ 'placeId': placeId, 'facilityId': facilityId }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                         
                        var result = data.d;
                        if(result != null && result.ExceptionMessage == "")
                        {
                            var minNight = result.MinimumStay;
                            var maxNight = result.MaximumStay;
                            var selectedNight = result.SelectedNight;
                            if($('#ddlTopNights') != null)
                            {
                                $('#ddlTopNights').empty();

                                for (var i = minNight; i <= maxNight; i++) 
                                {
                                    if(i==1)
                                    {
                                        $('#ddlTopNights').append($("<option></option>").val(i).html(i + " Night"));
                                    }
                                    else
                                    {
                                        $('#ddlTopNights').append($("<option></option>").val(i).html(i + " Nights"));
                                    }
                                }

                                if(parseInt(selectedNight) != parseInt($('#hdnNights').val()))
                                {
                                    $('#hdnNights').val(selectedNight);
                                    $(".divFacilityAlert").show();
                                    setTimeout($("#divFacilityAlert").fadeTo(4000, 1000).slideUp(1000, function () {
                                        $("#divFacilityAlert").slideUp(1000);
                                    }), 10000);
                                }

                                if($('#hdnNights').val() != "0")
                                {
                                    $("#ddlTopNights").val($('#hdnNights').val());
                               
                                }
                            }
                        
                            if($('#Grid_ddlNights') != null)
                            {
                                $('#Grid_ddlNights').empty();

                                for (var i = minNight; i <= maxNight; i++) 
                                {
                                    if(i==1)
                                    {
                                        $('#Grid_ddlNights').append($("<option></option>").val(i).html(i + " Night"));
                                    }
                                    else
                                    {
                                        $('#Grid_ddlNights').append($("<option></option>").val(i).html(i + " Nights"));
                                    }
                                }
                                if(parseInt(selectedNight) != parseInt($('#hdnNights').val()))
                                {
                                    $('#hdnNights').val(selectedNight);
                                }
                                if($('#hdnNights').val() != "0")
                                {
                                
                                    $("#Grid_ddlNights").val($('#hdnNights').val());
                                }
                            }
                        }

                    },
                    error: function (e) {
                        window.location.href = '../Default.aspx';
                    }
                });

            }
            function SetPlaceWiseDatechange() {
             
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SetPlacewiseDatechange",
                    data: JSON.stringify({ 'Placechangedate': $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val() }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                       
                        var dt = data.d.split(' ')[0].split('-');
                        
                        $('#hdnArrivalDate').val(dt[0] + "/" + dt[1] + "/" + dt[2]);
                        
                         
                        $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val($('#hdnArrivalDate').val());
                        $("#AdvanceMainSearch_txtArrivalDate").val($('#hdnArrivalDate').val());
                        $("#mainContent_txtDateRange").val($('#hdnArrivalDate').val());
                    },
                    error: function (e) {
                        window.location.href = '../Default.aspx';
                    }
                });

            }
            function GetUnitGridDataHtmlString() {
                //setTimeout(function () { StartLoaders(); }, 1000);
            
                StartLoaders();
                $(".plname").html($("#mainContent_ddlPlace :selected").html());
                var MaximumStayforGrid = parseInt('');
                if ($("#facilityChanged").val() == "true") {
                    var screenresolution;
                    if (parseInt('768') > 0) {
                        screenresolution = parseInt($("#").val()) >= parseInt('768');
                    }
               
                    $.ajax({
                        type: "POST",
                        url: "AdvanceSearch.aspx/GetUnitGridDataHtmlString",
                        data: JSON.stringify({ 'FacilityId': $("#hdnFacilityid").val(), 'PlaceId': $("#hdnPlaceid").val(), 'MaximumDates': '' , 'IsTablet': screenresolution, 'MaximumStayforGrid': MaximumStayforGrid }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: false,
                        success: function (data) {

                            $("#mainContent_ugReservationGrid_tableGridParent").html(data.d);


                            //if (data.d.indexOf("<tbody>") != -1) {
                            //    $("#mainContent_ugReservationGrid_tableGridParent").html(data.d);
                            //} else {
                            //    $("#mainContent_ugReservationGrid_tableGridParent").html("No Result Found");
                            //}
                            $('.tooltip1').tooltipster();
                            $(".contents,#contentfr").mCustomScrollbar({
                                advanced: {
                                    updateOnContentResize: true,
                                    updateOnBrowserResize: true
                                },
                                autoHideScrollbar: true,
                                theme: "light-thin"
                            });
                            fnDisplaySearchparameter();
                            // 
                            //$("#ui-datepicker-div").remove();
                            setDatePicker_home('05/20/2018', '11/19/2018');

                        
                            GetUnitMapDataHtmlString();
                       

                            if (BoolDraggablevent == true) {
                                $("#divUnitGridlist").removeClass("second_new_table two_new_table two_new_table_draggabl");
                                $("#divUnitGridlist").addClass("two_new_table two_new_table_draggabl");
                            }

                            if (SelectedcheckEvent == "Next") {
                             
                                mycal = $('#hdnNights').val() - Selectedcell;
                                if (mycal >= 1 && Selectedcell != 0 && myRemaining == 0) {
                                    //alert("1");
                                    // 
                                    //var counts = $('#hdnNights').val() - SelectionColumn - 1;
                                    var indexs = SelectionRow * 7;
                                    unitGrid_changeSelectionBounds(indexs, mycal);
                                    //selectionCount = $('#hdnNights').val();
                                    if (mycal > 7) {
                                        myRemaining = mycal - 7;
                                    }
                                    else {
                                        Selectedcell = 0;
                                        SelectedcheckEventvalues = true;
                                    }
                                }
                                else if (myRemaining != 0) {
                                    mycheckEventvalues = true;
                                    var indexs = SelectionRow * 7;
                                    unitGrid_changeSelectionBounds(indexs, myRemaining);
                                    Selectedcell = 0;
                                    SelectedcheckEventvalues = true;
                                    myRemaining = 0;
                                }
                                else {
                                    SelectedcheckEventvalues = false;
                                    //alert("2");
                                }
                            }
                            if (SelectedcheckEvent == "Prev") {
                          
                                if (SelectedcheckEventvalues == true) {
                                    var indexs;
                                    var counts = 7 - SelectionColumn;
                                    if (SelectionRow == 0) {
                                        indexs = SelectionColumn;
                                    }
                                    else {
                                        indexs = SelectionRow * 7 + SelectionColumn;
                                    }
                                    if (mycheckEventvalues == true) {
                                        unitGrid_changeSelectionBounds(SelectionRow * 7, 7);
                                        mycheckEventvalues = false;
                                    }
                                    else {
                                        unitGrid_changeSelectionBounds(indexs, counts);
                                        selectionCount = $('#hdnNights').val();
                                        SelectedcheckEventvalues = false;
                                    }

                                }
                                //else { alert("2"); }
                            }
                            SelectedcheckEvent = "";
                            $(".leaflet-control-zoom-out").hide();
                            $(".leaflet-control-zoom-in").hide();

                            if(unitsizebool){
                                unitgridlargesize();
                            }                            
                            else{
                                unitgridsmallsize();  
                            }
                            

                        },
                        error: function (e) {
                            window.location.href = '../Default.aspx';
                        }

                        //  EndLoaders();


                    });


                }
            }
            function GetUnitGridDataHtmlStringPaging(pageno,startindex,endindex) {
               
                //StartLoaders();
                $(".plname").html($("#mainContent_ddlPlace :selected").html());
                var MaximumStayforGrid = parseInt('');
                var screenresolution;
                if (parseInt('768') > 0) {
                    screenresolution = parseInt($("#").val()) >= parseInt('768');
                }
               
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/GetUnitGridDataHtmlStringPaging",
                    data: JSON.stringify({ 'FacilityId': $("#hdnFacilityid").val(), 'PlaceId': $("#hdnPlaceid").val(), 'MaximumDates': '' , 'IsTablet': screenresolution, 'MaximumStayforGrid': MaximumStayforGrid,'pageno':pageno ,'startindex':startindex,'endindex':endindex}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {

                        $("#mainContent_ugReservationGrid_tableGridParent").html(data.d);

                        $('.tooltip1').tooltipster();
                        $(".contents,#contentfr").mCustomScrollbar({
                            advanced: {
                                updateOnContentResize: true,
                                updateOnBrowserResize: true
                            },
                            autoHideScrollbar: true,
                            theme: "light-thin"
                        });

                        if (BoolDraggablevent == true) {
                            $("#divUnitGridlist").removeClass("second_new_table two_new_table two_new_table_draggabl");
                            $("#divUnitGridlist").addClass("two_new_table two_new_table_draggabl");
                        }
                        SelectedcheckEvent = "";
                        $(".leaflet-control-zoom-out").hide();
                        $(".leaflet-control-zoom-in").hide();

                        if(unitsizebool){
                            unitgridlargesize();
                        }                            
                        else{
                            unitgridsmallsize();  
                        }
                        $(".pagination li").removeClass();
                        $("#paginationli_" + pageno).addClass("active");
                    },
                    error: function (e) {
                        window.location.href = '../Default.aspx';
                    }                        
                });                
            }
            function GetUnitMapDataHtmlString() {

                if ($("#facilityChanged").val() == "true") {

                    $.ajax({
                        type: "POST",
                        url: "AdvanceSearch.aspx/GetUnitMapHtmlString",
                        data: JSON.stringify({ 'FacilityId': $("#hdnFacilityid").val(), 'Nights': 1 }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: false,
                        success: function (data) {
                        
                            $("#mainContent_divfacilitymap").html(data.d);
                            $(".leaflet-control-zoom-out").hide();
                            $(".leaflet-control-zoom-in").hide();
                            EndLoaders();
                            //  EndLoaders();

                        },
                        error: function (e) {
                            window.location.href = '../Default.aspx';
                        }
                    });

                }
            }


            function viewReserve(facilityid, placeid, category) {

                category = category.trim();

                if (category.toLowerCase() == "campgrounds" || category.toLowerCase() == "day use" || category.toLowerCase() == "trails") {
                    if (FacilityZoomLevelMaitain == false) {
                        $("#hdnNodeclick").val("0");
                        $("#hdnFacilityid").val(facilityid.toString());
                        $("#hdnPlaceid").val(placeid.toString());
                        $("#hiddenPlaceLevel").val("Facility");

                        $("#btngetFacilitiess").click();
                    }
                    else {
                        FacilitySessionClear();
                        ContainFacilityClick(placeid);
                    }

                }
                else if (category.toLowerCase() == "permits") {
                    var urlname = baseurlmain + '/Memberships/AdvanceCustomerMemberships.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    window.location.href = urlname;
                    OpenLoginBox(iscustomernull, true, urlname, '');

                }
                else if (category.toLowerCase() == "tours") {

                    var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();

                    window.location.href = urlname;
                }
            }



            function ViewReservedirectFacilityLevel(facilityid, placeid, category, facilitytype) {
                debugger;
                category = category.trim();
                if (category.toLowerCase() == "campgrounds-unnumbered" || category.toLowerCase() == "campgrounds" || category.toLowerCase() == "day use" || category.toLowerCase() == "trails" || category.toLowerCase() == "lodging" || category.toLowerCase() == "cabins-other lodging" || category.toLowerCase() == "group camping") {
                    $("#hdnNodeclick").val("0");
                    $("#hdnFacilityType").val(facilitytype.toString());
                    $("#hdnFacilityid").val(facilityid.toString());
                    $("#hdnPlaceid").val(placeid.toString());
                    $("#hiddenPlaceLevel").val("Facility");
                    if(facilitytype == 1 || $("#hiddenPlaceLevel").val() == "Facility"){
                        $("#btngetFacilitiess").click();
                    }
                    else if(facilitytype == 2)
                    {
                        //alert(facilitytype); if facility type is un numbered then 
                        $.when($.ajax({
                            type:"POST",
                            url: "AdvanceSearch.aspx/GetUnitAvailabilityResult",
                            data: JSON.stringify({ 'placeId': placeid, 'facilityId': facilityid, 'night': $('#hdnNights').val() }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                            
                                var resultUnitResultView = data.d;
                                if(resultUnitResultView.IsUnitAvailable == false){
                                    $("#messageBoxLightbox2").css("z-index", 1300);
                                    $("#messageBoxLightbox2 .modal-body").html(resultUnitResultView.MessagePreview);
                                    $("#messageBoxLightbox2 .modal-title").html("Error");
                                    $('#messageBoxLightbox2').modal();
                                }
                                else
                                {
                                    $("#btngetFacilitiess").click();
                                }

                            }
                        }).done(function () {

                        }));
                    }

                }
                else if (category.toLowerCase() == "permits") {
                    var urlname = baseurlmain + '/Memberships/AdvanceCustomerMemberships.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();

                    OpenLoginBox(iscustomernull, true, urlname, '');
                }
                else if (category.toLowerCase() == "tours") {
                    var urlname = baseurlmain + '/Activities/AdvanceTourAndActivities.aspx?placeid=' + placeid + '&lat=' + $("#hdnLat").val() + '&long=' + $("#hdnLag").val();
                    window.location.href = urlname;
                }
            }


            function CustomerFavourite(placeId, facilityId, obj, types) {
                //alert($(obj).attr("id"));
             
                if ($(obj).hasClass("selected red_heart_icn") == true || $(obj).hasClass("selected red_heart_icn clsunfavourite") == true ||  $(obj).hasClass("selected heart_data_icon") == true) {
                    RemoveFavourite(placeId, facilityId, obj, types);
                }
                else {
                    AddFavourite(placeId, facilityId, obj, types);
                }
            }

            function AddFavourite(placeId, facilityId, obj, types) {
             
                var clientId = $("#hdClient").val();
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/AddFavourite",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ 'placeId': placeId, 'clientId': clientId, 'facilityId': facilityId }),
                    dataType: "json",
                    success: function (response) {
                        if (response.d > 0) {
                            //var curclass = $(obj).attr('class');
                            //curclass = curclass.replace('selected heart_data_icon', 'heart_data_icon');
                            //$(obj).parent().attr("class", "color_heart");
                         
                            if (types == 'A') {
                                $("#F" + placeId).removeClass();
                                $("#F" + placeId).attr('class', 'selected heart_data_icon clsUnfavourite');
                                $("#" + types + placeId).attr('class', 'selected heart_data_icon');
                            }
                            else if (types == 'F') {
                                $("#" + types + placeId).removeClass();
                                $("#" + types + placeId).attr('class', 'selected red_heart_icn clsUnfavourite');
                                $("#A" + placeId).attr('class', 'selected red_heart_icn');
                            }
                            //$(obj).find('img').attr('src', '../themes/California/heart_h_data_icon.png');
                            }
                        },
                        error: function (e) {
                            window.location.href = '../Default.aspx';
                        }
                    });
                }


                function updiv(placeid) {

                    var parent = ("aAttr" + placeid);
                    parent.insertBefore(parent.prev());
                }

                function Downdiv(placeid) {

                    var a = $(this).parent.attr["class"];
                    parent.insertBefore(parent.prev());
                }


                function RemoveFavourite(placeId, facilityId, obj, types) {
            
                    var clientId = $("#hdClient").val();
                    $.ajax({
                        type: "POST",
                        url: "AdvanceSearch.aspx/RemoveFavourite",
                        contentType: "application/json; charset=utf-8",
                        data: "{'placeId':'" + placeId + "','clientId':'" + clientId + "', 'facilityId':'" + facilityId + "'}",
                        dataType: "json",
                        success: function (response) {
                            if (response.d == true) {
                      
                                if (types == 'A') {
                                    $("#F" + placeId).removeClass();
                                    $("#A" + placeId).removeClass();
                                    $("#A" + placeId).attr('class', 'heart_data_icon clsUnfavourite');
                                    $("#F" + placeId).attr('class', 'red_heart_icn clsUnfavourite');
                                    //$("#" + types + placeId).attr('class', 'red_heart_icn');
                                }
                                else if (types == 'F') {
                                    $("#" + types + placeId).removeClass();
                                    $("#" + types + placeId).attr('class', 'gray_heart_icn clsUnfavourite');
                                    $("#A" + placeId).attr('class', 'gray_heart_icn');
                                }
                            }
                        },
                        error: function (e) {
                            window.location.href = '../Default.aspx';
                        }
                    });
                }

                function viewContinue(placeid) {
                    $("#mainContent_hdnAllhideControl").val("");
                    $("#mainContent_hdnAllhideControl").val("");
                    $("#hdnNodeclick").val("0");
                    $("#hdnPlaceid").val(placeid.toString());
                    $("#hiddenPlaceLevel").val("Place");
                    $("#btngetFacilitiess").click();
                    //$("#mainContent_btngetFacilities").click();
                }
                $('#mainContent_ddlPlace').change(function () {
                $("#hdnNodeclick").val("0");
                viewContinue($('#mainContent_ddlPlace').val());
            });


        </script>

        <script>
            var myInput = document.getElementById('txtGoogleautocomplete');
            function getPlacename() {
                $("#hdnautocomplete").val($("#txtGoogleautocomplete").val());
                if ($("#hdnLat").val() == '' || $("#hdnLat").val() == '0') {
                    // alert("Please enter valid email address");
                    $("#messageBoxLightbox2 .modal-body").html("Please enter valid address");
                    $("#messageBoxLightbox2 #mainmessage").html("Alert");
                    $('#messageBoxLightbox2').modal();
                    $("#txtGoogleautocomplete").focus();
                    $("#txtGoogleautocomplete").val('');
                    clearInput(myInput);
                    return false;
                }
            }

            function clearInput(myInput) {
                window.google.maps.event.trigger(myInput, 'focus');
                myInput.value = '';
                window.google.maps.event.trigger(myInput, 'keydown', { keyCode: 46 });
                window.google.maps.event.trigger(myInput, 'keyup', { keyCode: 46 });
                window.google.maps.event.trigger(myInput, 'blur');
            }

            function ScrollView() {
                var el = document.getElementById('parkdata');
                if (el != null) {
                    el.scrollIntoView();
                    el.focus();
                }
            }

            $("#btn_Reset").click(function () {

                $('#divPlacedata').html("");
                $("#image-map").attr("class", "");
                // $("#image-map").attr("class", "leaflet-container leaflet-fade-anim");
                $.when($.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/ResetSessionClears",
                    data: JSON.stringify({}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        alrt(data);
                    }
                })).done(function () {

                    StartLoaders();

                    $("#txtGoogleautocomplete").val("");
                    $("#hiddenPlaceLevel").val("");
                    //$("#divPlaceList").css({ "top": "204px" });
                    //$("#divMapdata").css({ "top": "204px" });
                    $("#divBreadCumb").hide();
                    $("#divFacility").hide();
                    $("#hdnFacilityid").val("0");
                    $("#hdnNodeclick").val("0");
                    $("#hdnPlaceid").val("0");
                    $("#hiddenPlaceLevel").val("");
                    $("#mainContent_hdnAllhideControl").val("");
                    ClearAdvanceControl();
                    ClearMainControl();
                    $('#divPlacedata').html("");
                    $("#divErrormsg").css("display", "none");
                    $("#hdnLat").val("");
                    $("#hdnLag").val("");
                    $("#hiddenPlaceLevel").val("");
                    $("#hdnPlaceid").val("0");
                    $("#hdnCenterlat").val();
                    $("#hdnCenterlong").val();
                    $("#hdnAutocompleteCheckLevel").val("");
                    initialize();

                    $("#mainContent_divUnitGrid").css("display", "none");
                    $("#mainContent_divUnitHeader").css("display", "none");
                    $("#mainContent_divPlaceDatas").css("display", "block");
                    $("#mainContent_divgoogleplaces").css("display", "block");
                    $("#mainContent_divfacilitymap").css("display", "none");
                });

            });
            $("#btnLeft_advancesearch").click(function () {
                isFilterbtnClickOnly = true;
                $("#btn_advancesearch").click();
                $("#divLeftMenu").hide();
            });
            $("#btn_advancesearch").click(function () {
                //var rentalvalue1 = $("#hdnSelectRentalType").val();
                var rentalvalue1 = $("#ddlLeft_Categories").val();

                var IsPremium=false;

                if($("#chkIsPremium").is(':checked'))
                    IsPremium=true; // checked
                else
                    IsPremium=false;
                // if park finder selection remove after selection clear data
                if($('#spanPlacecancel').is(':visible') && parkFinderArray.length == 0)
                {
                    ClearforParkfinder();
                    return false;
                }
                // if rental type remove after selection clear data
                if($('#spanPlaceRentalcancel').is(':visible') && ($("#ddlLeft_Categories").val() == "0" || $("#ddlLeft_Categories").val() == "" ))
                {
                    ClearforRentalType();
                    return false;
                }

                //$("#ddlLeft_Categories").val()
                if ($("#hdnCheckLevel").val() == "1") {
                    if (parkFinderArray.length == 0 && (rentalvalue1 == "0" || rentalvalue1 == "") && !IsPremium) {
                        //alert("2");
                   
                        $("#divmodalbody").html("Select any filter option.");
                        $("#myModalLabel").html("Alert");
                        $('#messageBoxLightbox2').modal();
                        $('.h_right_menu_toggel').parent('li').removeClass('open');
                    
                        return false;

                    }else
                    {
                        isFilterClick = true;
                    }
                }
                else if ($("#hdnCheckLevel").val() == "2") {
                    if(rentalvalue1 == "0" || rentalvalue1 == "")
                    {
                        isFilterClick = false;
                    }
                    else
                    {
                        isFilterClick = true;
                    }
                }
                if ($("#hiddenPlaceLevel").val() == "Facility")
                {
                    $("#hdnSelectRentalType").val($("#ddlLeft_Categories").val());
                }
                boolChkAccessible = true;
                ChnageDragandZoom = true;
               
                
                if ($("#hdnCheckLevel").val() == "1") {
                    if ($("#hiddenPlaceLevel").val() != "") {
                        $("#hiddenPlaceLevel").val("Place");
                    }
                    setSessionValuesOnClick();
                    FilterSearch();
                } else if ($("#hdnCheckLevel").val() == "2") {
                    //alert('');

                    setSessionValues();
                }
                Leftmenu = false;
                $('.h_right_menu_toggel').parent('li').removeClass('open');
                //setTimeout(function () { PlaceDataHeightforAdvance(); }, 1000);

            });

            function FilterSearch() {

                StartLoaders();

                $.when($.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SessionClears",
                    data: JSON.stringify({ 'arrivaldate': $('#hdnArrivalDate').val() }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                    }
                })).done(function () {

                    $("#mainContent_hdnAllhideControl").val("");
                    //$('#divPlacedata').html("");
                    $("#divErrormsg").css("display", "none");
                    $("#hdnPlaceCategoryId").val("");
                    $("#mainContent_divUnitGrid").css("display", "none");
                    $("#mainContent_divUnitHeader").css("display", "none");
                    $("#mainContent_divPlaceDatas").css("display", "block");
                    $("#mainContent_divgoogleplaces").css("display", "block");
                    $("#mainContent_divfacilitymap").css("display", "none");
                
                    if(boolBacktohomrPointset==false && BackOnlyPlaceLevel==false)
                    {
                    
                        GetAnswer(true);
                    }
                    else
                        BackOnlyPlaceLevel=false;

                });

            }
            $("#btn_search,#btn_go,#GridSearch").click(function (e) {

                if ($("#hdnLat").val() == "") {
                    $("#messageBoxLightbox2 .modal-body").html("Place not Found");
                    $("#messageBoxLightbox2 .modal-title").html("Error");
                    $('#messageBoxLightbox2').modal();
                    e.preventDefault();
                    return false;
                } else {
                    // if (window.location.href.toLowerCase().indexOf('advancesearch') != -1 ) {
                 
                    if (window.location.href.toLowerCase().indexOf('advancesearch') != -1 && $("#ddlFacilityCategory").val().toLowerCase() == '1') {
                        if (parkFinderArray.length > 1 || $("#hdnSelectCampingEquip").val() != "0" || $("#hdnSelectCampingEquip").val() != "") {
                            $('#part-finder li').removeClass('active');
                            $('#part-finder li').removeClass('selected');

                            $('#left_openbox li').removeClass('active');
                            $('#left_openbox li').removeClass('selected');
                         
                            parkFinderArray = [];
                             
                            Selectoptions = "";
                            $("#hdnddlLenght").val(0);
                            $("#hdnSelectCampingEquip").val("0");
                            $("#hdnSelectRentalType").val(0);
                            $("#hdnSelectoptions").val("0");
                            $("#hidddlUnitType").val("");
                            $("#hdnSelectoptions").val("")
                         
                            ClearSessionValues();
                            HideAllAdvanceOptionPerticular();
                            Left_HideAllAdvanceOptionPerticular();
                            $("#AfilterOpetion").click();
                        }
                        BacktoFacility = true;
                        ChnageDragandZoom = true;
                        //============
                        $("#AdvanceClearAll").hide();
                        $("#divParkFinderset").show();

                        $("#Left_AdvanceClearAll").hide();
                        $("#divLeftParkFinderset").show();
                        $("#divToggle_serch_white").show();
                        $("#divLeftMenu").removeClass();
                        $("#divLeftMenu").addClass("slide_one");
                        //===========
                        btnClickEvent();
                    }
                }
            });
            function isDate(txtDate)
            {
                var currVal = txtDate;
                if(currVal == '')
                    return false;
    
                var rxDatePattern = /^(\d{1,2})(\/)(\d{1,2})(\/)(\d{4})$/; //Declare Regex
                var dtArray = currVal.match(rxDatePattern); // is format OK?
    
                if (dtArray == null) 
                    return false;
                
                //Checks for mm/dd/yyyy format.
                dtMonth = dtArray[1];
                dtDay= dtArray[3];
                dtYear = dtArray[5];        
                
                if (dtMonth.length == 1) 
                {
                    return false;
                }
                if (dtMonth < 1 || dtMonth > 12) 
                {
                    return false;
                }
                else if (dtDay < 1 || dtDay> 31) 
                {
                    return false;
                }
                else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
                {
                    return false;
                }
                else if (dtMonth == 2) 
                {
                    var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
                    if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                        return false;
                }
                return true;
            }
		
            function CheckInvalidDates()
            {
                var invalidateresult= false;
               
                if(isDate($("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val()))
                {			
                                    
                }
                else
                {
                    invalidateresult= true;                    
                }
               
                if(invalidateresult)
                {
                    
                    $("#messageBoxLightbox2 .modal-body").html('You have selected Invalid Date or Format.Date format is mm/dd/yyyy');
                    
                    $("#messageBoxLightbox2 .modal-title").html("Error");
                    $('#messageBoxLightbox2').modal();
                    return false;
                }
                return true;
            }
            $("#btnTop_search").click(function (e) {
               
                if(!CheckInvalidDates())
                {
                    return false;
                }
                var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
                fnbTopsearchEvent();
                if ($("#hdnLat").val() == "") {
                    $("#messageBoxLightbox2 .modal-body").html("Place not Found");
                    $("#messageBoxLightbox2 .modal-title").html("Error");
                    $('#messageBoxLightbox2').modal();
                    e.preventDefault();
                    return false;
                } 
                else if(!dtRegex.test($("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val()))
                {
                    $("#messageBoxLightbox2 .modal-body").html("Enter valid date format.(mm/dd/yyyy or mm-dd-yyyy)");
                    $("#messageBoxLightbox2 .modal-title").html("Error");
                    $("#messageBoxLightbox2").on('shown.bs.modal', function () {
                        $(this).find('.modal-content').focus();
                    });
                    $('#messageBoxLightbox2').modal();                
                    return false;
                }
                else {
                    if ($("#ddlFacilityCategory").val().toLowerCase() != 'camping') {
                        fnTourActivity()
                    }
                    //if (window.location.href.toLowerCase().indexOf('advancesearch') != -1) {
                    if (window.location.href.toLowerCase().indexOf('advancesearch') != -1 && ($("#ddlFacilityCategory").val().toLowerCase() == '1' || $("#ddlFacilityCategory").val().toLowerCase() == '2')) {
                        if (parkFinderArray.length > 1 || $("#hdnSelectCampingEquip").val() != "0" || $("#hdnSelectCampingEquip").val() != "") {
                        
                            isFilterClick =false;
                            $('#part-finder li').removeClass('active');
                            $('#part-finder li').removeClass('selected');

                            $('#left_openbox li').removeClass('active');
                            $('#left_openbox li').removeClass('selected');

                            parkFinderArray = [];
                             
                            Selectoptions = "";
                            $("#hdnddlLenght").val(0);
                            $("#hdnSelectCampingEquip").val("0");
                            $("#hdnSelectRentalType").val(0);
                            $("#hdnSelectoptions").val("0");
                            $("#hidddlUnitType").val("");
                            $("#hdnSelectoptions").val("")
                         
                            //ClearSessionValues();
                            HideAllAdvanceOptionPerticular();


                            ClearAdvanceControl();
                            Left_ClearAdvanceControl();
                            ClearSessionValues();
                            HideAllAdvanceOptionPerticular();
                            Left_HideAllAdvanceOptionPerticular();
                            $("#AfilterOpetion").click();

                        }
                     
                        BacktoFacility = true;
                        ChnageDragandZoom = true;
                        //============
                        $("#AdvanceClearAll").hide();
                        $("#divParkFinderset").show();

                        $("#Left_AdvanceClearAll").hide();
                        $("#divLeftParkFinderset").show();
                        $("#divToggle_serch_white").show();
                        $("#divLeftMenu").removeClass();
                        $("#divLeftMenu").addClass("slide_one");
                        //===========
                        boolAutosearchvalues = true;
                        btnClickEvent();
                        $("#search-list-arrows,.search-dropdown,.search-view-toggle").css("display", "block");
                    }
                }
           
            });


            function PlaceShow() {
                $("#mainContent_divPlaceDatas").show();
                $("#mainContent_divUnitGrid").css("display", "none");
                $("#mainContent_divUnitHeader").css("display", "none");
                //changes
                $("#mainContent_divfacilitymap").css("display", "none");

            }
            function PlaceHide() {

                $("#mainContent_divPlaceDatas").css("display", "none");
                $("#mainContent_divUnitGrid").css("display", "block");
                $("#mainContent_divUnitHeader").css("display", "block");
                $('img[usemap]').rwdImageMaps();
            }
            function GooglePlaceShow() {

                $("#mainContent_divgoogleplaces").css("display", "block");
                $("#mainContent_divfacilitymap").css("display", "none");
                // $("#image-map").attr("class", "");

            }
            function GooglePlaceHide() {

                $("#mainContent_divgoogleplaces").css("display", "none");
                $("#mainContent_divfacilitymap").css("display", "block");

            }
            function GooglePlaceData() {

                $("#mainContent_divPlaceDatas").css("display", "block");
                $("#mainContent_divUnitGrid").css("display", "none");
                $("#mainContent_divUnitHeader").css("display", "none");
                $("#mainContent_divfacilitymap").css("display", "block");
                $("#mainContent_divgoogleplaces").css("display", "none");
            }
            function GooglePlacemaster() {
                $("#mainContent_divgoogleplaces").css("display", "block");
                $("#mainContent_divfacilitymap").css("display", "none");
                $("#mainContent_divPlaceDatas").css("display", "block");
                $("#mainContent_divUnitGrid").css("display", "none");
                $("#mainContent_divUnitHeader").css("display", "none");

            }
            function AllControlHide() {
                $("#divErrormsg").css("display", "block");
                $("#mainContent_divgoogleplaces").css("display", "none");
                $("#mainContent_divfacilitymap").css("display", "none");
                $("#mainContent_divPlaceDatas").css("display", "none");
                $("#mainContent_divUnitGrid").css("display", "none");
                $("#mainContent_divUnitHeader").css("display", "block");
                NonSearchNone();
            }
            function fnBreadcrumbHome() {
                
                $(".top_icon_part").show();
                $("#divParkFinderaccordion").show();
                backtohomevaluecheck =true;
                BoolBackDraggablevent = true;
                setAdvanceperimeterValues();
                $("#mainContent_divgoogleplaces").removeClass();
                StartLoaders();
                ReBindCategory();
                searchAreaClick = 1;
                backtohome = "";
                //ChangeDragandZoom = false;
                ChnageDragandZoom = true;
                if(isFilterClick)
                    firstloadflyeffect= true;
                $("#hdnAutocompleteCheckLevel").val("a");
                BacktoFacility = true;
                $('.divPlaceDatasfilter-border .PlaceDatas-top').toggle('slow');

                $("#hiddenPlaceLevel").val("");
                $("#divBreadCumb").hide();
                $("#divFacility").hide();
                $("#hdnFacilityid").val("0");
                $("#hdnNodeclick").val("0");
                $("#hdnPlaceid").val("0");
                $("#hiddenPlaceLevel").val("");
                RevertDrage();
                SetNightByPlaceIdAndFacilityIdOnUnitGrid(0,0);
            
                $("#mainContent_divfacilitymap").css("display", "none");
                $("#mainContent_divgoogleplaces").css("display", "block");


                $("#showhideadvfilter").show();
                $("#showhideadvfilter").html("Show Filter");
                $("#divParkwithSort").show();
                $("#h2Filter").show();


                //$("#divPlaceList").removeClass();
                $(".search-area-main").show();
                $("#h2Title").html("Search");
                $("#openbox").css("display", "block");

                $("#hTitle").html("Site Finder");
                $("#divGooglegofilter").show();
                $(".part-finder-clear-all").css("display", "block");

                $("#AdvanceClearAll").hide();
                $("#divParkFinderset").show();

                $("#Left_AdvanceClearAll").hide();

                $("#divLeftParkFinderset").show();
                $("#divToggle_serch_white").show();
                $("#divLeftMenu").removeClass();
                $("#divLeftMenu").addClass("slide_one");
                fnBacktoHomeControlDisplay();
            
            
                //setAdvanceperimeterValues();
                Backtohomevalues = true;
                
                //center = [$("#hdnCenterlong").val(), $("#hdnCenterlat").val()];
                center = [-121.176055908203,38.6779594421387];
                var backzoom =0;
                if(backzoom > 11)
                {
                    //alert(backzoom)
                    backzoom=11;
                }
                FilterSearch();
                //map.setZoom(backzoom);
                
                map.resize();
            
            }
            function fnBreadcrumbHome_place() {
               
                var parksize=$("#hdnPlaceFacilirySize").val();
                if(parksize == "" || parksize == "0")
                {
                    parksize='';
                }
                boolBacktohomrPointset = true;
                fnBreadcrumbHome();
                MapboxPlaceid=$("#mainContent_ddlPlace").val();
                BackOnlyPlaceLevel=true;
                ChnageDragandZoom=true;
                BacktoHomeData=true;
                flyCnt = 1;
                ContainFacilityClick_mapbox($("#mainContent_ddlPlace").val(),parksize);
                $("#aSearchthisarea").hide();
                $("#mainContent_ddlPlace").val(0);
            }
            function StartLoaders() {
                $("#divUnit_loder").css("display", "block");
                $("#divUnitloader_box").css("display", "block");
            }
            function EndLoaders() {
                $("#divUnit_loder").css("display", "none");
                $("#divUnitloader_box").css("display", "none");
            }

            function NonSearchShow() {
                $("#divFacilityTypes").css("display", "block");
                $("#divAllUnitlevelname").css("display", "block");
            }
            function NonSearchNone() {
                $("#divFacilityTypes").css("display", "none");
                $("#divAllUnitlevelname").css("display", "none");
            }

            function HideErrorvalue() {
                $("#mainContent_hdnAllhideControl").val("");
                $("#divErrormsg").css("display", "none");
            }

            function FavImageChange() {
                if ($('#hdClient').val() == "") {
                    $('.clsUnfavourite').hide();

                }
                else {
                    $('.clsUnfavourite').show();
                }
            }


            function AlertOpen(placeId) {

                //var ParkId = 428;
                var ArrivalDate = $("#mainContent_AdvanceMainSearch_txtArrivalDate").val();
                $.fancybox.open({
                    'href': '../AlertModel.aspx?ID=' + placeId + '&ArrDate=' + ArrivalDate + '',
                    'type': 'iframe',
                    'autoSize': false,
                    'width': '50%',
                    'height': 500,
                    beforeShow: function () {
                        $(".fancybox-inner").addClass("newClass");
                    }
                });
            }

            function setDateinDatepickerControl() {
                hideCloudTip();
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SetDateonDatepicker",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {

                        setDatePicker_home('5/20/2018 12:00:00 AM', '11/19/2018 12:00:00 AM');
                        $("#mainContent_AdvanceMainSearch_txtArrivalDate").val(data.d.split('-')[0]);
                        $.ajax({
                            type: "POST",
                            url: "AdvanceSearch.aspx/ApplyArrivalDate",
                            data: JSON.stringify({ 'arrivaldate': $("#AdvanceMainSearch_txtArrivalDate").val() }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                                 
                                $('#hdnArrivalDate').val(data.d);
                                $("#mainContent_txtDateRange").val(data.d);
                                $("#mainContent_TopMenuMainSearch_txtTopArrivalDate").val(data.d);
                            }
                        });
                    },
                    error: function (xhr) {

                    }
                });
                }

                function fnMoreless(id) {
                    // alert($("#a" + id).html());
                    if ($("#a" + id).html() == "more") {
                        $("#a" + id).html("less");
                        $("#tbl" + id + " tr").show();
                        return false;
                    }
                    else if ($("#a" + id).html() == "less") {
                        $("#a" + id).html("more");
                        $("#tbl" + id + " tr").hide();
                        $("#tbl" + id + " tr:eq(0)").show();
                        $("#tbl" + id + " tr:eq(1)").show();
                        $("#tbl" + id + " tr:eq(2)").show();
                        $("#tbl" + id + " tr:eq(3)").show();
                        return false;
                    }
                }
                $("#ddlSortBy").change(function () {
                    var d = $("#ddlSortBy").val();
                    SortGridData(d);
                });



                function PlaceDataHeightforAdvance() {
                    ////alert('');
                    // 
                    //var Windowheight = $(window).height();
                    //var Header = $('.brd_btm_head').height();
                    //var Breadcrumb = $('.date_night_search_box').height();
                    //var SearchArea = $(".divPlaceDatasfilter-border").height();
                    //var MainHeight = Windowheight - (Header + SearchArea + Breadcrumb);
                    //$('.park_box_scroll').height(MainHeight - 20);

                    //$(".park_box_scroll").mCustomScrollbar("update");

                    //// Table Set
                    //$('.table_page_table tbody').height(MainHeight - 150);

                }
                function btnClickEvent() {

                    $('.h_right_menu_toggel').parent('li').removeClass('open');
                    StartLoaders();
                    setAdvanceperimeterValues();
            
                    $.
                    when($.ajax({
                        type: "POST",
                        url: "AdvanceSearch.aspx/SessionClearsSearch",
                        data: JSON.stringify({ 'arrivaldate': $('#hdnArrivalDate').val() }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            setSessionValuesOnClick();
                        }
                    })).done(function () {
                     
                        $("#mainContent_hdnAllhideControl").val("");

                        $("#hiddenPlaceLevel").val("");
                        $("#divErrormsg").css("display", "none");
                        $("#hdnPlaceCategoryId").val("");
                        $("#mainContent_divfacilitymap").css("display", "none");
                        $("#mainContent_divUnitGrid").css("display", "none");
                        $("#mainContent_divUnitHeader").css("display", "none");
                        $("#mainContent_divPlaceDatas").css("display", "block");
                        $("#mainContent_divgoogleplaces").css("display", "block");

                    
                        setAdvanceperimeterValues();
                   
                    
                        isFilterClick = false;
                        center = [$("#hdnLag").val(), $("#hdnLat").val()];
                        //alert(center);
                        ChnageDragandZoom = true;
                        $("#hdnAutocompleteCheckLevel").val("a");
                    
                        //boolAdvanceSearch  = false;
                        
                        //initialize();
                        GetAnswer(true);
                    

                    });
                }
            $("#divTrip ul li").click(function (e) {
                $(this).toggleClass("active", function () {
                    if ($(this).hasClass('active')) {
                        //Push
                        parkFinderArray.push($(this).find('span').html());
                    } else {
                        //Pop
                        var removeItem = $(this).find('span').html();
                        parkFinderArray = $.grep(parkFinderArray, function (value) {
                            return value != removeItem;
                        });

                    }
                });
            });
            $(".clickbox2").click(function (e) {
                e.preventDefault();
                $("div#divTrip").slideToggle();
                $(".clickbox2").toggleClass("menu-open2");
            });

            function PlaceListingdata() {

                if ($('#divPlacelistdata').css('display') == 'none') {

                    $("#divPlacelistdata").show();
                    $("#divPlacefacilitylistdata").hide();
                    $("#iList").removeClass();
                    $("#iList").addClass("fa fa-th-list");
                    $("#hdnCheckListDatalistmode").val(0);
                    return false;
                }
                else {

                    $("#divPlacefacilitylistdata").show();
                    $("#divPlacelistdata").hide();
                    $("#iList").removeClass();
                    $("#iList").addClass("fa fa-th-large");
                    $("#hdnCheckListDatalistmode").val(1);
                    return false;
                }
            }
            function fnBacktoPlace() {
                backtohome = "";
                ChnageDragandZoom = false;
                BacktoFacility = true;
                fnBreadcrumbHome();
            }

            //$(".up").click(function () {
            //     
            //    alert("hello");
            //    var parent = $(this).parent();
            //    parent.insertBefore(parent.prev());
            //});
            //$(".down").click(function () {
            //    var parent = $(this).parent();

            //    parent.insertAfter(parent.next());

            //});

            $("#aUparrow").click(function () {

                $('.divPlacelistdata-list').children('.divPlacelistdata-list-options').slideUp();
                //$('.divPlacelistdata-list .placedata-title-main .placedata-title-left').click(function () {
                //    $(this).parent('div.placedata-title-main').next('div.divPlacelistdata-list-options').slideToggle();
                //});

                $("#aDownarrow").show();
                $("#aUparrow").hide();
            });
            $("#aDownarrow").click(function () {

                $('.divPlacelistdata-list').children('.divPlacelistdata-list-options').slideDown();
                //$('.divPlacelistdata-list .placedata-title-main .placedata-title-left').click(function () {
                //    $(this).parent('div.placedata-title-main').next('div.divPlacelistdata-list-options').slideToggle();
                //});

                $("#aUparrow").show();
                $("#aDownarrow").hide();
            });

        </script>

        <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />

        <script src="../scripts/jsAddtoTrip.js"></script>


        <script src="../multiselect/jquery.multiselect.min.js"></script>
        <script src="../scripts/jsPopupMap.js"></script>
        
        
        <script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></script>

        <script type="text/javascript" src="https://www.google.com/jsapi"></script>

        <link href="../themes/California/new_popup.css" rel="stylesheet" />
        <script src="../scripts/newpopup.js"></script>
        <link href="../themes/California/slick.css" rel="stylesheet" />

        <script src="../scripts/jsParkReview.js"></script>

        <div id="new_popup_pop" class="simplePopup">
        </div>
        <div id="new_popup_pop_activity" class="simplePopup">
        </div>
        <script>
            (function (cash) {
                $(window).load(function () {


                    $(".contents,#contentfr").mCustomScrollbar({
                        advanced: {
                            updateOnContentResize: false,
                            updateOnBrowserResize: false
                        },
                        autoHideScrollbar: true,
                        theme: "light-thin"
                    });
                });
            })(jQuery);
        </script>

        <script type="text/javascript">
            $(document).ready(function () {
                 
            
                $(".clickbox_new").click(function (e) {

                    $("div#openbox_new").slideToggle();
                    $(".clickbox_new").toggleClass("menu-open1");
                    //e.preventDefault();
                });

            

                //$("#aToggle").click(function (e) {

                //    $("div#openbox_new").slideToggle();
                //    $("#aToggle").toggleClass("clickbox_new menu-open1");
                //    e.preventDefault();
                //});
                //$("div#openbox_new").mouseup(function () {
                //    return false;
                //});
                //$(".menu-open1").click(function (e) {
                //     
                //    $(".clickbox_new").removeClass("menu-open1");
                //    $("div#openbox_new").hide();
                //});
                //$(document).mouseup(function (e) {
                //    if ($(e.target).parent("a.clickbox_new").length == 0) {
                //         
                //        $(".clickbox_new").removeClass("menu-open1");
                //        $("div#openbox_new").hide();
                //    }
                //});
                boolAdvanceSearch = false;
            
            });

        </script>
        <script src="../scripts/slick.js"></script>
        
        <script>
            var unitsizebool = false;
            var unitclicsizechangevalue = false;
            $(document).ready(function () {
                $("#slider").hide();
                $("#zoombar").hide();
                $("#divZoompuls").hide();
                $("#divZoomminus").hide();

                //$(".data_new_toogle,.park_btm_brd_new,.filter_box_white").click(function () {                
                $(".park_btm_brd_new,.filter_box_white").click(function () {                
                    //if(BoolDraggablevent == true){
                    //    var $t = $('.slide_one');              
                    //    if ($t.is(':visible')) {
                    //        // Close
                    //        $("#divAllControl").css("width", NewDrageControlvlaue +"px");
                    //        //DrageControlvlaue= $("#divAllControl").width();
                    //    } else {
                    //        // Open
                    //        NewDrageControlvlaue=$("#divAllControl").width();
                    //        $("#divAllControl").css("width", DrageControlvlaue +"px");
                    //        DrageControlvlaue= $("#divAllControl").width();
                    //    }
                    //}
                    $('.slide_one').slideToggle('slow');
                    //Leftmenu = true;
                    LeftMultiSelection();
                    //alert($(".slide_one").is(":visible"));
                    $('.h_right_menu_toggel').parent('li').removeClass('open');
                    if ($(".data_new_toogle a").attr("class") == "list-view_left toggle_filter_new afilter") {
                        //alert('a');
                        //$("#draggable").css("width","456px");
                        $(".data_new_toogle a").removeClass();
                        $(".data_new_toogle a").addClass("list-view_left toggle_filter_new_second afilter");
                        $("#divFilterDrag").removeClass();
                        $("#divFilterDrag").addClass("filter_box_white");
                        //$(".slide_one").css("width","456px");
                        //$(".slide_one").css("overflow","hidden");
                    
                    }
                    else if ($(".data_new_toogle a").attr("class") == "list-view_left toggle_filter_new_second afilter") {
                        //alert('b');
                        $(".data_new_toogle a").removeClass();
                        $(".data_new_toogle a").addClass("list-view_left toggle_filter_new afilter");
                        $("#divFilterDrag").removeClass();
                        $("#divFilterDrag").addClass("filter_box_white white_opacity");
                        //$("#draggable").css("width","240px");
                        //$(".slide_one").css("width","240px");
                        //$(".slide_one").css("overflow","hidden");
                    }
                
                });

                $(".data_second_toogle").click(function () {

                    //var effect = 'slide';
                    //var options = { direction: "left" };
                    //var duration = 500;
                    $('.slide_one').slideToggle('slow');

                    LeftMultiSelection();
                    $('.h_right_menu_toggel').parent('li').removeClass('open');
                    $("#AfilterOpetion").click();

                });

                Left_ShowControlsFromEvent();
           
                if ($('#divLeftMenu').css('display') == 'block')
                    $('.slide_one').toggle();

                PrecartModifyRecord='False';

          
            });

            function ListingFacilityview(name, id) {
                if (name == "park") {
                    $("#divPark" + id).hide();
                    $("#divFacility" + id).show();
                    return;
                }
                else if (name == "facility") {
                    $("#divPark" + id).show();
                    $("#divFacility" + id).hide();
                    return;
                }
            }
            
            function fnDisplaySearchparameter() {
                
                var strSelectedParameter = "";
                if (parkFinderArray.length == 0) {
                    $("#divParkFinderlist").hide();
                    $("#divParkfinderlenght").html("");
                    $("#afilterParkview").removeClass();
                    $("#afilterParkview").addClass("list-view_left toggle_filter_new afilter");
                    $("#spanPlacecancel").hide();
                }
                else {              
                    $("#ajay #afilterParkview").addClass("list-view_left toggle_filter_new afilter");
                    $(".third_fil_main_box").show();
                    $("#divParkFinderlist").show();
                    $("#divParkfinderlenght").html("");
                    $("#divParkfinderlenght").html(parkFinderArray.length + " Filters Selected");               
                    $("#spanPlacecancel").show();           
               
                }
                // achal
                
                if (($("#ddlLeft_Categories").val() != "" && $("#ddlLeft_Categories").val() != 0) && boolAdvanceSearch==true) {
            
                    $(".third_fil_main_box").show();
                    $("#divAdvanceparameterlist").show();
                    $("#divAdvanceparamtername").html("");

                    strSelectedParameter = $("#ddlLeft_Categories :selected").text();

                    if ($('#hidddlUnitType').val() != "") {
                        var spottypes = $('#hidddlUnitType').val();
                        //spottypes = spottypes.substring(0, spottypes.length - 1)
                        var filteselected = $.unique(spottypes.split(','));
                        var cnt = 0;
                        for (i = 0; i < filteselected.length; i++) {
                            if (filteselected[i] != "") {
                                cnt += 1;
                            }
                        }
                        strSelectedParameter += " / " + cnt + " Filters Spot Type Selected";
                    }
                    $("#divAllControl").css("width", DrageControlvlaue +"px");
                    if ($("#ddlLeft_CampingUnit").val() != 0 ) {
                        strSelectedParameter += " / " + $("#ddlLeft_CampingUnit :selected").text();
                    }
                    if ($("#ddlLeft_Lenght").val() != "Trailer Length")  {
                        strSelectedParameter += " / " + $("#ddlLeft_Lenght").val();
                    }
                    $("#divAdvanceparamtername").html(strSelectedParameter);
                    $("#afilterParkview").removeClass();
                    //("#ajay #afilterParkview").removeClass();
                    $("#afilterParkview").addClass("list-view_left toggle_filter_new afilter");
                    $("#ajay #afilterParkview").addClass("list-view_left toggle_filter_new afilter");
                    $("#divPlace_Filter").show();
                    Leftmenu = true;
                    isFilterClick =true;
                    $("#spanPlaceRentalcancel").show();
                    $("#spanFacilityRentalcancel").hide();
                    //$("#afilterParkview").click();                
               
                }
                else {
                    if (parkFinderArray.length == 0) {
                        $("#divPlace_Filter").hide();
                        $("#divParkfinderlenght").html("");
                        //$("#div_toggle_right_text").html("Selected 0 of 17");
                        $("#divAdvanceparameterlist").hide();
                        $("#spanPlacecancel").hide();
                    }
                    else {
                        $("#spanPlaceRentalcancel").hide();
                        $("#divAdvanceparamtername").html("");
                        $("#divAdvanceparameterlist").hide();
                    }
                }
                var SearchResult='False';
                if ($("#hiddenPlaceLevel").val() == "Facility" && (SearchResult.toLowerCase() == 'true' || boolAdvanceSearch == true)) {
                    //isFilterClick = true;
                    $(".third_fil_main_box").show();
                    $(".divAdvanceparameterlist_Facility").show();
                    //$("#divAdvanceparamtername_Facility").html(strSelectedParameter);
                    $("#divAdvanceparamtername").html(strSelectedParameter);
                    $("#divUnitGridlist").addClass("second_new_table");
                    $("#afilterFacilityview").removeClass();
                    $("#afilterFacilityview").addClass("list-view_left toggle_filter_new afilter");
                    $("#ajay #afilterParkview").addClass("list-view_left toggle_filter_new afilter");
                    $("#divFacility_Filter").show();  
                    $("#divPlace_Filter").hide();
                    $(".third_fil_main_box .third_fil_arrow").hide();
                    $("#spanFacilityRentalcancel").show();
                    $("#spanPlaceRentalcancel").hide();
                    $("#spanblinktext").show();
                    isFilterbtnClickOnly = true;
                }
                else {
                    //$("#divThirdfilterfacility").hide();
                    $("#afilterFacilityview").removeClass();
                    $("#afilterFacilityview").addClass("list-view_left toggle_filter_new afilter");
                    $("#divUnitGridlist").removeClass("second_new_table");
                }
            
                if (isFilterbtnClickOnly == true && (parkFinderArray.length != 0 || $("#ddlLeft_Categories").val() != 0)) {
                    $("#spanblinktext").show();
                    $('.panel-collapse.in').collapse('hide');
                    $(".slide_one").hide();
                    fnDraggableOriginalsize();
                }
                else
                {
                    $("#spanblinktext").hide();
                    $(".slide_one").hide();
                    $("#spanPlacecancel").hide();
                    $("#spanPlaceRentalcancel").hide();
                    $("#spanFacilityRentalcancel").hide();
                    $("#divAdvanceparamtername").html("");
                    $("#divParkfinderlenght").html("");
                }
                if ($("#hiddenPlaceLevel").val() == "Facility")
                {
                    $("#question2").addClass("dis_block");
                }else{
                    $("#question2").removeClass("dis_block");
                }
                
            
            }
            function fnDraggableOriginalsize() {
                //$("#draggable").css("width","240px");
                $("#divFilterDrag").removeClass();
                $("#divFilterDrag").addClass("filter_box_white white_opacity");
                $(".data_new_toogle a").removeClass();
                $(".data_new_toogle a").addClass("list-view_left toggle_filter_new afilter");
            }
            function FacilityRevertDrage() {
                //if (BoolDraggablevent == true) {

                BoolDraggablevent = false;
                $('#draggable').css("position", "relative");

                $("#draggable").animate({ left: 0, top: 0 });
                $("#div_facility_draggabl").removeClass("grid_pin_icn right_pin_icn");
                $("#div_facility_draggabl").addClass("grid_pin_icn right_pin_cross_icn");

                if ($("#ddlLeft_Categories").val() != 0) {
                    $("#divUnitGridlist").removeClass("two_new_table two_new_table_draggabl");
                    $("#divUnitGridlist").addClass("two_new_table second_new_table");
                }
                else {
                    $("#divUnitGridlist").removeClass("two_new_table two_new_table_draggabl");
                   
                    $("#divUnitGridlist").addClass("two_new_table with_out_combo");
            
                }
                //$("#divSliderMarge").html($("#divLeftMenu").html());
                // BoolDraggablevent = false;
                //setTimeout(resizeWindow(), 500);
                // }
            }
            $(".leaflet-control-zoom-out").hide();
            $(".leaflet-control-zoom-in").hide();
            $('.leaflet-control-zoom a').on('mouseover', function() {
           
                var classList = $('.leaflet-control-zoom a:eq(1)').attr('class');
                //alert(classList);
                if (classList === 'leaflet-control-zoom-out leaflet-disabled') {
                    $(".leaflet-disabled").attr("title","Double click then after go to homepage");
                }
                else
                {
                    $(".leaflet-control-zoom-out").attr("title","Zoom Out");
                }
            });
            //$('.leaflet-control-zoom-out').on('mouseover', function() {
            //    $(".leaflet-control-zoom-out").attr("title","zoom out");
            //});
            $(".leaflet-disabled").dblclick(function (){ 
            
                fnBreadcrumbHome(); 
            });

            $("#chkAdaUnit_Unit").change(function(){
                //// 
                var showADA=true;
                if ($(this).is(':checked')) {
                    showADA=true;
                }
                else{
                    showADA=false;
                }

                setAdvanceperimeterValues();
                var unitTypeIdsArray = new Array();
                if ($("#hdnSelectoptions").val() != "0") {
                    var ln = $("#hdnSelectoptions").val().split(',');
                    for (var i = 0; i < ln.length; i++) {
                        unitTypeIdsArray.push(ln[i]);
                    }
                }

                if ($('#ddlCategories').val() == "") {
                    $("#hdnSelectRentalType").val(0);
                }

                var availabilitySearchParams = {
                    StartDate: $('#hdnArrivalDate').val(),
                    Nights: $('#hdnNights').val(),
                    CategoryId: $("#hdnSelectRentalType").val(),
                    UnitTypeIds: unitTypeIdsArray,
                    ShowOnlyAdaUnits: showADA ,
                    ShowOnlyTentSiteUnits: 'false',
                    ShowOnlyRvSiteUnits: 'false',
                    MinimumVehicleLength: $("#hdnddlLenght").val(),
                    ShowSiteUnitsName: $("#hdnSelectCampingEquip").val(),
                    ParkFinder: parkFinderArray
                };
                $.ajax({
                    type: "POST",
                    url: "AdvanceSearch.aspx/SetSessionvalueForADA",
                    data: JSON.stringify({ 'availabilitySearchParams': availabilitySearchParams }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        boolAdvanceSearch = true;
                        $("#facilityChanged").val("true");
                        GetUnitGridDataHtmlString();

                        $('.table_page_table tbody').css("height", "60px");
                    }
                });
            });
            function HighlighthideinLazyLoadtime() {
    
                $(".placedata-img-hvr").hide();
            
            }
            function fnUnittoFacilityLevel() {
                StartLoaders();
            
                fnBreadcrumbHome_place();            
            
            }
            function FacilityAvailibilityOpens(facilityid, name, facililitytype) {
            
                $("#myModal").modal();
            
            }
            
            
            function fnUnitgridChangeLargesize() {
                 
                $("#hdnUnitTotalDay").val(20);
                unitsizebool=true;
                unitclicsizechangevalue=true;
                unitgridlargesize();
                
                
            }
            function fnUnitgridChangeSmallsize() {
                 
                $("#hdnUnitTotalDay").val(20);
                unitsizebool=false;
                unitclicsizechangevalue=false;
                unitgridsmallsize();                              
               
            }
            function unitgridsmallsize()
            {
                $("#aUnitSmall").hide();
                $("#aUnitLarge").show();
                // Header Date & day loop
                for (var i = 7; i < 23; i++) {
                    $(".date_value th:eq("+i+")").hide("slow","swing");                
                }
                // Row Selection
                for (var i = 9; i < 23; i++) {
                    $(".week_text th:eq("+i+")").hide("slow","swing");
                    $(".mCSB_container tr > *:nth-child("+i+")").hide("slow","swing");                   
                }                
                $(".thCospanMonth").attr("colspan",5);
                $("#divUnitGridSize").removeClass();
                $("#divUnitGridSize").addClass("grid_small");
            }
            function unitgridlargesize(){
                
                $("#aUnitSmall").show();
                $("#aUnitLarge").hide();
                // Header Date & day loop
                for (var i = 7; i < 23; i++) {
                    $(".date_value th:eq("+i+")").show("slow","swing");                
                }
                // Row Selection
                for (var i = 9; i < 23; i++) {
                    $(".week_text th:eq("+i+")").show("slow","swing");
                    $(".mCSB_container tr > *:nth-child("+i+")").show("slow","swing");  
                   
                }  
                
                $(".thCospanMonth").attr("colspan",19);
                $("#divUnitGridSize").removeClass();
                $("#divUnitGridSize").addClass("grid_small grid_big");
            }


            //divAdvanceparamtername
        </script>



                </div>
            </div>

        </div>

    

<script type="text/javascript">
//<![CDATA[
setDatePicker_home('05/20/2018','11/19/2018' );TopsetDatePicker('05/20/2018','11/19/2018' );//]]>
</script>
</form>
    <div id="googleanalylitics"></div>

    <script>
       
        $(".pagelinks a").each(function (i, item) {
            var href = $(item).attr("href");
            $(item).attr("href", "");
            $(item).attr("href", 'https://www.reservecalifornia.com/CaliforniaWebHome/' + href);

        });
    
        //$("#btnForm").fancybox();
        function SessionExpireAlert(timeout) {
            var seconds = timeout / 1000;

            setInterval(function () {
                seconds--;

            }, 1000);
            setTimeout(function () {
                //Show Popup before 20 seconds of timeout.
                //ResetSession();

                // window.location = "../LandingPage.aspx";
            }, timeout - 5 * 1000);
            setTimeout(function () {
                //  window.location = "../LandingPage.aspx";
            }, timeout);
        };
        

        IsAdvance = '1';
        _IsCashierUrl = 'False';
        _IsCashierCustomerSelectionMSG = 'Please Select User';
        var baseurlmain = 'https://www.reservecalifornia.com/CaliforniaWebHome';
        var isCDNUsed = 'True';
        var parkFinderArray = [];
        var cdnurl = 'https://cali-content.usedirect.com';
        var themesortname = 'California';
        var Makemytrip = false;
        var isparkpopup = false;
        var LeftsideMultiselect = false;
        var Leftmenu = false;
        var topmenu = true;
        var Changesplacemessage='';
        var customer = '0';
        IsMobileBrowser ='False';
        isCaptcaVisible ='False';
        $("#ahome").attr("href", 'https://www.reservecalifornia.com/CaliforniaWebHome' + "/default.aspx");
        $('#autocomplete').keypress(function (e) {

            e.preventDefault();

        });
        $(document).ready(function () {
           

            _DefaultZoom = 10;
            _MinZomm = 6;
            if (_IsCashierUrl.toLowerCase() == "true") {
                $("#lblEmailAddress").html("User Name");
                $("#txtUserName").attr("placeholder", "User Name");
            }
            SlidervalueProperty = 1
        //ResetSession();
        
            Makemytrip = false;

        

            SessionExpireAlert(1200000);
            if ($('#mainContent_AdvanceMainSearch_ddlNights').length > 0) {

                var datanights = $('#mainContent_AdvanceMainSearch_ddlNights').val();
                if (datanights != undefined) {
                    selectionCount = parseInt(datanights);
                } else {
                    selectionCount = 1;
                }
            }


            $(".main_menu_left").css("display", "inline-block");


            // Menu Hide

            var pageURL = $(location).attr("href");
            var PageName = getBaseName(pageURL);
            if (PageName.toLowerCase() == "advancesearch" || PageName.toLowerCase() == "advancesearchm") {
            
                
                test_facilityid = "0";
                debugger;
                $("#hdndefaultLag").val(-122.22203);
                $("#hdndefaultLat").val(37.17159);
                
                
                $("#hdnSearchType").val('');
                $("#hdnsearchplaceid").val('');
                
                
                if(!$("#mainContent_ugReservationGrid_tableGridParent").is(':visible'))
                {
                    initialize();
                    $("#mainContent_LeftMenuAdvanceFilter_RentalSpan").show();
                }
                else
                {
                    var pageindex = 0;
                    $("#hiddenPlaceLevel").val('Facility');
                    $(".top_icon_part").hide();
                    $("#divParkFinderaccordion").hide();
                    GetPlaceDataNew(0);
                    initialize();
                    //$("#mainContent_LeftMenuAdvanceFilter_RentalSpan").hide();
                }

            

                $("#divSecoundSearch").show();
                $("#divFilters").css("display", "block");
                // $("#MainFooter").css("display", "none");
                $('#para1').removeClass('all_page_hei_auto');
                //$("#header").css("border-bottom", "none");
            }
            else {

                $("#divSecoundSearch").hide();
                //  $("#MainFooter").css("display", "block");
                $("#divFilters").css("display", "none");
                $("#btnsearchdiv").css("float", "right");
                $('#main').addClass('all_page_hei_auto');
            }
            $("#autocomplete1,#autocomplete2").keypress(function (e) {

                if (e.keyCode == 13 || e.which == 13) {
                    // 
                    if ($("#hdnLat").val() == "") {
                        $("#messageBoxLightbox2 .modal-body").html("Place not Found");
                        $("#messageBoxLightbox2 .modal-title").html("Error");
                        $('#messageBoxLightbox2').modal();

                        $(".ui-widget-content").css("display", "none");
                        return false;
                    } else {
                    
                        Allevent();
                    

                        debugger;
                        $("#autocomplete1").val($("#hdncustomautocomplete").val());
                        $("#autocomplete2").val($("#hdncustomautocomplete").val());

                        if (e.currentTarget.id == "autocomplete1") {
                            $("#autocomplete2").val($("#autocomplete1").val());
                        }
                        else {
                            $("#autocomplete1").val($("#autocomplete2").val());
                        }
                        $(".ui-widget-content").css("display", "none");
                        return false;
                    }
                }

            });
            $("#txtUserName,#txtPassword").keypress(function (e) {
                if (e.keyCode == 13 || e.which == 13) {
                    CheckLogin();
                    return false;
                }
            });
            if (customer == null || customer == '' || customer == '0') {

                iscustomernull = true;
                $("#hdrPasses").show();
                $("#hdrPassesCustomer_witout_login").show();
                $("#hdrPassesCustomer_with_login").hide();
            } else {
                $("#hdrPasses").hide();
                $("#hdrPassesCustomer_witout_login").hide();
                $("#hdrPassesCustomer_with_login").show();
                iscustomernull = false;
            }
            $("#alogout").click(function () {
                //var redirecturl = window.location.href;
                var redirecturl = baseurlmain;
                LogoutCustomer(redirecturl);
            });


        });
        function getPageName(url) {
            var index = url.lastIndexOf("/") + 1;
            var filenameWithExtension = url.substr(index);
            var filename = filenameWithExtension.split(".")[0]; // <-- added this line
            return filename;                                    // <-- added this line
        }
        function getBaseName(url) {
            if (!url || (url && url.length === 0)) {
                return "";
            }
            var index = url.lastIndexOf("/") + 1;
            var filenameWithExtension = url.substr(index);
            var basename = filenameWithExtension.split(/[.?&#]+/)[0];

            // Handle '/mypage/' type paths
            if (basename.length === 0) {
                url = url.substr(0, index - 1);
                basename = getBaseName(url);
            }
            return basename ? basename : "";
        }


    </script>
    
    <script type="text/javascript">
       
        function ReadCaptcha()
        {
            var captcha=$("#hdncaptcaid").val();
            // var data="images/LoginCaptcha/1.mp3";
            var data='https://www.reservecalifornia.com/CaliforniaWebHome/images/LoginCaptcha/' + captcha + '.mp3';
            $("#soundcontrol").attr("src", data);
            var player = document.getElementById('soundcontrol');
            player.play();
        }
    </script>
    
    <script type="text/javascript">


        jQuery(document).ready(function ($) {

            $('#messageBoxLightbox2').on('shown.bs.modal', function () {
                $('#messageBoxLightbox2 .btn').focus();
            })
            

            $('#txtNewPassword').keypress(function(e) {
                if ( e.keyCode == 13 ) {  
                    $('#divSaveLogin').click(); 
                }
            });
            $('.login_page_box #txtConfirmPassword').keypress(function(e) {
                if ( e.keyCode == 13 ) {  
                    $('#divSaveLogin').click(); 
                }
            });


            
            $("#liPasswithUser").css("display", "none");
            $("#aGiftcardWithLogin").css("display", "show");

            $("#aGiftcardWithLogin").css("display", "show");
            $("#aGiftcardWithoutLogin").css("display", "none");
            
           
            $(".search_name_mgt20").css("display", "none");
            $("#customerArea").css("display", "block");

            
            $("#shoppingcart_div").removeClass("log_shop_cart");
            $("#logmenus_div").removeClass("log_menu");
            

            //AllSessionExpireAlert();
        }).ajaxError(function (e, xhr, opt) {

            if (xhr.status == "401") {
                window.location = baseurlmain;
            }
        });

          
        $(".pop_log_tit").html("Existing Customer");
        $("#divnewcustomer").html("NEW CUSTOMER");
        $("#divNewcustomer").show();
        $("#divCreateNewAccount").show();
        
        $("#aLogin").click(function(){
           
            
            $("#myModal").on('shown.bs.modal', function () {
                $(this).find('.modal-content').focus();
            });
            $("#myModal").modal();
        });
    </script>

</body>
</html>
