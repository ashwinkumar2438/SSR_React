import * as url from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const getPath = ( path ) =>  url.fileURLToPath(new URL( path, import.meta.url));

const webpackConfig = {
    entry: {
        index: getPath( '../src/index.js' ),
        [ 'public/index' ]: getPath( '../src/public/index.js' )
    },
    output: {
        filename: '[name].js',
        path: getPath( '../build' ),
        library: 'SSR',
        libraryTarget: 'umd'
    },
    target: 'web',
    plugins: [new MiniCssExtractPlugin( {
        filename: 'public/styles.css'
    } )],
    module: {
        rules: [ {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                options: {
                    presets: [
                    [ '@babel/preset-env', { targets: "defaults", modules: false } ],
                    [ '@babel/preset-react' ]
                    ]
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }
}

export default webpackConfig;