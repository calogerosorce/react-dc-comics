import ContentAzzurro from "./ContentAzzurro"
import Fumetti from "./Fumetti"
export default function Main() {



    return (
        <main>
            <div className="jumb">

                <div className="title">
                    <h2>CURRENT SERIES</h2>
                </div>
            </div>
            <div className="content">
                <Fumetti />
                <button className="btn px-5"><strong>LOAD MORE</strong></button>
            </div>
            <ContentAzzurro />
        </main>
    )
}