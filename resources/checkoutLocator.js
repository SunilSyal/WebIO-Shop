module.exports = {

    //miniBag
    header: '.header-link',
    viewBag: '.secondary-btn',
    checkout: '.btn-checkout',


    //checkoutLogin
    emailId: '#loginEmail',
    password: '#loginPassword',
    login: '.my-account__subcontent__signIn-btn',

    //guestCheckout
    guestCheckout: '#guestCheckoutContButton',

    //SDD delivery actions
    dmsOpen: '.delivery-grp__header',
    sddSelect: '.icon--delivery-sdd',
    sddActive: '.delivery-mode__inactive-layer',
    addAddress: 'li.row.delivery-mode__item.delivery-mode__item__sdd .delivery-mode__action-item',

    // Add Address
    title: '#personTitle',
    firstName: '#firstName',
    lastName: '#lastName',
    phone: '#phone1',
    postcode: '#postcode',

    //Search By postcode
    findAddress: '.btn--find-address',
    addressList: 'ul.scrollable-list',
    selectAddress: 'a.scrollable-list__item',
    cityAutoUpdated: '#city',

    //Address added successfully
    addButton: '.address-overlay__hr .address-overlay__btn--primary',
    successMsg: '.inpage-msg--success',
    addressDisplay: '.delivery-mode__address',

    //Payment Page
    continueToPayment: '.order-dms-heading__continue .btn__icon',
    paymentPageOpen: '.payment-title',
    guestEmailId: '#guestemail',

    //Add Card on Base Page
    cardType: '.pay-card-inner #cardType',
    cardNumber: '.pay-card-inner #account',
    expiryDate: '.pay-card-inner #expiryMonth',
    expiryMonth: '.pay-card-inner #expiryYear',
    securityNo: '.pay-card-inner #cvv',

    //Order Review Page
    continueToOrderReview: '.promo-continue__continue .btn--primary',
    orderReviewPageOpen: '.order-review__heading',
    orderReviewTandC: '.order-review__terms .lbl-checkbox',

    //Place Order
    placeOrderButton: '.order-review__terms-cta',

    //Order Confirmation
    orderConfirmPageOpen: '.payment-details__header',

    //Express checkout
    securityNum: '#cvv',
    placeOrderSpc: '.terms-and-conditions-right-col .btn--primary',

    //Checkout Registration
    scrollToFooter: 'footer',
    registerLink: '.my-account a[href*="/webapp/wcs/stores/servlet/MSResUserRegistration"]',
    registrationPageOpen: '.form--content',
    selectTitle: '#registerTitle',
    fName: '#registerFirstName',
    lName: '#registerLastName',
    emailId: '#registerEmail',
    password: '#registerPassword',
    retypePassword: '#registerConfirmPassword',
    createAccount: '.btn--active',

    //Add store dms
    addStoreButton: '.delivery-mode__item__store .btn--primary',
    storeFinderSearch: '#storeFinderSearch',
    findButton: '#storeFinderFindButton',
    storeResults: '.store-finder__listview',
    selectStore: '.store-item__select-btn',
    calendarDisplay: '.calendar__table',
    selectDate: '.calendar__col__link',
    confirmDateSelection: '.select-date .btn--primary',
    addedStoreDisplay: '.delivery-mode__item__store .delivery-mode__address',
    selectedDateDisplay: '.delivery-mode__detail .delivery-date',
    storeOverlayClosed: '.lightbox__inner',

    // Apply GC/LRV -Combined Fields
    gcLrvAccordianOpen: '.acc-container',
    promoAccordian: '#promoContainer',
    entryField: '.voucher-entry',
    enterPin: '.pin-container',
    applyButton: '.voucher-entry .btn--secondary',
    gcApplied: '.voucher-results',

    //Apply GC/LRV
    gcAccordianOpen: 'script + .border-top--lgt:nth-of-type(2)',
    giftCardEntry1: '#giftCardNumber1',
    giftCardEntry2: '[name=giftCardNumber2]',
    giftCardEntry3: '[name=giftCardNumber3]',
    giftCardEntry4: '[name=giftCardNumber4]',
    giftCardPin: '#giftCardPin',
    apply: '.gift-card__form .btn--secondary',
    giftCardApplied: '.pre-paid-applied--gift-card',

    //Contact Details Page
    continueButton: '.btn--primary.payment-button',
};
