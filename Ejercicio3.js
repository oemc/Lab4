function verificar(input){
    console.log('verificando: ' + input);
    let chars = input.split('');
    let position = 0;
    while(position < chars.length){
        switch(chars[position]){
            case '(':
                position = parentesis(chars, position+1);
                break;
            case '{':
                position = llaves(chars, position+1);
                break;
            case '[':
                position = corchetes(chars, position+1);
                break;
            case ')':
            case '}':
            case ']':
                throw('Error en caracter ' + position);
        }
        position++;
    }
    return(true);
}

function parentesis(chars, position){
    while(position < chars.length){
        switch(chars[position]){
            case '(':
                position = parentesis(chars, position+1);
                break;
            case '{':
                position = llaves(chars, position+1);
                break;
            case '[':
                position = corchetes(chars, position+1);
                break;
            case ')':
                return(position);
            case '}':
            case ']':
                throw('Error en caracter ' + position + '. Se esperaba )');
        }
        position++;
    }
    throw('Error en caracter ' + position + '. Se esperaba )');
}

function llaves(chars, position){
    while(position < chars.length){
        switch(chars[position]){
            case '(':
                position = parentesis(chars, position+1);
                break;
            case '{':
                position = llaves(chars, position+1);
                break;
            case '[':
                position = corchetes(chars, position+1);
                break;
            case '}':
                return(position);
            case ')':
            case ']':
                throw('Error en caracter ' + position + '. Se esperaba }');
        }
        position++;
    }
    throw('Error en caracter ' + position + '. Se esperaba }');
}

function corchetes(chars, position){
    while(position < chars.length){
        switch(chars[position]){
            case '(':
                position = parentesis(chars, position+1);
                break;
            case '{':
                position = llaves(chars, position+1);
                break;
            case '[':
                position = corchetes(chars, position+1);
                break;
            case ']':
                return(position);
            case ')':
            case '}':
                throw('Error en caracter ' + position + '. Se esperaba ]');
        }
        position++;
    }
    throw('Error en caracter ' + position + '. Se esperaba ]');
}

console.log(verificar('[([{}])]{()}'));