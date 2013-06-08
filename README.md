# dok - DOM traversal

Simple and very small DOM traversal library for JavaScript simplification.

Dok is really just some shorthand methods for regular JS stuff but I think that it is useful when you don't need something enormous like jQuery with all of its glorious methods and magic.

## Usage

Include before usage - preferably just before the `</body>` closure tag.

```html
<script src="dok.js"></script>
<!-- some clever JavaScript code of your design -->
</body>
```

### Query for a selector

Shorthand for the awesome `document.querySelector()` method.

```javascript
var nav = dok.query( 'nav.navigation' );
```

### Query for a selector (all of them)

Shorthand for the awesome `document.querySelectorAll()` method.

```javascript
var posts = dok.queryAll( '.post' );
```

### Get element by tag name

Shorthand for the awesome `document.getElementsByTagName()` method.

```javascript
var paragraphTags = dok.getTag( 'p' );
```

### Get element by class name

Shorthand for the awesome `document.getElementsByClassName()` method.

```javascript
var red = dok.getClass( 'red' );
```
### Get element by id

Shorthand for the awesome `document.getElementById()` method.

```javascript
var special = dok.getId( 'special' );
```

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar.valgeirsson@gmail.com).