// есть кнопки в диве ,на них динамически надо добавить класс актив из CSS,который появляется по клику на баттон

const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveBnt = document.querySelector('.tags__btn--active');
  //   if (currentActiveBnt) {
  //     currentActiveBnt.classList.remove('.tags__btn--active');
  //   }
  // xxxxxxxxxxxxxxxxxxxxxxxxxx   or  xxxxxxxxxxxxxxxxxxxxxxxx
  currentActiveBnt?.classList.remove('.tags__btn--active');

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('.tags__btn--active');
  selectedTag = nextActiveBtn.dataset.value;
  console.log(selectedTag);
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//чтобы можно было выбрать несколько кнопок
const tagCont = document.querySelector('.js-tags');

function onTagsContainClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btn = e.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tag__btn--active');

  if (isActive) {
    selectedTag.delete(tag);
  } else {
    selectedTag.add(tag);
  }
  btn.classList.toggle('tag__btn--active');
}
