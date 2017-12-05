module.exports = {
    //Add to bag
    addToBag: '.add-to-bag__btn:first-of-type',
    miniBagContainer: 'script + .minibag-container',
    miniBag: 'script + .minibag-container .minibag-summary__button',

    // Edr survey
    surveyAvailable : '#edr_survey .edr_lwrap',
    surveyCancel : '.buttons-group #no_button',

    //Checkout now
    checkoutButton: 'button[data-analyticsfunction="analyticsCheckoutButtonClicked"]',
    guestCheckoutButton: '#guestCheckoutContButton',

    //Perfect Partners basket page
    moveToFooter: '.footer__message',
    perfectPartnumberProductTitle: '.title',
    firstBasketItem: '.product-item__link:nth-of-type(1)',

    //Login Page
    email: '#loginEmail',
    password: '#loginPassword',
    signIn: '.my-account__subcontent__signIn-btn',

    // Global Search
    globalSearch: '.search-component__input',
    globalSearchButton: '.search-component__btn',

    //Collection Store UK
    collectionStoreSearchUK: '.collection--store-finder__search-form__input',
    storeSearchUK: '.collection--store-finder__search-form__btn',

    //Collection Store IE
    collectionStoreIE : 'label[for="store_4048"]',

    //Collection Slots
    collectionStoreList: '.collection--store-list__store--closest',
    collectionButton: '.collection--store-list--menu .btn--primary',

    //Collection slot date
    collectionDateSelect: '.collection--slots-list__item--suggested',
    collectionDateConfirm: '.btn--primary',

    //Collection time slot
    collectionTimeSlot: '.collection--slots-list__item:nth-child(1)',
    collectionTimeConfirm: '.collection-continue .btn--primary',

    //Confirm collection
    confirmCollection: '.collection-continue .btn--primary',

    //Add a new card link
    addNewCard: '#add-card-btn-inline',

    //Card details lightbox
    selectCardType: 'select[name="cardType"]',
    enterCardNumber: '#account',
    selectExpiryMonth: '#expiryMonth',
    selectExpiryYear: '#expiryYear',
    enterCardCvv: 'div[ng-form="paymentDetailsCtrl.form"] #cvv',
    continueToAddress: 'button[data-element="AddCardAddressOverlay"]',
    addCardAddress: '#address-details__add',

    //Card details on payment page post lightbox is closed
    enterCvv: '.credit-debit-card-form #cvv',

    //Card details form
    enterCardNumberForm: '.payment-method #account',
    selectExpiryMonthForm: '.payment-method #expiryMonth',
    selectExpiryYearForm: '.payment-method #expiryYear',
    enterCardCvvForm: '.payment-method #cvv',

    //Card details for Guest user
    enterAddressManually: '.billing-form .payment__manual-link',

    //Billing form
    selectTitle: '.billing-form #personTitle',
    firstName: '.billing-form #firstName',
    lastName: '.billing-form #lastName',
    phoneNumber: '.billing-form #phone1',
    address1: '.billing-form #address1',
    city: '.billing-form #city',
    postCode: '.billing-form #zipCode',
    emailId: '#guestemail',

    //Payment & Review order
    confirmPayment: '.payment-button',
    termsAndConditions: '.order-review__terms .lbl-checkbox',
    confirmOrder: 'input[type="submit"]',

    //Order Confirmation Page
    orderNumber: '.order-confirm-msg__content .order-confirm-msg__keyword'
    };
