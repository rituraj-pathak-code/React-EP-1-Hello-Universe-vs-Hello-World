const parent = React.createElement('div',{id:"parent"},
    React.createElement('div',{id: "child"},
    [React.createElement('h1',{id:"headingOne"},"Hello Universe"),
    React.createElement("h2",{id:"headingTwo"},"Hello World")   
])
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);