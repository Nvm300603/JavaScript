var man = [
    {
        id:1,
        name: "Áo Polo Vải DRY",
        code: "TC102",
        price: "250.000",
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/item/goods_09_459713.jpg?width=750"
    },
    {
        id:2,
        name: "QUẦN SHORTS CHINO",
        code: "TC103",
        price: "350.000",
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455503/item/goods_69_455503.jpg?width=750"
    },
    {
        id:3,
        name: "DRY-EX Quần Short",
        code: "TC104",
        price: "150.000",
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467146/item/goods_36_467146.jpg?width=750"
    },
];
var woment = [
    {
        id:1,
        name: "Chân Váy Dài Vải Denim",
        code: "EC201",
        price: "450.000",
        image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468874001/item/vngoods_63_468874001.jpg?width=750"
    },
    {
        id:2,
        name: "Quần Dài Túi Hộp (Cargo)",
        code: "EC202",
        price: "190.000",
        image: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468583/item/vngoods_57_468583.jpg?width=750"
    },
    {
        id:3,
        name: "Áo Cardigan Vải Souffle Dáng Ngắn Dài Tay",
        code: "EC203",
        price: "400.000",
        image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461085/item/goods_55_461085.jpg?width=750"
    },
    
];
function listProducts(){
    for(let i = 0; i <= man.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+man[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    
    for(let i = 0; i <= woment.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+woment[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}