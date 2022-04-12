let modalc = document.getElementById("myModalc");
let modal = document.getElementById("myModal");
let close = document.getElementsByClassName("close");
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
//data
let data = [
    {
      src:"https://bphimmoi.net/wp-content/uploads/2022/04/nguoi-khong-phai-me-ta-63262-thumbnail-250x350.jpg",
      content:"NGƯƠI KHÔNG PHẢI MẸ TA",
      describe:"Ngươi Không Phải Mẹ Ta - You Are Not My Mother, You Are Not My Mother 2021 Full Trong Một Khu Nhà ở Bắc Dublin, Mẹ Của Char Mất Tích...",
      vid:"https://www.youtube.com/embed/AoNbm72YLqA",
    },
    {
      src:"https://bphimmoi.net/wp-content/uploads/2022/04/song-nhiet-63260-thumbnail-250x350.jpg",
      content:"SÓNG NHIỆT",
      describe:"Sóng Nhiệt - Heatwave, Heatwave 2022 Full Claire, Một Phụ Nữ Trẻ đầy Tham Vọng, Bắt đầu Làm Việc Cho Một Doanh Nhân Thành đạt Và Giàu Có,...",
      vid:"https://www.youtube.com/embed/WYdJTunjxYA",
    },
    {
      src:"https://bphimmoi.net/wp-content/uploads/2022/04/hung-su-thieu-nien-63258-thumbnail-250x350.jpg",
      content:"HÙNG SƯ THIẾU NIÊN",
      describe:"Hùng Sư Thiếu Niên kể về câu chuyện của cậu thiếu niên bị bỏ rơi A Quyên cùng những người bạn A Miêu A Cẩu tham gia cuộc thi múa lân...",
      vid:"https://www.youtube.com/embed/RnVfTARFPA0",
    },
    {
      src:"https://bphimmoi.net/wp-content/uploads/2022/04/bao-thanh-thien-co-quan-tai-rong-63256-thumbnail-250x350.jpg",
      content:"BAO THANH THIÊN: CỔ QUAN TÀI RỖNG",
      describe:"Vào những năm đầu của Thiên Kinh thuộc triều đại Bắc Tống, hai anh em nhà họ Tề chuyên tu sửa mộ đã đào được một ngôi mộ...",
      vid:"https://www.youtube.com/embed/-hKWPQqFupc",
    },
    {
      src:"https://bphimmoi.net/wp-content/uploads/2022/04/nhung-ke-xau-xa-63250-thumbnail-250x350.jpg",
      content:"NHỮNG KẺ XẤU XA",
      describe:"Hành trình trở thành người tốt đầy gay cấn và nhiều tiếng cười của băng đảng những loài thú xấu xa.",
      vid:"https://www.youtube.com/embed/tfGzsarZwRQ",
    },
    {
      src:"https://bphimmoi.net/wp-content/uploads/2022/04/umma-63252-thumbnail-250x350.jpg",
      content:"UMMA",
      describe:"Amanda và con gái sống một cuộc sống yên tĩnh tại một trang trại của Mỹ, nhưng khi hài cốt của người mẹ ghẻ lạnh từ Hàn Quốc đến,...",
      vid:"https://www.youtube.com/embed/QQdXvvtu-iI",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/bao-thanh-thien-co-quan-tai-rong-63256-thumbnail-250x350.jpg",
        content:"BAO THANH THIÊN: CỔ QUAN TÀI RỖNG",
        describe:"Vào những năm đầu của Thiên Kinh thuộc triều đại Bắc Tống, hai anh em nhà họ Tề chuyên tu sửa mộ đã đào được một ngôi mộ đơn độc vào đêm khuya,...",
        vid:"https://www.youtube.com/embed/-hKWPQqFupc",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/song-nhiet-63260-thumbnail-250x350.jpg",
        content:"SÓNG NHIỆT",
        describe:"Một Phụ Nữ Trẻ đầy Tham Vọng, Bắt đầu Làm Việc Cho Một Doanh Nhân Thành đạt Và Giàu Có, Nhưng Lại Vô Tình Dính Líu đến Việc Ngoại Tình Với Vợ Của Anh Ta.",
        vid:"https://www.youtube.com/embed/WYdJTunjxYA",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/nguoi-khong-phai-me-ta-63262-thumbnail-250x350.jpg",
        content:"NGƯƠI KHÔNG PHẢI MẸ TA",
        describe:"Trong Một Khu Nhà ở Bắc Dublin, Mẹ Của Char Mất Tích. Khi Cô Trở Về, Char Quyết Tâm Khám Phá Sự Thật Về Sự Mất Tích Của Cô Và Khai Quật Những Bí Mật đen Tối Của Gia đình Cô.",
        vid:"https://www.youtube.com/embed/AoNbm72YLqA",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/trang-roi-63145-thumbnail-250x350.jpg",
        content:"TRĂNG RƠI",
        describe:"Trăng Rơi - Moonfall mở đầu bộ phim kể về một thế lực bí ẩn đã làm cho mặt trăng ra khỏi quỹ đạo xung quanh Trái Đất, và trong vòng thời gian tới mặt trăng có thể va chạm với...",
        vid:"https://www.youtube.com/embed/DzHqxgcY5Io",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/su-dan-ap-cua-hannah-stevenson-63281-thumbnail-250x350.jpg",
        content:"SỰ ĐÀN ÁP CỦA HANNAH STEVENSON",
        describe:"Một cặp vợ chồng trẻ có kỳ nghỉ nước ngoài đầu tiên cùng nhau. Vậy nhưng, đằng sau nụ cười hạnh phúc của cặp đôi này lại ẩn chứa một niềm khao khát...",
        vid:"https://www.youtube.com/embed/Gs7w0UHAbng",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/tro-choi-bunker-63283-thumbnail-250x350.jpg",
        content:"TRÒ CHƠI BUNKER",
        describe:"Sau một số tai nạn bí ẩn, trò chơi Nhập vai Hành động Trực tiếp bị gián đoạn và người chơi rời boongke trong khi các nhân viên ở lại để điều tra sự biến mất của Greg, kẻ chủ mưu của trò chơi.",
        vid:"https://www.youtube.com/embed/DPcbatQ7Yrk",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/chien-dich-panama-xam-luoc-panama-62793-thumbnail-250x350.jpg",
        content:"CHIẾN DỊCH PANAMA/XÂM LƯỢC PANAMA",
        describe:"Một cựu lính thủy đánh bộ được một nhà thầu quốc phòng thuê đến Panama để hoàn tất một thỏa thuận vũ khí. Trong quá trình đó, anh ta tham gia vào cuộc xâm lược Panama của Hoa Kỳ và...",
        vid:"https://www.youtube.com/embed/Gbdm7vcPdwI",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/morbius-63298-thumbnail-250x350.jpg",
        content:"MORBIUS",
        describe:"Nhà Sinh Hóa Học Michael Morbius Cố Gắng Tự Chữa Khỏi Căn Bệnh Máu Hiếm Gặp, Nhưng Thay Vào đó, Anh Lại Vô Tình Tự Lây Nhiễm Cho Mình Một Dạng Ma Cà Rồng.",
        vid:"https://www.youtube.com/embed/oZ6iiRrz1SY",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/ke-san-moi-2022-63107-thumbnail-250x350.jpg",
        content:"KẺ SĂN MỒI 2022",
        describe:"Một cặp vợ chồng trẻ người Anh cùng du lịch tới vùng biển Caribbean, với hy vọng cứu vãn cuộc hôn nhân đang trên bờ gãy đổ...",
        vid:"https://www.youtube.com/embed/44W65ZrJLVE",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/apollo-10-1-2-thoi-tho-au-o-ky-nguyen-vu-tru-63296-thumbnail-250x350.jpg",
        content:"APOLLO 10 1/2: THỜI THƠ ẤU Ở KỶ NGUYÊN VŨ TRỤ",
        describe:" Một Người đàn ông Kể Lại đời Mình Khi Còn Là Cậu Bé 10 Tuổi ở Houston Năm 1969, Dệt Nên Câu Chuyện Hoài Niệm Qua Chuyến Du Hành Lạ Thường Lên Mặt Trăng.",
        vid:"https://www.youtube.com/embed/Dzuz5s_Qk-A",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/nha-thau-62703-thumbnail-250x350.jpg",
        content:"NHÀ THẦU",
        describe:"Nhà Thầu - The Contractor (2022) xoay quanh câu chuyện của nhân vật James Harper, sau khi tự nguyện giải ngũ khỏi Lực lượng Đặc biệt Hoa Kỳ,...",
        vid:"https://www.youtube.com/embed/W_aj3Jr92Wo",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/nha-co-mot-ta-con-63237-thumbnail-250x350.jpg",
        content:"NHÀ CÓ MỘT TÁ CON",
        describe:"Nhà Có Một Tá Con - Cheaper By The Dozen bố mẹ Baker chuyển đến Chicago sau khi tộc trưởng Tom nhận được công việc huấn luyện bóng đá tại Đại học Northwestern,...",
        vid:"https://www.youtube.com/embed/Wq8Nsc5r2So",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/xe-cap-cuu-63235-thumbnail.jpg",
        content:"XE CẤP CỨU",
        describe:"Xe Cấp Cứu lấy bối cảnh tại thành phố Los Angeles đầy hối hả, sôi động và sầm uất. Cựu binh Will Sharp (Yahya Abdul-Mateen II) vì hoàn cảnh khó khăn nên đã tìm ...",
        vid:"https://www.youtube.com/embed/7NU-STboFeI",
      },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/loveland-63239-thumbnail-250x350.jpg",
        content:"LOVELAND",
        describe:"Trong một tương lai chưa được khám phá, hai linh hồn cứng rắn gặp nhau và đối đầu với nhau về những việc họ đã làm và những gì họ đã trở thành.",
        vid:"https://www.youtube.com/embed/HkysmEjdKkA",
      },
  ]
