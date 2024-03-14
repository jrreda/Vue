<template>
    <div>
        <p class="cart-item--title is-inline">{{ cartItem.title }}</p>
        <div class="is-pulled-right">
            <i 
                @click="addCartItem(cartItem)"
                class="fa fa-arrow-circle-up cart-item--modify"></i>
            <i 
                @click="removeCartItem(cartItem)"
                class="fa fa-arrow-circle-down cart-item--modify"></i>
        </div>
        <div class="cart-item--content">
            <span class="cart-item--price has-text-primary has-text-weight-bold">
                {{ cartItem.price }}$ each
            </span>
            <span class="cart-item--quantity has-text-grey is-pulled-right">
                Quantity: {{ cartItem.quantity }}
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CartListItem',
    props: ['cartItem',],
    methods: {
        ...mapActions([
            'addCartItem',
            'removeCartItem',
        ]),
    },
}
</script>

<style scoped>
#cart {
    height: 100%;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.cart-empty-text {
    padding: 10px 0;
}

.cart--header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 15px;
}

.cart-item {
    padding: 10px 0;
}

.cart-item--modify {
    cursor: pointer;
    margin: 0 1px;
}

.cart-details {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

.cart-remove-all--text {
    cursor: pointer;
}

.cart-remove-all--text .fa {
    padding-right: 5px;
}
</style>
