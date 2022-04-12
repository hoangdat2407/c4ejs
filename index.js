const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
let modalc = document.getElementById("myModalc");
let modal = document.getElementById("myModal");
let close = document.getElementsByClassName("close");
//data
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");

let data1 = [
  {
    src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQSh4TKRJY5hSfQl89pupPiDZAT1OO4ZzRAkO1i-fp_51boaNG",
    content: "Shang-Chi và huyền thoại Thập Luân",
    describe:
      "Shang-Chi và huyền thoại Thập Luân là phim siêu anh hùng của Mỹ năm 2021 dựa trên nhân vật Shang-Chi của Marvel Comics.",
    vid: "https://www.youtube.com/embed/7em2Is8ZXtw",
  },
  {
    src: "https://cdn.glitch.global/985312b0-7b91-4363-b32a-64bc94baf2d9/1.jpg?v=1648819096611",
    content: "Venom",
    describe:
      "Eddie Brook sở hữu những năng lực siêu nhiên,và nhân cách anh ta cũng bị thay đổi theo, cũng là lúc đó a ta phải chiến đầu với Life Foundation.",
    vid: "https://www.youtube.com/embed/KmLy1H5hbUo",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOYhHo5d6r5kZ44CQtp1jeuDvWxIPFsQ5Qg&usqp=CAU",
    content: "Hell boy",
    describe:
      "Điều tra viên bán quỷ dị thường đặt dấu hỏi về việc anh bảo vệ con người khi mụ phù thủy bị phân thây trở lại nhân gian để phá.",
    vid: "https://www.youtube.com/embed/xvBh9P6tQHI",
  },
  {
    src: "https://cdn.glitch.global/985312b0-7b91-4363-b32a-64bc94baf2d9/cd3f128c-aaeb-4492-b848-408c33884954.image.png?v=1648819785093",
    content: "Rừng thế mạng",
    describe:
      "Đây là phim Việt Nam đầu tiên về chủ đề sinh tồn. Đây là phim Việt đầu tiên khởi chiếu sau đợt giãn cách lịch sử năm 2021.",
    vid: "https://www.youtube.com/embed/R-5Ryl9djDA",
  },
  {
    src: "https://bilutv.link/film/19075/poster.jpg",
    content: "Ron's Gone Wrong",
    describe:
      "Chú Robot Khác Biệt - Ron's Gone Wrong (2021) là bộ phim thuộc thể loại hoạt hình, hài hước, khoa học viễn tưởng của Mỹ.",
    vid: "https://www.youtube.com/embed/GHefHq-KukY",
  },
  {
    src: "https://webtaiphim.com/upload/img/products/8d860484b6dd3d8e25b99dc9e5b6db1a.jpg",
    content: "Chú chó đỏ khổng lồ",
    describe:
      "Clifford the Big Red Dog là một bộ phim hài phiêu lưu năm 2021 của đạo diễn Walt Becker và dựa trên loạt sách thiếu nhi cùng tên",
    vid: "https://www.youtube.com/embed/rHezY_kYTuA",
  },
];
let data2 = [
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/03/thu-tinh-62791-thumbnail-250x350.jpg",
    content: "Thú Tính",
    describe:
      "Khi hai nữ sinh trung học kiện một thày giáo về tội hiếp dâm, tòa án không hề biết rằng đó chỉ là một trò “ảo thuật” của các cô...",
    vid: "https://www.youtube.com/embed/IO-j4L7tqEQ",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/03/ngon-lua-trai-tim-62606-thumbnail-250x350.jpg",
    content: "Ngọn lửa trái tim",
    describe:
      "Ngọn Lửa Trái Tim - Fireheart, Fireheart 2022 Full Georgia Nolan, 16 Tuổi, ước Mơ Trở Thành Nữ Lính Cứu Hỏa đầu Tiên Trên Thế Giới...",
    vid: "https://www.youtube.com/embed/g1-7ov3x53o",
  },
  {
    src: "https://cdn.glitch.global/985312b0-7b91-4363-b32a-64bc94baf2d9/cd3f128c-aaeb-4492-b848-408c33884954.image.png?v=1648819785093",
    content: "Rừng thế mạng",
    describe:
      "Đây là phim Việt Nam đầu tiên về chủ đề sinh tồn. Đây là phim Việt đầu tiên khởi chiếu sau đợt giãn cách lịch sử năm 2021...",
    vid: "https://www.youtube.com/embed/R-5Ryl9djDA",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/02/khong-loi-thoat-2022-62382-thumbnail.jpg",
    content: "Không lối thoát",
    describe:
      "Không Lối Thoát - No Exit 2022: Một sinh viên đại học, trên đường thăm mẹ về nhà, bị mắc kẹt với một nhóm người tại một điểm dừng chân trên núi ...",
    vid: "https://www.youtube.com/embed/bG5pCZq1960",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/01/phuc-thu-cuoc-doi-61074-thumbnail.jpg",
    content: "Phục thù cuộc đời",
    describe:
      "Phục Thù Cuộc Đời - Tokyo Revengers, Tokyo Revengers 2021 Full Takemichi Hanagaki Sống Như Một Vận động Viên Tự Do 26 Tuổi. Cuộc Sống Của Anh ấy Về Cơ Bản Là Khốn Khổ...",
    vid: "https://www.youtube.com/embed/9E2US-JyalM",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/01/cuoc-vay-ham-tu-than-60732-thumbnail.jpg",
    content: "Cuộc vây hãm tử thần",
    describe:
      "Một Cựu Quân Nhân Làm Việc Tại Một Nhà Máy điện Georgia Phải Bắt Tay Vào Hành động để Ngăn Chặn Thảm Họa Khi Một Nhóm Binh Lính Bất Hảo Giành Quyền Kiểm Soát Nhà Máy...",
    vid: "https://www.youtube.com/embed/95MSxHvbuLQ",
  },
];
let data3 = [
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/nguoi-khong-phai-me-ta-63262-thumbnail-250x350.jpg",
    content: "NGƯƠI KHÔNG PHẢI MẸ TA",
    describe:
      "Ngươi Không Phải Mẹ Ta - You Are Not My Mother, You Are Not My Mother 2021 Full Trong Một Khu Nhà ở Bắc Dublin, Mẹ Của Char Mất Tích...",
    vid: "https://www.youtube.com/embed/AoNbm72YLqA",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/song-nhiet-63260-thumbnail-250x350.jpg",
    content: "SÓNG NHIỆT",
    describe:
      "Sóng Nhiệt - Heatwave, Heatwave 2022 Full Claire, Một Phụ Nữ Trẻ đầy Tham Vọng, Bắt đầu Làm Việc Cho Một Doanh Nhân Thành đạt Và Giàu Có,...",
    vid: "https://www.youtube.com/embed/WYdJTunjxYA",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/hung-su-thieu-nien-63258-thumbnail-250x350.jpg",
    content: "HÙNG SƯ THIẾU NIÊN",
    describe:
      "Hùng Sư Thiếu Niên kể về câu chuyện của cậu thiếu niên bị bỏ rơi A Quyên cùng những người bạn A Miêu A Cẩu tham gia cuộc thi múa lân...",
    vid: "https://www.youtube.com/embed/RnVfTARFPA0",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/bao-thanh-thien-co-quan-tai-rong-63256-thumbnail-250x350.jpg",
    content: "BAO THANH THIÊN: CỔ QUAN TÀI RỖNG",
    describe:
      "Vào những năm đầu của Thiên Kinh thuộc triều đại Bắc Tống, hai anh em nhà họ Tề chuyên tu sửa mộ đã đào được một ngôi mộ...",
    vid: "https://www.youtube.com/embed/-hKWPQqFupc",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/nhung-ke-xau-xa-63250-thumbnail-250x350.jpg",
    content: "NHỮNG KẺ XẤU XA",
    describe:
      "Hành trình trở thành người tốt đầy gay cấn và nhiều tiếng cười của băng đảng những loài thú xấu xa.",
    vid: "https://www.youtube.com/embed/tfGzsarZwRQ",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/umma-63252-thumbnail-250x350.jpg",
    content: "UMMA",
    describe:
      "Amanda và con gái sống một cuộc sống yên tĩnh tại một trang trại của Mỹ, nhưng khi hài cốt của người mẹ ghẻ lạnh từ Hàn Quốc đến,...",
    vid: "https://www.youtube.com/embed/QQdXvvtu-iI",
  },
];
let data4 = [
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/hung-su-thieu-nien-63258-thumbnail-250x350.jpg",
    content: "HÙNG SƯ THIẾU NIÊN",
    describe:
      "Hùng Sư Thiếu Niên kể về câu chuyện của cậu thiếu niên bị bỏ rơi A Quyên cùng những người bạn A Miêu A Cẩu tham gia cuộc thi múa lân...",
    vid: "https://www.youtube.com/embed/RnVfTARFPA0",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/04/nhung-ke-xau-xa-63250-thumbnail-250x350.jpg",
    content: "NHỮNG KẺ XẤU XA",
    describe:
      "Hành trình trở thành người tốt đầy gay cấn và nhiều tiếng cười của băng đảng những loài thú xấu xa.",
    vid: "https://www.youtube.com/embed/tfGzsarZwRQ",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/03/mashin-eiyuuden-wataru-shichikon-no-ryuujinmaru-63081-thumbnail.jpg",
    content: "MASHIN EIYUUDEN WATARU: SHICHIKON NO RYUUJINMARU",
    describe:
      "Mashin Eiyuuden Wataru: Shichikon No Ryuujinmaru, 2020 Anime Mt. Soukai đang Gặp Nguy Hiểm Và Wataru đã ở đây để Cứu Nó Một Lần Nữa...",
    vid: "https://www.youtube.com/embed/nYKO8xr52os",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/03/pocket-monsters-kami-to-yobareshi-arceus-63079-thumbnail-250x350.jpg",
    content: "POCKET MONSTERS: KAMI TO YOBARESHI ARCEUS",
    describe:
      "Pocket Monsters: Kami To Yobareshi Arceus, 2022 Anime Câu Chuyện Lấy Bối Cảnh ở Vùng Sinnoh: Satoshi Và Go Gặp Lại Nhiều đồng đội Hoài Niệm Như Hikari,...",
    vid: "https://www.youtube.com/embed/NqWsTxUgh6Y",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/03/chip-va-potato-63077-thumbnail-250x350.jpg",
    content: "CHIP VÀ POTATO",
    describe:
      "Chip Và Potato - Chip & Potato, 2019 Anime Chip, Cô Chó Pug đáng Yêu, Bắt đầu đi Học Mầm Non, Kết Bạn Mới Và Thử Những điều Mới – Với Chút Trợ Giúp Từ Potato,...",
    vid: "https://www.youtube.com/embed/o_N_y_HeOls",
  },
  {
    src: "https://bphimmoi.net/wp-content/uploads/2022/03/delicious-party-e2-99-a1precure-63035-thumbnail.jpg",
    content: "DELICIOUS PARTY♡PRECURE",
    describe:
      "Delicious Party♡Precure, 2022 Anime Một Phần Về Precure Mới. Băng đảng Bundoru đã đánh Cắp Cuốn Sách Recipe – Báu Vật Của CooKingdom (Vương Quốc Nấu Nướng) ...",
    vid: "https://www.youtube.com/embed/Nqe_8u18qt4",
  },
];

