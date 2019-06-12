/**
 * @author lishuna
 * @date  2019-05-20:17:32
 * @version 3.1.0.0
 * @desc
 */
const file = require('fs');
const path = require('path');
const str = file.readFileSync(path.join(__dirname, './data/tree.json'), 'UTF-8');
const list = JSON.parse(str);

function listToTree(list,parentID){
  let node = {};
  const arr = [];
  list.forEach(item => {
    if(item.parentID === parentID ){
        node = {...item,children: listToTree(list, item.id)};
        arr.push(node);
    }
  });
  return arr;
}
const rootNode = list.nodes.shift();
const tree = {...rootNode};
tree.children = listToTree(list.nodes,'0');
console.log(JSON.stringify(tree));
