//Запуск кода JS в элементе HTML========================
<button onclick="alert('Бабах!');">НЕ ЖМИ</button>;

//Замена картинки содержимым в атрибуте alt================
<p>Это
    <img src="img/cat.png" alt="Кошка"> в
    <img src="img/hat.png" alt="сапожках">.
</p>
<p>
    <button onclick="replaceImages()">Заменить</button>
</p>
<scrip>
function replaceImages() {
    var images = document.body.getElementsByTagName("img");
    for (var i = images.length - 1; i >= 0; i--) {
        var image = images[i];
    if (image.alt) {
        var text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
    }
};

//Вызов обработчика события клик
<button>Нажми меня нежно.</button>
<p>А здесь нет обработчиков.</p>
<script>
var button = document.querySelector("button");
button.addEventListener("click", function() {
console.log("Кнопка нажата.");
});
</script>
