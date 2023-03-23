<template>
    <div>
        <main>
            <section class="section-heading">
                <h2 class="heading-secondary">Checkout</h2>
            </section>
            <div v-if="isCheckoutPageEmpty">
                <h2 class="heading-secondary">
                    There are no items in the cart.
                </h2>
            </div>
            <div v-else>
                <!-- Display lessons in the cart -->
                <section class="section-lessons">
                    <figure
                        class="lesson"
                        v-for="(lesson, index) in cart"
                        :key="'B' + index"
                    >
                        <img class="lesson-img" v-bind:src="lesson.image" />
                        <div class="lesson-details">
                            <h2 class="subject">
                                {{ lesson.subject }}
                            </h2>
                            <div class="lesson-details-extra">
                                <p class="location">
                                    <span
                                        class="fa-solid fa-location-dot"
                                    ></span>
                                    {{ lesson.location }}
                                </p>
                                <p class="price">
                                    <span
                                        class="fa-solid fa-sterling-sign"
                                    ></span>
                                    {{ lesson.price }}
                                </p>
                            </div>
                            <button
                                class="btn btn-remove-cart"
                                v-on:click="removeFromCart(lesson)"
                            >
                                <span
                                    class="fa-solid fa-trash"
                                    style="pointer-events: none"
                                ></span>
                                Remove
                            </button>
                        </div>
                    </figure>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    props: {
        cart: {
            type: Array,
            required: true,
        },
    },

    methods: {
        removeFromCart(lesson) {
            this.$emit('lesson-removed', lesson);
        },
    },
    computed: {
        isCheckoutPageEmpty() {
            return this.cart.length === 0;
        },

        // regex that must be satisifed by the user for the button to be clickable
        checkoutFormValidation() {
            // allows letters and space
            const fullNameRegex = /^[A-Za-z\s]*$/;

            // phone number must contain 10 digits
            const phoneNumberRegex = /^[0-9]{10}$/;
            return (
                this.form.fullName.length > 3 &&
                fullNameRegex.test(this.form.fullName) &&
                phoneNumberRegex.test(this.form.phoneNumber)
            );
        },
    },
};
</script>
