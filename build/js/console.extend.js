/**
 * Extending the Console
 */
(function() {
    "use strict";
    console.level = ["LOW", "MEDIUM", "HIGH"];
    console.tests = [];
    console.printTests = function(){
        if(console.tests.length>0){
            console.table(console.tests);
        } else {
            console.info("There are not tests to view.");
        }

    };
    console.aboutExpect = function(){
        console.group("What to Expect: About Expect");
        console.log("This is just a simple tool to test conditions while writing JavaScript code. \n"+
            "The simple syntax looks like this:\n > "+
            "console.expect('My bike tires colors',{ bike.tires.color }).toBe('black');\n");

        console.log("\nAnother method is ..contains() \n"+
            "The simple syntax looks like this:\n > "+
            "console.expect('My bike tires colors',{ bike }).toBe('tires');\n");
        console.log("--drew");
        console.groupEnd("What to Expect: About Expect");
    };
    /**
     * ['console'] is a global Singleton. Preserving logs will preserve your tests.
     * This encapsulates the test to
     * @param description
     * @param expression
     * @returns {{toBe: toBe}}
     */
    console.expect = function(description, expression){
        var expressionTest = {
            description: description,
            expression: expression,
            testExpression: "",
            result:false,
            toBe: function(testExpression){
//                 if(expressionTest.description==="" || expressionTest.expression!=null){
//                     console.warn("You have attempted to call console.toBe without setting " +
//                         "console.expect. \nYour expression should look like this:\n" +
//                         "console.expect('My bike tires colors',{ bike.tires.color }).toBe('black');");
//                 }
                try{
                    expressionTest.testExpression = testExpression;
                    expressionTest.result =  (expressionTest.expression===expressionTest.testExpression);
                    console.tests.push(expressionTest);
                } catch(e){
                    console.error(e);
                }
                var res = (expressionTest.result)?" Succedded!":" Failed.";
                console.group("Test"+res);
                (expressionTest.result) ? console.info(expressionTest.toString()):console.warn(expressionTest.toString());
                console.groupEnd("Test"+res);
                return (expressionTest.result);
            },
            toContain: function(property){
                if(expressionTest.description==="" || expressionTest.expression!==null){
                    console.warn("You have attempted to call console.toContain without setting " +
                        "console.expect. Your expression should look like this:\n" +
                        "console.expect('My car object ',{ car }).toContain({ wheels });");
                }
                try{
                    console.info(expressionTest.toString());
                    var ex = expressionTest.expression;
                    if(ex!=null){
                        if(typeof ex === 'string'){
                            return (ex.indexOf(property.toString())==-1);
                        } else if(typeof ex === 'boolean'){
                            return (property===ex);
                        } else if(typeof ex === 'number'){
                            return (ex.toString().indexOf(property.toString())==-1);
                        } else if(typeof ex === 'function'){
                            return (ex.toString().indexOf(property.toString())==-1);
                        } else if(typeof ex === 'object'){
                            return ex.hasOwnProperty(property);
                        } else {
                            return false;
                        }
                    }
                } catch (e){}
                return false;
            },
            toString: function(){
                var pre="The ";
                var res=" and it is! \n (result === TRUE)"; //and the result is
                if(!expressionTest.result){
                    pre="Sorry, the "; res=" but it is not. \n(result === FALSE)";
                }
                return pre +expressionTest.description+" '"+ expressionTest.expression+
                    "' is expected to be equal to '"+expressionTest.testExpression+
                    "' "+res+"\n";
            }
        };
        return {
            about: console.log("This is just a simple toll to test while writing JavaScript code. \n"+
                "The simple syntax looks like this:\n > "+
                "console.expect('My bike tires colors',{ bike.tires.color }).toBe('black');\n"),
            toBe: expressionTest.toBe,
            contain: expressionTest.contain,
        }
    };/*void*/
})();