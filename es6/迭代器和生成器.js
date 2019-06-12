/**
 * @author lishuna
 * @date  2019-05-08:14:56
 * @version 3.1.0.0
 * @desc
 */

function read(list) {
    let index = 0;
    return {
        next() {
            let done = index === list.length;
            let value = done ? undefined : list[index++];
            return {
                value,done
            }
        }
    }
}

let gen = read(['js', 'node', 'php']);
let result;
do {
    result = gen.next();
    console.log(result);
} while (!result.done);

function* readNew(list) {
    for (let i = 0; i < list.length; i++) {
        aa = yield list[i];
        console.log('=====',aa);
    }
}
let general = readNew(['js','node','php']);
console.log(general.next());
console.log(general.next('hahah'));
console.log(general.next('heheheh'));
console.log(general.next('gggg'));


