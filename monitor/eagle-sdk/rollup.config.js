import babel from 'rollup-plugin-babel';
const isDev = process.env.NODE_ENV == 'dev';

export default {
    input: './index.js',
    output: {
        file: isDev ? '../client/js/lib/eagle.bundle.js' : './dist/egale.bundle.min.js',
        format: 'umd'
    },
    sourceMap: isDev,
    watch: {
        exclude: './node_module/**'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
