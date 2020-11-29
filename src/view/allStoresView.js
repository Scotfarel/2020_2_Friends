import { renderAllStores } from '../template/allStoresViewTemplate.js';
import { MapAPI } from '../utils/mapAPI.js';

export class AllStoresView {
    /**
     * Creating an AllStoresView instance.
     * @param {eventBus} eventBus - A container to exchange MVC interactions inside one MVC entity.
     * @param {object} root - Main html div object.
     */
    constructor (root, eventBus) {
        this.root = root;
        this.eventBus = eventBus;

        this.render = this.render.bind(this);

        eventBus.subscribe('SHOW_STORES', this.render);
    }

    /**
     * Rendering bucket page and setting event listeners.
     * @param {Array} data - Array of cart's items.
     */
    render (data) {
        const template = renderAllStores();
        this.root.innerHTML = template({ stores: data.stores });
        const mapId = this.root.querySelector('#map');
        const newMap = new MapAPI({
            div: mapId,
            zoom: 11
        });
        newMap.showAllStores(data.maps);
        newMap.addMyPosition();
        this.addEventListeners();
    }

    addEventListeners () {
        const stores = this.root.querySelectorAll('.store__block');
        stores.forEach(element => {
            element.addEventListener('click', () => {
                this.eventBus.call('REDIRECT_TO_STORE', element.id);
            });
        });
    }
}
