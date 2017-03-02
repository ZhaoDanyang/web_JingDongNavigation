/**
 * Created by zdy on 17/2/28.
 */

window.onload = function ()
{
    var lis = document.getElementsByTagName("li");
    var As = document.getElementsByClassName("navigationA");
    var divs = document.getElementsByClassName("submenu");

    // li标签响应事件
    for (var i=0; i<lis.length; i++)
    {
        var li = lis[i];
        // li.child()
        li.id = i;
        li.onmousemove = function ()
        {
            this.style.backgroundColor = "gainsboro";
            As[this.id].style.color = "red";
            // divs[this.id].style.backgroundColor = 'yellow';
            divs[this.id].style.display = "block";


        }
        li.onmouseout = function () {
            this.style.backgroundColor = "gray";
            As[this.id].style.color = "white";
            divs[this.id].style.display = "none";
            // divs[this.id].style.backgroundColor = 'aqua';
        }
    }

    var dtAs = document.getElementsByClassName("dt_a");
    var ddAs = document.getElementsByClassName("dd_a");

    for (var i=0; i<dtAs.length; i++)
    {
        var dt_a = dtAs[i];
        dt_a.id = i;
        dt_a.onmousemove = function ()
        {
            // alert(i);
            this.style.color = "red";
        }
        dt_a.onmouseout = function () {
            this.style.color = "black";
        }
    }

    for (var i=0; i<ddAs.length; i++)
    {
        var dd_a = ddAs[i];
        dd_a.id = i;
        dd_a.onmousemove = function () {
            this.style.color = "red";
        }
        dd_a.onmouseout = function () {
            this.style.color = "gray";
        }
    }

}
