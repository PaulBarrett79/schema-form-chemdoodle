/*  This entire module is based on the instructions for creating custom schema form components at 
    https://github.com/json-schema-form/angular-schema-form/blob/master/docs/extending.md
 */

angular.module('schemaForm-chemdoodle', ['schemaForm', 'chemdoodleAngular']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var chemdoodle = function(name, schema, options) {
      if (schema.type === 'object' && schema.format == 'chemdoodle') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'chemdoodle';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.object.unshift(chemdoodle);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'chemdoodle',
    'directives/decorators/bootstrap/chemdoodle/chemdoodle-form-template.html');
    schemaFormDecoratorsProvider.createDirective('chemdoodle',
    'directives/decorators/bootstrap/chemdoodle/chemdoodle-form-template.html');
  }]);
