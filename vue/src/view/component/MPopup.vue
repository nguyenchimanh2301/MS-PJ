<template>
    <div>
        <div class="m-popup" v-bind:class="{isShowPopup:isShow}">
        <div class="popup" id="popup">
            <div class="popup__header">
                    <div class="title">Sửa tài sản</div>
                    <div class="popup__close" @click="btnClosePopup"></div>
            </div>
            <div class="popup__contain">
                    <div class="row">
                         <label for="">Mã tài sản <span>*</span></label>
                        <input type="text">
                    </div>
                    <div class="row">
                        <label for="">Tên tài sản <span>*</span></label>
                        <input type="text" placeholder="nhập tên tài sản">
                    </div>
                    <div class="row">
                        <label for="">Mã bộ phận sử dụng <span>*</span></label>
                        <input type="text" placeholder="Chọn mã bộ phận sử dụng">
                        <div class="icon__dropdown"></div>
                    </div>
                    <div class="row">
                        <label for="">Tên bộ phận sử dụng</label>
                        <input type="text">
                    </div>
                    <div class="row">
                        <label for="">Mã loại tài sản <span>*</span></label>
                        <input type="text" placeholder="Chọn mã loại tài sản">
                        <div class="icon__dropdown"></div>

                    </div>
                    <div class="row">
                        <label for="">Tên loại tài sản</label>
                        <input type="text">
                    </div>
                    <div class="row">
                        <label for="">Số lượng <span>*</span></label>
                        <input type="text">
                        <div class="icon__up"></div>

                    </div>
                    <div class="row">
                         <div class="popup__grid">
                        <div class="row">
                            <label for="">Nguyên giá <span>*</span></label>
                            <input type="text">
                        </div>
                        <div class="row">
                            <label for="">Tỉ lệ hao mòn (%) <span>*</span></label>
                            <input type="text">
                        <div class="icon__up"></div>
                        </div>
                        <div class="row">
                            <label for="">Ngày bắt đầu sử dụng <span>*</span></label>
                            <input type="date">
                        </div>
                        <div class="row">
                            <label for="">Năm theo dõi</label>
                            <input type="text">
                        </div>
                        <div class="row">
                            <label for="">Giá trị hao mòn năm <span>*</span></label>
                            <input type="text">
                        </div>
                    </div>
                    </div>
                    <div class="row">
                        <label for="">Ngày mua <span>*</span></label>
                        <input type="date">
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                        <label for="">Số năm sử dụng <span>*</span></label>
                        <input type="date">
                    </div>
                 </div> 
            <div class="popup__footer">
                <div class="popup__btn">
                    <button class="btn__disable" id="btnDisable"  @click="btnClosePopup">HUỶ</button>
                    <button class="btn">LƯU</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
    name :"MPopup",
    components:{
},
methods: {
    btnClosePopup(){
        this.$emit("isShowPopup",false);
    }
},
props:["isShow"],
data() {
    return {
        isShowPopup : false,
    }
},
}
</script>