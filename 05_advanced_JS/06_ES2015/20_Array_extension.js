const baseLocation = new Set();
baseLocation.add('a');
baseLocation.add('b');
baseLocation.add('a');
baseLocation.add('c');
baseLocation.add('d');
baseLocation.add('b');

baseLocation.forEach(items=>console.log(items))
baseLocation.delete('d')
console.log(baseLocation)

arrLocation=Array.from(baseLocation)
console.log(arrLocation)
