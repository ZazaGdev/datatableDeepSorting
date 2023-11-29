const select2Data = [
    { text: 'Item1', shouldBeDisabled: true, id: 0 },
    { text: 'Item2', shouldBeDisabled: false, id: 1 },
    { text: 'Item3', shouldBeDisabled: true, id: 2 },
    { text: 'Item4', shouldBeDisabled: true, id: 3 },
    { text: 'Item5', shouldBeDisabled: false, id: 4 },
    { text: 'Item6', shouldBeDisabled: false, id: 5 },
    { text: 'Item7', shouldBeDisabled: false, id: 6 },
    { text: 'Item8', shouldBeDisabled: true, id: 7 },
    { text: 'Item9', shouldBeDisabled: false, id: 8 },
    { text: 'Item10', shouldBeDisabled: false, id: 9 },
]

let initiateSelect2 = function (data) {
    $('#checkboxSelect').select2({
        data: data,
    })
}

$(function () {
    initiateSelect2(select2Data)
    // init data
    $('#checkboxSelect').val([1, 2, 3]).trigger('change.select2');

    // disable deselect
    $('#checkboxSelect').on('select2:unselecting', function (event) {
        console.log(event)
        // Prevent the deselection
        event.preventDefault();
    });

    // Tracking whats inside select2
    $('.select2-search__field').on('keyup', function (e) {
        console.log($(this).val());
    })
})
