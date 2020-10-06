import { renderProfileView } from '../template/profileViewTemplate.js';

export class ProfileView {
    constructor (root, eventBus) {
        this.root = root;
        this.eventBus = eventBus;
    }

    render = () => {
        const template = renderProfileView();
        const profileHTML = template({
            name: 'Ксюша',
            points: '100',
            email: 'qqqq',
            number: '888',
            address: [
                'address1',
                'address2',
                'address3',
                'address4'
            ]
        });

        this.root.innerHTML = profileHTML;
        // this.addEventListeners();
    }

    // addEventListeners () {
    //     const profile = this.root.querySelector('.js-input-profile');
    //     const password = this.root.querySelector('.js-input-password');
    //     const button = this.root.querySelector('.js-submit-profile');

    //     button.addEventListener('click', () => {
    //         const data = { profile: profile.value, password: password.value };
    //         this.eventBus.call('SUBMIT_LOGIN', data);
    //     })
    // }
}
