MyNameSpace = {};

MyNameSpace.myVariable = ''
MyNameSpace.myFunction = () => {

}

if (typeof MyNameSpace === 'undefined') {
  var MyNameSpace = {}
}
// 간단히
MyNameSpace = MyNameSpace || {};
