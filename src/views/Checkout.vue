<template>
    <div class="container py-5">
        <div class="card py-5 px-5">
            <div class="">
                <img src="" alt="Buyer Logo">
                <span class="fs-1 fw-bold">Smart Techno</span>
            </div>
            <div class="d-flex flex-column">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full name</label>
                    <input type="text" class="form-control" v-model="checkout_data.name" placeholder="John Doe">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" v-model="checkout_data.email"
                        placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input type="number" class="form-control" v-model="checkout_data.phone"
                        placeholder="(+20)xxx-xxx-xxxx">
                </div>
            </div>
            <div class="d-flex flex-row-reverse">
                <div>
                    <div>Total<span>(Inclusive of VAT)</span></div>
                    <div>EGP 7299.00</div>
                </div>
            </div>
            <div class="mt-3 d-flex justify-content-center">
                <button class="btn btn-success" @click="checkout" v-if="!isLoading">
                    <span font-weight="bold"><span class="checkout">Checkout</span></span>
                </button>
                <button class="btn btn-success" v-else>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            checkout_data: {
                name: null,
                email: null,
                phone: null,
                total_amount: 15000,
            },
            isLoading: false,
        }
    },
    methods: {
        checkout() {
            this.isLoading = true
            axios.post('payment/checkout', this.checkout_data)
                .then(res => {
                    this.isLoading = false
                    console.log(res);
                    window.location.href = res.data.response.data.cashierUrl
                })
                .catch(err => {
                    this.isLoading = false
                    console.log(err);
                })
        }
    }
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

* {
    box-sizing: border-box;
}

html {
    font-size: 12px;
}

@media only screen and (min-width: 992px) {
    html {
        font-size: 13px;
    }
}

body {
    min-height: 100vh;
}

body.locked {
    overflow: hidden;
}

strong,
b {
    font-weight: bold;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}

*:focus {
    outline: none;
}

img {
    max-width: 100%;
    display: block;
}

input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    border-radius: 0;
}

input,
textarea,
select {
    border: 1px solid #e4f7db;
    font-size: 16px;
}

@media only screen and (min-width: 992px) {

    input,
    textarea,
    select {
        font-size: 1rem;
    }
}

input ::-ms-clear {
    display: none;
}

button {
    background-color: transparent;
    cursor: pointer;
}

button[disabled] {
    cursor: default;
}

* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}

/* Proxima Nova (English) */
@font-face {
    font-family: "Proxima Nova";
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/Proxima-Nova-300.eot?#iefix");
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/Proxima-Nova-300.eot?#iefix") format("eot"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/Proxima-Nova-300.woff2") format("woff2"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/Proxima-Nova-300.woff") format("woff"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/Proxima-Nova-300.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "Proxima Nova";
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Regular.eot?#iefix");
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Regular.eot?#iefix") format("eot"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Regular.woff2") format("woff2"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Regular.woff") format("woff"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Proxima Nova";
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Semibold.eot?#iefix");
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Semibold.eot?#iefix") format("eot"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Semibold.woff2") format("woff2"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Semibold.woff") format("woff"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Semibold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Proxima Nova";
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Bold.eot?#iefix");
    src: url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Bold.eot?#iefix") format("eot"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Bold.woff2") format("woff2"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Bold.woff") format("woff"),
        url("https://z.nooncdn.com/s/app/com/common/fonts/proxima-v2/Proxima-Nova-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
}

/* Cairo (Arabic) */
@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 400;
    src: local('Cairo'), local('Cairo-Regular'), url(https://fonts.gstatic.com/s/cairo/v2/KHiPzIiPko_Fw3pWntR2CoDGDUGfDkXyfkzVDelzfFk.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+E0FF, U+EFFD, U+F000, U+FB50-FDFF, U+FE80-FEFC;
}

/* latin */
@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 400;
    src: local('Cairo'), local('Cairo-Regular'), url(https://fonts.gstatic.com/s/cairo/v2/9AWxzDXz2R7tHfJeCoIOqqCWcynf_cDxXwCLxiixG1c.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* arabic */
@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 600;
    src: local('Cairo SemiBold'), local('Cairo-SemiBold'), url(https://fonts.gstatic.com/s/cairo/v2/MI6TrIXLGD9aHguHYHeGURkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+E0FF, U+EFFD, U+F000, U+FB50-FDFF, U+FE80-FEFC;
}

/* latin */
@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 600;
    src: local('Cairo SemiBold'), local('Cairo-SemiBold'), url(https://fonts.gstatic.com/s/cairo/v2/nDAflKnJsVnfdGOoytL7mHYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

/* arabic */
@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 700;
    src: local('Cairo Bold'), local('Cairo-Bold'), url(https://fonts.gstatic.com/s/cairo/v2/RLgQnjqLWN5-LcxkRZr1cBkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+E0FF, U+EFFD, U+F000, U+FB50-FDFF, U+FE80-FEFC;
}

/* latin */
@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 700;
    src: local('Cairo Bold'), local('Cairo-Bold'), url(https://fonts.gstatic.com/s/cairo/v2/IGeshMgNVhb2XU2TGWkITnYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
}

:root {
    --swiper-theme-color: grey !important;
}

html,
body {
    line-height: 1.4;
    color: #404553;
    font-size: 14px;
    background-color: #f7f7fa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 375px;
}

input,
textarea,
select {
    border: 1px solid #e2e5f1;
    font-size: 16px;
}

body {
    font-family: 'Proxima Nova', 'Helvetica Neue', Arial, sans-serif !important;
    min-height: 100vh;
}

html[dir=rtl] body {
    font-family: Cairo, Tahoma, sans-serif !important;
}

.siteWidthContainer {
    padding: 0 15px;
    margin: 0 auto;
    max-width: 768px;
    box-sizing: border-box;
}

@media only screen and (min-width: 768px) {
    .siteWidthContainer {
        padding: 0 25px;
        min-width: 768px;
        max-width: 1440px;
    }
}

@media only screen and (min-width: 992px) {
    .siteWidthContainer {
        padding: 0 45px;
    }
}

strong,
b {
    font-weight: bold;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}

/* remember to define focus styles! */
a:focus,
button:focus,
input:focus {
    outline: 0;
}

/* new design system helper classes */
:root {
    --site-horz-spacing: 16px;
}

@media only screen and (min-width: 768px) {
    :root {
        --site-horz-spacing: 24px;
    }
}

@media only screen and (min-width: 992px) {
    :root {
        --site-horz-spacing: 32px;
    }
}

@media only screen and (min-width: 1200px) {
    :root {
        --site-horz-spacing: 40px;
    }
}

.--noon-siteWidthContainer {
    padding-left: var(--site-horz-spacing);
    padding-right: var(--site-horz-spacing);
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
}
</style>