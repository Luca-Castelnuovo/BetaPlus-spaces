"use strict";
//tabs
var instance=M.Tabs.init(document.querySelector(".tabs"),{});document.addEventListener("DOMContentLoaded",function(){
//gen.js
var e=document.querySelector("#CSRFtoken"),t=document.querySelector("#gen_register"),n=document.querySelector("#gen_register_email");t.addEventListener("click",function(){t.innerHTML="Loading",$.ajax({type:"POST",url:"/admin/process.php",dataType:"JSON",timeout:10e3,data:{CSRFtoken:e.value,type:"gen",user:n.value},success:function(e){e.status?t.innerHTML="Success":t.innerHTML="Failed"},error:function(){t.innerHTML="Failed"}})});//filter
var r=function(n){function t(e){a=e.target;var t=document.getElementsByClassName(a.getAttribute("data-table"));n.forEach.call(t,function(e){n.forEach.call(e.tBodies,function(e){n.forEach.call(e.rows,r)})})}function r(e){var t=e.textContent.toLowerCase(),n=a.value.toLowerCase();e.style.display=-1===t.indexOf(n)?"none":"table-row"}var a;return{init:function(){var e=document.getElementsByClassName("light-table-filter");n.forEach.call(e,function(e){e.oninput=t})}}}(Array.prototype);document.addEventListener("readystatechange",function(){"complete"===document.readyState&&r.init()});//dropdown settings
var a=document.querySelectorAll(".dropdown-trigger-user-settings");M.Dropdown.init(a,{alignment:"right",coverTrigger:!1})});
//# sourceMappingURL=admin.js.map
