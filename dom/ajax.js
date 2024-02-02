// Create manufacture
    $("form#manufacturer").submit(function () {
        let name = $('input[name="name"]').val().trim();
        let is_active = $('input[name="is_active"]').val().trim();
        if (name && is_active) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_manufacture" %}',
                data: {
                    'name': name,
                    'is_active': is_active,
                },
                dataType: 'json',
                success: function (data) {
                    if (data.manufacturer) {
                        // Set data into dropdown field
                        showDataManufacturerDropdown(data.manufacturer);
                    }
                    // close modal after create
                    $('#manufacturerModal').modal('hide');
                    // clear fields after submit
                    this.name = $('input[name="name"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Show manufacturer data into dropdown
    function showDataManufacturerDropdown(manufacturer) {
        $("#manufacturer").append(`
        <option value="${manufacturer.id}">${manufacturer.name}</option>
    `);
    }

// Date picker
flatpickr(".datepicker",
    {
        dateFormat: "m/d/y"
    });
    let btnTypes = document.querySelectorAll('.travel-type-wrap .item')
    for (let i = 0; i < btnTypes.length; i++) {
        btnTypes[i].addEventListener('click', function () {
            for (let i = 0; i < btnTypes.length; i++) {
                btnTypes[i].classList.remove('active')
            }
            btnTypes[i].classList.add('active')
        })
    }


// Ajax search
$(document).ready(function(){
  
    var ajaxFunction = function( val ){
      $('#out').text('Val: ' + val);
    }

    $('#search').on('keyup paste',function(){
      if(this.value.length >= 3)
        ajaxFunction(this.value);
    });
  
});
