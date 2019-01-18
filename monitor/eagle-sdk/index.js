import performanceFn from './performence';
import resourceFn from './resource';

performanceFn.init((data)=>{
    console.log('performance init!');
    console.log(data)
});

resourceFn.init((data)=>{
    console.log('resource init!');
    console.log(data);
});
