# How to pass command line arguments to Node.js process

**Source:** [Stack Overflow][1]

The arguments are stored in `process.argv`

Here are [the node docs on handling command line args][2]:

> process.argv is an array containing the command line arguments. The first element will be 'node',
> the second element will be the name of the JavaScript file. The next elements will be any
> additional command line arguments.

```javascript
// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
```

This will generate:

```bash
$ node process-2.js one two=three four
0: node
1: /Users/mjr/work/node/process-2.js
2: one
3: two=three
4: four
```

[1]: https://stackoverflow.com/a/4351548/6920044
[2]: http://nodejs.org/docs/latest/api/process.html#process_process_argv
