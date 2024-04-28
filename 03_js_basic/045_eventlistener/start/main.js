const h1Element = document.querySelector('h1');
console.log(h1Element);

h1Element.textContent = '変更後のタイトル';

const btEl = document.querySelector('button');
const hellofn = () => {
    alert('hello');
}
btEl.addEventListener('click',hellofn);