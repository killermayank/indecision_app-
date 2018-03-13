import ReactDOM from "react-dom";

let  visibility = false;

const DetailsOnClick = () => {
    visibility =!visibility;
    render();
};
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={DetailsOnClick}>
                {visibility?'Hide Details':'Show Details'}
            </button>
            {visibility && <div><p>Hi, there are the details !</p></div>}

        </div>

    );

    ReactDOM.render(jsx,document.getElementById('app'));
};
render();

