const functionWithFunctionAsArgument = (argToFunction) => {
    console.log(`functionWithFunctionAsArgument`);
    argToFunction(); // invoking below function as parameter..if commented it will result anything
}

const functionToBePassedAsArg = () => {
    console.log(`functionToBePassedAsArg`);
}

functionWithFunctionAsArgument(functionToBePassedAsArg);