// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json'

export default [
	{
		input: './index.js',
		output: [
			{
				file: 'dist/index.js',
				format: 'es',
				sourcemap: true,
			}
		],
		plugins: [
			del({ targets: 'dist' }),
			typescript({
				tsconfig: './tsconfig.json'
			}),
			commonjs(),
			resolve(),
			json()
		]
	}
];