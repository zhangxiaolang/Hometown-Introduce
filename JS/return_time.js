      function return_time(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var hours = date.getHours();
            var min = date.getMinutes();
            min = min>9?min:"0"+min;
            var seconds=date.getSeconds();
            seconds=seconds>9?seconds:"0"+seconds;
            var disptime = "当前时间: "+year+"年"+month+"月"+day+"日 "+hours+":"+min+":"+seconds;
            document.getElementById("head_time").innerHTML=disptime;
            setTimeout("return_time()",1000);
            }