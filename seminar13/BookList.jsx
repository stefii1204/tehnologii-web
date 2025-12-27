import { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { useState } from 'react'
import BooksChartsDialog from './BooksChartsDialog'


import { getBooks, deleteBook } from '../actions/booksActions'

const BooksList = () => {
    const dispatch = useDispatch()

    const books = useSelector((state) => state.books.list, shallowEqual)

    const filterString = ''

    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    const [sortField, setSortField] = useState('')
    const [sortOrder, setSortOrder] = useState(1)
    const [chartsVisible, setChartsVisible] = useState(false)


    useEffect(() => {
        dispatch(getBooks(filterString, page + 1, pageSize, sortField, sortOrder))
    }, [dispatch, filterString, page, pageSize, sortField, sortOrder])

    const deleteTemplate = (rowData) => (
        <Button
            icon="pi pi-trash"
            severity="danger"
            rounded
            onClick={() =>
                dispatch(
                    deleteBook(
                        rowData.id,
                        filterString,
                        page + 1,
                        pageSize,
                        sortField,
                        sortOrder
                    )
                )
            }
            tooltip="Delete"
        />
    )

    return (
        <div>
            <h2>Books</h2>
            <Button
                label="Show Charts"
                icon="pi pi-chart-pie"
                onClick={() => setChartsVisible(true)}
                style={{ marginBottom: '16px' }}
            />

            <DataTable
                value={books}
                paginator
                rows={pageSize}
                first={page * pageSize}
                rowsPerPageOptions={[5, 10, 20]}
                sortField={sortField}
                sortOrder={sortOrder}
                onPage={(e) => {
                    setPage(e.page)
                    setPageSize(e.rows)
                }}
                onSort={(e) => {
                    setSortField(e.sortField)
                    setSortOrder(e.sortOrder)
                }}
            >
                <Column field="title" header="Title" sortable />
                <Column field="author" header="Author" sortable />
                <Column field="pages" header="Pages" sortable />

                <Column header="Actions" body={deleteTemplate} />
            </DataTable>
            <BooksChartsDialog
                visible={chartsVisible}
                onHide={() => setChartsVisible(false)}
                books={books}
            />

        </div>
    )
}

export default BooksList
