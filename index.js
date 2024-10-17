function clickElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.click();
        console.log(`하앙 눌러버려 ${selector} !!!!`);
    } else {
        console.error('어딧지 지스팟이');
    }
}
clickElement('a.btn.btn-primary.btn-block.btn-opt-start');
for (i = 0; i < Math.floor(study_data.length / 10); i++) {
  for (i = 0; i < 10; i++) {
    clickElement('.CardItem .card-cover');
    setTimeout(() => clickElement('.btn-success'), 200);
    setTimeout(() => console.log("뷁"), audioTimer);
  }
  clickElement('a.btn.btn-xl.btn-primary.shadow.mw-250.btn-study-end-next-section2');
}
if (study.data.length % 10 < 5) {
  for (i = 0; i < study_data.length % 10; i++) {
    clickElement('.CardItem .card-cover');
    setTimeout(() => clickElement('.btn-success'), 200);
    setTimeout(() => console.log("뷁"), audioTimer);
  }
}
