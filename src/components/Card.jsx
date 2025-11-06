export default function Card(props) {



    return (
        <div className="card col-12 col-md-4 col-lg-2 align-items-center">
            <img src={props.thumb} alt="" />
            {props && <p>{props.series}</p>}
        </div>
    )
}