var btn=document.getElementById("btn");
var info=document.getElementById("data");


btn.addEventListener("click",function()
{
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload=function()
                      {
                        var ourData=ourRequest.responseText;
                        var myData=JSON.parse(ourRequest.responseText);
                        console.log(ourData);
                        for(i=0;i<myData.length;i++)
                        {
                            let htmlCode="<h3>"+myData[i].name+" is a "+myData[i].species+" that likes to eat ";
                            for (var j=0;j<myData[i].foods.likes.length;j++)
                            {
                                htmlCode+=myData[i].foods.likes[j]+" and ";
                            }
                            htmlCode+=" dislikes ";
                            for(var k=0;k<myData[i].foods.dislikes.length;k++)
                            {
                                if(myData[i].foods.dislikes.length-1==k)
                                {
                                    htmlCode+=myData[i].foods.dislikes[k];
                                }
                                else
                                {
                                    htmlCode+=myData[i].foods.dislikes[k]+" and ";
                                }
                            }
                            htmlCode+="</h3>";
                            info.insertAdjacentHTML("afterbegin",htmlCode);   
                        }
                    }
    ourRequest.send();
});