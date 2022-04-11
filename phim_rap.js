const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
//data
let data =[
  {
    src : "https://bphimmoi.net/wp-content/uploads/2022/03/thu-tinh-62791-thumbnail-250x350.jpg",
    content : "Thú Tính",
    describe : "Khi hai nữ sinh trung học kiện một thày giáo về tội hiếp dâm, tòa án không hề biết rằng đó chỉ là một trò “ảo thuật” của các cô...",
  },
  {
    src : "https://bphimmoi.net/wp-content/uploads/2022/03/ngon-lua-trai-tim-62606-thumbnail-250x350.jpg",
    content : "Ngọn lửa trái tim",
    describe : "Ngọn Lửa Trái Tim - Fireheart, Fireheart 2022 Full Georgia Nolan, 16 Tuổi, ước Mơ Trở Thành Nữ Lính Cứu Hỏa đầu Tiên Trên Thế Giới...",
  },
  {
    src : "https://cdn.glitch.global/985312b0-7b91-4363-b32a-64bc94baf2d9/cd3f128c-aaeb-4492-b848-408c33884954.image.png?v=1648819785093",
    content : "Rừng thế mạng",
    describe : "Đây là phim Việt Nam đầu tiên về chủ đề sinh tồn. Đây là phim Việt đầu tiên khởi chiếu sau đợt giãn cách lịch sử năm 2021...",
  },
  {
    src : "https://bphimmoi.net/wp-content/uploads/2022/02/khong-loi-thoat-2022-62382-thumbnail.jpg",
    content : "Không lối thoát",
    describe : "Không Lối Thoát - No Exit 2022: Một sinh viên đại học, trên đường thăm mẹ về nhà, bị mắc kẹt với một nhóm người tại một điểm dừng chân trên núi trong một trận bão tuyết...",
  },
  {
    src : "https://bphimmoi.net/wp-content/uploads/2022/01/phuc-thu-cuoc-doi-61074-thumbnail.jpg",
    content : "Phục thù cuộc đời",
    describe : "Phục Thù Cuộc Đời - Tokyo Revengers, Tokyo Revengers 2021 Full Takemichi Hanagaki Sống Như Một Vận động Viên Tự Do 26 Tuổi. Cuộc Sống Của Anh ấy Về Cơ Bản Là Khốn Khổ...",
  },
  {
    src : "https://bphimmoi.net/wp-content/uploads/2022/01/cuoc-vay-ham-tu-than-60732-thumbnail.jpg",
    content : "Cuộc vây hãm tử thần",
    describe : "Một Cựu Quân Nhân Làm Việc Tại Một Nhà Máy điện Georgia Phải Bắt Tay Vào Hành động để Ngăn Chặn Thảm Họa Khi Một Nhóm Binh Lính Bất Hảo Giành Quyền Kiểm Soát Nhà Máy ...",
  },
  {
    src : "https://webtaiphim.com/upload/img/products/8d860484b6dd3d8e25b99dc9e5b6db1a.jpg",
    content : "Chú chó đỏ khổng lồ",
    describe : "Clifford the Big Red Dog là một bộ phim hài phiêu lưu năm 2021 của đạo diễn Walt Becker và dựa trên loạt sách thiếu nhi cùng tên",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2021/12/dau-truong-am-nhac-2-57002-thumbnail-250x350.jpg",
    content:"Đấu trường âm nhạc",
    describe:"Đấu Trường m Nhạc 2 - Sing 2 (2021) đánh dấu sự trở lại của gấu koala Buster với một kế hoạch vĩ đại mới quyết định số phận của nhóm bạn trong tương lai...",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2021/12/blackpink-the-movie-58667-thumbnail.jpg",
    content:"BLACKPINK THE MOVIE",
    describe:"BLACKPINK Sẽ Kỷ Niệm Năm Thứ 5 Hoạt động Của Nhóm Với Việc Phát Hành BLACKPINK THE MOVIE, đây Cũng Như Là Món Quà đặc Biệt Dành Tặng Cho Các BLINK— Fandom Của BLACKPINK...",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg",
    content:"NGƯỜI NHỆN: KHÔNG CÒN NHÀ",
    describe:"Spider-Man: No Way Home 2021 CAM Với Danh Tính Của Người Nhện Giờ đã được Tiết Lộ, Peter Nhờ Doctor Strange Giúp đỡ. Khi Một Câu Thần Chú Bị Sai,...",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2022/04/xe-cap-cuu-63235-thumbnail.jpg",
    content:"Xe cấp cứu",
    describe:"Xe Cấp Cứu lấy bối cảnh tại thành phố Los Angeles đầy hối hả, sôi động và sầm uất. Cựu binh Will Sharp (Yahya Abdul-Mateen II) vì hoàn cảnh khó khăn...",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2022/03/tuoi-62602-thumbnail-250x350.jpg",
    content:"Tươi",
    describe:"Tươi - Fresh, Fresh 2022 Full Sự Khủng Khiếp Của Việc Hẹn Hò Thời Hiện đại được Chứng Kiến ​​qua Cuộc Chiến Bất Chấp Của Một Cô Gái Trẻ để Tồn Tại Sự Thèm Muốn Khác Thường Của Bạn Trai Mới",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2022/03/cau-chuyen-phia-tay-62436-thumbnail.jpg",
    content:"Câu chuyện của phía tây",
    describe:"Câu Chuyện Phía Tây” Kể Lại Câu Chuyện Tình Yêu Kinh điển Của Tony Và Maria, Giữa Sự Giằng Xé Của Tình Yêu Trẻ Tuổi Và Sự Ngăn Cấm, Thù Hằn ở Thành Phố NewYork Những Năm 1950.",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2022/02/vi-62217-thumbnail.jpg",
    content:"Taste",
    describe:"Vị – Taste nói về Bassley, một cầu thủ bóng đá người Nigeria sống ở Việt Nam, đã không thể kiếm sống kể từ khi bị gãy chân...",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2022/02/doi-dac-nhiem-ten-62071-thumbnail.jpg",
    content:"ĐỘI ĐẶC NHIỆM TEN",
    describe:"Phim Đội Đặc Nhiệm TEN Nội dung phim Đội Đặc Nhiệm TEN: Special Affairs Team TEN là một đội điều tra hình sự chuyên điều tra về những tên tội phạm hung hãn nhất ở Hàn Quốc...",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2021/12/tia-chop-murali-59750-thumbnail.jpg",
    content:"TIA CHỚP MURALI",
    describe:"Tia Chớp Murali - Minnal Murali, Minnal Murali 2021 Full Bộ Phim Xoay Quanh Nhân Vật Chính Murali Do Tovino Thomas Thủ Vai, Người Bị Sét đánh Và Có được Sức Mạnh Siêu Nhiên.",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2021/12/giang-sinh-8-bit-59743-thumbnail.jpg",
    content:"GIÁNG SINH 8-BIT",
    describe:"Giáng Sinh 8-Bit - 8-Bit Christmas, 8-Bit Christmas 2021 Full Vào Những Năm 1980 ở Chicago, Một Cậu Bé 10 Tuổi Bắt đầu Hành Trình Tìm Kiếm Món Quà Giáng Sinh Của Thế Hệ Mình:...",
  },
  {
    src : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQSh4TKRJY5hSfQl89pupPiDZAT1OO4ZzRAkO1i-fp_51boaNG",
    content : "Shang-Chi và huyền thoại Thập Luân",
    describe : "Shang-Chi và huyền thoại Thập Luân là phim siêu anh hùng của Mỹ năm 2021 dựa trên nhân vật Shang-Chi của Marvel Comics.",
  },
  {
    src:"https://bphimmoi.net/wp-content/uploads/2021/08/61075ee3d0506-250x350.jpg",
    content:"AINBO: NỮ CHIẾN BINH AMAZON",
    describe:"Phim về nữ chiến binh tài giỏi Ainbo...",
},
{
    src:"https://bphimmoi.net/wp-content/uploads/2021/08/paw-patrol-phim-doi-dac-nhiem-sieu-dang-50700-thumbnail.jpg",
    content:"PAW PATROL: PHIM ĐỘI ĐẶC NHIỆM SIÊU ĐẲNG",
    describe:"Ryder và những chú chuột con được gọi đến Adventure City để ngăn cản Thị trưởng Humdinger biến thành phố nhộn nhịp thành một trạng thái hỗn loạn.",
},


]
let phim_rap = document.getElementById("phim_rap");
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
  phim_rap.innerHTML += (item);
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