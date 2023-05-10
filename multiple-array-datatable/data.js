let planData = [
    [
        {
            Year: 2023,
            Month1Plan: 10,
            Month1Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month2Plan: 20,
            Month2Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month3Plan: 30,
            Month3Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month4Plan: 40,
            Month4Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month5Plan: 0,
            Month5Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month6Plan: 0,
            Month6Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month7Plan: 0,
            Month7Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month8Plan: 0,
            Month8Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month9Plan: 0,
            Month9Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month10Plan: 0,
            Month10Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month11Plan: 0,
            Month11Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2023,
            Month12Plan: 0,
            Month12Actual: 0,
            DeployDate: '05/09/2022',
        },
    ],
    [
        {
            Year: 2024,
            Month1Plan: 1,
            Month1Actual: 2,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month2Plan: 2,
            Month2Actual: 2,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month3Plan: 3,
            Month3Actual: 3,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month4Plan: 4,
            Month4Actual: 5,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month5Plan: 0,
            Month5Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month6Plan: 0,
            Month6Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month7Plan: 0,
            Month7Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month8Plan: 0,
            Month8Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month9Plan: 0,
            Month9Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month10Plan: 0,
            Month10Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month11Plan: 0,
            Month11Actual: 0,
            DeployDate: '05/09/2022',
        },
        {
            Year: 2024,
            Month12Plan: 0,
            Month12Actual: 0,
            DeployDate: '05/09/2022',
        },
    ],
]

// JavaScript
$(document).ready(function () {
    // Flatten data to match DataTables structure.
    const flatData = planData.reduce((acc, yearData) => {
        for (let month = 1; month <= 12; month++) {
            acc.push({
                Year: yearData[`Year`],
                Month: month,
                Plan: yearData[`Month${month}Plan`],
                Actual: yearData[`Month${month}Actual`],
                DeployDate: yearData[`DeployDate`],
            })
        }
        return acc
    }, [])

    $('#myTable').DataTable({
        data: flatData,
        columns: [{ data: 'Year' }, { data: 'Month' }, { data: 'Plan' }, { data: 'Actual' }, { data: 'DeployDate' }],
    })
})
