<template>
    <div>
        <!-- LESSONS SECTION -->
        <section class="section-lessons">
            <!-- Each lesson will be embedded into its own figure element -->
            <figure
                class="lesson"
                v-for="(lesson, index) in lessons"
                :key="'A' + index"
            >
                <img v-bind:src="lesson.image" class="lesson-img" />
                <div class="lesson-details">
                    <h2 class="subject">{{ lesson.subject }}</h2>
                    <div class="lesson-details-extra">
                        <p class="location">
                            <span class="fa-solid fa-location-dot"></span>
                            {{ lesson.location }}
                        </p>
                        <p class="price">
                            <span class="fa-solid fa-dollar-sign"></span>
                            {{ lesson.price }}
                        </p>
                        <p class="spaces">
                            <span>Spaces Left: </span>
                            {{ lesson.spacesLeft }}
                        </p>
                    </div>

                    <!-- disable the button if canAddToCart returns false -->
                    <button
                        class="btn btn-add-cart"
                        :disabled="isLessonAvailable(lesson)"
                        @click="addToCart(lesson)"
                    >
                        <span class="fa-solid fa-cart-shopping"></span>
                        Add To Cart
                    </button>
                </div>
            </figure>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        lessons: {
            type: Array,
            required: true,
        },
    },
    methods: {
        addToCart(lesson) {
            this.$emit('lesson-added', lesson);
        },
    },
    computed: {
        isLessonAvailable() {
            return lesson => lesson.spacesLeft === 0;
        },
    },
};
</script>
