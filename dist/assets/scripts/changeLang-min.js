window.addEventListener("load",function(){const e=document.querySelector(".languages .change"),t=(document.querySelector(".languages .change span"),document.querySelector(".languages .change img"),document.querySelectorAll(".languages .select a")),n=document.querySelector(".languages .select");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(function(e){e.classList.remove("active")}),this.classList.add("active")})}),e.addEventListener("click",function(e){this.parentElement.classList.toggle("change-language")}),document.addEventListener("click",function(t){t.target!==n&&t.target!==e&&e.parentElement.classList.remove("change-language")}),n.onclick=(e=>{e.stopPropagation()}),e.onclick=(e=>{e.stopPropagation()})});