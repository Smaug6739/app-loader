import { Loader } from '../dist/loader.js';
const load = new Loader();
load.start()
setTimeout(() => {
	load.stop()
}, 4000)