// 상품개수 세서 "당은 상품 n 개"
document.querySelector('.picked_list .goods_pick_list .pick_list_num strong').innerText = document.getElementsByClassName('item_cont').length;

var prices = document.getElementsByClassName('item_price');
var total = 0;
for (var i = 0; i < prices.length; i++){
  total += parseInt(prices[i].innerText.split("원"));
}
// 가격 총합 계산해서 "가격 n 원"
document.querySelector('.goods_pick_list .pick_list_box .pick_list_cost strong').innerText = total;


// 여기부턴 테스트영역
function Add_item(){
  
  // 현재 아이템 개수
  let nowitemcount = document.getElementsByClassName('item_cont').length;
  
  
  
  var targetArea = document.querySelector('.goods_list .goods_list_cont .item_gallery_type ul');
  let nitem = document.createElement('li');
  nitem.setAttribute('style', 'width:25%; height:max-content;');
  let itemcont = document.createElement('div');
  itemcont.setAttribute('class', 'item_cont');
  let itemphotobox = document.createElement('div');
  itemphotobox.setAttribute('class', 'item_photo_box')
  let na = document.createElement('a');
  let nimg = document.createElement('img');
  nimg.setAttribute('src','https://www.naturestore.co.kr/data/goods/22/01/03/1000006749/1000006749_main_056.jpg');
  nimg.setAttribute('width', '280');
  nimg.setAttribute('class', 'middle');
  
  let nspan = document.createElement('span');
  nspan.setAttribute('class', 'icon_time_sale');
  
  let nimg2 = document.createElement('img');
  nimg2.setAttribute('src', 'https://www.naturestore.co.kr/data/icon/goods_icon/ng_new.gif');
  nimg2.setAttribute('class', 'middle');
  
  
  // item_info_cont
  
  let iteminfocont = document.createElement('div');
  iteminfocont.setAttribute('class', 'item_info_cont');
  let itemtitbox = document.createElement('div');
  itemtitbox.setAttribute('class', 'item_tit_box');
  let infoa = document.createElement('a');
  let infostrong = document.createElement('strong');
  infostrong.setAttribute('class', 'item_name');
  if(nowitemcount % 3 == 1){
    infostrong.innerText = "더 심각하게 비싼 N221USW980 디머 우븐 트레이닝 맨투맨";
  }else if(nowitemcount % 3 == 2){
    infostrong.innerText = "훨씬 더 심각하게 비싼 N221USW980 흑우 디머 우븐 트레이닝 맨투맨";
  }else if(nowitemcount % 3 == 0){
    infostrong.innerText = "N221USW980 말랑말랑 블랙카우 프레스티지 우븐 트레이닝 맨투맨";
  }
  let itemmoneybox = document.createElement('div');
  itemmoneybox.setAttribute('class', 'item_money_box');
  let infostrong2 = document.createElement('strong');
  infostrong2.setAttribute('class', 'item_price');
  let infospan = document.createElement('span');
  infospan.innerText = "10000원";
  
  
  
  infostrong2.appendChild(infospan);
  itemmoneybox.appendChild(infostrong2);
  infoa.appendChild(infostrong);
  itemtitbox.appendChild(infoa);
  iteminfocont.appendChild(itemtitbox);
  iteminfocont.appendChild(itemmoneybox);
  na.appendChild(nimg);
  nspan.appendChild(nimg2);
  na.appendChild(nspan);
  itemphotobox.appendChild(na);
  itemcont.appendChild(itemphotobox);
  itemcont.appendChild(iteminfocont)
  nitem.appendChild(itemcont);
  targetArea.appendChild(nitem);
  
  
  // 상품개수 세서 "당은 상품 n 개"
document.querySelector('.picked_list .goods_pick_list .pick_list_num strong').innerText = document.getElementsByClassName('item_cont').length;

var prices = document.getElementsByClassName('item_price');
var total = 0;
for (var i = 0; i < prices.length; i++){
  total += parseInt(prices[i].innerText.split("원"));
}
// 가격 총합 계산해서 "가격 n 원"
document.querySelector('.goods_pick_list .pick_list_box .pick_list_cost strong').innerText = total;

}