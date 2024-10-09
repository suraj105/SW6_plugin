import './module/birthday-checker-module'; // Import the module

const { Module } = Shopware;

Module.register('birthday-checker', {
    type: 'plugin',
    name: 'BirthdayChecker',
    title: 'Birthday Checker',
    description: 'Birthday Checker Tab in the Main Administration Navigation',
    version: '1.0.0',
    targetVersion: '1.0.0',

    routes: {
        index: {
            component: 'birthday-checker-index',
            path: 'index'
        }
    },

    // Add the menu entry in the main admin navigation
    navigation: [{
        label: 'Birthday Checker',
        color: '#ffcc00',  // Customize color
        path: 'birthday.checker.index',
        icon: 'default-action-settings',  // Choose an icon
        parent: 'sw-customer',  // Put it under 'Customers'
        position: 100
    }]
});
