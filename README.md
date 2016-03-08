# schema-form-chemdoodle
A plugin to allow usage of a Chemdoodle sketcher in json schema form.

When you create your module, be sure to depend on this project's module as well.

```javascript
angular.module('yourModule', ['schemaForm', 'schemaForm-chemdoodle']);
```

Usage
-----
The add-on adds a new form type, `chemdoodle`, and a new default
mapping.

| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "object" and "format": "chemdoodle"   |   chemdoodle   |
