window.RMLib=window.RMLib||(function(){var e;c();return{getjQuery:b};function c(){e=a();f("https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",d)}function b(){return e.promise}function d(){e.resolve(jQuery.noConflict(true))}function f(i,g){var h=document.createElement("script");h.type="text/javascript";if(h.readyState){h.onreadystatechange=function(){if(h.readyState=="loaded"||h.readyState=="complete"){h.onreadystatechange=null;g()}}}else{h.onload=function(){g()}}h.src=i;(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(h)}function a(){var g=[];var h;return{resolve:function(j){if(g){h=j;for(var l=0,m=g.length;l<m;l++){var k=g[l];k(h)}g=undefined}},promise:{then:function(i){if(g){g.push(i)}else{i(h)}}}}}})();window.RMFeaturedJobWidget=window.RMFeaturedJobWidget||new (function(){if(window.Prototype){delete Object.prototype.toJSON;delete Array.prototype.toJSON;delete Hash.prototype.toJSON;delete String.prototype.toJSON}document.write("<div id='rmFeaturedJobWContainer'></div>");var l=document.getElementById("rm_Source").src.match("https?://.+?/")[0];var d=l+"Widgets/";var c=l+"RMAPI/"+(l=="localhost"?"":"widgets/");var b=10000;var x=0;var a=3;var t=false;var q=1;var w=false;var u=null;var s;function n(B){var z=document.getElementsByTagName("script");for(var y=0;y<z.length;y++){var A=z[y].getAttribute("src");if(A!=null&&A.indexOf(B,A.length-B.length)!==-1){return true}}return false}function p(A){if(n(A)==false){var y=document.createElement("script");y.type="text/javascript";y.async=true;y.src=l+A;var z=document.getElementsByTagName("script")[0];z.parentNode.insertBefore(y,z)}}p("Content/Scripts/AmazonTracking.js");window.RMLib.getjQuery().then(function(y){s=y;o()});function o(){var A;if(typeof s.cookie=="undefined"){var z=document.createElement("script");A=d+"JS/jCookies.js";z.setAttribute("type","text/javascript");z.setAttribute("src",A);(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(z)}if(typeof JSON=="undefined"){var y=document.createElement("script");A=d+"JS/json2.js";y.setAttribute("type","text/javascript");y.setAttribute("src",A);if(y.readyState){y.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){i()}}}else{y.onload=i}(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(y)}else{i()}}function i(){s(document).ready(function(y){var B=d+"widget/BaseWidget?";var z="widgetID="+window.rm_FeaturedJobWidgetId;z+="&WidgetType=4";var A=B+z;s.ajax({url:A,jsonp:"callback",dataType:"jsonp",timeout:b,success:function(C){for(var E=0;E<=C.css.length-1;E++){if(C.css[E].length>0){s('<link rel="stylesheet" type="text/css" href="'+C.css[E]+'" >').appendTo("head")}}a=C.AffiliateId;window.AmazonAffiliateId=C.AffiliateId;q=C.MaxItems;w=C.ShowLocation;var D=C.FeaturedJobItemTemplage;s("#rmFeaturedJobWContainer").append(C.FJTemplage);g(C.SearchType,{affiliateId:a,WidgetId:window.rm_FeaturedJobWidgetId,LocationIds:[],Count:q},function(F){if(F.body!=null&&F.body.Jobs!=null){s(".rmFJBackground").show();var H=s("#rmFJData");if(F.body.Jobs.length==0){k(C)}else{s("#rmFJLoader").hide();for(E=0;E<F.body.Jobs.length;E++){var G=s(D).clone();var L=G.find(".rmFJItemText");L.text(F.body.Jobs[E].Title);L.bind("click",{JobUrl:F.body.Jobs[E].JobUrl,Id:F.body.Jobs[E].Id},function(M){h(M)});var J=G.find(".rmFJItemDate");J.text(F.body.Jobs[E].PostingDateToDisplay);J.bind("click",{JobUrl:F.body.Jobs[E].JobUrl,Id:F.body.Jobs[E].Id},function(M){h(M)});var K=G.find(".rmFJItemIndustry");var I=G.find(".rmFJItemCompany");if(w==true){K.text(F.body.Jobs[E].Location);I.text(F.body.Jobs[E].CompanyName)}else{y(I).parent("dd").hide();if(F.body.Jobs[E].Industries!==undefined){K.text(F.body.Jobs[E].Industries)}else{if(F.body.Jobs[E].Category!==undefined){K.text(F.body.Jobs[E].Category)}}}K.bind("click",{JobUrl:F.body.Jobs[E].JobUrl,Id:F.body.Jobs[E].Id},function(M){h(M)});H.append(G)}if((s("#rmFJWidget").height()-s("#rmFJContinerTitle").height()-s("#rmFJWidget div.RmFJCuts").height())<s("#rmFJData").height()){f()}r(C.AffiliateURL)}}else{k(C)}})},error:function(){v();k()}})})}function r(y){if(typeof y!="undefined"&&window.location.hostname!=y&&typeof window.AmazonActivityId!="undefined"&&typeof window.CreatedCrossDomainCookie=="undefined"){CreatedCrossDomainCookie=true;var A="?ck_Rm_Amazon_Activity="+window.AmazonActivityId;var z=location.protocol+"//"+y+"/RMAPI/CookieHandler.ashx"+A;s.ajax({url:z,jsonp:"callback",dataType:"jsonp"})}}var e=function(y,z,B){var A=(y.indexOf("?")>-1)?"&":"?";return y+A+z+"="+B};function h(y){var z={WidgetId:window.rm_FeaturedJobWidgetId,JobId:y.data.Id};window.AmazonTrackingCall("FeaturedJobsWidget_Click",z);FJEventTracking.GoogleTracking("Widgets_FeaturedJobs_Click",a,y.data.Id);window.open(e(y.data.JobUrl,"pagetype","23"),"_blank")}function k(z){var y=s("#rmFeaturedJobWContainer");if(typeof z==="undefined"||typeof z.ContentReplacementScript==="undefined"||z.ContentReplacementScript==""||z.ContentReplacementScript==null){y.hide()}else{j(z,y)}}var j=function(z,y){y.addClass("Hidden");y.html("");y.html('<div id="featuredJobWidgetReplacementAd"></div>');y.append(z.ContentReplacementScript);y.width(z.Width);y.height(z.Height);y.addClass("FeaturedJobWidgetReplacementCss");y.removeClass("Hidden")};function f(){var z=s("#rmFJData");z.children().filter(".rmFJItem").each(function(){var B=s(this),A=s("<div>");B.next().appendTo(A);B.prependTo(A);A.appendTo(z)});z.css("overflow","hidden");function y(A){var B;var C;if(t==false){B=A.height();C=(B+parseInt(A.css("marginTop")))/0.025;B=-B}else{B=A.parent().children(":last").height();C=(B-parseInt(A.css("marginTop")))/0.025}A.animate({marginTop:B},C,"linear",function(){A.css("marginTop",0);if(t){A.parent().prepend(A.parent().children(":last"));y(A.parent().children(":first"))}else{A.appendTo(A.parent());y(A.parent().children(":first"))}})}y(z.children(":first"));z.mouseenter(function(){z.children().stop()});z.mouseleave(function(){y(z.children(":first"))});s("#RmFJdown").mousedown(function(A){var B=(m()&&A.button==1)||(A.which==1);if(B){t=false;y(z.children(":first"))}s(this).addClass("RmFJdownActive")});s("#RmFJdown").on("mouseup mouseout",function(){z.children().stop();s(this).removeClass("RmFJdownActive")});s("#RmFJup").mousedown(function(A){var B=(m()&&A.button==1)||(A.which==1);if(B){t=true;y(z.children(":first"));s(this).addClass("RmFJupActive")}});s("#RmFJup").on("mouseup mouseout",function(){z.children().stop();s(this).removeClass("RmFJupActive")});s("#RmFJScrollbar").mouseenter(function(){z.children().stop()});s("#RmFJScrollbar").mouseleave(function(){t=false;y(z.children(":first"))});s("#rmFeaturedJobWContainer").mouseenter(function(){s("#RmFJScrollbar").show()});s("#rmFeaturedJobWContainer").mouseleave(function(){s("#RmFJScrollbar").hide()})}function v(){}function g(z,y,A){var B;if(y){B={header:{TokenId:x,AffiliateId:a,SessionId:u},body:y}}else{B={header:{TokenId:x,AffiliateId:a,SessionId:u}}}s.ajax({type:"GET",url:c+"Widget.svc/"+z+"?header="+JSON.stringify(B.header)+"&body="+JSON.stringify(B.body),contentType:"application/json",timeout:b,dataType:"jsonp",success:function(C){if(C==null||C.header==null||C.header.ErrorId!=0){v()}if(C.header.SessionId){u=C.header.SessionId}if(A){A(C)}},error:function(){v();k()}})}function m(){var z=window.navigator.userAgent;var y=z.indexOf("MSIE ");if(y>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){return true}else{return false}}});window.FJEventTracking=window.FJEventTracking||new (function(){this.GoogleTracking=function(c,a,b){if(typeof window._gaq=="undefined"){return}switch(c){case"Widgets_FeaturedJobs_Impression":window._gaq.push(["_trackEvent","Widgets_FeaturedJobs",a.toString(),b.toString()]);break;case"Widgets_FeaturedJobs_Click":window._gaq.push(["_trackEvent","Widgets_FeaturedJobs",a.toString(),b.toString(),1]);break;default:return}}});
