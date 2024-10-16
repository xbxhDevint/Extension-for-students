
function clickElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.click();
        console.log(`하앙 눌러버려 ${selector} !!!!`);
    } else {
        console.error('어딧지 지스팟이');
    }
}

for (i = 0;, i < Math.floor(study.data.length / 10);, i++) {
  for (i = 0; i < 10; i++) {
    clickElement('.CardItem .card-cover');
    setTimeout(() => clickElement('.btn-success'), 150);
    setTimeout(, 150);
  }
}
if (study.data.length % 10 < 5) {
  for (i = 0;, i < study.data.length % 10;, i++) {
    clickElement('.CardItem .card-cover');
    setTimeout(() => clickElement('.btn-success'), 150);
    setTimeout(, 150);
  }
}
