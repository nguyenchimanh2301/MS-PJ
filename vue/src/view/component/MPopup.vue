<template>
    <div>
        <div class="m-popup" v-bind:class="{isShowPopup:isShow}">
        <div class="popup" id="popup">
            <div class="popup__header">
                    <div class="title"> tài sản</div>
                    <div class="popup__close" @click="btnClosePopup"></div>
            </div>
            <div class="popup__contain">
                    <div class="row">
                         <label for="">Mã tài sản<span>*</span></label>
                        <input type="text" v-model="employeeSelect.CustomerGroupId">
                    </div>
                    <div class="row">
                        <label for="">Tên tài sản <span>*</span></label>
                        <input type="text"  v-model="employeeSelect.Description" placeholder="nhập tên tài sản">
                    </div>
                    <div class="row">
                        <label for="">Mã bộ phận sử dụng <span>*</span></label>
                        <input type="text" v-model="employeeSelect.CustomerGroupName" placeholder="Chọn mã bộ phận sử dụng">
                        <div class="icon__dropdown"></div>
                    </div>
                    <div class="row">
                        <label for="">Tên bộ phận sử dụng</label>
                        <input type="text" class="grown__input"  v-model="employeeSelect.ModifiedBy" placeholder>
                    </div>
                    <div class="row">
                        <label for="">Mã loại tài sản <span>*</span></label>
                        <input type="text" placeholder="Chọn mã loại tài sản">
                        <div class="icon__dropdown"></div>
                    </div>
                    <div class="row">
                        <label for="">Tên loại tài sản</label>
                        <input type="text" class="grown__input" >
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
                            <input type="date" v-model="employeeSelect.CreatedDate" >
                        </div>
                        <div class="row">
                            <label for="">Năm theo dõi</label>
                            <input type="text" value="2021" class="text-alain-rigt grown__input">
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
                    <button class="btn__disable" id="btnDisable" @click="btnClosePopup">HUỶ</button>
                    <button class="btn" @click="showToast">LƯU</button>
                </div>
            </div>
        </div>
    </div>
    <MToastMessageVue v-show="isShowToast" 
    @isCloseToast="showToast"
    />
    </div>
</template>

<script>
    import MToastMessageVue from './MToastMessage.vue';
    export default {
    name :"MPopup",
    components:{
    MToastMessageVue,
},
props:["isShow","employeeSelected"],
watch:{
    employeeSelected:function(employee){
        this.employeeSelect = employee;
    }
},

methods: {
    btnClosePopup(){
        this.$emit("isShowPopup",false);
    },
   
  
},
data() {
    return {
        isShowPopup : false,
        employeeSelect:{},
        isShowToast: false,
    }
},
}
</script>