const path=require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./app.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(scss)$/,
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return[
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
};