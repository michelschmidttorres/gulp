const gulp = require('gulp')
//const series = gulp.series /* outra possibilidade */
const { series, parallel } = require('gulp')  

// Cada função destas representa uma task
const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}




// A função retorna uma callback que é a maneira de notificar o gulp que uma tarefa foi concluída
// Quem vai passar callback será o prórprio GULP não precisamos nos preocupar com isso
function copiar(cb) {
    // Seleciona quais os arquivos de entrada para o workflow
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // Usando wildCards
    gulp.src('pastaA/**/*.txt')
    
    // função pipe server para aplicar uma transformação nos arquivos de entrada
        // Podem ser chamadas de maneira encadeada assim como o .then no caso das promises
        .pipe(gulp.dest('pastaB'))

    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

// É preciso exportar alguma coisa para que seja executado
// exports é um objeto, podemos criar a chave default e atribuir a tarefa
// É requisito ter uma task default para o gulp executar
module.exports.default = series( // Neste caso não haverá paralelismo, ele vai executar em serie, uma depois da outra.
    parallel(antes1, antes2), // misturando as duas estratégias - series and parallel
    copiar,
    fim,
    )