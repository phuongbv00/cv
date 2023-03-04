import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
    props: ['cv'],
    setup(props) {
    },
    template: `
        <div class="cv-header text-white d-flex">
            <div class="cv-header-1 d-flex flex-column justify-content-center py-3 px-4">
                <h4 class="fw-bold text-uppercase text-center">{{cv.fullName}}</h4>
                <i class="text-center">{{cv.career}}</i>
            </div>
            <div class="cv-header-2 px-3 py-4 d-flex flex-column gap-2">
                <div class="d-flex align-items-center" v-if="cv.birthDate">
                    <i class="bi bi-calendar-week"></i>
                    <span class="ps-2">{{cv.birthDate}}</span>
                </div>
                <div class="d-flex align-items-center" v-if="cv.gender">
                    <i class="bi bi-gender-ambiguous"></i>
                    <span class="ps-2">{{cv.gender}}</span>
                </div>
                <div class="d-flex align-items-center" v-if="cv.phone">
                    <i class="bi bi-telephone"></i>
                    <a class="ps-2 text-white" :href="'tel:' + cv.phone">{{cv.phone}}</a>
                    <i style="font-size: 10px;" class="bi bi-box-arrow-up-right ps-1"></i>
                </div>
                <div class="d-flex align-items-center" v-if="cv.mail">
                    <i class="bi bi-envelope"></i>
                    <a class="ps-2 text-white" :href="'mailto:' + cv.mail">{{cv.mail}}</a>
                    <i style="font-size: 10px;" class="bi bi-box-arrow-up-right ps-1"></i>
                </div>
                <div class="d-flex align-items-center" v-if="cv.address">
                    <i class="bi bi-geo-alt"></i>
                    <span class="ps-2">{{cv.address}}</span>
                </div>
                <div class="d-flex align-items-center" v-if="cv.github">
                    <i class="bi bi-github"></i>
                    <a class="ps-2 text-white" :href="cv.github">{{cv.github}}</a>
                    <i style="font-size: 10px;" class="bi bi-box-arrow-up-right ps-1"></i>
                </div>
            </div>
        </div>
    `,
}