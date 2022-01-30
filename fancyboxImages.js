$('[data-fancybox="group1"').fancybox({
    loop: true,  //laplai khi slide show
    infobar: true, 
    animationEffect: "zoom-in-out",
    animationDuration: 100,
    //cai nay animation la hieu ung va thoi gian
    //xuat hien slide nha
    transitionEffect: "rotate",
    transitionDuration: 500,
    //^^
    //con cai nay la hieu ung chuyen qua slide khac
    buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ],
    //day la nhung button muon hien cai nao thi them cai do
});



