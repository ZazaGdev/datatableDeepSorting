let initialData = [
    { id: 222, name: 'Tiana 4', parentID: 1 },
    { id: 43, name: 'C 1 ', parentID: 37 },
    { id: 211, name: 'Tiana 21', parentID: 111 },
    { id: 2, name: 'Parent 2', parentID: null },
    { id: 312, name: 'Tiana 6', parentID: 222 },
    { id: 111, name: 'Tiana 1', parentID: 1 },
    { id: 333, name: 'Tiana 8', parentID: 1 },
    { id: 3, name: 'Parent 3', parentID: null },
    { id: 5, name: 'Parent 5', parentID: null },
    { id: 26, name: 'Alba', parentID: 11 },
    { id: 333, name: 'Tiana 4', parentID: 111 },
    { id: 6, name: 'Tiana 1', parentID: 1 },
    { id: 7, name: 'Child 1', parentID: 1 },
    { id: 333, name: 'Tiana 4', parentID: 222 },
    { id: 48, name: 'Child 2', parentID: 1 },
    { id: 9, name: 'Jaxon', parentID: 2 },
    { id: 10, name: 'Jaxton', parentID: 3 },
    { id: 16, name: 'Kellen', parentID: 6 },
    { id: 11, name: 'Zayne', parentID: 3 },
    { id: 12, name: 'Rhea', parentID: 4 },
    { id: 13, name: 'Juno', parentID: 4 },
    { id: 899, name: 'Tiana 7', parentID: 222 },
    { id: 22, name: 'Zane', parentID: 9 },
    { id: 8, name: 'Jagger', parentID: 2 },
    { id: 14, name: 'Vida', parentID: 5 },
    { id: 234, name: 'D', parentID: 12 },
    { id: 15, name: 'Lila', parentID: 5 },
    { id: 222, name: 'Aiana 3', parentID: 111 },
    { id: 49, name: 'Tiana 2', parentID: 1 },
    { id: 17, name: 'Alvaro', parentID: 6 },
    { id: 444, name: 'Tiana 5', parentID: 111 },
    { id: 19, name: 'Paxton', parentID: 7 },
    { id: 4, name: 'Parent 4', parentID: null },
    { id: 1, name: 'Parent 1', parentID: null },
    { id: 42, name: 'B 1', parentID: 37 },
    { id: 20, name: 'Keon', parentID: 8 },
    { id: 453, name: 'B', parentID: 12 },
    { id: 21, name: 'Maddox', parentID: 8 },
    { id: 29, name: 'G', parentID: 12 },
    { id: 755, name: 'Tiana 5', parentID: 222 },
    { id: 23, name: 'Gia', parentID: 9 },
    { id: 444, name: 'Tiana 6', parentID: 1 },
    { id: 18, name: 'Koa', parentID: 7 },
    { id: 44, name: 'D 1', parentID: 37 },
    { id: 25, name: 'Myka', parentID: 10 },
    { id: 24, name: 'Kase', parentID: 10 },
    { id: 27, name: 'Nash', parentID: 11 },
    { id: 28, name: 'Tori', parentID: 11 },
    { id: 41, name: 'A 2', parentID: 37 },
    { id: 123, name: 'E', parentID: 12 },
    { id: 84, name: 'F', parentID: 12 },
    { id: 30, name: 'Mai', parentID: 12 },
    { id: 31, name: 'Harvey', parentID: 13 },
    { id: 198, name: 'Parent 0', parentID: null },
    { id: 32, name: 'Karla', parentID: 13 },
    { id: 33, name: 'Kingsley', parentID: 14 },
    { id: 34, name: 'Mila', parentID: 14 },
    { id: 35, name: 'Aria', parentID: 15 },
    { id: 36, name: 'Kaiya', parentID: 15 },
    { id: 37, name: 'Arjun', parentID: 16 },
    { id: 77, name: 'A', parentID: 12 },
    { id: 38, name: 'Jenesis', parentID: 16 },
    { id: 78, name: 'C', parentID: 12 },
    { id: 39, name: 'Remi', parentID: 17 },
    { id: 40, name: 'A 1', parentID: 37 },
]

