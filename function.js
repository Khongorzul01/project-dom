const news = [
  {
    title: "Хавар эхлэх бүтээн байгуулалтууд",
    date: "2022.02.02",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
  },
  {
    title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
    date: "2022.02.02",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
  },
  {
    title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
    date: "2022.01.31.",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
  },
  {
    title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
    date: "2022.02.06",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
  },
  {
    title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
    date: "2022.01.06",
    type: "спорт",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
  },
  {
    title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
    date: "2022.01.16",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
  },
  {
    title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
    date: "2022.01.17",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
  },
  {
    title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
    date: "2022.01.13",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
  },
  {
    title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
    date: "2022.01.27",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
  },
];

//5 ширхэг button
function button1() {
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn1");
  btn.setAttribute("class", "btn");
  let text1 = document.createTextNode("Sort Up");
  btn.appendChild(text1);
  document.querySelector("#navbar").appendChild(btn);

  let btn2 = document.createElement("button");
  btn2.setAttribute("id", "btn2");
  btn2.setAttribute("class", "btn");
  let text2 = document.createTextNode("Sort Down");
  btn2.appendChild(text2);
  document.querySelector("#navbar").appendChild(btn2);

  let btn3 = document.createElement("button");
  btn3.setAttribute("id", "btn3");
  btn3.setAttribute("class", "btn");
  let text3 = document.createTextNode("бүх мэдээ");
  btn3.appendChild(text3);
  document.querySelector("#navbar").appendChild(btn3);

  let btn4 = document.createElement("button");
  btn4.setAttribute("id", "btn4");
  btn4.setAttribute("class", "btn");
  let text4 = document.createTextNode("Улс төр");
  btn4.appendChild(text4);
  document.querySelector("#navbar").appendChild(btn4);

  let btn5 = document.createElement("button");
  btn5.setAttribute("id", "btn5");
  btn5.setAttribute("class", "btn");
  let text5 = document.createTextNode("Спорт");
  btn5.appendChild(text5);
  document.querySelector("#navbar").appendChild(btn5);
}
button1();
//энд generateHtmlElement() фүнкцийг бич!
function generateHtmlElement(array1) {
  array1.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "singleNews");

    //<h2>fgbndmfghjrt</h2>
    let header1 = document.createElement("h2");
    let title = document.createTextNode(e.title);
    header1.appendChild(title);
    let date1 = document.createTextNode(e.date);
    header1.setAttribute("type", "" + e.type);
    let image = document.createElement("img");
    image.setAttribute("src", "" + e.pic_url);
    div.appendChild(header1);
    div.appendChild(date1);
    div.appendChild(image);

    document.querySelector("#mainNews").appendChild(div);
  });
}
// generateHtmlElement(news);

// sort up function
document.querySelector("#btn1").addEventListener("click", () => {
  removeHtmlElement();
  let array2 = news.sort((e1, e2) => {
    if (e1.date > e2.date) {
      return -1;
    } else {
      return 1;
    }
  });
  generateHtmlElement(array2);
});

document.querySelector("#btn2").addEventListener("click", () => {
  removeHtmlElement();
  let array3 = news.sort((el1, el2) => {
    if (el1.date < el2.date) {
      return -1;
    } else {
      return 1;
    }
  });
  generateHtmlElement(array3);
});

document.querySelector("#btn3").addEventListener("click", () => {
  removeHtmlElement();
  generateHtmlElement(news);
});

document.querySelector("#btn4").addEventListener("click", () => {
  removeHtmlElement();
  let array4 = news.filter((etype) => {
    return etype.type === "улс төр";
  });
  generateHtmlElement(array4);
});

document.querySelector("#btn5").addEventListener("click", () => {
  removeHtmlElement();
  let array5 = news.filter((etype1) => {
    return etype1.type === "спорт";
  });
  generateHtmlElement(array5);
});

//энд removeHtmlElement() фүнкцийг бич!

function removeHtmlElement() {
  let removeNews = document.querySelectorAll(".singleNews");
  removeNews.forEach((e) => {
    e.remove();
  });
}
