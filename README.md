AmaranJS Notification
============
Nice, sleek and stylish notifications.

This is not a jquery plugin anymore, its just plain javascript and css3.


### Creating Notifications.

With this version you can create AmaranJS same as before and with a new way. Lets see with examples;

You can create notifications like older versions with a config object.

```
amaran({
    theme: 'default',
    position: position,
    inEffect:'fromRight',
    outEffect: 'toRight',
    content: { content: 'My message.'}
});
```

or you chain config methods;

```
amaran()
  .theme('default')
  .content('Hello from new way.')
  .in('fromRight')
  .out('toLeft')
  .position('top left')
  .build();
```
