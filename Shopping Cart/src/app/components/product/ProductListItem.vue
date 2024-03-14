<template>
    <div>
        <h2 class="has-text-weight-bold">{{ product.title }}
            <span 
                @click="addCartItem(product)"
                class="tag is-primary is-pulled-right has-text-white">
                Add to Cart
            </span>
        </h2>
        <p>{{ product.description }}</p>
        <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> {{ product.price }}
        </span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ProductListItem',
    props: ['product',],
    methods: {
        // addCartItem(product) {
        //     this.$store.dispatch('addCartItem', product);
        // },
        ...mapActions([
            'addCartItem',
        ])
    },
}
</script>

<style scoped>
.tag {
cursor: pointer;
}
</style>
