/**
 * Templating html-code using handlebars templater for order.
 */
export const renderOrderView = () => window.Handlebars.compile(`
<div class="background">
    <div id="storeHeader" data-storeId="{{storeId}}" class="store__header">
        <img src="assets/store4.png" class="store__logo" alt="Store logo">
        <div class="store__header-headline">
            <div class="store__name">{{storeName}}</div>
            <button class="info-button js-to-store-button">К магазину</button>
        </div>
    </div>
    <div class="order-column">
        {{#each orders}}
        <div class="order-cart" id={{this.orderId}} data-orderId={{this.orderId}}>
            <div class="order-cart__header">
                <img class="order-cart__resto-img" src="img/250px-CycleLayer2.png"></img>
                <div class="order-cart__info">
                    <a class="order-cart__shop-name" href="#">Имя магазина</a>
                    <p class="order-cart__date">{{this.date}}</p>
                    <p class="order-cart__address">{{this.address}}</p>
                </div>
                <select class="order-cart__status">
                    <option value="Новый" class="status__option">Новый</option>
                    <option value="Принят" class="status__option">Принят</option>
                    <option value="Готовится" class="status__option">Готовится</option>
                    <option value="Доставка" class="status__option">Доставка</option>
                    <option value="Завершён" class="status__option">Завершён</option>
                </select>
            </div>
            <div class="order-cart__order-list">
            {{#each this.orderItems}}
                <div class="order-list__order-item">
                    <div class="order-item__name">{{this.productName}}</div>
                    <div class="order-item__price">{{this.productPrice}}</div>
                </div>
            {{/each}}
            </div>
        </div>
        {{/each}}

    </div>
</div>
`);
