xhttp=new XMLHttpRequest()
xhttp.open("GET","./json/data.json",false)
xhttp.send()

xhttpData=xhttp.responseText;
console.log(xhttpData)

data=JSON.parse(xhttpData)
console.log(data);

for(let i=0;i<data.length;i++){
    document.getElementById("tablebody").innerHTML +=`
        <tr>
            <td valign="middle">${data[i].sr_no}</td>
            <td valign="middle">${data[i].category}</td>
            <td valign="middle">${data[i].age}</td>
            <td valign="middle">${data[i].timing}</td>
        </tr>
    `
}