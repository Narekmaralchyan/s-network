const feedStyle ={

    'width': '100vw',
    'height':'100vh',
    'display': 'flex',
    'backgroundColor': (theme) => {if(theme.palette.mode === 'dark') return '#172234'; else return 'skyblue';},
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
};

export {feedStyle};