let sortDirection = 'asc'

function assignNodes(data) {
    let idToNodeMap = new Map()
    let newData = JSON.parse(JSON.stringify(data))

    // Sort the data by id to ensure that parents come before their children
    newData.sort((a, b) => a.id - b.id)

    for (let item of newData) {
        if (item.parentID === null) {
            item.node = 0
            idToNodeMap.set(item.id, 0)
        } else {
            let parentNode = newData.find((parent) => parent.id === item.parentID)
            let parentNodeLevel = idToNodeMap.get(parentNode.id)

            if (parentNodeLevel !== undefined) {
                item.node = parentNodeLevel + 1
                idToNodeMap.set(item.id, item.node)
            }
        }
    }

    return newData
}

let dataWithNodes = assignNodes(initialData)

function getChildren(parentID, arr) {
    let children = arr.filter((item) => item.parentID === parentID)
    let result = []

    for (let child of children) {
        result.push(child)
        result = result.concat(getChildren(child.id, arr))
    }

    return result
}

function sortData(arr) {
    let topLevelParents = arr.filter((item) => item.parentID === null)
    let sortedData = []

    for (let parent of topLevelParents) {
        sortedData.push(parent)
        sortedData = sortedData.concat(getChildren(parent.id, arr))
    }

    return sortedData
}

function sortTree(arr) {
    const sortedArr = [...arr].sort((a, b) => a.name.localeCompare(b.name))

    const tree = []
    const lookup = {}

    sortedArr.forEach((item) => {
        lookup[item.id] = { ...item, children: [] }
    })

    sortedArr.forEach((item) => {
        if (item.parentID === null) {
            tree.push(lookup[item.id])
        } else {
            lookup[item.parentID].children.push(lookup[item.id])
        }
    })

    function sortCluster(cluster) {
        cluster.forEach((item) => {
            if (item.children.length > 0) {
                item.children = sortCluster(item.children)
            }
        })

        return [...cluster].sort((a, b) => a.name.localeCompare(b.name))
    }

    function sortTreeClusters(node) {
        if (node.children.length > 0) {
            node.children = sortCluster(node.children)
            node.children.forEach((child) => sortTreeClusters(child))
        }
    }

    sortTreeClusters({ children: tree })
    return tree
}

function flatten(obj) {
    console.log(obj)
    let flattened = []
    for (let i = 0; i < obj.length; i++) {
        flattened.push(obj[i])
        if (obj[i].children && obj[i].children.length > 0) {
            flattened = flattened.concat(flatten(obj[i].children))
            delete obj[i].children
        }
    }
    return flattened
}

// Sorts as parent-child
let sortedData = sortData(dataWithNodes)

// Sorts as tree
let sortedAsTree = sortTree(sortedData)

const flattened = flatten(sortedAsTree)
// Initialize the DataTable with 'dataWithNodes'
$(document).ready(function () {
    let table = $('#example').DataTable({
        data: dataWithNodes,
        paging: false,
        columns: [{ data: 'name' }, { data: 'id' }, { data: 'parentID' }, { data: 'node' }],
        order: [],
    })

    $('#reRenderButton').on('click', function () {
        // Destroy the current table
        table.destroy()

        // Reinitialize the table with flattened data and the createdRow configuration
        table = $('#example').DataTable({
            data: flattened,
            paging: false,
            columns: [{ data: 'name' }, { data: 'id' }, { data: 'parentID' }, { data: 'node' }],
            createdRow: function (row, data, dataIndex) {
                let paddingLeft = 30 * data.node
                $('td', row).eq(0).css('padding-left', `${paddingLeft}px`)
            },
            order: [],
        })
    })
})
