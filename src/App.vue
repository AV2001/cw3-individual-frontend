<template>
    <div id="app">
        <header class="header">
            <h1>{{ sitename }}</h1>
            <p
                class="fa-solid fa-cart-shopping checkout"
                @click="displayLessonsPage = !displayLessonsPage"
            >
                <span class="cart-count">{{ cartItemCount }}</span>
            </p>
        </header>
        <div v-if="displayLessonsPage">
            <main>
                <!-- SEARCH SECTION -->
                <section class="section-search">
                    <div class="search-box">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            v-model="searchTerm"
                            placeholder="Search by subject or location..."
                        />
                    </div>

                    <div class="sorting-features">
                        <!-- PRICE -->
                        <div>
                            <input
                                type="radio"
                                id="price"
                                value="price"
                                v-model="sort.sortValue"
                            />
                            <label for="price">Price</label>
                        </div>
                        <!-- SUBJECT -->
                        <div>
                            <input
                                type="radio"
                                id="subject"
                                value="subject"
                                v-model="sort.sortValue"
                            />
                            <label for="subject">Subject</label>
                        </div>
                        <!-- AVAILABILITY -->
                        <div>
                            <input
                                type="radio"
                                id="availability"
                                value="availability"
                                v-model="sort.sortValue"
                            />
                            <label for="availability">Availability</label>
                        </div>
                        <!-- LOCATION -->
                        <div class="location">
                            <input
                                type="radio"
                                id="location"
                                value="location"
                                v-model="sort.sortValue"
                            />
                            <label for="location">Location</label>
                        </div>
                    </div>

                    <!-- ASCENDING/DESCENDING -->
                    <div>
                        <div class="ascending-descending">
                            <div>
                                <input
                                    type="radio"
                                    name="ascending-descending"
                                    id="ascending"
                                    value="ascending"
                                    v-model="sort.sortOrder"
                                />
                                <label for="ascending">Ascending</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="ascending-descending"
                                    id="descending"
                                    value="descending"
                                    v-model="sort.sortOrder"
                                />
                                <label for="descending">Descending</label>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- lessons wi -->
                <LessonsComponent
                    :lessons="
                        searchTerm.length > 0 ||
                        (sort.sortValue && sort.sortOrder)
                            ? sortedLessons
                            : fetchedLessons
                    "
                    @lesson-added="addToCart"
                ></LessonsComponent>
            </main>
        </div>
        <div v-else>
            <main>
                <CheckoutComponent
                    :cart="cartItems"
                    @lesson-removed="removeLesson"
                ></CheckoutComponent>
                <!-- Only displays the form if there are more than 0 items in the cart -->
                <div v-if="cartItemCount !== 0">
                    <!-- FORM SECTION -->
                    <section class="section-checkout-form">
                        <form class="checkout-form">
                            <!-- FULL NAME -->
                            <div>
                                <label for="name">Full Name</label>
                                <input type="text" v-model="form.fullName" />
                            </div>
                            <!-- PHONE NUMBER -->
                            <div>
                                <label for="phone-number">Phone Number</label>
                                <input type="text" v-model="form.phoneNumber" />
                            </div>

                            <button
                                class="btn btn-submit-order"
                                v-if="checkoutFormValidation"
                                v-on:click="
                                    event =>
                                        submitOrder(
                                            'Order submitted successfully!',
                                            event
                                        )
                                "
                            >
                                Submit
                            </button>
                            <button
                                style="pointer-events: none"
                                class="btn"
                                disabled="disabled"
                                v-else
                            >
                                Submit
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import LessonsComponent from './components/LessonsComponent.vue';
import CheckoutComponent from './components/CheckoutComponent.vue';
export default {
    components: {
        LessonsComponent,
        CheckoutComponent,
    },
    data() {
        return {
            sitename: 'Lesson Store',
            fetchedLessons: [],
            cartItems: [],
            displayLessonsPage: true,
            searchTerm: '',
            sort: {
                sortValue: '',
                sortOrder: '',
            },
            form: {
                fullName: '',
                phoneNumber: '',
            },
        };
    },
    created() {
        fetch('http://localhost:3000/collection/lessons')
            .then(response => response.json())
            .then(data => (this.fetchedLessons = data))
            .catch(error => console.log(error));
    },
    methods: {
        // adds the selected lesson to the cart and reduces the spaces left
        addToCart(lesson) {
            this.cartItems.push(lesson);
            lesson.spacesLeft--;
        },

        // removes a chosen lesson from the cart and increases the spaces left
        removeLesson(lesson) {
            // increase the spaces left for the lesson
            lesson.spacesLeft++;
            // removes the lesson from the cart
            this.cartItems.splice(this.cartItems.indexOf(lesson), 1);
        },

        // method thats called when user clicks the submit button
        submitOrder(message, event) {
            if (event) {
                // to prevent button from reloading the page
                event.preventDefault();

                // Create an order object to add to the order collection
                const order = {
                    name: this.form.fullName,
                    phoneNumber: this.form.phoneNumber,
                    lesson: this.cartItems,
                };

                // Fetch 'POST' requst to send an order to the backend.
                fetch('http://localhost:3000/collection/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(order),
                });

                // Fetch 'PUT' request to update the spaces of a lesson.
                fetch('http://localhost:3000/collection/lessons', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.cartItems),
                });
            }
            alert(message);
            // resets the full name, phone number, and the cart
            this.form.fullName = '';
            this.form.phoneNumber = null;
            this.cartItems = [];
        },
    },
    computed: {
        cartItemCount() {
            return this.cartItems.length;
        },

        sortedLessons() {
            let filteredLessons = [...this.fetchedLessons];
            /*
                returns the lessons whose subject contains letters
                typed the user in the search box
            */
            if (this.searchTerm.length > 0) {
                const searchTermLowerCase = this.searchTerm.toLowerCase();
                /* create a copy of filteredLessons so that ES link does not
                throw an arrow as it's a good practice NOT to modify the
                data proerties directly.
                */
                return filteredLessons.filter(
                    lesson =>
                        lesson.subject
                            .toLowerCase()
                            .includes(searchTermLowerCase) ||
                        lesson.location
                            .toLowerCase()
                            .includes(searchTermLowerCase)
                );
            }

            // returns all lessons by default when none of the sorting is applied
            // if (!(this.sort.sortValue && this.sort.sortOrder)) {
            //     return this.fetchedLessons;
            // }

            // Sort by price in ascending or descending order
            if (this.sort.sortValue === 'price') {
                if (this.sort.sortOrder === 'ascending') {
                    return filteredLessons.sort((a, b) => a.price - b.price);
                } else if (this.sort.sortOrder === 'descending') {
                    return filteredLessons.sort((a, b) => b.price - a.price);
                }
            }

            // Sorts by subject in alphabetic order based on user's choice
            if (this.sort.sortValue === 'subject') {
                filteredLessons.sort((a, b) => {
                    if (a.subject > b.subject) {
                        return 1;
                    }
                    if (a.subject < b.subject) {
                        return -1;
                    }
                    return 0;
                });
                if (this.sort.sortOrder === 'ascending') {
                    return filteredLessons;
                } else {
                    return filteredLessons.reverse();
                }
            }

            // Sorts lessons by availability in ascending or descending order
            if (this.sort.sortValue === 'availability') {
                if (this.sort.sortOrder === 'ascending') {
                    return filteredLessons.sort(
                        (a, b) => a.spacesLeft - b.spacesLeft
                    );
                } else if (this.sort.sortOrder === 'descending') {
                    return filteredLessons.sort(
                        (a, b) => b.spacesLeft - a.spacesLeft
                    );
                }
            }

            // Sorts by location in alphabetic order
            if (this.sort.sortValue === 'location') {
                filteredLessons.sort((a, b) => {
                    if (a.location > b.location) {
                        return 1;
                    }
                    if (a.location < b.location) {
                        return -1;
                    }
                    return 0;
                });
                if (this.sort.sortOrder === 'ascending') {
                    return filteredLessons;
                } else {
                    return filteredLessons.reverse();
                }
            }

            return filteredLessons;
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
