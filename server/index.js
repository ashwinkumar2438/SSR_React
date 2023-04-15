import express from 'express';
import { readFile } from 'fs/promises';
import * as url from 'url';

const root = url.fileURLToPath(new URL( '../build/index.js', import.meta.url));

const publicPath = url.fileURLToPath(new URL( '../build/public', import.meta.url));

const getAppHtml = async () => {
    const file = await readFile( root, { encoding: 'utf8' } );
    eval( 'var self = global;' + file );
    const html = SSR.default;
   
    return html;
}

const app = express();

app.use( '/public', express.static( publicPath ) );

app.get( '/',async ( _, res ) => {
    const appHtml = await getAppHtml();
    const baseHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server Side Rendering Example</title>
            <script defer type='text/javascript' src='./public/index.js'></script>
            <link rel="stylesheet" type="text/css" href='./public/styles.css' />
        </head>
        <body>
            <div id='root'>${ appHtml }</div>
        </body>
        </html>
    `

    res.send( baseHtml );
} )

app.listen( 9000, ( err ) => {
    if( err )return console.warn( err );
    console.log( 'app running at port:9000');
} )


