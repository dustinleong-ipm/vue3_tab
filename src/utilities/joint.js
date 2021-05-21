export default function joint(...a)
{
    
    
    //return b=a[a.length-1],a.pop(),a=a.length>1?joint(a):a[0],function(){b.apply(new a)}
    let C;
    const b = a[(a.length - 1)];
    a.pop();
  
    if (a.length > 1) {
      C = joint(a);
    } else {
      [C] = a;
    }
  
    return function joined(...args) {
      b.apply(new C(...args), args);
    };
}