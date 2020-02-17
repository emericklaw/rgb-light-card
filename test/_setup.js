const browserEnv = require('browser-env');
browserEnv(['document']);

global.HTMLElement = class HTMLElement {
    constructor() {
        this.init();
    }
    attachShadow() {
        const shadow = document.createElement('div');
        document.body.appendChild(shadow);
        return shadow;
    }
};

global.customElements = {
    define(name, constructor) {
        if (name === 'rgb-light-card') {
            global.RGBLightCard = constructor;
        }
    }
};
