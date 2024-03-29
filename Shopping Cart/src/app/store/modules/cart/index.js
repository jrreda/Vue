import axios from 'axios';

const state = {
    cartItems: [],
    checkout: false,
};

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
    },
    CHECKOUT_CART (state) {
        state.checkout = true;
    },
};

const actions = {
    getCartItems({ commit }) {
        axios.get('/api/cart').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        });
    },
    addCartItem({ commit }, cartItem) {
        axios.post('/api/cart', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        });
    },
    removeCartItem({ commit }, cartItem) {
        axios.post('/api/cart/delete', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        });
    },
    removeAllCartItems({ commit }) {
        axios.post('/api/cart/delete/all').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data);
        });
    },
    checkoutCart({ commit }) {
        axios.post('/api/cart/checkout').then((response) => {
            commit('CHECKOUT_CART', response.data);
        });
    },
};

const getters = {
    cartItems: (state) => state.cartItems,
    cartTotal: (state) => {
        return state.cartItems.reduce((acc, item) => {
            return item.quantity * item.price + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: (state) => {
        return state.cartItems.reduce((acc, item) => {
            return item.quantity + acc;
        }, 0);
    }
};

const cartmodule = {
    state,
    mutations,
    actions,
    getters
};

export default cartmodule;