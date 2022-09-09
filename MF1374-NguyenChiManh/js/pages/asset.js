$(document).ready(function () {
    LoadData();
    $('#sidebarToggle').click(function(){
        $('.box__text').hide();
        $('.menu__dropdown').hide();
        var element = document.querySelector('.contains');
        element.classList.remove("contain");
        element.classList.add("contain2");
        $('#sidebarToggle').hide();
        $('#sidebarToggleOpen').show();

    })
     

    $('#sidebarToggleOpen').click(function(){
        
        var element = document.querySelector('.contains');
        element.classList.remove("contain2");
        element.classList.add("contain");
        $('.box__text').show();
        $('.menu__dropdown').show();
        $('#sidebarToggle').show();
        $('#sidebarToggleOpen').hide();

    })
    $('#btnAdd').click(function(){
        $('.m-popup').show();
    });

    $('#btnDisable').click(function(){
        $('.m-popup').hide();
    });
   
});

function LoadData(){
    $.ajax({
        type: "GET",
        url: "https://cukcuk.manhnv.net/api/v1/CustomerGroups",
        data: "json",
        success: function (response) {
            console.log(response)
           response.map((response)=>{
            var html = ` 
            <tr>
            <td class="text-alain-center"><input type="checkbox" name="" id=""></td>
            <td class="text-alain-left">1</td>
            <td class="text-alain-left">` +response.CustomerGroupId+`</td>
            <td class="text-alain-left">` +response.CustomerGroupId+`</td>
            <td class="text-alain-left">` +response.CustomerGroupId+`</td>
            <td class="text-alain-right">`+response.CustomerGroupId+`</td>
            <td class="text-alain-right">`+response.CustomerGroupId+`</td>
            <td class="text-alain-right">`+response.CustomerGroupId+`</td>
            <td class="text-alain-right">`+response.CustomerGroupId+`</td>
            <td class="text-alain-center">
                <button class="btn__pen"></button>
                <button class="btn__td"></button>
            </td>
            </tr>`
            $(".table tbody").append(html);
           })
        }
    });
}
