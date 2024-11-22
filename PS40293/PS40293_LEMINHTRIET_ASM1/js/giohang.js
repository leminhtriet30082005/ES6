var giohang = new Array();

function muangay(x){
    var cha = x.parentElement; // Trả về cha
    var hinh = cha.children[0].src; 
    var tensp = cha.children[1].getAttribute('msp');
    var dongia = cha.children[2].getAttribute('dongia')*1;
    var soluong = cha.children[3].value*1;
    var thanhtien = dongia*soluong;
    // add vào mảng item trước khi đưa vào giỏ hàng
    var item = new Array(hinh,tensp,dongia,soluong,thanhtien);
    // add vào mảng giỏ hàng các item-----------
    if(giohang.length==0){
        giohang.push(item);
    }
    else
        {
            for (var i = 0; i < giohang.length; i++){
                if  (giohang[i][1]==tensp){
                    alert('Trùng mã Sản phảm tăng số lượng..')
                    giohang[i][3] += soluong // tính lại số lượng 
                    giohang[i][4] = giohang[i][2]*giohang[i][3]; // tính số lượng 
                    break;
                }}
                    if (i==giohang.length) {
                        giohang.push(item);
                        alert('Bạn vừa thêm sản phẩm mới');
                    }
    }
    console.log(giohang);
        view_table();
}    
    function view_table(){
        var tongtien=0; 
        var kq =
        ` <tr>
            <th>STT</th>
            <th>Hình</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Đơn Giá</th>
            <th>Thành Tiền</th>
            <th>Xóa</th>
        </tr>`
        //show các dòng sản phẩm tra table .....
        for(let i = 0; i<giohang.length; i++){
            let stt =i+1;
            tongtien += giohang[i][4];

       
        kq +=
            `<tr>
                <td>${stt}</td>
                <td><img src="${giohang[i][0]}" alt=""></td>
                <td>${giohang[i][1]}</td>
                <td>${giohang[i][2]}</td>
                <td>${giohang[i][3]}</td>
                <td>${giohang[i][4]}</td>
                <td><button onclick="xoa(this,${i})">Xóa</button></td>
            </tr>`
        }
        kq +=
            `<tr>
                <td colspan="4">Tổng thành tiền</td>
                <td colspan="2">${tongtien}</td>
                <td colspan="1"><button>Mua Ngay</button></td>
            </tr>`
        document.getElementById('show_table').innerHTML = kq;
    }
    
    function xoa(node,vtr){
        console.log(node.parentElement.parentElement)
        node.parentElement.parentElement.remove();
        giohang.splice(node,1);
        view_table();
    }