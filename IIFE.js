// Immediately Invoked Function Expression  ( IIFE )

function chai (){
    console.log(`DB Connected One `);
}
chai();

(function IIFE (){
    // This is a named IIFE
    console.log(`DB Connected Two`);
})();

((name) => {
    console.log(`DB Connected Three ${name}`);
    
})('Saad Raza');
