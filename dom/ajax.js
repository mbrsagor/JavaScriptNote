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

    // Create engine type
    $("form#engineTypeForm").submit(function () {
        // Get data from reqeust body
        let type_name = $('input[name="type_name"]').val().trim();
        if (type_name) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_engine_type" %}',
                data: {
                    'type_name': type_name
                },
                dataType: 'json',
                success: function (data) {
                    // Set data into dropdown field
                    if (data.engine_types) {
                        showEngineTypeDropdown(data.engine_types);
                    }
                    // close modal after create
                    $('#engineTypeModal').modal('hide');
                    // clear fields after submit
                    this.type_name = $('input[name="type_name"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Create model
    $("form#model").submit(function () {
        let standard_features = $('input[name="standard_features"]').val().trim();
        let is_active = $('input[name="is_active"]').val().trim();
        if (standard_features && is_active) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_model" %}',
                data: {
                    'standard_features': standard_features,
                    'is_active': is_active,
                },
                dataType: 'json',
                success: function (data) {
                    if (data.model) {
                        // Set data into dropdown field
                        showEngineModelDropdown(data.model);
                    }
                    // close modal after create
                    $('#engineModel').modal('hide');
                    // clear fields after submit
                    this.standard_features = $('input[name="standard_features"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Create governor
    $("form#governorForm").submit(function () {
        let governor = $('input[name="governor"]').val();
        if (governor) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_governor" %}',
                data: {
                    'governor': governor
                },
                dataType: 'json',
                success: function (data) {
                    if (data.governor) {
                        // Set data into dropdown field
                        showGovernorDropdown(data.governor);
                    }
                    // close modal after create
                    $('#governorTypeModal').modal('hide');
                    // clear fields after submit
                    this.governor = $('input[name="governor"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Cleaner type
    $("form#CleanerTypeForm").submit(function () {
        let cleaner = $('input[name="cleaner"]').val();
        if (cleaner) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_cleaner_type" %}',
                data: {
                    'cleaner': cleaner
                },
                dataType: 'json',
                success: function (data) {
                    if (data.cleaners) {
                        // Set data into dropdown field
                        showCleanerTypeDropdown(data.cleaners);
                    }
                    // close modal after create
                    $('#CleanerTypeModal').modal('hide');
                    // clear fields after submit
                    this.cleaner = $('input[name="cleaner"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Create category
    $("form#categoryForm").submit(function () {
        let category = $('input[name="category"]').val().trim();
        let is_active = $('input[name="is_active"]').val().trim();
        if (category && is_active) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_category" %}',
                data: {
                    'category': category,
                    'is_active': is_active,
                },
                dataType: 'json',
                success: function (data) {
                    if (data.categories) {
                        // Set data into dropdown field
                        showCategoryDropdown(data.categories);
                    }
                    // close modal after create
                    $('#categoryModal').modal('hide');
                    // clear fields after submit
                    this.category = $('input[name="category"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // consumption
    $("form#consumptionForm").submit(function () {
        let consumption = $('input[name="consumption"]').val().trim();
        if (consumption) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_consumption" %}',
                data: {
                    'consumption': consumption
                },
                dataType: 'json',
                success: function (data) {
                    if (data.consumption) {
                        // Set data into dropdown field
                        showConsumptionDropdown(data.consumption)
                    }
                    // close modal after create
                    $('#consumptionModal').modal('hide');
                    // clear fields after submit
                    this.consumption = $('input[name="consumption"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Dimension
    $("form#dimensionForm").submit(function () {
        //let fuel = $('input[name="fuel"]').val().trim();
        let overall_size = $('input[name="overall_size"]').val().trim();
        let weight = $('input[name="weight"]').val().trim();
        if (overall_size && weight) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_dimension" %}',
                data: {
                    //'fuel': fuel,
                    'weight': weight,
                    'overall_size': overall_size
                },
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    if (data) {
                        showDimensionDropdown(data.dimensions);
                    }
                    // close modal after create
                    $('#dimensionModal').modal('hide');
                    // clear fields after submit
                    this.weight = $('input[name="weight"]').val('');
                    this.overall_size = $('input[name="overall_size"]').val('');
                }
            });
        } else {
            alert("All fields must have a valid value.");
        }
        return false;
    });

    // Fuel supply
    $("form#fuelForm").submit(function () {
        let fuel_types = $('input[name="fuel_types"]').val();
        let fuel_supply_pressure = $('input[name="fuel_supply_pressure"]').val().trim();
        if (fuel_supply_pressure) {
            // Ajax Call
            $.ajax({
                url: '{% url "ajax_create_fuel" %}',
                data: {
                    'fuel_types': fuel_types,
                    'fuel_supply_pressure': fuel_supply_pressure
                },
                dataType: 'json',
                success: function (data) {
                    if(data.fuels){
                        // Show data into dropdown
                        showFuelDropdown(data.fuels)
                    }
                    // close modal after create
                    $('#fuelModal').modal('hide');
                    // clear fields after submit
                    this.fuel_supply_pressure = $('input[name="fuel_supply_pressure"]').val('');
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

    // Show engine types data into dropdown
    function showEngineTypeDropdown(engine_types) {
        $("#engine_type").append(`
        <option value="${engine_types.id}">${engine_types.type_name}</option>
    `);
    }

    // Show engine model data into dropdown
    function showEngineModelDropdown(model) {
        $("#model").append(`
        <option value="${model.id}">${model.standard_features}</option>
    `);
    }

    // Show engine governor data into dropdown
    function showGovernorDropdown(governor) {
        $("#governor").append(`
        <option value="${governor.id}">${governor.governor}</option>
    `);
    }

    // Show cleaner type data into dropdown
    function showCleanerTypeDropdown(cleaner) {
        $("#cleaner_type").append(`
        <option value="${cleaner.id}">${cleaner.cleaner}</option>
    `);
    }

    // Show categories data into dropdown
    function showCategoryDropdown(categories) {
        $("#category").append(`
        <option value="${categories.id}">${categories.category}</option>
    `);
    }

    // Show consumption data into dropdown
    function showConsumptionDropdown(consumption) {
        $("#consumption").append(`
        <option value="${consumption.id}">${consumption.consumption}</option>
    `);
    }

    // Show dimension data into dropdown
    function showDimensionDropdown(dimension) {
        $("#dimension").append(`
        <option value="${dimension.id}">${dimension.overall_size}</option>
    `);
    }
    
    // Show fuel data into dropdown
    function showFuelDropdown(fuel) {
        $("#fuel").append(`
        <option value="${fuel.id}">${fuel.fuel_supply_pressure}</option>
    `);
    }
