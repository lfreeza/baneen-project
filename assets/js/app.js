data = [
    { 
      "id": "1i6dW1yKY30",
      "link": "https://www.youtube.com/embed/1i6dW1yKY30?autoplay=1",
      "title": "Mengenal Transportasi Kereta Api - Rodja Ceria"
    },
    {
      "id": "8XjS2_Dm4Sc",
      "link": "https://www.youtube.com/embed/8XjS2_Dm4Sc?autoplay=1",
      "title": "Manfaat Olahraga - Rodja Ceria"
    },
    {
      "id": "ywpHWx-l500",
      "link": "https://www.youtube.com/embed/ywpHWx-l500?autoplay=1",
      "title": "Serial Mengenal Angka : Mengenal Angka 1-5 (Tema: Laut) - Yufid Kids"
    },
    {
      "id": "H03MXiIn-N4",
      "link": "https://www.youtube.com/embed/H03MXiIn-N4?autoplay=1",
      "title": "Doa Masuk Masjid (Kartun Anak) - Yufid Kids"
    },
    {
      "id": "dA7NWgqhFEQ",
      "link": "https://www.youtube.com/embed/dA7NWgqhFEQ?autoplay=1",
      "title": "Membiasakan Kalimat Thayyibah: Masya Allah! - Yufid Kids"
    },
    {
      "id": "RYigSQDwWYU",
      "link": "https://www.youtube.com/embed/RYigSQDwWYU?autoplay=1",
      "title": "Manfaat dan Tips Berenang - Rodja Ceria Episode"
    },
    {
      "id": "DTNOOnRXR9c",
      "link": "https://www.youtube.com/embed/DTNOOnRXR9c?autoplay=1",
      "title": "Video Anak-Anak: Kutahu Nama Kendaraan - Yufid Kids"
    },
    {
      "id": "niuOpS8lEOo",
      "link": "https://www.youtube.com/embed/niuOpS8lEOo?autoplay=1",
      "title": "Belajar Berternak Lele - Rodja Ceria"
    },
    {
      "id": "SiteXjYVGEQ",
      "link": "https://www.youtube.com/embed/SiteXjYVGEQ?autoplay=1",
      "title": "Adab-Adab Berbakti kepada Orang Tua - Rodja Ceria"
    }
  ];
  var v1= document.getElementById("vid1");
  var v2= document.getElementById("vid2");
  var v3= document.getElementById("vid3");
  var v4= document.getElementById("vid4");
  var v5= document.getElementById("vid5");
  var v6= document.getElementById("vid6");
  var v7= document.getElementById("vid7");
  var v8= document.getElementById("vid8");
  var v9= document.getElementById("vid9");

v1.children.src = "https://img.youtube.com/vi/"+data[0].id+"/hqdefault.jpg";
v1.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[0].title;
    document.getElementById("vidPlayer").src = data[0].link;     
});

v2.children.src = "https://img.youtube.com/vi/"+data[1].id+"/hqdefault.jpg";
v2.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[1].title;
    document.getElementById("vidPlayer").src = data[1].link;     
});

v3.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[2].title;
    document.getElementById("vidPlayer").src = data[2].link;     
});

v4.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[3].title;
    document.getElementById("vidPlayer").src = data[3].link;     
});

v5.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[4].title;
    document.getElementById("vidPlayer").src = data[4].link;     
});

v6.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[5].title;
    document.getElementById("vidPlayer").src = data[5].link;     
});

v7.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[6].title;
    document.getElementById("vidPlayer").src = data[7].link;     
});

v8.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[7].title;
    document.getElementById("vidPlayer").src = data[7].link;     
});

v9.addEventListener("click", function(){
    $('#modalVidPlayer').modal('show');
    document.getElementById("videoTitle").innerHTML = data[8].title;
    document.getElementById("vidPlayer").src = data[8].link;     
});

$('#modalVidPlayer').on('hide.bs.modal', function(){
    document.getElementById("vidPlayer").src = '';
});