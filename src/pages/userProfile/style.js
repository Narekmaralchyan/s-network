 const  box = {
    'm':0,
    'p':0,
    'width':'100vw',
    'height':'100vh',
    'display': 'flex',
     'backgroundColor': (theme) => {if(theme.palette.mode === 'dark') return '#172234'; else return 'skyblue';},
    'flexDirection':'column',
    'justifyContent':'start',
    'alignItems':'center' };
const profileHeader = {
    'width':'50%',
    'minWidth': '300px',
    'height':'150px',
    'display': 'flex',
    justifyContent:'space-around',
    'alignItems': 'center',
};

const info = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '300px',
    minHeight:'130px',
};
 const names= {
     display: 'flex',
     justifyContent: 'space-around',
 };
const follows = {
    display: 'flex',
    justifyContent: 'space-around',

};
const buttons = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};
const button = {

};
const style = { box, profileHeader , names,info , follows ,buttons,button};
    export  default style;