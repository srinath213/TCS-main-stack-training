    function addBlog(){
        var title=document.getElementById("title").value
        var desc=document.getElementById("desc").value
        var imageInfo=document.getElementById("imageId").files[0].name
        console.log(title)
        console.log(desc);
        console.log(imageInfo);
        document.getElementById("titleInfo").innerHTML=title;
        document.getElementById("descInfo").innerHTML=desc;
        document.getElementById("imageInfo").src=imageInfo;
        resetData()
    }
// var blgObj=[];
// function Storeblog(){
//     sessionStorage.setItem("titInfo",blgObj)
// }
// function restoreblog(){
//     var obj=sessionStorage.getItem("titInfo");
//     console.log(obj);
// }
// function addBlog(){
//     var data =readblogdata();
//     newblog(data);
//     blgObj.push(data);
//     resetData();
// }

// function readblogdata(){
//     var obj={}
//     obj.title = document.getElementById("title").value;
//     obj.desc=document.getElementById("desc").value;
//     console.log(obj);
//     return obj

// }

// function newblog(data){
//     var table =document.getElementById("titleInfo")[0];
//     var newrow= table.insertcolumn(table.length);

//     var cell1 =newrow.insertcolumn(0);
//     cell1.innerHTML=data.title;


// }
function resetData(){
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
}