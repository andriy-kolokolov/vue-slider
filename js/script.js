const APP = Vue.createApp({
    data() {
        return {
            idCurrentPic: 3,
            slides: [
                {
                    id: 0,
                    active: true,
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    id: 1,
                    active: false,
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    id: 2,
                    active: false,
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    id: 3,
                    active: false,
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    id: 4,
                    active: false,
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        getCurrentSlide() {
            return this.slides[this.idCurrentPic];
        },
        nextSlide() {
            this.idCurrentPic < this.slides.length - 1 ?
                this.idCurrentPic++ :
                this.idCurrentPic = 0;
        },
        prevSlide() {
            this.idCurrentPic === 0 ?
                this.idCurrentPic = this.slides.length - 1 :
                this.idCurrentPic--;
        },
        isActive(slideId) {
            return slideId === this.idCurrentPic ? "active" : "";
        },
        manageThumbClick(slide) {
            // remove "active" from all class lists
            this.slides.forEach(slide => {
                slide.active = false;
            });
            slide.active = true;
        }
    }
});

APP.mount('#app');
