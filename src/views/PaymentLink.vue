<template>
    <v-container>
        <v-card v-if="!redirecting">
            <v-card-title>
                Payment Link
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                Payment Information
                            </v-card-title>
                            <v-card-text>
                                No Data
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col cols="12" lg="4" md="6" sm="12">
                        <label id="lbl_inp" for="name" class="mb-3"> Name: </label>
                        <v-text-field id="name" v-model="$v.payment.name.$model" :class="{
                            'is-invalid': validateStatus($v.payment.name),
                        }" outlined dense placeholder="John" hide-details></v-text-field>
                        <div v-if="!$v.payment.name.required" class="invalid-feedback">
                            Name field required.
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                        <label id="lbl_inp" for="phone" class="mb-3"> Phone: </label>
                        <v-text-field id="phone" type="number" v-model="$v.payment.phone.$model" :class="{
                            'is-invalid': validateStatus($v.payment.phone),
                        }" outlined dense placeholder="(+000) 000-000-000" hide-details></v-text-field>
                        <div v-if="!$v.payment.phone.required" class="invalid-feedback">
                            Phone field required.
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                        <label id="lbl_inp" for="email" class="mb-3"> Email: </label>
                        <v-text-field id="email" type="email" v-model="$v.payment.email.$model" :class="{
                            'is-invalid': validateStatus($v.payment.email),
                        }" outlined dense placeholder="John" hide-details></v-text-field>
                        <div v-if="!$v.payment.email.required" class="invalid-feedback">
                            Email field required.
                        </div>
                        <div v-if="!$v.payment.email.email" class="invalid-feedback">
                            email must contain @ and .
                        </div>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col cols="12" lg="3" md="6" sm="12">
                        <v-btn color="#602167" class="btn-paynow" @click="payNow">Pay Now</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <div v-else>
            <iframe :src="cashir_url" frameborder="0" class="payment_frame"></iframe>
        </div>
        <v-row justify="space-around" class="success_dialog">
            <v-col>
                <v-dialog v-model="dialog" max-width="350">
                    <v-card>
                        <v-card-title class="text-h6 justify-content-center">
                            <v-icon size="25" class="mx-2" color="success">
                                {{ icons.correct }}
                            </v-icon>
                            <span> Please Wait </span>
                        </v-card-title>
                        <v-spacer></v-spacer>
                        <div class="text-center" v-if="isLoading">
                            <v-card-text>
                                <div class="d-flex justify-content-center text-center">
                                    <span class="spinner-border spinner-border-xl" role="status"
                                        aria-hidden="true"></span>
                                    <p class="m-0 px-3">Redirecting to payment</p>
                                </div>
                            </v-card-text>
                        </div>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="error" @click="dialog = false"> Close </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row justify="space-around" class="error_dialog">
            <v-col>
                <v-dialog v-model="errorDialog" max-width="350">
                    <v-card>
                        <v-card-title class="text-h5">
                            <v-icon size="25">
                                {{ icons.mdiAlertCircleOutline }}
                            </v-icon>
                            <span>Ooops!</span>
                        </v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-text>
                            <div class="py-1 my-3" v-for="(err, i, idx) in errorsLog" :key="i">
                                <div class="d-flex text-center">
                                    <v-chip color="error" small>{{ idx + 1 }}</v-chip>
                                    <p class="m-0 px-3">{{ err[0] }}</p>
                                </div>

                            </div>

                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="error lighten-1" text @click="errorDialog = false">Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
    data() {
        return {
            payment: {
                name: null,
                phone: null,
                email: null,
            },
            dialog: false,
            isLoading: null,
            check_msg: null,
            errorsLog: null,
            errorDialog: null,
            redirecting: false,
            cashir_url: null,
            icons: {
                empty: 'fal fa-empty-set',
                correct: 'fal fa-badge-check',
            },
        }
    },
    methods: {
        payNow() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.dialog = true
                this.isLoading = true
                axios.post('payment/checkout-link', this.payment, { params: { code: `${this.$route.params.code}` } })
                    .then(res => {
                        console.log(res);
                        this.cashir_url = res.data.response.data.cashierUrl
                        setInterval(() => {
                            this.isLoading = false
                            this.dialog = false
                            this.redirecting = true
                        }, 5000)

                        if (res.data.code == 201) {
                            this.check_msg = "Successful Payment"
                        }
                        else if (res.data.code == 422) {
                            this.dialog = false
                            this.errorsLog = res.data.errors
                            this.errorDialog = true
                        }
                    })
                    .catch(err => {
                        this.dialog = false
                        console.log(err);
                    })
            }

        },
        validateStatus(validation) {
            return typeof validation != 'undefined' ? validation.$error : false
        },
    },
    validations: {
        payment: {
            name: {
                required,
            },
            phone: {
                required,

            },
            email: {
                required,
                email,
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.btn-paynow {
    width: 100%;
}

.payment_frame {
    width: 100%;
    min-height: 80vh;
}
</style>