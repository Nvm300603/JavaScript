const man = [
  {
    id: 1,
    name: "Giày sneaker nam ",
    image: "img/sneakernam.jpg",
    price: "250.000vnd",
    quantity: "new",
  },

  {
    id: 2,
    name: "Giày sandal nam",
    image: "img/sandalnam.jpg",
    price: "150.000vnd",
    quantity: "new",
  },

  {
    id: 3,
    name: "Giày tây",
    image: "./giaytaynam.jpg",
    price: "200.000vnd",
    quantity: "new",
  },

  {
    id: 4,
    name: "Giày lười",
    image: "./img/giayluoinam.jpg",
    price: "500.000vnd",
    quantity: "new",
  },
];
const women = [
  {
    id: 1,
    name: "Giày sneaker nữ",
    image: "./img/sneakernu.jpg",
    price: "250 $",
    quantity: "99",
  },

  {
    id: 2,
    name: "Giày sandal nữ",
    image: "./img/sandalnu.jpg",
    price: "430.000vnd",
    quantity: "new",
  },

  {
    id: 3,
    name: "Giày búp bê",
    image: "./img/giaybupbe.jpg",
    price: "300.000vnd",
    quantity: "new",
  },

  {
    id: 4,
    name: "Giày cao gót",
    image: "./img/giaycaogot.jpg",
    price: "250.000vnd",
    quantity: "new",
  },
];


    function Man() {
        var html = "";
        for (var i in man) {
            html += "<tr>";
            html += "<td>" + man[i].id + "</td>";
            html += "<td>" + man[i].name + "</td>";
            html += "<td><img src='" + man[i].image + "' style='height:50px;width:50px;'></td>";
            html += "<td>" + man[i].price + "</td>";
            html += "<td>" + man[i].quantity + "</td>";
            html += "<td><button class='edit-btn' onclick='editProductMen(" + i + ")'>Edit</button></td>";
            html += "<td><button class='delete-btn' onclick='confirmDeleteFromMan(" + i + ")'>Delete</button></td>";
            html += "<td><button class='detail-btn' onclick='DetailProduct(" + i + ")'>Detail</button></td>";
            html += "</tr>";
        }
        document.getElementById("tbl").innerHTML = html;
    }
function Women() {
  var html = "";
  for (i in women) {
    html + "<tr>";
    html += "<td>" + women[i].id + "</td>";
    html += "<td>" + women[i].name + "</td>";
    html +=
      "<td><img src=" + women[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + women[i].price + "</td>";
    html += "<td>" + women[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromWomen(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
  }

  document.getElementById("tbl").innerHTML = html;
}

function create() {
  var ID = document.getElementById("id").value;
  var Name = document.getElementById("name").value;
  var Image = document.getElementById("img").value;
  var Price = document.getElementById("price").value;
  var Quantity = document.getElementById("quantity").value;
  var Select = document.getElementById("Select").value;
  var Detail = document.getElementById("detail").value;

  var newProduct = {
    id: ID,
    name: Name,
    image: Image,
    price: Price,
    quantity: Quantity,
    detail:Detail,
  };

  if (Select === "Giày nam") {
  man.push(newProduct);
  Man(); // Update the table for men's shoes
} else if (Select === "Giày nữ") {
  women.push(newProduct);
  Women(); // Update the table for women's shoes
}


  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("detail").value = "";

  // show(Select === "Man" ? arr : women);
}

function editProductMen(index) {
  document.getElementById("editProductName").value = man[index].name;
  document.getElementById("editProductImage").value = man[index].image;
  document.getElementById("editProductPrice").value = man[index].price;
  document.getElementById("editProductQuantity").value = man[index].quantity;
  document.getElementById("editProductDetail").value = man[index].detail;
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editIndex").value = index;
}
function editProductWomen(index) {
  document.getElementById("editProductName").value = women[index].name;
  document.getElementById("editProductImage").value = women[index].image;
  document.getElementById("editProductPrice").value = women[index].price;
  document.getElementById("editProductQuantity").value = women[index].quantity;
  document.getElementById("editProductDetail").value = women[index].detail;
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editIndex").value = index;
}
function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newQuantity = document.getElementById("editProductQuantity").value;
  var newDetail=document.getElementById("editProductDetail").value;

  var indexToUpdate = parseInt(
    document.getElementById("editIndex").value
  );

  
  if (men[indexToUpdate]) {
    man[indexToUpdate].name = newName;
    man[indexToUpdate].image = newImage;
    man[indexToUpdate].price = newPrice;
    man[indexToUpdate].quantity = newQuantity;
    man[indexToUpdate].detail = newDetail;
    man(); // Cập nhật danh sách thức ăn
  } else if (Women[indexToUpdate]) {
    Women[indexToUpdate].name = newName;
    Women[indexToUpdate].image = newImage;
    Women[indexToUpdate].price = newPrice;
    Women[indexToUpdate].quantity = newQuantity;
    Women[indexToUpdate].detail = newDetail;
    Women(); // Cập nhật danh sách đồ uống
  }

  document.getElementById("editForm").style.display = "none";
  man();
}

function DetailProduct(index) {
  // Lấy chi tiết sản phẩm dựa trên chỉ số hoặc bất kỳ định danh nào khác
  var element = document.getElementById("editProductDetail");// Thay getProductDetails bằng logic của riêng bạn

  // Tạo một chuỗi đại diện cho nội dung HTML để hiển thị chi tiết sản phẩm
  var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";
  html += "<p><strong>Chi tiết:</strong> " + element.value + "</p>";
  document.getElementById('modal').innerHTML = html;
  document.getElementById('modal').style.display = 'block';
}
function confirmDeleteFromman(index) {
  // Xác nhận việc xóa sản phẩm từ danh sách giày nam
  if (confirm("Confirm removal from FOOD list by ID: " + man[index].id + "?")) {
    // Xóa sản phẩm khỏi mảng 'man'
    man.splice(index, 1);
    // Cập nhật bảng sản phẩm man
    Man();
  }
}
function confirmDeleteFromWomen(index) {
  if (confirm("Confirm removal from Women list by ID: " + women[index].id + "?")) {
    women.splice(index, 1);
    Women();
  }
}


function search() {
  var keyword = document.getElementById("searchInput").value;
  searchProduct(keyword);
}

function searchProduct(keyword) {
  var searchResults = [];
  for (var i = 0; i < man.length; i++) {
    if (man[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(man[i]);
    }
  }
  for (var i = 0; i < women.length; i++) {
    if (women[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(women[i]);
    }
  }
  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  var html = "";
  for (var i = 0; i < results.length; i++) {
    html += "<tr>";
    html += "<td>" + results[i].id + "</td>";
    html += "<td>" + results[i].name + "</td>";
    html += "<td><img src='" + results[i].image + "' style='height:50px;width:50px;'></td>";
    html += "<td>" + results[i].price + "</td>";
    html += "<td>" + results[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='editProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}


