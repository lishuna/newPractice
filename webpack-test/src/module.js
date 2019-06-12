/**
 * @author lishuna
 * @date  2019-06-09:17:48
 * @version 3.1.0.0
 * @desc
 */
// import { counter } from './utils/math.js';

import('./utils/math.js').then(({ counter }) => {
    alert(counter);
  }
);
