/**
 * Templating html-code using handlebars templater for store item editing block.
 */

export const renderItemCreateView = () => window.Handlebars.compile(`
<div class="product-normal"><img src="assets/img/question.png" class="product__img">
    <form  class="product__img-form">
        <input id="product__img-form" type="file" name="uploadFile" accept=".png, .jpg, .jpeg">
    </form>
    <button class="delete-button js-delete-button"></button>
    <div class="product__items-input">
        <input type="text" class="common-input js-name-input" placeholder="Название:"></input>
        <input type="text" class="common-input  wide-input js-descr-input" placeholder="Описание:"></input>
        <input type="text" class="common-input  wide-input js-price-input" placeholder="Цена:"></input>
        <div>
            <button class="proceed-button js-save-new-item bottom-center-button">Создать</button>
        </div>
    </div>
</div>
`);
