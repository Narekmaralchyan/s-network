 const  box = {
    'm':0,
    'pl':50,
    'width':'100vw',
    'height':'100vh',
    'display': 'flex',
     'backgroundColor': (theme) => {if(theme.palette.mode === 'dark') return '#172234'; else return 'skyblue';},
    'flexDirection':'column',
    'justifyContent':'start',
     'overflowY':'scroll',
     'gap':'10px',
    'alignItems':'start' };

const style = { box};
    export  default style;