import DataTable from 'datatables.net-dt';
import Editor from '@datatables.net/editor-2023-12-21-dt';

var editor = new DataTable.Editor({
    ajax: '../php/staff.php',
    fields: [
        {
            label: 'First name:',
            name: 'first_name'
        },
        {
            label: 'Last name:',
            name: 'last_name'
        },
        {
            label: 'Position:',
            name: 'position'
        },
        {
            label: 'Office:',
            name: 'office'
        },
        {
            label: 'Extension:',
            name: 'extn'
        },
        {
            label: 'Start date:',
            name: 'start_date',
            type: 'datetime'
        },
        {
            label: 'Salary:',
            name: 'salary'
        }
    ],
    table: '#example'
});

$('#example').DataTable({
    ajax: '../php/staff.php',
    buttons: [
        { extend: 'create', editor: editor },
        { extend: 'edit', editor: editor },
        { extend: 'remove', editor: editor }
    ],
    columns: [
        {
            data: null,
            defaultContent: '',
            className: 'select-checkbox',
            orderable: false
        },
        { data: 'first_name' },
        { data: 'last_name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'start_date' },
        { data: 'salary', render: DataTable.render.number(null, null, 0, '$') }
    ],
    dom: 'Bfrtip',
    order: [[1, 'asc']],
    select: {
        style: 'os',
        selector: 'td:first-child'
    }
});
 
// Activate an inline edit on click of a table cell
$('#example').on('click', 'tbody td:not(:first-child)', function (e) {
    editor.inline(this);
});