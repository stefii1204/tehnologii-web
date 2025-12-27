import { Dialog } from 'primereact/dialog'
import { Chart } from 'primereact/chart'

const BooksChartsDialog = ({ visible, onHide, books }) => {
    const countByAuthor = books.reduce((acc, b) => {
        const key = b.author || 'Unknown'
        acc[key] = (acc[key] || 0) + 1
        return acc
    }, {})

    const authors = Object.keys(countByAuthor)
    const authorCounts = Object.values(countByAuthor)

    const barData = {
        labels: authors,
        datasets: [
            {
                label: 'Books / Author',
                data: authorCounts
            }
        ]
    }

    const buckets = {
        '0-100': 0,
        '101-200': 0,
        '201-300': 0,
        '301+': 0
    }

    books.forEach((b) => {
        const p = Number(b.pages || 0)
        if (p <= 100) buckets['0-100']++
        else if (p <= 200) buckets['101-200']++
        else if (p <= 300) buckets['201-300']++
        else buckets['301+']++
    })

    const pieData = {
        labels: Object.keys(buckets),
        datasets: [
            {
                data: Object.values(buckets)
            }
        ]
    }

    return (
        <Dialog
            header="Books Charts"
            visible={visible}
            style={{ width: '900px', maxWidth: '95vw' }}
            onHide={onHide}
            modal
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <h3>Books per Author</h3>
                    <Chart type="bar" data={barData} />
                </div>

                <div>
                    <h3>Pages Distribution</h3>
                    <Chart type="pie" data={pieData} />
                </div>
            </div>
        </Dialog>
    )
}

export default BooksChartsDialog
