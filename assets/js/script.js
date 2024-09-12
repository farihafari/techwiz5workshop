$(document).ready(function(){
    $.ajax({
        url:"assets/json/data.json",
        type:"get",
        success:function(data){
            let x = "";
            // console.log(data)
            $.each(data,function(index,objects){
// console.log(objects.price);
x += ` <div class="col-lg-3 mt-3">
                <div class="card">
                    <img src="${objects.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${objects.name}</h5>
                      <p class="card-text">${objects.price}</p>
                      <p class="card-text">${objects.description}</p>

                      <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                  </div>
            </div>`
            })
            $("#dataprint").html(x);
        }
    })
})