let phim_le = document.getElementById("phim_le");
for(let i = 0; i< data.length ;i+=4)
{
  let item = `
  <tr>
        <td>
            <div class="movie-list-item">
              <img class="movie-list-item-img" src="${data[i].src}" alt="">
               <span class="movie-list-item-title">${data[i].content}</span>
               <p class="movie-list-item-desc">${data[i].describe}</p>
               <button class="movie-list-item-button">Watch</button>
             </div>
          </td>
          <td>
          <div class="movie-list-item">
            <img class="movie-list-item-img" src="${data[i+1].src}" alt="">
             <span class="movie-list-item-title">${data[i+1].content}</span>
             <p class="movie-list-item-desc">${data[i+1].describe}</p>
             <button class="movie-list-item-button">Watch</button>
           </div>
        </td> <td>
        <div class="movie-list-item">
          <img class="movie-list-item-img" src="${data[i+2].src}" alt="">
           <span class="movie-list-item-title">${data[i+2].content}</span>
           <p class="movie-list-item-desc">${data[i+2].describe}</p>
           <button class="movie-list-item-button">Watch</button>
         </div>
      </td> <td>
      <div class="movie-list-item">
        <img class="movie-list-item-img" src="${data[i+3].src}" alt="">
         <span class="movie-list-item-title">${data[i+3].content}</span>
         <p class="movie-list-item-desc">${data[i+3].describe}</p>
         <button class="movie-list-item-button">Watch</button>
       </div>
    </td>
  </tr>
  `;
  phim_le.innerHTML += (item);
}
//mũi tên
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 310);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//cái đổi màu

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
const modalBtns = document.getElementsByClassName("movie-list-item-button");

for (let i = 0; i < modalBtns.length; i++) {
  // Ở đây chỉ dùng 1 modal để hiển thị thôi
  // Tuy nhiên có nhiều nút bấm
  // Mình sẽ dựa vào nút được bấm để thêm thẻ video tương ứng vào thằng modal
  modalBtns[i].addEventListener("click", () => {
    modal.style.display = "block";
    // Bản quyền thằng youtube hơi mệt :))
    // Lấy src video thì nó k cho dùng bên trang khác
    // Ở đây mình phải dùng iframe mới dùng đc trong trang của mình
    // Nên e phải copy src của cái mã nhúng ấy vanga ạ, ok e làm tiếp đi :0 vvanga j
    item = `
  <span class="close">&times;</span>
  <iframe width="847" height="480" src="${data[i].vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modalc.innerHTML = item;
    close[0].onclick = function () {
      modal.style.display = "none";
      console.log(i);
    };
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
