let templateObject = {
    id: 'b19f210cc2',
    tip: '10000229f5cda4c',
    creationTime: '2022-08-09T13:14:37-0500',
    lastModified: '2023-04-19T11:56:31-0500',
    hasDiagram: true,
    revisions: [
        {
            id: 'b39f2100fc',
            label: 'As - Is',
            hasDiagram: true,
            time: '2022-08-09T13:27:20-0500',
            timeFormat: '2022-08-09 13:27',
        },
        {
            id: 'b19f211867',
            label: 'To - Be',
            hasDiagram: true,
            time: '2022-08-09T13:15:11-0500',
            timeFormat: '2022-08-09 13:15',
        },
    ],
    creationTimeFormat: '2022-08-09 13:14',
    lastModifiedFormat: '2023-04-19 11:56',
}
let formattedData = []
let selectedOptionIds = []

let flattenTemplateObject = function (object) {
    formattedData = [{ id: object.tip, label: 'Current' }] // you can add - , data: object - if you want rest of the data inside too

    object.revisions.forEach((revision) => {
        formattedData.push({ id: revision.id, label: revision.label }) //  you can add - , data: revision - if you want rest of the data inside too
    })
}

let initiateSelect2 = function (data) {
    $('#checkboxSelect').select2({
        data: data,
        placeholder: 'Select Snapshots',
        templateSelection: function (data) {
            return data.label
        },
        templateResult: function (data) {
            if (!data.id) {
                return data.label
            }
            var selectedValues = $('#checkboxSelect').val() || []
            var isChecked = selectedValues.indexOf(data.id) > -1 ? 'checked' : ''
            var $result = $(`
                <label class='py-4 m-0 d-flex align-items-center act-cursor-pointer'>
                    <div class='act-checkbox-wrapper'>
                        <input type='checkbox' class='act-select-all-checkbox' ${isChecked}>
                        <span></span>
                    </div>
                    <span class='d-block'>${data.label}</span>
                </label>
            `)
            return $result
        },
        escapeMarkup: function (markup) {
            return markup
        },
        closeOnSelect: false,
    })
}

let handleSelectAllCapabilities = function (data) {
    // Add a 'Select All' checkbox to the dropdown
    $('#checkboxSelect').data('select2').$dropdown.prepend(`
        <label class="pick_snapshot__selectAll pvgSelectAllWrapper py-4 m-0 d-flex align-items-center act-cursor-pointer">
            <div class="act-checkbox-wrapper">
                <input type="checkbox" id="selectAllCheckbox" class="act-select-all-checkbox">
                <span></span>
            </div>
            <span class="d-block">Select All</span>
        </label>
    `)

    $(document).on('change', '#selectAllCheckbox', function () {
        if (this.checked) {
            let allOptions = data.map((option) => option.id)
            $('#checkboxSelect').val(allOptions).trigger('change')
            $('.select2-results__options input[type=checkbox]').prop('checked', true)
            $('.select2-results__options li').attr('aria-selected', true)
            $('.select2-results__options li').addClass('select2-results__option--selected')
            selectedOptionIds = allOptions
        } else {
            $('#checkboxSelect').val([]).trigger('change')
            $('.select2-results__options input[type=checkbox]').prop('checked', false)
            $('.select2-results__options li').attr('aria-selected', false)
            $('.select2-results__options li').removeClass('select2-results__option--selected')
            selectedOptionIds = []
        }
    })
}

let handleRetrievingIndividualData = function () {
    $('#checkboxSelect').on('select2:select', function (e) {
        selectedOptionIds.push(e.params.data.id)
    })

    $('#checkboxSelect').on('select2:unselect', function (e) {
        selectedOptionIds = selectedOptionIds.filter((id) => id !== e.params.data.id)
    })
}

$(function () {
    flattenTemplateObject(templateObject)
    initiateSelect2(formattedData)
    handleSelectAllCapabilities(formattedData)
    handleRetrievingIndividualData()
})
