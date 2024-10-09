import template from './birthday-checker-index.html.twig';

// Register the component for the Birthday Checker view
Shopware.Component.register('birthday-checker-index', {
    template,

    data() {
        return {
            message: 'Welcome to Birthday Checker!'
        };
    }

});
