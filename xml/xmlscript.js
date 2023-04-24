$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"xml",
        url:"./xml/data.xml",
        success:funcpass,
    })
    $.ajax({
        type:"GET",
        dataType:"xml",
        url:"./xml/data2.xml",
        success:funcpass2,
    })
})

function funcpass(xml){
    $(xml).find('book').each(function(){
        let sno=$(this).find('sno').text()
        let image=$(this).find('link').text()
        let name=$(this).find('name').text()
        let author=$(this).find('author').text()
        let date=$(this).find('date').text()

        $('#book-data1').append(
            `
            <div class="col-lg-6 col-md-6 col-sm-12 book">
        <div class="card mb-3 mt-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <img src="${image}" height=200px width=200 class="img-fluid rounded-start"
                        alt="...">
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Author : ${author}</p>
                        <p class="card-text">Publishe Date : ${date}</p>
                        <p class="card-text">Serial No : ${sno}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
        )
        
    })
}
function funcpass2(xml){
    $(xml).find('book').each(function(){
        let sno=$(this).find('sno').text()
        let image=$(this).find('link').text()
        let name=$(this).find('name').text()
        let author=$(this).find('author').text()
        let date=$(this).find('date').text()

        $('#book-data2').append(
            `
            <div class="col-lg-6 col-md-6 col-sm-12 book">
        <div class="card mb-3 mt-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <img src="${image}" height=200px width=200 class="img-fluid rounded-start"
                        alt="...">
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Author : ${author}</p>
                        <p class="card-text">Publishe Date : ${date}</p>
                        <p class="card-text">Serial No : ${sno}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
        )
        
    })
}

$(document).ready(function(){
    $("#book-data1").show();
    $("#book-data2").hide();
    $("#btn1").show()
    $("#btn2").hide()
    
    $("#btn1").click(function(){
        $("#book-data1").hide(300);
        $("#book-data2").show(300);
        $("#btn1").hide(300);
        $("#btn2").show(300)
    })
    $("#btn2").click(function(){
        $("#book-data1").show(300);
        $("#book-data2").hide(300);
        $("#btn2").hide(300)
        $("#btn1").show(300)
    })
})