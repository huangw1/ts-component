import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import scss from 'rollup-plugin-scss';

export default {
    input  : 'src/index.tsx',
    output : [
        {
            file     : './lib/index.js',
            format   : 'umd',
            sourcemap: true,
        },
    ],
    plugins: [
        // Automatically externalize peerDependencies in a rollup bundle.
        external(),

        // Prints out typescript syntactic and semantic diagnostic messages
        typescript({
            tsconfigDefaults: {
                compilerOptions: {declaration: true, jsx: 'react'},
            },
        }),

        scss(),

        // Locate modules using the Node resolution algorithm,
        // for using third party modules in node_modules
        resolve(),

        // minifies es bundles
        terser(),

        // logs the filesize in cli when done
        filesize(),

        progress({clearLine: false}),
    ],
};