for (let i = 0; i <= 5; ++i) {
  let item = ` 
  <div class="movie-list-item">
  <img class="movie-list-item-img" src="${data1[i].src}" alt="">
  <span class="movie-list-item-title">${data1[i].content}</span>
  <p class="movie-list-item-desc">${data1[i].describe}</p>
  <button class="movie-list-item-button">Watch</button>
</div>
`;
  container1.innerHTML += item;
}
for (let i = 0; i <= 5; ++i) {
  let item = ` 
  <div class="movie-list-item">
  <img class="movie-list-item-img" src="${data2[i].src}" alt="">
  <span class="movie-list-item-title">${data2[i].content}</span>
  <p class="movie-list-item-desc">${data2[i].describe}</p>
  <button class="movie-list-item-button">Watch</button>
</div>
`;
  container2.innerHTML += item;
}
for (let i = 0; i <= 5; ++i) {
  let item = ` 
  <div class="movie-list-item">
  <img class="movie-list-item-img" src="${data3[i].src}" alt="">
  <span class="movie-list-item-title">${data3[i].content}</span>
  <p class="movie-list-item-desc">${data3[i].describe}</p>
  <button class="movie-list-item-button">Watch</button>
</div>
`;
  container3.innerHTML += item;
}
for (let i = 0; i <= 5; ++i) {
  let item = ` 
  <div class="movie-list-item">
  <img class="movie-list-item-img" src="${data4[i].src}" alt="">
  <span class="movie-list-item-title">${data4[i].content}</span>
  <p class="movie-list-item-desc">${data4[i].describe}</p>
  <button class="movie-list-item-button">Watch</button>
</div>
`;
  container4.innerHTML += item;
}

//mũi tên
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 300);
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

  console.log(Math.floor(window.innerWidth / 300));
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

// add modal for all button
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
    let num = i,item;
    if (num < data1.length) {
     item = `
      <span class="close">&times;</span>
      <iframe width="853" height="480" src="${data1[i].vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } 
   else {
      num -= data1.length;
      if (num < data2.length) {
        item = `
  <span class="close">&times;</span>
  <iframe width="847" height="480" src="${data2[num].vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 `;
      } else {
        num -= data2.length;
        if (num < data3.length) {
          item = `
  <span class="close">&times;</span>
  <iframe width="847" height="480" src="${data3[num].vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 `;
        } else {
          num -= data3.length;
         item = `
  <span class="close">&times;</span>
  <iframe width="847" height="480" src="${data4[num].vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
      }
    }
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
