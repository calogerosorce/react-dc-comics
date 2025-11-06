import Card from "./Card";
export default function Fumetti({ comics }) {


    return (
        <div className="row g-4 p-5">
            {comics.map(items =>
                /* Aggiungento justify-content-center alla card li posso posizionare perfettamente avento i fumetti quadrati*/
                <Card key={items.id} thumb={items.thumb} series={items.series} />
            )}
        </div>
    )
}