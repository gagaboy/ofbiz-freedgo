function changeProvince(){var a=document.getElementById("province").selectedIndex;var c=$("#provincetip").children();if(c.size()!=2){return}var d=document.getElementById("province").options[a].text;var b=c.eq(1);b.html(b.html().replace(/<script.*<\/script>/,""));$("#provincetip").html("");$("#provincetip").append(c.eq(0));$("#provincetip").append(b);document.getElementById("province").selectedIndex=a;$("#provincetip").append(d);$("#provinceName").val(d)}function changeCity(){var a=document.getElementById("city").selectedIndex;var c=$("#citytip").children();if(c.size()!=2){return}var d=document.getElementById("city").options[a].text;var b=c.eq(1);b.html(b.html().replace(/<script.*<\/script>/,""));$("#citytip").html("");$("#citytip").append(c.eq(0));$("#citytip").append(b);document.getElementById("city").selectedIndex=a;$("#citytip").append(d);}