import { BucketModel } from '../model/bucketModel.js';
import { BucketView } from '../view/bucketView.js';
import { EventBus } from '../utils/eventBus.js';

export class BucketController {
    /**
     * Creating controller class for bucket entity.
     *
     * @param {object} root - Main html div object.
     * @param {router} router - An object that allows to route inside a site.
     */
    constructor (root, router) {
        const eventBus = new EventBus();
        this.router = router;

        this.model = new BucketModel(eventBus);
        this.view = new BucketView(root, eventBus);

        eventBus.subscribe('REDIRECT_TO_ORDER', () => this.router.redirect('order'));
        eventBus.subscribe('REDIRECT_TO_PROFILE', () => this.router.redirect('profile'));
        eventBus.subscribe('REDIRECT_TO_BUCKET', () => this.router.redirect('bucket'));
        eventBus.subscribe('REDIRECT_TO_STORES', () => this.router.redirect('/'));
        eventBus.subscribe('REDIRECT_TO_ORDERS', () => this.router.redirect('profile/orders'));
    }
}
