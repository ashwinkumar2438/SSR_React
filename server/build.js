import webpack from 'webpack';
import configuration from '../configs/webpack.js';

const compiler = webpack( configuration );

compiler.run( ( err ) => { 
    if( err ) return console.warn( err );
    compiler.close( ( closeErr ) => {
        if( closeErr )return console.warn( closeErr );
        console.log( 'compiled successfully' );
    } )
})