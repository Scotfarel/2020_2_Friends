import { getStoreByIdDataPartnerRequest, createProductRequest, changeProductImgRequest, changeProductRequest, deleteProductRequest } from '../utils/ApiService.js';
import { makeAvatarUrl } from '../utils/urlThrottle.js';
export class PartnerStoreModel {
    /**
     * Creating an PartnerStoreModel instance.
     *
     * @param {eventBus} eventBus - A container to exchange MVC interactions inside one MVC entity.
     */
    constructor (eventBus) {
        this.getData = this.getData.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.changeProduct = this.changeProduct.bind(this);
        this.eventBus = eventBus;
        eventBus.subscribe('CREATE_PRODUCT', this.createProduct);
        eventBus.subscribe('EDIT_PRODUCT', this.changeProduct);
        eventBus.subscribe('DELETE_PRODUCT', this.deleteProduct);
    };

    /**
     * Getting store data with http-request.
     */
    async getData (id) {
        const response = await getStoreByIdDataPartnerRequest(id);

        switch (response.status) {
        case 200: {
            const body = await response.json();
            this.eventBus.call('SHOW_STORE',
                {
                    storeName: body.store_name,
                    storeId: id,
                    products: body.products
                });
            break;
        }
        case 400:
            this.eventBus.call('STORE_DATA_ERROR');
            break;
        case 500:
            this.eventBus.call('SERVER_INTERNAL_ERROR');
            break;
        default:
            console.log(`Uncaught backend http-status: ${response.status}`);
        }
    }

    async createProduct (input) {
        const productInfo = { food_name: input.food_name, food_price: input.food_price, id: input.store_id };
        const response = await createProductRequest(productInfo);
        var map = input;
        switch (response.status) {
        case 200: {
            const body = await response.json();
            map.food_id = body.id;
            this.changeProductImg(map);
            break;
        }
        default:
            console.log('создать продукт не удалось');
            console.log(`Uncaught backend http-status: ${response.status}`);
        }
    }

    async changeProduct (input) {
        const productInfo = { food_name: input.food_name, food_price: input.food_price, food_id: input.food_id, store_id: input.store_id };
        const response = await changeProductRequest(productInfo);

        switch (response.status) {
        case 200: {
            console.log('изменить продукт удалось');
            if (input.food_img) {
                this.changeProductImg(input);
            }
            break;
        }
        default:
            console.log('изменить продукт не удалось');
            console.log(`Uncaught backend http-status: ${response.status}`);
        }
    }

    async changeProductImg (input) { // { food_id: body.id, food_img: input.img, storeId: input.storeId }
        const response = await changeProductImgRequest({ food_id: input.food_id, store_id: input.store_id, food_img: input.food_img });
        switch (response.status) {
        case 200: {
            const avatar = await response.json();
            console.log(avatar);
            const avatarUrl = makeAvatarUrl(avatar.avatar);
            console.log(avatarUrl);
            this.eventBus.call('RENDER_AVATAR', { avatarUrl: avatarUrl });
            this.eventBus.call('SHOW_NEW_PRODUCT', input);
            break;
        }
        default:
            console.log(`Uncaught backend http-status: ${response.status}`);
        }
    }

    async deleteProduct (input) {
        const response = await deleteProductRequest(input);
        switch (response.status) {
        case 200: {
            break;
        }
        default:
            console.log('изменить продукт не удалось');
            console.log(`Uncaught backend http-status: ${response.status}`);
        }
    }
}