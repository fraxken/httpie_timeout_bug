# httpie_timeout_bug
Reproduction of httpie timeout bug

```
$ npm ci
$ npm start
```

## Expected:

Something like this

```
Start with 257 packages to fetch!
one sec interval, done: 7
one sec interval, done: 124
one sec interval, done: 233
one sec interval, done: 250
one sec interval, done: 254
done!
```

## But sometimes it never end

```
Start with 257 packages to fetch!
one sec interval, done: 7
one sec interval, done: 124
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
one sec interval, done: 230
```
