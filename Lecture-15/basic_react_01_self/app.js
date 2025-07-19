// let divv = document.getElementById('root');

// let h1 = document.createElement('h1');

// h1.innerText = "Hello h1 DOM"

// divv.appendChild(h1)


// -----------------------------------------------


// let divv = document.getElementById('root');

// let h1 = React.createElement('h1' , {id:"sam",class:"vohra"} , "Hello from React");
// // let h1 = React.createElement('h1', null, "Hello from React");

// const rootEl = ReactDOM.createRoot(divv);

// rootEl.render(h1)

// // -----------------------------------------------


// let divv = document.getElementById('root');

// let layout = React.createElement('div',null, [
//         React.createElement('div',null, [
//                 React.createElement('h1',null,"hello from h1.1"),
//                 React.createElement('p',null,"hello from p1")
//             ]
//         ),
//         React.createElement('div',null, [
//                 React.createElement('h1',null,"hello from h1.2"),
//                 React.createElement('p',null,"hello from p2")
//             ]
//         ) 
//     ]
// );

// const rootEl = ReactDOM.createRoot(divv);

// rootEl.render(layout);


// -----------------------------------------------
// JSX
let divv = document.getElementById('root');

let layout = <div>
                <div>
                    <div>
                        <h1>hello from h1 using jsx</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>hello from h1 using jsx</h1>
                    </div>
                </div>
             </div>

const rootEl = ReactDOM.createRoot(divv);

rootEl.render(layout);