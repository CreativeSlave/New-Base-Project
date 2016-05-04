
/**
 * Overriding the console to enable testing.
 */
(function() {
    if(console){
        console.results = [];
        /**
         *
         * @type {{describe: string, express: string, result: boolean, toBe: string}}
         */
        console.expression={
            describe:"",
            express:null,
            result:false,
            toBe:""
        };
        /**
         *
         * @param description
         * @param expression
         */
        console.expect= function(description, express){
            console.expression = {
                describe:description,
                express:express,
                result:false,
                toBe:"",
                toString: function(){
                    var pre="The ";
                    var res=" and it is! \n (result === TRUE)"; //and the result is
                    if(!console.expression.result){
                        pre="Sorry, the "; res=" but it is not. \n(result === FALSE)";
                    }
                    return pre +console.expression.describe+" '"+ console.expression.express+
                        "' is expected to be equal to '"+console.expression.toBe+
                        "' "+res+"\n";
                }
            };
            return console;
        };
        /**
         *
         * @param arg
         * @param expressionE
         */
        console.assert= function(arg, expressionE){
            console.expression = {
                describe:arg,
                express:console.eval(expressionE),
                result:false,
                toBe:""
            };
            return console;
        };
        /**
         *
         * @param expression
         * @returns {*}
         */
        console.eval= function(express){
            try{
                return eval(express);
            } catch(e){
                console.error(e);
                return express.toString();
            } finally{
                return "";
            }
        };
        /**
         * console.expect().toBe()
         * @param testValue
         * @returns {boolean}
         */
        console.toBe= function(testValue){
            if(console.expression.describe==="" || console.expression.express!=null){
                console.warn("You have attempted to call console.toBe without setting " +
                    "console.expect. Your expression should look like this:\n" +
                    "console.expect('My bike tires colors',{ bike.tires.color }).toBe({ black });");
            }
            try{
                console.expression.toBe = testValue;
                console.expression.result =  (console.expression.express===console.expression.toBe);
                console.results.push(console.expression);
            } catch(e){
                console.error(e);
            }
            var res = (console.expression.result)?" Succedded":" Failed!";
            console.group("Expection"+res);
            console.log(console.expression.toString());
            console.groupEnd("Expection"+res);
            return (console.expression.result);
        };
        /**
         * console.expect(object).toContain(property);
         */
        console.toContain= function(property){
            if(console.expression.describe==="" || console.expression.express!=null){
                console.warn("You have attempted to call console.toContain without setting " +
                    "console.expect. Your expression should look like this:\n" +
                    "console.expect('My car object ',{ car }).toContain({ wheels });");
            }
            try{
                console.info(console.expression.toString());
                var ex = console.expression.express;
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

        };
        console.laugh = function(){
            console.log("Ha ha ha ha... ha... .");
        }
    }
})();