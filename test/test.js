const test = require('ava');

test('Card has CSS style', t => {
    const card = new RGBLightCard();
    const css = card.content.parentNode.querySelector('style').innerHTML;
    t.true(css.indexOf('.wrapper') > -1);
    t.true(css.indexOf('.color-circle') > -1);
});

test('Config validates rules', t => {
    const card = new RGBLightCard();
    t.throws(() => card.setConfig({}),'You need to define an array of colors')
});

