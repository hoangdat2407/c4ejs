let modalc = document.getElementById("myModalc");
let modal = document.getElementById("myModal");
let close = document.getElementsByClassName("close");
//data
let data = [
    {
        src:"https://cdn.phimbo.tv/images/poster_au-trung-tinh-nghich-phan-4.jpg",
        content:" ẤU TRÙNG TINH NGHỊCH",
        describe:"Một bộ phim hoạt hình hài hước về những chú ấu trùng nghịch ngợm",
        vid:"https://www.youtube.com/embed/LOujPELp-wQ",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/hung-su-thieu-nien-63258-thumbnail-250x350.jpg",
        content:"HÙNG SƯ THIẾU NIÊN",
        describe:"Hùng Sư Thiếu Niên kể về câu chuyện của cậu thiếu niên bị bỏ rơi A Quyên cùng những người bạn A Miêu A Cẩu tham gia cuộc thi múa lân...",
        vid:"https://www.youtube.com/embed/RnVfTARFPA0",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/04/nhung-ke-xau-xa-63250-thumbnail-250x350.jpg",
        content:"NHỮNG KẺ XẤU XA",
        describe:"Hành trình trở thành người tốt đầy gay cấn và nhiều tiếng cười của băng đảng những loài thú xấu xa.",
        vid:"https://www.youtube.com/embed/tfGzsarZwRQ",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/mashin-eiyuuden-wataru-shichikon-no-ryuujinmaru-63081-thumbnail.jpg",
        content:"MASHIN EIYUUDEN WATARU: SHICHIKON NO RYUUJINMARU",
        describe:"Mashin Eiyuuden Wataru: Shichikon No Ryuujinmaru, 2020 Anime Mt. Soukai đang Gặp Nguy Hiểm Và Wataru đã ở đây để Cứu Nó Một Lần Nữa...",
        vid:"https://www.youtube.com/embed/nYKO8xr52os",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/pocket-monsters-kami-to-yobareshi-arceus-63079-thumbnail-250x350.jpg",
        content:"POCKET MONSTERS: KAMI TO YOBARESHI ARCEUS",
        describe:"Câu Chuyện Lấy Bối Cảnh ở Vùng Sinnoh: Satoshi Và Go Gặp Lại Nhiều đồng đội Hoài Niệm Như Hikari, Gặp Gỡ Pokémon Huyền ảo Mang Danh Là Vị Thần,...",
        vid:"https://www.youtube.com/embed/NqWsTxUgh6Y",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/chip-va-potato-63077-thumbnail-250x350.jpg",
        content:"CHIP VÀ POTATO",
        describe:"Chip, Cô Chó Pug đáng Yêu, Bắt đầu đi Học Mầm Non, Kết Bạn Mới Và Thử Những điều Mới – Với Chút Trợ Giúp Từ Potato, Người Bạn Chuột Bí Mật Của Cô.",
        vid:"https://www.youtube.com/embed/o_N_y_HeOls",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/delicious-party-e2-99-a1precure-63035-thumbnail.jpg",
        content:"DELICIOUS PARTY♡PRECURE",
        describe:" Băng đảng Bundoru đã đánh Cắp Cuốn Sách Recipe – Báu Vật Của CooKingdom (Vương Quốc Nấu Nướng) Và Thu Thập Các Recipepe để Thực Hiện Một ý đồ Xấu Xa...",
        vid:"https://www.youtube.com/embed/Nqe_8u18qt4",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/tinh-mong-phan-4-63026-thumbnail-250x350.jpg",
        content:"TỈNH MỘNG (PHẦN 4)",
        describe:"Trách Nhiệm Tạm Gạt Sang Một Bên, Say Xỉn đã Rồi Hẵng Tính. Công Chúa Bean Làm Vua Cha Phát điên Khi Nàng Phá Phách Khắp Nơi Với Lũ Bạn Quỷ Và Gia Tinh Của Mình.",
        vid:"https://www.youtube.com/embed/M47YkrfjrXQ",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/01/nhung-ngay-cua-dug-61458-thumbnail.jpg",
        content:"NHỮNG NGÀY CỦA DUG",
        describe:"Carl , ông già hay cằn nhằn quen thuộc trong tác phẩm Up, đã bán căn hộ của mình và mua một căn nhà gỗ, sống chung với chú chó Dug. Dug là chú chó tinh nghịch,... ",
        vid:"https://www.youtube.com/embed/K04CqwFx6rw",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/01/chu-meo-may-den-tu-tuong-lai-61295-thumbnail.jpg",
        content:"CHÚ MÈO MÁY ĐẾN TỪ TƯƠNG LAI",
        describe:"Doraemon là một chú mèo máy đến từ thế kỷ 22. Doraemon đến thế kỷ 20 và ở lại với gia đình Nobi. Nobita là cậu bé hậu đậu và được Doraemon giúp đỡ cậu bằng ...  ",
        vid:"https://www.youtube.com/embed/mdRFU4nCb2g",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/01/naruto-phan-1-61375-thumbnail.jpg",
        content:"NARUTO (PHẦN 1)",
        describe:" Nhân vật chính là Uzumaki Naruto, một thiếu niên ồn ào, hiếu động, một ninja luôn muốn tìm cách khẳng định mình để được mọi người công nhận, rất muốn trở thành Hokage ...",
        vid:"https://www.youtube.com/embed/-SBBef-OEiE",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/01/doraemon-nobita-va-cuoc-phieu-luu-duoi-long-dat-61327-thumbnail.jpg",
        content:"DORAEMON: NOBITA VÀ CUỘC PHIÊU LƯU DƯỚI LÒNG ĐẤT",
        describe:"Doraemon đã tạo ra một hang động dưới lòng đất để cho mọi người nghỉ ngơi, và sẵn đó Nobita có thể giấu đi những bài kiểm tra điểm 0. Nhưng không may Suneo đã bị lạc...",
        vid:"https://www.youtube.com/embed/7IAQGoGQfBo",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/pocket-monsters-kami-to-yobareshi-arceus-63079-thumbnail-250x350.jpg",
        content:"POCKET MONSTERS:KAMI TO YOBARESHI ARCEUS",
        describe:"Satoshi Và Go Gặp Lại Nhiều đồng đội Hoài Niệm Như Hikari, Gặp Gỡ Pokémon Huyền ảo Mang Danh Là Vị Thần, Arceus Cùng Với Bộ 3 Pokémon Huyền Thoại Agnome, Yuxie, Emrit...",
        vid:"https://www.youtube.com/embed/-3vzQ_XPQUk",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/adam-cua-eve-buoi-hoa-nhac-hoat-hoa-62617-thumbnail-250x350.jpg",
        content:"ADAM CỦA EVE: BUỔI HÒA NHẠC HOẠT HỌA",
        describe:"Anime, phim người đóng và âm nhạc của nghệ sĩ tân tiến Eve – tất cả hòa quyện thành trải nghiệm âm thanh đẹp như mơ, lấy cảm hứng từ câu chuyện của Adam và Eve.",
        vid:"https://www.youtube.com/embed/QoSrvtj0YM8",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/03/belle-rong-va-cong-chua-tan-nhang-62432-thumbnail.jpg",
        content:"BELLE: RỒNG VÀ CÔNG CHÚA TÀN NHANG",
        describe:"Belle: Rồng Và Công Chúa Tàn Nhang, Ryuu To Sobakasu No Hime (2022)Phim kể câu chuyện về cô bé Suzu Naito - nữ sinh 17 tuổi sống cùng cha tại thành phố Kochi xinh đẹp...",
        vid:"https://www.youtube.com/embed/JmJvzgq3VFM",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/02/love-live-single-61983-thumbnail.jpg",
        content:"LOVE LIVE! SINGLE",
        describe:"5 Single của Love Live!",
        vid:"https://www.youtube.com/embed/3WOzeKu2hjw",
    },
    {
        src:"https://upload.wikimedia.org/wikipedia/vi/b/b3/Your_Name_novel.jpg",
        content:"YOUR NAME",
        describe:"là bộ phim hoạt hình Nhật Bản được đạo diễn Shinkai Makoto thổi hồn và trở thành một trong những bộ anime ăn khách nhất mọi thời đại, vươn lên tầm cỡ toàn cầu và thống trị nhiều phòng vé trên toàn thế giới...",
        vid:"https://www.youtube.com/embed/_mifHzxFNQ4",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/01/khi-muon-khoc-toi-deo-mat-na-meo-60490-thumbnail.jpg",
        content:"KHI MUỐN KHÓC, TÔI ĐEO MẶT NẠ MÈO",
        describe:"Một câu chuyện lãng mạn lấy bối cảnh ở tại thành phố Tokoname ở tỉnh Aichi. Nhân vật chính là một nữ sinh trung học năm hai lập dị tên là Miyo Sasaki, cô yêu thầm người bạn cùng lớp của mình là Kento Hinode và...",
        vid:"https://www.youtube.com/embed/ICSdpY6UELs",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2022/01/bao-boi-than-ky-60540-thumbnail.jpg",
        content:"BẢO BỐI THẦN KỲ",
        describe:"Pokémon là tên một bộ anime nhiều tập, và cũng là tên của một loại trò chơi điện tử và đồ chơi đang thịnh hành ở Mỹ, Nhật và các quốc gia khác trên thế giới...",
        vid:"https://www.youtube.com/embed/UEs5QlsQakk",
    },
    {
        src:"https://bphimmoi.net/wp-content/uploads/2021/12/nhoc-trum-di-lam-lai-phan-4-59805-thumbnail.jpg",
        content:"NHÓC TRÙM: ĐI LÀM LẠI (PHẦN 4)",
        describe:"Với Một Chút Giúp đỡ Từ Anh Trai Và đồng Phạm Của Mình, Tim, Boss Baby Cố Gắng Cân Bằng Cuộc Sống Gia đình Với Công Việc Của Mình Tại Trụ Sở Baby Corp.",
        vid:"https://www.youtube.com/embed/SnIvcQQWyL0",
    },
  
  ]
let phim_hoat_hinh = document.getElementById("phim_hoat_hinh");
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
  phim_hoat_hinh.innerHTML += (item);
}

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
