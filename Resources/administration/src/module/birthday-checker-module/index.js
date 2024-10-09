import template from './sw-customer-detail.html.twig';

Shopware.Component.override('birthday-checker-module', {
    template,

    inject: ['repositoryFactory'],

    data() {
        return {
            customer: null,  // Initialize the customer object
            customerRepository: null
        };
    },

    created() {
        this.customerRepository = this.repositoryFactory.create('customer'); // Initialize the customer repository
        this.loadCustomerData();
    },

    methods: {
        loadCustomerData() {
            const customerId = this.$route.params.id; // Get customer ID from route

            this.customerRepository.get(customerId, Shopware.Context.api).then(customer => {
                this.customer = customer; // Assign the fetched customer data
            }).catch(error => {
                console.error("Error loading customer data", error);
            });
        }
    }
});
